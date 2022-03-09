---
id: deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
url: https://www.notion.so/Tenant-Provisioning-deb9d28ee5924c3cb7da020b7ba6bb0d
title: Tenant Provisioning
description: >-
  On-demand provisioning of primitive cloud tenants (e.g. AWS Accounts, Azure
  Subscriptions etc.).
category: 🗂 Tenant Management
pageType: CFMMBlock
sidebar: false
properties:
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations:
    - d24b4c3a-1f97-4426-8999-f82a97bf1e75
  name: Tenant Provisioning
---

Provisioning tenants is an obligatory capability for providing cloud foundation services on any cloud platform. 

## Why You Need to Automate Cloud Tenant Provisioning

Since Tenant provisioning is so quintessential, practitioners should consider the following implementation maturities as they are growing the overall maturity of offered cloud foundation capabilities. 

- ⭐️  **manual provisioning**: when starting out and serving only a small amount of internal customers, manual provisioning of "naked" cloud provider tenants via cloud provider portals (GUI) is a feasible approach

- ⭐️⭐️ **semi-automated provisioning:** as the number of other cloud foundation capabilities grows, more and more post-provisioning steps will be required to enable advanced cloud foundation capabilities like Landing Zones. Automation is key to achieving consistent results. 

- ⭐️⭐️⭐️ - ⭐️⭐️⭐️⭐️ **fully automated provisioning:** a repeatable and fully automated provisioning process saves significant amounts of time and streamlines development of new cloud foundation capabilities. For managing a high number of internal customers, this level of automation is crucial.

In practice, many cloud foundation teams miss the right point in time to invest in full automation capabilities for tenant provisioning. This occurs because each time adding "just one more manual step" to a semi-automated process feels like an insignificant decision. However, the compounding effect of these decisions together with increasing internal demand burdens cloud foundation teams with operational chores. The burden of these chores eventually leaves teams with too little time and resources to rectify the situation

> **⚠️** Consider full automation of tenant provisioning early on while operational chores still leave enough room to invest into automation.

## Best Practices for Tenant Provisioning

### Apply Proper Tenant Isolation

- Isolate teams and workloads using tenants - no sharing! One of the worst anti-patterns caused by not having sufficient tenant provisioning capability is that teams put development and production workloads into the same tenant. This encourages bad security practices that can lead to compromise of production environments.

### IAM Should Be Part of Tenant Provisioning

Tenant provisioning alone is rarely useful without a minimal [Shared Responsibility Model](../security-and-compliance/shared-responsibility-model.md) and [Authorization Concept](../iam/authorization-concept.md) that details how and to what extent teams can access cloud tenants.

### Maintain a Cloud Tenant Database

Record provisioned cloud tenants and their purpose in a [Cloud Tenant Database](./cloud-tenant-database.md) from day one. This way your organization always has a complete inventory of the cloud tenants managed by the cloud foundation.

### Establish Tenant Naming and Tagging Conventions

> **💡** Use lowercase and dashes

Consider making [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) a part of the provisioning process.

### Automate Tenant Provisioning

Beware of the pitfalls of insufficient automation. Semi-automated provisioning often leads to [Monolithic Landing Zone](./monolithic-landing-zone.md) architectures, which are a bottleneck for achieving higher-level capabilities in later journey stages. 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Self-Service Tenant Provisioning</CtaHeader>
  <CtaText>See a fully automated tenant provisioning process live in action or learn more on best practices for tenant management.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/use-case-cloud-zones/">Get a Demo</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn More</CtaButton>
</CallToAction>

Fully automated provisioning of tenants is a pre-requisite for more advanced capabilities like [Multi-cloud tenant database integrated with lifecycle management](./multi-cloud-tenant-database-integrated-with-lifecycle-management.md) and [Modular Landing Zones](./modular-landing-zones.md).



