---
id: bd309e8a-9ecd-4a0d-a3c3-b464f734ca54
url: https://www.notion.so/Tenant-Management-bd309e8a9ecd4a0da3c3b464f734ca54
title: 🗂 Tenant Management
description: >-
  Manage provisioning, configuration and lifecycle of cloud environments (e.g.
  AWS Accounts).
---

Multi-tenancy is a cornerstone of cloud computing. It allows different customers of a cloud computing provider to share the same physical cloud infrastructure while maintaining strong isolation and security guarantees between tenants. Correctly leveraging the tenant isolation primitives like Accounts (AWS), Subscriptions (Azure) or Projects (GCP) is therefore very important to build a strong foundation for cloud security. 

Tenant management is not only important for cloud security. It’s also the fundamental “entry point” into the cloud platform’s control plane for every operation. Whether you’re deploying new cloud resources, configuring [🔐 IAM](../iam/readme.md) or reviewing resource consumption with the platform’s [💵 Cost Management](../cost-management/readme.md) features, the tenant is always part of the operation’s context. 

## Key Activities for Cloud Tenant Management

Cloud Tenant Management involves the following key activities and capabilities

- Establishes processes for [Tenant Provisioning](./tenant-provisioning.md) and [Tenant Deprovisioning / Decommissioning](./tenant-deprovisioning-decommissioning.md) 

- Define your organization’s [Resource Hierarchy](./resource-hierarchy.md) 

- Build a database of cloud tenants according to your organization’s needs starting with a simple [Cloud Tenant Database](./cloud-tenant-database.md) as the minimum

- Establish a process for building and applying landing zones, e.g. [Modular Landing Zones](./modular-landing-zones.md) 

## Designing a Cloud Tenant Management Strategy

Especially when considering a multi-cloud scenario, cloud foundation teams need to design a tenant management strategy that they can implement consistently across all cloud platforms. Many cloud foundation teams make the mistake of focusing on the technical implementation details arising from the differences in resource hierarchy implementations of different cloud platforms. However, the true challenges lie elsewhere.

### Understand How Cloud Platforms Implement Multi-Tenancy

Cloud providers have historically chosen slightly different ways for implementing the abstract concept of multi-tenancy in their control planes. What they all have in common is that there’s some primitive concept that ties together all resources of a tenant and provides those isolation guarantees. The following list provides a reference of the different names that cloud platforms use for a “tenant” within their control plane

- **AWS**: Accounts

- **GCP**: Projects

- **Azure**: Subscriptions

- **Kubernetes (incl. derived platforms like OpenShift, AKS, ...)**: Namespaces

- **Cloud Foundry**: Spaces

- **OpenStack**: Project

Most Cloud Platforms today also have higher-level tenancy concepts that allow an organization to tie together a large number of these primitive tenants such as AWS and GCP Organizations, Azure Management Groups and similar constructs. This creates a [Resource Hierarchy](./resource-hierarchy.md) that spans an “enterprise organization” with individual tenants down to individual cloud resources. Organizations can leverage this resource hierarchy to interact with the cloud platform’s control plane, for example to consistently enforce policies across a grouping of tenants.

### Define Your Cloud Migration Strategy

Much has been written about Cloud Migration Strategies and the most prevailing categorization of them is “the 6 R’s”. The migration strategies place different demands on the cloud foundations cloud tenant management capabilities as shown in the table below.

