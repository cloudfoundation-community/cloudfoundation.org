terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.65.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
  allowed_account_ids = ["209029743043"]
}

resource "aws_amplify_app" "cloudfoundation" {
  name       = "cloudfoundation"
  repository = "https://github.com/meshcloud/cloudfoundation"

  custom_rule {
    source = "/<*>" 
    status = "404-200"
    target = "/index.html"
  }
  // this is a default redirect set up by amplify
  # custom_rule {
  #   source = "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>" 
  #   status = "200" 
  #   target = "/index.html" 
  # }
  custom_rule {
    source = "/maturity-model/iam/authorization-concept.html"
    target = "/maturity-model/iam/resource-authorization-management.html"
    status = "301" 
  }
}