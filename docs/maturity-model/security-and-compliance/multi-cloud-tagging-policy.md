---
id: 707c41b8-6da0-4e78-b982-fa4b1365521b
url: >-
  https://www.notion.so/Multi-Cloud-Tagging-Policy-707c41b86da04e78b982fa4b1365521b
title: Multi-Cloud Tagging Policy
description: >-
  Define and enforce a consistent tagging of cloud tenants and resource across
  multiple cloud platforms.  
category: 🔖 Security & Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Security & Compliance
  enables:
    - e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 52d1e517-9d07-4acc-8c59-17526fa3af9d
    - 344b75a4-595b-4ba5-8851-ddfb6d4acf7c
  scope: 🏢 Core
  tool-implementations:
    - 73cfa3f4-16ed-40cf-9c75-0611aad78d0b
    - 7547a774-2b9f-45fc-9123-fbb2e48ccd09
  name: Multi-Cloud Tagging Policy
---

Cloud Foundation teams who implement [Cloud Tenant Tagging](./cloud-tenant-tagging.md) or [Cloud Resource Tagging](./cloud-resource-tagging.md) often find the need to centrally define and communicate tagging conventions. This is a pre-requisite for shared-responsibility tagging, e.g. cloud foundation teams enforcing tenant tagging but leaving cloud resource tagging to internal cloud customers. 

<!--notion-markdown-cms:raw-->
 <CallToAction>
  <CtaHeader>Make your Cloud Security a Priority</CtaHeader>
  <CtaText>Tagging and labeling is an early stage topic of your cloud journey. It forms the foundation of secure and structured growth.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/">Learn more about Tags</CtaButton>
</CallToAction>

## Best Practices for a Multi-Cloud Tagging Convention

### Establish a Naming Convention for Tags

Cloud Tagging works best when following a consistent naming convention. This naming convention should consider t[he technical limitations for storing tags in cloud platforms](https://www.meshcloud.io/2022/02/07/tags-and-labels-on-cloud-platforms-cheat-sheet-2020/). Namespace prefixes on tags help to separate the responsibilities for maintenance of a particular tag. For example, when some tags are automatically reconciled with a [Cloud Tenant Database](../tenant-management/cloud-tenant-database.md) by the cloud foundation’s automation systems, giving them a clear prefix helps separate those tags from tags maintained by customers individually.

### Focus on Information That’s Relevant across All Cloud Platforms

The most common metadata manage on cloud accounts and resources are listed below. Namespacing can be a good solution to enable individual cloud platforms to maintain additional tags that are relevant to their operation.

<!-- included database 0843a682-c1c3-4fc0-936b-cc080684a3c2 -->
| Metadata Name                   | Description                                                                                                                                                                                                                                                                            | Possible values                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Contact Person                  | Email address or other information to get information about the responsible contact person for the cloud resource or cloud account.<br>Usually used for Security contact, Operations contact, Account owner etc.                                                                       | my-personal-postbox@example.com                                           |
| Mailbox                         | Using a group email postbox instead of using a dedicated persons email address. This is in most scenarios more appropriate and has the benefit of protecting PII while ensuring that multiple recipients.<br>Usually used for Security contact, Operations contact, Account owner etc. | project-postbox@example.com                                               |
| Integration and Automation tags | Metadata to enable automation or integrations. Cloud providers provides tools to apply templates, policies or similar depending on metadata.                                                                                                                                           | SoC, security requirement (high, mid, low) etc.                           |
| Cost Center                     | Cost Center, Budget ID, internal recipient number for internal cost controlling and billing.                                                                                                                                                                                           | Any type of text or number depending on the enterprise cost center schema |
| Data Classification             | Metadata describing the data classification of the information processed by the cloud resource or cloud account.                                                                                                                                                                       | internal, confidential, top secret, business secret                       |
| Environment / Stage             | Metadata regarding the stage for which the cloud resource or cloud account is used.                                                                                                                                                                                                    | dev, test, qa, prod, ressource, data                                      |

### Involve All Cloud Foundation Stakeholders

Tagging can serve many different use cases. It’s thus important that the cloud foundation involves all cloud foundation stakeholders in the definition and evolution of the central tagging policy. 

> **💡** To resolve unclarity and inconsistencies around tagging, the cloud foundation team needs to have the organizational authority to make a binding decision on these matters. 

One important challenge here is to make stakeholders aware of the consequences that introducing tags has on the cloud customer experience. For example, when every cloud platform wants to introduce a slightly different convention for an environment/stage tag, internal cloud customers will get confused about the differences.

### Consider Backwards Compatibility and Update Procedure

As a cloud foundation evolves, cloud foundation teams will discover the need to define additional tags or change the definition of existing tags. Performing these changes should always consider the implications on existing cloud customers and automation processes. Enforcing the tagging policy via a [Self-Service Multi-Cloud Tenant Database](../tenant-management/self-service-multi-cloud-tenant-database.md) for example enables the cloud foundation team to request additional metadata from existing cloud customers or apply automated data migration to existing metadata. Combined with automation that reconciles cloud tenant and resource tags with this database, cloud foundation teams eliminate configuration drift and gain a lot of agility for evolving their tagging policy. 

### Treat Tags like Global State

[Global state is evil](https://softwareengineering.stackexchange.com/questions/148108/why-is-global-state-so-evil) because it tends to make system behavior unpredictable. This analogy will be familiar to those with a background in programming. From the point of view of building a cloud foundation tags behave in much the same way like global state in a program. 

One important technique to avoid the downsides of global state is to prevent uncoordinated mutation of this state by assigning explicit responsibilities and authority to systems and processes for maintaining this state. These systems can also enforce “business logic” around updating this state.

Another good heuristic is to try and avoid global state in the first place. For example, a clear [Resource Hierarchy](../tenant-management/resource-hierarchy.md) can remove the need for some kind of tags. Having a [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md) process integrated with the cloud tenant database (which is also useful for [Tenant Inventory Reconciliation](../tenant-management/tenant-inventory-reconciliation.md)) can avoid putting extensive chargeback related data into the cloud. Tenant-specific configuration data may be better kept in services like a  [Virtual Network Service](../service-ecosystem/virtual-network-service.md) instead of a `on-prem-conncetivity.cidr:10.0.0.0/24` tag. 