<!-- included database 02b9c3c1-8a8b-47ca-a614-e12312dbd28e -->
| Name       | What it means                                                                                       | Consequences for Cloud Tenant Management                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Refactor   | rebuild the application to embrace cloud-native paradigm                                            | Very high amount of cloud tenants owned by different stakeholders (IT & Business teams) with strong expectations to leverage a wide variety of cloud-services from different platforms. |
| Retain     | leave it unchanged, keep it on-premise                                                              | not required                                                                                                                                                                            |
| Retire     | retire the application so that it’s no longer needed                                                | not required                                                                                                                                                                            |
| Rehost     | lift& shift applications to the cloud without architectural changes                                 | Small amount of tenants owned by central IT teams                                                                                                                                       |
| Replatform | make targeted changes to the application to leverage cloud-native capabilities like elastic scaling | Support a high amount of cloud tenants owned by different stakeholders (IT & Business teams)                                                                                            |
| Repurchase | migrate to a different product, e.g. a SaaS                                                         | not required                                                                                                                                                                            |



> **💡** Many organizations want to leverage multiple cloud migration strategies for their diverse IT portfolio. [Cloud Zones](../security-and-compliance/cloud-zones.md) are a good solution for cloud foundation teams to address the different demands that these migration strategies place on the cloud foundation.

### Make Your IT Organization Structure Cloud-Ready

By leveraging the primitive tenant isolation concept, organizations adopting the cloud can segregate IT systems into individual tenants. This establishes

- clear boundaries of security responsibility 

- clear boundaries of responsibility for cloud spend

- clear boundaries of access (IAM) 

- a good security posture by limiting blast radius at an infrastructure level

While all of these are hallmarks of proper tenant segregation, the key requirement is that the organization can divide responsibility and infrastructure for IT systems cleanly to different teams. In most IT organizations, [Conway’s law](https://en.wikipedia.org/wiki/Conway%27s_law) is the main driver of Enterprise Architecture: The structure of IT systems follows the communication structure of the organization. 

It’s thus necessary that an organization has a clear concept of boundaries between IT systems. Traditional IT organizations that separate “the business” from “the IT” are often challenged to implement these boundaries. The business makes requests towards IT to provide a system, and IT takes care of building and running the system within its own infrastructure. Consequently, the prevailing on-premise IT infrastructure is often built around the concept of having “trust” between different systems: after all they’re run by the same people. One symptom of this trust is that most on-premise environments have rather flat network structures with little in the way of isolation between applications. 

Embracing cloud turns these assumptions on its head. When IT infrastructure is just a single API call away, organizations can now decentralize responsibility for building and running IT systems. After all, this is the key enabler for accelerated software delivery performance to drive digitalization initiatives. But organizations need not only be ready for the technical changes this implies to IT systems, like stronger network segmentation provided by virtual networks living in several cloud tenants. First and foremost, organizations need to embrace the paradigm shift that it brings to who’s owning and IT system and who’s responsible for building and operating it. 

> **💡** A good tenant management strategy builds on clear organizational ownership of IT Systems. Enable each “internal customer” to allocate isolated tenants for each environment (e.g. dev, prod) of their IT system.

### Involve All Cloud Tenant Management Stakeholders

Cloud Tenant Management is an “original responsibility” of cloud foundation teams. Other Cloud Foundation Pillars like [🔐 IAM](../iam/readme.md) or [💵 Cost Management](../cost-management/readme.md) often have existing stakeholders in an IT organization responsible for their respective core activities. Tenant management however is a “new” requirement that arises out of cloud adoption specifically.

Nonetheless, many IT organisations already have encountered similar challenges. For example, IT Service Management requires the notion of an “internal customer”. The “internal customer” is a key concept and any stakeholders involved in their definition like Enterprise Architecture Boards, ITSM or CMDB teams are important key stakeholders to the cloud foundation team.

Inside the cloud foundation team there’s often different platform specialists or even platform owners focusing on different platforms each. In order to avoid “platform silos” (see  [Approaches to building a Cloud Foundation](../../understanding-cloud-foundation/approaches-to-building-a-cloud-foundation.md) section “Platform by Platform”), it’s very important that the cloud foundation team aligns the tenant management processes across all cloud platforms.

Additional stakeholders to the tenant management process are security and compliance as well as cost management stakeholders, as cloud tenant structure and cloud tenant metadata are key enablers for cloud management activities in their domains.