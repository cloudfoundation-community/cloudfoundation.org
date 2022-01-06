---
id: deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
url: https://www.notion.so/Tenant-Provisioning-deb9d28ee5924c3cb7da020b7ba6bb0d
title: Tenant Provisioning
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    On-demand provisioning of primitive cloud tenants (e.g. AWS Accounts, Azure
    Subscriptions etc.).
  tool-implementations:
    - d24b4c3a-1f97-4426-8999-f82a97bf1e75
  name: Tenant Provisioning
---

Provisioning tenants is an obligatory capability for providing cloud foundation services on any cloud platform. Since it's so quintessential, practitioners should consider the following implementation maturities as they are growing the overall maturity of offered cloud foundation capabilities.

- ⭐️ **manual provisioning** : when starting out and serving only a small amount of customers, manual provisioning of "naked" cloud provider tenants via cloud provider portals (GUI) is a feasible approach

- ⭐️⭐️ **semi-automated provisioning:** as the number of other cloud foundation capabilities grows, more and more post-provisioning steps will be required to enable advanced cloud foundation capabilities like Landing Zones. Automation is key to achieve consistent results.

- ⭐️⭐️⭐️ - ⭐️⭐️⭐️⭐️ **fully automated provisioning:** for managing a high number of internal customers and a significant number of integrations with other cloud foundation capabilities like Landing Zones and Managed Services, a repeatable and fully automated provisioning of cloud tenants must be possible.

> 💡 In practice we observe many cloud foundation teams missing the right point in time to invest into full automation capabilities for tenant provisioning. This occurs because each time of adding "just one more manual step" to a semi-automated process feels like an insignificant decision. However the compounding effect of these decisions together with increasing internal demand burdens cloud foundation teams with operational chores. The burden of these chores eventually leaves teams with too little time and resources to rectify the situation.

Semi-automated provisioning often leads to [Monolithic Landing Zone](/maturity-model/tenant-management/monolithic-landing-zone.md) architectures, which are a bottleneck for achieving higher level capabilities in later journey stages..

Fully automated provisioning of tenants is a pre-requisite for more advanced capabilities like [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md) and [Modular Landing Zones](/maturity-model/tenant-management/modular-landing-zones.md) .

## Best Practices for Tenant Provisioning

- Isolate teams and workloads using tenants - no sharing! One of the worst anti-patterns caused by not having sufficient tenant provisioning capability is that teams put development and production workloads into the same tenant. This encourages bad security practices that can lead to compromise of production environments.

- Tenant provisioning alone is rarely useful without a minimal [Authorization Concept](/maturity-model/iam/authorization-concept.md) that details how and to what extent teams can access cloud tenants