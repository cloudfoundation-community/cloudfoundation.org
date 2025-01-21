---
id: f077cfd1-d8f4-4c30-a1bd-4f252b840e4f
url: >-
  https://www.notion.so/Internal-Service-Marketplace-f077cfd1d8f44c30a1bd4f252b840e4f
title: Internal Service Marketplace
description: >-
  Teams offer services to other teams and make them accessible on a marketplace
  that is integrated with 💵 Cost Management  and 🔐 IAM .
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables:
    - d2cb8a5e-3e28-448b-8944-14ff38fad792
    - 298d0f68-3cea-4ec0-bf7b-a6c2e849d56f
    - 4119dff6-7c33-4220-8977-0c76de5eab0d
    - 14e4dafc-c7f9-4086-8839-5758bc23f5c4
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  recommended: []
  scope: 🏢 Core
  tool-implementations:
    - c3af4eea-6d9a-4c64-a117-ec018524979a
  name: Internal Service Marketplace
---

By providing a standardized interface, an internal marketplace enables internal [platform teams](https://teamtopologies.com/key-concepts) to provide their services with minimal friction, thus reducing the cognitive overhead for consuming teams and platform teams alike. In this way, a cloud foundation team offering an internal service marketplace acts a “platform team to platform teams”. This enables organizations to rapidly build and efficiently operate internal platforms optimized to support specific cloud use cases. 

## How to Make an Internal Service Marketplace Successful

### Treat the Internal Service Marketplace like a Cloud Platform

Integrate the marketplace into the Cloud Foundation offering as if it were its own cloud platform. This allows service owners to build upon everything already provided by the Cloud Foundation Platform, especially for

- [💵 Cost Management](../cost-management/readme.md): getting paid for services by users

- [🔐 IAM](../iam/readme.md): providing self-service access control

- [🔖 Security & Compliance](../security-and-compliance/readme.md): providing self-service order process that is compliant with company policies

Notice that Cloud Providers offer marketplaces on their control planes as well: [AWS Service Catalog](https://aws.amazon.com/servicecatalog/), [GCP Service Catalog](https://cloud.google.com/service-catalog), and [Azure Marketplace](https://azuremarketplace.microsoft.com/). Those are examples of services integrated with the providers control plane and hence inherit all the CFMM pillar functionality from the cloud.

### Make Services Easily Discoverable

Making the complete service portfolio as easily discoverable as possible, makes it more likely that customers can choose the best solution for the job. Ideally, teams only needs access to the Cloud Foundation Platform to explore the options available to them.

### Guide Platform Teams to Offer Their Services

Platform teams that want to offer their services on the Internal Service Marketplace usually need help for onboarding and realizing the maximum benefits of discoverability and standardization. Effectively, the Cloud Foundation team offers the marketplace as a platform to other platform teams. In this role, the cloud foundation team should establish processes to ensure high service quality and catalog consistency. Many teams implement this with a “Service review” process known from other marketplace ecosystem like the iOS App Store.

### Avoid Fragmentation

With a single entry point for application teams, the cognitive overhead for teams is reduced. No more “where could I find service x?” by application teams or “How should we offer our service?” by platform teams. 

While internal services should only be offered on a single internal service marketplace, organizations should typically refrain from naively encapsulating 3rd party services that are already available on platform native marketplaces like the [Azure Marketplace](https://azuremarketplace.microsoft.com/). As long as their use  is compliant, there are little advantages compared to the significant overhead encapsulating adds. 

> **🌤️** In practice, most organizations forbid usage of cloud provider marketplaces because they side-step mandatory procurement procedures. This restriction is typically easy to implement via [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md).

Building an internal service marketplace independent from a third party means fewer technological restrictions: For example, you are not bound to using Azure ARM only, or AWS Cloud Formation. Instead you can use tooling like terraform.

### Enable Internal PaaS/SaaS Use Cases

Offering internal services on a marketplace that works like a cloud control plane allows you to cater customers that do not need cloud infrastructure level access (e.g. a cloud-native landing zone to deploy their own resources) but rather only need access to a managed container platform and a [Managed DevOps Toolchain](./managed-devops-toolchain.md). 

An internal service marketplace even enables build use cases like building a platform for data analysts leveraging a specialized and a [Managed Data Lake access](./managed-data-lake-access.md) service.

