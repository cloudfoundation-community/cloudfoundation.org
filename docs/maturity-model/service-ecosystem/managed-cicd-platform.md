---
id: 71143f29-2fe9-452b-8398-fc40f270a2b6
url: https://www.notion.so/Managed-CI-CD-Platform-71143f292fe9452b8398fc40f270a2b6
title: Managed CI/CD Platform
category: 🛠 Service Ecosystem
layout: CFMMBlock
properties:
  pillar: 🛠 Service Ecosystem
  enables: []
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  summary: >-
    Teams can use a CI/CD platform that is integrated with the cloud tenants
    used by the team. Service account and automation user credentials are
    automatically maintained and rotated.
  tool-implementations:
    - 3c377c14-3fbf-4766-a47a-e30bd070ed7f
  name: Managed CI/CD Platform
---

## What is a Managed CI/CD Platform?

A managed CI/CD platform is a service offered by the cloud foundation team which offers an easy and fast experience to getting access and working with a CI/CD pipeline in the context of a cloud project. There are a few core components to a managed CI/CD platform:

### Source Code Repository

At the minimum, the managed service needs to provide teams with a dedicated "environment" that the team can work with on the service. In many cases, the key element of such an environment is a source code repository, such as a GitHub or GitLab repository.

### CI/CD Platform

In addition to the source code repository, the managed service also needs to manage and scale any infrastructure required for running build jobs (typically virtual machines or containers). Depending on the implementation of the CI/CD platform, providing additional services like [Shared container registry](/maturity-model/service-ecosystem/shared-container-registry.md) and [Shared VM Image Repository](/maturity-model/service-ecosystem/shared-vm-image-repository.md) can be useful to provide base images and build environments for common developer toolchains (e.g. Python, Java, etc.).

Popular choices of CI/CD platforms used to accelerate cloud-native development:

- GitHub with GitHub Actions

- Atlassian Stack (Jira + Bitbucket)

- GitLab

- Azure DevOps

- Jenkins

## Why use a Managed CI/CD Platform?

Organizations seeking to accelerate software development often find that teams spend significant time on the setup and maintenance of developer toolchains and infrastructure. Apart from selecting the desired tooling from a myriad of options, operating and securing CI/CD infrastructure requires specialized skills that may not be available on every team. Providing a managed CI/CD platform to teams allows them to focus on core activities (software development and operations) instead of infrastructure.

## Best Practices of a Managed CI/CD Platform

### Source Code Repository

The managed service should also provide a way to manage permissions for the source code repository, preferably integrated with already existing cloud foundation concepts like [Identity and Access Management Concept](/maturity-model/iam/identity-and-access-management-concept.md) and [Authorization Concept](/maturity-model/iam/authorization-concept.md) .



### Managed CI/CD Platform







### Use Service Credentials

Continuous delivery implies that the CI/CD platform also has the ability to execute deployments against cloud tenants owned by the development teams. Setting up the required service accounts and securing them is a challenge. If not handled correctly these service accounts introduce significant security risks as their compromise typically leads to full compromise of the deployed service. If the Cloud Foundation team wants to provide continuous delivery capabilities in addition to continuous integration capabilities, providing a way to handle service credentials is obligatory. In practice, the following implementations from simple to more advanced (and thus more secure) are observed:

- rely on **manual** credential creation and rotation (this requires an "open" landing zone design, see [Authorization Concept](/maturity-model/iam/authorization-concept.md) 

- a **semi-automated** process **** leverage credentials provided by [Service Account Management](/maturity-model/iam/service-account-management.md) manually transferred into the CI/CD platform

- a **fully automated** process sets up service accounts, transfers their credentials to the CI/CD platform, and also periodically rotates the credentials

Operators can accomplish the implementation of managed service credentials for CI/CD by leveraging other cloud foundation building blocks such as [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md) and [Service Account Management](/maturity-model/iam/service-account-management.md) 

> 💡 Key rotation is a critical capability for CI/CD pipeline deployment secrets, as there is a high risk that build and deployment scripts accidentally expose service credentials in build logs or during remote debugging of builds. We thus recommend rolling service credentials used for deployment very frequently.