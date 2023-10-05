terraform {
  backend "s3" {
    bucket = "cloudfoundation-org-tf-state"
    key    = "amplif/teraform.tfstate"
    region = "eu-central-1"
  }

  // note: dynamodb locking etc. is not required complexity here, we deploy this manually and very rarely
}

provider "aws" {
  region              = "eu-central-1"
  allowed_account_ids = ["209029743043"]
}


locals {
  redirects = [
    {
      source = "/maturity-model/what-is-the-cloud-foundation-maturity-model.html"
      target = "/understanding-cloud-foundation/"
    },
    {
      source = "/maturity-model/what-is-a-building-block.html"
      target = "/understanding-cloud-foundation/what-is-a-building-block.html"
    },
    {
      source = "/maturity-model/security-and-compliance/central-management-of-tenant-tags-and-metadata.html"
      target = "/maturity-model/security-and-compliance/multi-cloud-tagging-policy.html"
    },
    {
      source = "/maturity-model/tenant-management/multi-cloud-tenant-database.html"
      target = "/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.html"
    },
    {
      source = "/maturity-model/security-and-compliance/resource-policies-blacklisting.html"
      target = "/maturity-model/security-and-compliance/service-and-location-restrictions.html"
    },
    {
      source = "/maturity-model/security-and-compliance/automated-security-scanning.html"
      target = "/maturity-model/security-and-compliance/resource-configuration-scanning.html"
    },
    {
      source = "/maturity-model/security-and-compliance/shared-responsibility-model.html"
      target = "/maturity-model/security-and-compliance/shared-responsibility-model-alignment.html"
    },
    {
      source = "/maturity-model/iam/identity-and-access-management-concept.html"
      target = "/maturity-model/iam/identity-and-access-management-alignment.html"
    },
    {
      source = "/maturity-model/tenant-management/monolithic-landing-zone.html"
      target = "/maturity-model/tenant-management/modular-landing-zones.html"
    },
    {
      source = "/maturity-model/iam/authorization-concept.html"
      target = "/maturity-model/iam/resource-authorization-management.html"
    },
    # fix some Google SEO "duplicate without user-selected canonical" issues, due to trailing slash
    {
      source = "/understanding-cloud-foundation"
      target = "/understanding-cloud-foundation/"
    },
  ]
}

import {
  to = aws_amplify_app.cloudfoundation
  id = "d1hcfax2v5hi8a"
}

resource "aws_amplify_app" "cloudfoundation" {
  name       = "cloudfoundation"
  repository = "https://github.com/meshcloud/cloudfoundation"

  # note: rules here are processed top to bottom! 

  # domain redirects
  custom_rule {
    source = "https://www.cloudfoundation.org"
    target = "https://cloudfoundation.org"
    status = "301"
  }

  custom_rule {
    source = "https://cfmm.meshcloud.io"
    target = "https://cloudfoundation.org"
    status = "301"
  }

  custom_rule {
    source = "https://cloudfoundation.meshcloud.io"
    target = "https://cloudfoundation.org"
    status = "301"
  }

  # Redirects for individual pages that we moved/renamed but we want to make sure we don't confuse google      
  dynamic "custom_rule" {
    for_each = toset(local.redirects)

    content {
      source = custom_rule.value.source
      target = custom_rule.value.target
      status = "301"
    }
  }

  # Redirects related to the feedback form.
  # Google App Script cannot be called directly from Vue due to CORS policy.   
  custom_rule {
    source = "/api/feedback"
    target = "https://script.google.com/macros/s/AKfycbyXJmPTWuiaCr13-VUyZnV8bSsFemc5Ahm8n3n593GL_UrZTSZ9Ux0x439RY-mZ8vlV/exec"
    status = 200
  }
    
  ## Redirects required for bypassing adblockers with plausible.io
  ## See https://plausible.io/docs/proxy/guides/netlify
  ## Contrary to netlify docs, only status=200 works here, see https://github.com/plausible/docs/issues/177
  custom_rule {
    source = "/api/event"
    target = "https://plausible.io/api/event"
    status = 200 
  }

// not sure what this one does? probably the 404 handler
 custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }
}

import {
  to = aws_amplify_branch.main
  id = "d1hcfax2v5hi8a/main"
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.cloudfoundation.id
  branch_name = "main"
  framework   = "VuePress"
  stage       = "PRODUCTION"
  tags        = {}

  enable_pull_request_preview = true

  environment_variables = {
    "AMPLIFY_ENV" = "prod"
  }
}

# note: the cloudfoundation.org record is managed via a building block in meshcloud-prod meshStack

# There are a couple challenges with Amplify
# According to the AWS Amplify Console, this is the record we shall create
# @    ANAME    d3c878lme1aflz.cloudfront.net
# However, this is not easily possible because our Route53 is in a different account than where Amplify is
# Some claim this doesn't work see https://github.com/aws-amplify/amplify-hosting/issues/2877, but it does work indeed 
# with a cross-acount alias https://stackoverflow.com/questions/35928471/cross-account-alias-records and
# this magic value, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html
# for the "alias_hosted_zone_id" = "Z2FDTNDATAQYW2"

resource "aws_amplify_domain_association" "cloudfoundation_org" {
  app_id                = aws_amplify_app.cloudfoundation.id
  domain_name           = "cloudfoundation.org"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }
}


resource "aws_amplify_domain_association" "www_cloudfoundation_org" {
  app_id                = aws_amplify_app.cloudfoundation.id
  domain_name           = "www.cloudfoundation.org"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }
}

resource "aws_amplify_domain_association" "cfmm_meshcloud_io" {
  app_id                = aws_amplify_app.cloudfoundation.id
  domain_name           = "cfmm.meshcloud.io"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }
}

resource "aws_amplify_domain_association" "cloudfoundation_meshcloud_io" {
  app_id                = aws_amplify_app.cloudfoundation.id
  domain_name           = "cloudfoundation.meshcloud.io"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }
}


output "domains" {
  value = [
    aws_amplify_domain_association.cloudfoundation_org,
    aws_amplify_domain_association.www_cloudfoundation_org,
    aws_amplify_domain_association.cfmm_meshcloud_io,
    aws_amplify_domain_association.cloudfoundation_meshcloud_io,
  ]
}
