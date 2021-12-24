---
id: 71143f29-2fe9-452b-8398-fc40f270a2b6
url: https://www.notion.so/Managed-CI-CD-Platform-71143f292fe9452b8398fc40f270a2b6
title: Managed CI/CD Platform
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🛠 Managed Services
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

## Why?

Organizations seeking to accelerate software development often find that teams spend significant time on the setup and maintenance of developer toolchains and infrastructure. Apart from selecting the desired tooling from a myriad of options, operating and securing CI/CD infrastructure requires specialized skills that may not be available on every team. Providing a managed CI/CD platform to teams allows them to focus on core activities (software development and operations) instead of infrastructure.

Popular choices of CI/CD platforms used to accelerate cloud-native development:

- GitHub with GitHub Actions

- Atlassian Stack (Jira + Bitbucket)

- GitLab

- Azure DevOps

- Jenkins

## What is covered by a Managed CI/CD Platform?

### Source Code Repository

At the minimum, the managed service needs to provide teams with a dedicated "environment" that the team can work with on the service. In many cases, this key element of such an environment is a source code repository. The managed service should also provide a way to manage permissions for this repository, preferably integrated with already existing cloud foundation concepts like [Identity and Access Management Concept](/explore/blocks/identity-and-access-management-concept.md) and [Authorization Concept](/explore/blocks/authorization-concept.md) .

### CI/CD Platform

In addition to the source code repository, the managed service also needs to manage and scale any infrastructure required for running build jobs (typically virtual machines or containers). Depending on the implementation of the CI/CD platform, providing additional services like [Shared container registry](/explore/blocks/shared-container-registry.md) and [Shared VM Image Repository](/explore/blocks/shared-vm-image-repository.md) can be useful to provide base images and build environments for common developer toolchains (e.g. Python, Java etc.).

### Service Credentials

Continuous delivery implies that the CI/CD platform also has the ability to execute deployments against cloud tenants owned by the development teams. Setting up the required service accounts and securing them is a challenge. If not handled correctly these service accounts introduce significant security risks as their compromise typically leads to full compromise of the deployed service. If the Cloud Foundation team wants to provide continuous delivery capabilities in addition to continuous integration capabilities, providing a way to handle service credentials is obligatory. In practice, the following implementations from simple to more advanced (and thus more secure) are observed:

- rely on **manual** credential creation and rotation (this requires an "open" landing zone design, see [Authorization Concept](/explore/blocks/authorization-concept.md) 

- a **semi-automated** process **** leverage credentials provided by [Service Account Management](/explore/blocks/service-account-management.md) manually transferred into the CI/CD platform

- a **fully automated** process sets up service accounts, transfers their credentials to the CI/CD platform, and also periodically rotates the credentials

Operators can accomplish the implementation of managed service credentials for CI/CD by leveraging other cloud foundation building blocks such as [Managed Key Vault](/explore/blocks/managed-key-vault.md) and [Service Account Management](/explore/blocks/service-account-management.md) 

> 💡 Key rotation is a critical capability for CI/CD pipeline deployment secrets, as there is a high risk that build and deployment scripts accidentally expose service credentials in build logs or during remote debugging of builds. We thus recommend rolling service credentials used for deployment very frequently.

