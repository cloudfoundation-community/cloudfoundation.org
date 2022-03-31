---
id: f077cfd1-d8f4-4c30-a1bd-4f252b840e4f
url: >-
  https://www.notion.so/Internal-Service-Marketplace-f077cfd1d8f44c30a1bd4f252b840e4f
title: Internal Service Marketplace
description: >-
  Teams offer services to other teams and make them accessible on a marketplace
  that is integrated with Cost Management and IAM:
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables:
    - d2cb8a5e-3e28-448b-8944-14ff38fad792
    - c9728af5-49fe-4948-8701-2d6485bfbe93
  redaction-state: Draft
  journey-stage: ⭐️
  depends-on: []
  scope: 🏢 Core
  tool-implementations:
    - c3af4eea-6d9a-4c64-a117-ec018524979a
  name: Internal Service Marketplace
---

Cloud is a way to deliver IT that maximizes business outcomes. Where classical IT services meant opening tickets or writing emails to 10 different stakeholders, the cloud is about having a single interface for DevOps teams to get everything they need to be productive. An internal service marketplace is a crucial part of getting away from a classical IT service operating model.

By providing a standardized interface, an internal marketplace enables [platform teams](https://teamtopologies.com/key-concepts) to provide their services with minimal friction, thus reducing the cognitive overhead for consuming teams and platform teams alike. 

## How to Make an Internal Service Marketplace Successful

### Treat the Internal Service Marketplace like a Cloud Platform

Integrate the marketplace into the Cloud Foundation Platform. This allows service owners to build upon everything already provided by the Cloud Foundation Platform, especially for

- [💵 Cost Management](../cost-management/readme.md): getting paid for services by users

- [🔐 IAM](../iam/readme.md): providing self-service access control

- [🔖 Security & Compliance](../security-and-compliance/readme.md): providing self-service order process that is compliant with company policies

### Make Services Easily Discoverable

Making the complete service portfolio as easily discoverable as possible, makes it more likely that the best solution for a job is chosen. Ideally, teams only needs access to the Cloud Foundation Platform to explore the options available to them.

### Guide Platform Teams to Offer Their Services

Starting out with the service marketplace, the Cloud Foundation team will most likely only provide it’s own services. Later platform teams will need to offer their services on the Internal Service Marketplace to gain the benefits of discoverability and standardization.

Effectively, the Cloud Foundation team offers the marketplace as a platform to other platform teams.

### Use a Single Marketplace for All *internal* services

This follows from the above points. If there is a single entry point, the cognitive overhead for teams is reduced. No more “where could I find service x?” by users or “Where should we offer our service?” by platform teams. 

While internal services should only be offered on a single internal service marketplace, services that are available on platform native marketplaces like the [Azure Marketplace](https://azuremarketplace.microsoft.com/) should not be encapsulated, but managed via these platform native marketplaces instead, if their usage is compliant.

### Keep Platform Specific Code for Service Instances to a Minimum

Some services need to integrate with a cloud tenant. Those integrations necessarily are platform specific.

Two example services, that need to integrate with a cloud tenant:

- [Virtual Network Service](./virtual-network-service.md) needs to create Azure VNETs, GCP VPCs, ...

- [Managed DevOps Toolchain](./managed-devops-toolchain.md) needs to integrate permissions on cloud tenants via an Azure Service Principal, GCP Service Account, ...

Integrating those services for multiple platforms necessarily means building platform specific code. However, some parts can and should be reused when implementing services.

For the two example services above, these parts could be reused across cloud platforms:

- [Virtual Network Service](./virtual-network-service.md) needs to reserve an IP range in an IPAM.

- [Managed DevOps Toolchain](./managed-devops-toolchain.md) needs to manage e.g. a CI/CD pipeline and grant access to user.

To allow code reuse, use tooling that is not cloud platform specific for those services.