---
id: d5c797b4-6300-4c58-aa98-76bbfc49fcc8
url: https://www.notion.so/Lift-Shift-Landing-Zone-d5c797b463004c58aa9876bbfc49fcc8
title: Lift & Shift Landing Zone
description: >-
  A dedicated landing zone optimized for lift & shift workloads enables quick
  onboarding and efficient operations.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - d1904912-b420-4a10-a62c-aa578fb847ff
  recommended:
    - 74295ae4-dcd5-449b-8825-f12c5267e89b
    - 4f9ee73a-23a9-4aa3-b956-0df22e6156d0
    - 5f9c0f7d-860a-488b-bbf8-897618e5c76f
    - 6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
    - cf487857-542f-4d74-8fe9-885b7be8ccf3
    - b0a04ae8-c9b3-4060-abfd-e760723995d8
  scope: ☁️ Platform
  tool-implementations: []
  name: Lift & Shift Landing Zone
---

While lift & shift may not the be first thing on the cloud foundation team’s mind when thinking about their organization’s cloud journey, lift & shift is a valid and important complement to cloud-native applications in a cloud adoption journey. A dedicated lift & shift landing zone can help onboarding these workloads quickly and without too much organizational pain. 

Before you get started however, it’s paramount that your organization’s cloud strategy clearly lays out the motivation and expected results for lift & shift migrations. Your cloud strategy should at least answer the following questions

- Do you need to vacate an on-prem datacenter or MSP by a set date?

- Do you plan on leveraging lift & shift to quickly ramp up cloud usage to meet negotiated cloud spend commitments?

- Do you plan to simply re-host lift & shift workloads or do you plan to later re-platform or even refactor the same workload?

- What know-how exists within the organization to build and operate servers? What cloud skills are available?

- Who is going to operate applications? Are divisions going to be responsible for operations themselves and demand self-service or is a central IT team going to take care of applications for them? 

Equipped with answers to above questions, the cloud foundation team can start designing and building a lift & shift landing zone.

## Best Practices for Designing and Building a Lift & Shift Landing Zone

An important pre-requisite for establishing a successful lift & shift landing zone is going through the process of [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) with all cloud foundation stakeholders. From our experience, it’s useful to start by reviewing the cloud strategy and selecting the primary approach to the landing zone design. 

### Lift & Shift Landing Zone Implementation Approaches

#### VMware on AWS, VMware on Azure Etc.

Many organizations have existing investment into VMware based server provisioning and operational know-how. Cloud provider services like VMware on AWS or VMware on Azure allow organizations to quickly transfer these skills to the cloud without major adaptions or interruptions to existing workflows. 

This lift & shift approach is a good choice when the organization plans on simply re-hosting workloads as quickly as possible to meet spend commitments or vacate on-premise datacenters. This approach can also drastically simplify technical migration of existing machines because it’s part of an integrated solution.

The downsides of this approach are that it offers little to no opportunity for building cloud skills in the organization and limits migration options to strict re-hosting.

#### Managed Virtual Machines

In this model, the cloud foundation team provides a “managed virtual machine” service to customers using existing ITSM processes already established in the organization. The technical implementation of this approach requires basic cloud skills for automatic IaaS-based deployments. The cloud foundation team manages these deployments in a separate part of the [Resource Hierarchy](./resource-hierarchy.md). The complexity of server deployment should be hidden away from internal customers, meaning that they never access the “cloud”, but only receive access to their managed server. This approach is useful when internal customers lack cloud skill (as well as the ambition to acquire them) and re-hosting workloads is all that’s desired. 

An important consideration for organizations leveraging this approach is that they need to invest into building required cloud skills early on in the cloud journey. These skills establish important know-how for the foundation team like building automated deployment pipelines, setting up [Virtual Network Service](../service-ecosystem/virtual-network-service.md) and establishing a [Foundation Service Platform](../service-ecosystem/foundation-service-platform.md). They can thus be a good first foray into building more complex landing zones.

One downside of this approach is that building the required skills and cloud infrastructure services requires a dedicated investment of time and resources. From our experience we have seen cloud foundation teams have success with this approach when they have team members with existing server operations know-how for building capabilities like [Shared VM Image Repository](../service-ecosystem/shared-vm-image-repository.md) and [SOC Integration](../security-and-compliance/soc-integration.md) as well as team members with expertise in cloud automation.

#### Dedicated Lift & Shift Cloud Tenants

When the organization plans on re-hosting only as an intermediate step before re-platforming or even refactoring workloads, designing the landing zone to provide dedicated cloud-tenants for every internal customer offers several advantages.

- Internal customers can provision not only virtual machines (see [Virtual Machine Service](../service-ecosystem/virtual-machine-service.md)) but can also augment their workloads with a pre-approved set of cloud-native services like Databases or object storage services (see [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md)) 

- Internal customers can work with the cloud provider portals and APIs to automate common management operations and therefore start building cloud know-how in a controlled and safe environment

- The cloud foundation team can easily leverage building blocks developed as part of a [Modular Landing Zones](./modular-landing-zones.md) concept like [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) for building other landing zones and governance capabilities like [Self-Service Multi-Cloud Tenant Database](./self-service-multi-cloud-tenant-database.md) or [Monthly cloud tenant billing report](../cost-management/monthly-cloud-tenant-billing-report.md).

- Internal cloud customers can have a well-defined “upgrade path” for leveraging additional capabilities like a[Managed DevOps Toolchain](../service-ecosystem/managed-devops-toolchain.md) provided by the cloud foundation team

From our experience this approach works best for cloud foundation teams that already have (or plan) strong investments into [Cloud-native Landing Zone](./cloud-native-landing-zone.md) capabilities. One downside is of course that building the required cloud skills with internal cloud customers takes time and may limit cloud adoption velocity. Cloud foundation teams should thus consider how to establish a low barrier of entry and reasonable “learning curve” in [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md).

### Consider How You Will Deliver Related Infrastructure Services

Even though virtual machines are the meat and bones of a lift & shift landing zone, the cloud foundation team should also consider how it will deliver related IT infrastructure services. Most internal cloud customers will also require [Managed DNS Services](../service-ecosystem/managed-dns-services.md) and [Managed SSL Certificates](../service-ecosystem/managed-ssl-certificates.md) for their workloads, as well as a [Managed bastion hosts](../service-ecosystem/managed-bastion-hosts.md) to access their virtual machines. In many organizations, these capabilities already exist for on-premise managed virtual machines and can be easily transferred to the cloud.

An important caveat however is that many of these existing processes will be ISMS based and eschew cloud-native practices like API-driven automation. Re-implementing these capabilities (very often based on top of the services provided by a cloud provider) can offer significant efficiency improvements for internal cloud customers capable and willing to take advantage of them.