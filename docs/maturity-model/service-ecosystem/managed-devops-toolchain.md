---
id: 71143f29-2fe9-452b-8398-fc40f270a2b6
url: >-
  https://www.notion.so/Managed-DevOps-Toolchain-71143f292fe9452b8398fc40f270a2b6
title: Managed DevOps Toolchain
category: 🛠 Service Ecosystem
layout: CFMMBlock
properties:
  pillar: 🛠 Service Ecosystem
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  summary: >-
    Teams can use a DevOps tools that are integrated with the cloud tenants used
    by the team. Any required service account or automation user credentials are
    automatically maintained and rotated.
  tool-implementations:
    - 3c377c14-3fbf-4766-a47a-e30bd070ed7f
    - 04470deb-8ef1-4c49-bcec-7243426790b5
  name: Managed DevOps Toolchain
---

Once cloud foundation customers have successfully provisioned a cloud tenant for their project (see [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md)), the next challenge they face is how to deploy their workload. Embracing cloud native paradigms, most teams will want to leverage modern DevOps tools like a CI/CD pipeline with infrastructure as code deployments. Setting up these deployment pipelines quickly and securely can be a challenging and time consuming task. Offering popular DevOps tools as a “managed service” to your teams can accelerate cloud onboarding and improve your organization’s security posture. 

## What Is a Managed DevOps Toolchain?

A managed DevOps toolchain is a service offered by the cloud foundation team which offers an easy and fast experience to getting access and working with cloud-native DevOps tooling in the context of a cloud project. There are a few core components to a DevOps toolchain.

### Source Code Repository

At the minimum, the managed service needs to provide teams with a dedicated "environment" that the team can work with on the service. In many cases, the key element of such an environment is a source code repository, such as a GitHub or GitLab repository.

### CI/CD Platform

In addition to the source code repository, the managed service also needs to manage and scale any infrastructure required for running build jobs (typically virtual machines or containers). Depending on the implementation of the CI/CD platform, providing additional services like [Shared container registry](/maturity-model/service-ecosystem/shared-container-registry.md) and [Shared VM Image Repository](/maturity-model/service-ecosystem/shared-vm-image-repository.md) can be useful to provide base images and build environments for common developer toolchains (e.g. Python, Java, etc.).

Popular choices of CI/CD platforms for accelerating cloud-native development:

- GitHub Actions

- Atlassian Stack (Bitbucket Pipelines)

- GitLab CI

- Azure DevOps

- Jenkins

### Infrastructure as Code Tools

While the CI/CD platform provides a space for executing the DevOps toolchain, selecting infrastructure as code tools that enable your teams to describe and deploy their workload infrastructure is equally important. Product owners responsible for the DevOps toolchain should consider that teams may want to leverage different tools and thus enable some amount of flexibility. However, the toolchain should have official examples and supported integrations with popular tools like

- Terraform

- “Cloud-native” Infrastructure as Code tools like 

    - ARM, Bicep (Azure)

    - Cloud Formation, CDK (AWS)

    - Google Deployment Manager (GCP)

- Pulumi

- SaltStack

- Ansible

### Observability

**“You build it - you run it.”** DevOps teams are not only reponsible for the deployment of their applications, but also operating them in production. This is where observability solutions come in that help teams get insight into system and application performance. There is a wide variety of different tools that teams may want to leverage here, and product owners responsible for the DevOps toolchain should consider offering integration with tools that are widely used in the organisation. Examples can include

- DataDog

- Dynatrace

- Grafana, Prometheus

- ELK Stack (Elasticsearch, Logstash, Kibana)

## Why Use a Managed DevOps Toolchain?

Organizations seeking to accelerate software development often find that teams spend significant time on the setup and maintenance of developer toolchains and infrastructure. Apart from selecting the desired tooling from a myriad of options, operating and securing CI/CD infrastructure requires specialized skills that may not be available on every team. A managed CI/CD platform allows DevOps teams to focus on core activities (software development and operations) instead of infrastructure.

## Best Practices for a Managed DevOps Toolchain

### Pre-Integrated, but Composable

While there are clear benefits to offering pre-integrated toolchains, plan for flexibility. Teams can have different requirements and using alternate tooling should thus be possible. For example, one team may be happy to use cloud-native observability tools (e.g. AWS CloudWatch or GCP Stackdriver) to build highly customised monitoring and alerting infrastructure, while another team gets a huge head-start from a “batteries included” solution like Datadog. It thus makes sense to offer the toolchain as a set of composable services, instead of one big monolithic “all or nothing” solution.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Cloud-native Service Marketplace</CtaHeader>
  <CtaText>Implement enterprise-wide distribution of cloud infrastructure services via a <b>Service Marketplace</b></CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/15/cloud-infrastructure-services-enterprise-wide-distribution-via-a-marketplace/">Learn more</CtaButton>
</CallToAction>

### Authorize Source Code Repositories

The managed service should provide a way to manage permissions for the source code repository, preferably integrated with already existing cloud foundation concepts like [Identity and Access Management Concept](/maturity-model/iam/identity-and-access-management-concept.md) and  [Authorization Concept](/maturity-model/iam/authorization-concept.md).

### Manage Service Credentials

Continuous delivery implies that the CI/CD platform also has the ability to execute deployments against cloud tenants owned by the development teams. Setting up the required service accounts and securing them is a challenge. If not handled correctly these service accounts introduce significant security risks as their compromise typically leads to full compromise of the deployed service. 

> **💡** Key rotation is a critical capability for CI/CD pipeline deployment secrets, as there is a high risk that build and deployment scripts accidentally expose service credentials in build logs or during remote debugging of builds. We thus recommend rolling service credentials used for deployment very frequently. 

If the Cloud Foundation team wants to provide continuous delivery capabilities in addition to continuous integration capabilities, providing a way to handle service credentials is obligatory. In practice, the following implementations from simple to more advanced (and thus more secure) are observed:

- rely on **manual** credential creation and rotation (this requires an "open" landing zone design, see [Authorization Concept](/maturity-model/iam/authorization-concept.md))

- a **semi-automated** process leverages credentials provided by [Service Account Management](/maturity-model/iam/service-account-management.md) manually transferred into the CI/CD platform

- a **fully automated** process sets up service accounts and allows the CI/CD platform to impersonate service accounts. This can be achieved by managing secrets for those service accounts, including regular rotations. An even better approach is Workload Identity Federation([GCP](https://cloud.google.com/iam/docs/workload-identity-federation), [Azure](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)). With Workload Identity Federation no secrets need to be stored or rotated.

Operators can accomplish the implementation of managed service credentials for CI/CD by leveraging other cloud foundation building blocks such as [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md) and [Service Account Management](/maturity-model/iam/service-account-management.md).

