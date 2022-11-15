---
id: deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
url: https://www.notion.so/Tenant-Provisioning-deb9d28ee5924c3cb7da020b7ba6bb0d
title: Tenant Provisioning
description: >-
  On-demand provisioning of primitive cloud tenants (e.g. AWS Accounts, Azure
  Subscriptions etc.).
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
    - 913a8ad1-7ad4-4ade-9e88-801a7afa4b40
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
    - 119bfca5-dda6-408c-b35d-c59d0f209fcf
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - dff7d733-d987-4145-aa1a-e340b5bcff81
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - ac8a21c3-f692-4d23-a9bb-796fd311c39f
  recommended:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  scope: 🛬 Landing Zone
  tool-implementations:
    - d24b4c3a-1f97-4426-8999-f82a97bf1e75
    - bac2d6a9-0bab-4d58-b89e-9b3315f86b79
    - 244b3e52-37bd-4669-a8d4-c208eb2fe529
    - 87441a90-61d1-46f3-a3e0-50902ca974fd
    - c1415cc8-082a-4ad8-8629-2b0e4a57ee45
    - 7fb43cbd-ad3c-4f3a-93d7-76f45c88e4f0
  name: Tenant Provisioning
---

Cloud tenants are an essential part of the cloud [Resource Hierarchy](./resource-hierarchy.md). Provisioning tenants is an essential capability for any cloud foundation. Access to a cloud tenant like an AWS Account or Azure subscription enable self-service cloud resource provisioning for application teams. 

The cloud foundation maturity model uses the term “tenant” to refer to the abstract concept of an isolated environment in a multi-tenant cloud platform. Cloud foundation teams can choose different platform-specific concepts to implement tenants. This choice should depend on the landing zone and workload type. Some practical examples of tenant concepts

- In a [Cloud-native Landing Zone](./cloud-native-landing-zone.md), every application team receives their own AWS Account to provide strong isolation.

- A managed [Container Platform Landing Zone](./container-platform-landing-zone.md) based on Kubernetes provides a Kubernetes namespace to every application team. These provide lightweight isolation between different workloads on the same cluster.

- A [Lift & Shift Landing Zone](./lift-and-shift-landing-zone.md) on Azure provides dedicated resource groups to every customer. This allows easily sharing common resources like an on-prem connected VNet while providing a reasonable level of isolation for configuring RBAC access to VMs and connected resources like storage accounts.

## Why You Need to Automate Cloud Tenant Provisioning

Since Tenant provisioning is so quintessential, practitioners should consider the following implementation maturities as they are growing the overall maturity of offered cloud foundation capabilities. 

- ⭐️  **manual provisioning**: when starting out and serving only a small amount of internal customers, manual provisioning of "naked" cloud provider tenants via cloud provider portals (GUI) is a feasible approach

- ⭐️⭐️ **semi-automated provisioning:** as the number of other cloud foundation capabilities grows, more and more post-provisioning steps will be required to enable advanced cloud foundation capabilities like Landing Zones. Automation is key to achieving consistent results. 

- ⭐️⭐️⭐️ - ⭐️⭐️⭐️⭐️ **fully automated provisioning:** a repeatable and fully automated provisioning process saves significant amounts of time and streamlines development of new cloud foundation capabilities. For managing a high number of internal customers, this level of automation is crucial.

In practice, many cloud foundation teams miss the right point in time to invest in full automation capabilities for tenant provisioning. This occurs because each time adding "just one more manual step" to a semi-automated process feels like an insignificant decision. However, the compounding effect of these decisions together with increasing internal demand burdens cloud foundation teams with operational chores. The burden of these chores eventually leaves teams with too little time and resources to rectify the situation

> **⚠️** Consider full automation of tenant provisioning early on while operational chores still leave enough room to invest in automation.

## Best Practices for Tenant Provisioning

### Apply Proper Tenant Isolation

Isolate teams and workloads using tenants - no sharing! One of the worst anti-patterns caused by not having sufficient tenant provisioning capability is that teams put development and production workloads into the same tenant. This encourages bad security practices that can lead to compromise of production environments.

### IAM Should Be Part of Tenant Provisioning

Tenant provisioning alone is rarely useful without a minimal [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) and [Resource Authorization Management](../iam/resource-authorization-management.md) that details how and to what extent teams can access cloud tenants.

### Maintain a Cloud Tenant Database

Record provisioned cloud tenants and their purpose in a [Cloud Tenant Database](./cloud-tenant-database.md) from day one. This way your organization always has a complete inventory of the cloud tenants managed by the cloud foundation.

### Establish Tenant Naming and Tagging Conventions

> **💡** Use lowercase and dashes

Consider making [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) a part of the provisioning process.

### Automate Tenant Provisioning

Beware of the pitfalls of insufficient automation. Semi-automated provisioning often leads to a “monolithic” landing zone design, which is a bottleneck for achieving higher-level capabilities in later journey stages (see [Modular Landing Zones](./modular-landing-zones.md) for a discussion).

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Self-Service Tenant Provisioning</CtaHeader>
  <CtaText>See a fully automated tenant provisioning process live in action or learn more on best practices for tenant management.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/use-case-cloud-zones/">Get a Demo</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn More</CtaButton>
</CallToAction>

Fully automated provisioning of tenants is a pre-requisite for more advanced capabilities like [Multi-cloud tenant database integrated with lifecycle management](./multi-cloud-tenant-database-integrated-with-lifecycle-management.md).



