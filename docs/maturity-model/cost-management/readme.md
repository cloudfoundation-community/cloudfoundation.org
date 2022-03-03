---
id: 57502241-e2f4-4b75-9e33-de39b26a6eb8
url: https://www.notion.so/Cost-Management-57502241e2f44b759e33de39b26a6eb8
title: 💵 Cost Management
description: >-
  Provide cost management and chargeback capabilities for all available cloud
  platforms and services.
---

Pay-per-use is an essential cornerstone of the cloud computing paradigm. When deploying and scaling cloud resources is just a single API call away, managing the cost incurred under consumption-based billing is extremely important. Cloud Service Providers typically charge the organization as a single unit under an enterprise contract. Cloud Foundation teams need to process these invoices and allocate the cost to internal cloud customers (chargeback). Good cost management practices that leverage the technical capabilities of cloud cost reporting and involve all stakeholders of a cloud foundation are crucial to a successful cloud journey.

## Key Activities in Multi-Cloud Cost Management

The Cost Management pillar of the Cloud Foundation Maturity Model encompasses the following key activities and capabilities

- Ensure that cost-owners and product owners responsible for IT systems have access to [Monthly cloud tenant billing report](./monthly-cloud-tenant-billing-report.md). For public cloud platforms, this is typically easy to implement based on reports provided by the cloud service provider. 

- At a minimum, establish [Chargeback via consumption cost allocation](./chargeback-via-consumption-cost-allocation.md) based on the cost reports provided by cloud platforms. This should also cover [Private Cloud pay-per-use chargeback](./private-cloud-pay-per-use-chargeback.md).

- Standardizing the chargeback process across multiple cloud platforms is important. Establishing the concept of a [Monthly Cloud Project Billing Report](./monthly-cloud-project-billing-report.md) helps abstracting the chargeback process from individual platforms, and also enables [Pay-per-Use for internal Services](./pay-per-use-for-internal-services.md) 

- Leverage cost optimization opportunities, for example by implementing [Global Cost Optimization via Reservations](./global-cost-optimization-via-reservations.md) or delegating it to internal cloud customers as [Individual Project Cost Optimization via Reservations](./individual-project-cost-optimization-via-reservations.md)

- Align with stakeholders whether your organization wants to establish [Chargeback at full cost allocation](./chargeback-at-full-cost-allocation.md) that also covers the overhead of providing cloud foundation services

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Cost Management pillar has several important links to other cloud foundation capabilities

[🗂 Tenant Management](../tenant-management/readme.md) 

- Tenant management process needs to provide the required data for chargeback, e.g. the responsible cost owners and cost-centers



- *The scope of permissions granted to internal cloud customers should reflect the responsibility split defined in the cloud foundation’s* [*Shared Responsibility Model*](../security-and-compliance/shared-responsibility-model.md)  

- *Permissions are often a key component of* [*Automated Security Scanning*](../security-and-compliance/automated-security-scanning.md) *reports (e.g. to ensure principle of least privilege, preventing public access etc.)*

- *IAM changes should be included in* [*Centralized audit logs*](../security-and-compliance/centralized-audit-logs.md)*. This is also important to document correct handling of Joiner/Mover/Leaver-Processes.*

[*💵 Cost Management*](./readme.md) 

- *The* [*Authorization Concept*](../iam/authorization-concept.md) *should ensure that non-technical project stakeholders have enough access to cost reporting capabilities, without requiring technical access to cloud resources*

[*🛠 Service Ecosystem*](../service-ecosystem/readme.md) 

- *Cloud Foundation teams should evaluate how they can leverage existing permissions and IAM concepts to also grant teams access to internal services*

