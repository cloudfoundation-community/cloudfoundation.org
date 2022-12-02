---
id: dff7d733-d987-4145-aa1a-e340b5bcff81
url: >-
  https://www.notion.so/Cloud-native-Landing-Zone-dff7d733d9874145aa1ae340b5bcff81
title: Cloud-native Landing Zone
description: >-
  A dedicated landing zone optimized for cloud-native workloads enables quick
  onboarding and efficient operations.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - af14b5df-77b4-4def-b761-8fadabd241ca
    - 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - b4678790-ab53-4219-83e7-fbde18383d05
  recommended:
    - 09e744c5-e12a-49e8-8b6f-b7e3c44ba63b
    - f90c7375-88b9-42dc-8e98-a65c006b927a
    - 137ac22d-b96c-4d49-aa83-da5779e3d59c
    - 71143f29-2fe9-452b-8398-fc40f270a2b6
    - 2468d240-6cca-4680-b9c4-6f237defa511
    - cf487857-542f-4d74-8fe9-885b7be8ccf3
    - 802fdd8d-7fc0-4749-937f-e9e0ccb3f273
    - b0a04ae8-c9b3-4060-abfd-e760723995d8
  scope: ☁️ Platform
  tool-implementations:
    - 4c50144f-1637-4136-8f78-3dfaa005d031
    - 171e6824-30db-4f64-9d19-a4d87ba56ed9
    - 597617fd-06c3-4cab-bf0e-c19b84439a92
  name: Cloud-native Landing Zone
---

Most organizations embarking on a cloud journey want to leverage the cloud to take advantage of cloud-native services. A cloud-native landing zone allows application teams to do just that, while staying within well-defined guardrails established by the cloud foundation team.

Cloud-native landing zones typically cater to application teams that want to develop workloads designed for the cloud, be it newly developed applications or applications undergoing refactoring to take advantage of the cloud. Such application teams typically possess some level of cloud skills and the cloud foundation team can generally expect to delegate a reasonable degree of responsibilities for deploying and securing their applications to them. 

From our experience, cloud proficiency can vary a lot between different application teams inside an organization. This usually becomes very evident once the “first movers” have onboarded to the cloud and the “early majority” of internal workloads starts seriously considering moving to the cloud as well. Cloud foundation teams should thus be careful to calibrate expectations accordingly during [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) for the cloud-native landing zone.

## Best Practices for Designing and Building a Cloud-Native Landing Zone

### Start with a Minimal Set of Guardrails

A cloud-native landing zone enables a lot of freedom - at the expense of delegating a lot of responsibilities to application teams. Cloud foundation teams should thus implement at least the minimal set of guardrails as described below:

- A [Resource Hierarchy](./resource-hierarchy.md) along with a [Tenant Provisioning](./tenant-provisioning.md) process defines how the cloud foundation team provides cloud tenants to application teams

- [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md) should define the cloud services and locations that application teams are allowed to use. A minimal implementation for a cloud-native landing zone should whitelist allowed cloud locations, deny access to 3rd party marketplaces but otherwise take a liberal stance on allowed services.

- [Resource Configuration Policies](../security-and-compliance/resource-configuration-policies.md) should define a small set of policies to restrict “known dangerous” configurations like unencrypted storage at rest or public object storage buckets

- [Resource Authorization Management](../iam/resource-authorization-management.md) can start with a very basic open landing zone design leveraging built-in policies (e.g. `Owner` Role on Azure)

- [Centralized audit logs](../security-and-compliance/centralized-audit-logs.md) are essential to support incident analysis for questions like “who deleted the production database on monday morning”? Audit logs are especially critical to keep around any resources that fall into shared responsibilities. 

- [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md) is an important organizational counterweight to the freedom offered by a cloud-native landing zone. Application teams can deploy what you want as long as they responsibly secure it and pay their bill.

This set of guardrails is the absolute minimum that the cloud foundation team should include in a cloud-native landing zone. There are many solutions, some also officially maintained by cloud providers, that include these capabilities out of the box. You can find some implementations listed at the bottom of this page.

### The Cloud Evolves - Your Guardrails Will Too

While all of the capabilities to set guardrails described above are essential to start a solid cloud-native landing zone design, we observe that the most successful cloud foundation teams adopt an iterative approach when it comes to defining the exact “shape” of the guardrail. For example. it’s all too easy to get lost in the myriad of options the foundation teams has to define [Resource Configuration Policies](../security-and-compliance/resource-configuration-policies.md) object storage buckets. As long as the documented shared responsibility model clearly places responsibility into the lap of application teams, it’s sufficient that the cloud foundation team prevents only the most egregious misconfigurations like. buckets publicly exposed to the internet.

Cloud Foundation teams should thus plan on evolving the shape of their guardrails as cloud adoption in the organization grows. A good [Incident Management Process](../security-and-compliance/incident-management-process.md) with root cause analysis and retrospectives can provide important insights into policies that the team should enforce (see [Resource Configuration Policies](../security-and-compliance/resource-configuration-policies.md)) or monitor (see [Resource Configuration Scanning](../security-and-compliance/resource-configuration-scanning.md)) going forward. Cloud foundation teams should thus define the landing zone using infrastructure as code and automate its deployment using suitable tools.

### A “Hands off” Landing Zone Is Better Than Shadow IT

Many cloud foundation teams struggle whether they need to include [Virtual Network Service](../service-ecosystem/virtual-network-service.md) and [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) capabilities into their v1 cloud-native landing zone. From our experience, designing and delivering these services can be a major roadblock for cloud foundation teams that are building their first landing zone and have little prior experience with delivering core infrastructure services.

While your organization’s mileage may vary, we often see cloud foundation teams starting on a slightly brownfield cloud landscape. Many organizations start their cloud journey with “lighthouse” projects building on the cloud long before the inception of the cloud foundation team. When designing a landing zone, it’s thus often tempting for the team to try and deliver a “one-size-fits-all” landing zone that can cover these usually quite sophisticated application teams as well as application teams just starting out.

From our experience it’s worthwhile to offer a minimal “hands off” cloud-native landing zone to these application teams to bring them under management by the cloud foundation, while not interfering with their established workloads and processes. This “hands-off” cloud-native landing zone is also a good migration target for any shadow IT workloads the team discovers on the cloud along the way.

To deliver a “hands off” landing zone, it’s typically sufficient to leverage the landing zone “MVP” implementing the minimal set of guardrails described in the section above. With this approach the cloud foundation team can rapidly deliver a cloud-native landing zone MVP equal to a “hands off” Landing Zone 1.0 and then iterate on a separate path to a cloud-native landing zone 1.0 while already servicing productive workloads.

