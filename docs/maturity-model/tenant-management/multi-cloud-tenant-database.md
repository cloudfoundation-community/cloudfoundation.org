---
id: 11af37b7-c948-4486-a5da-5b1db6de8193
url: >-
  https://www.notion.so/Multi-Cloud-Tenant-Database-11af37b7c9484486a5da5b1db6de8193
title: Multi-Cloud Tenant Database
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
    - ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - b875ac41-2b38-4ce4-ab8b-76ddd876d789
  scope: 🏢 Core
  summary: >-
    A central database provides information about tenants in different clouds
    using a unified information schema. Tenants can be registered in this
    database via an API or are stored there by combining different tenant
    lists/exports into a common database schema (ETL). 
  tool-implementations:
    - 65b1a609-a258-4e93-898c-9d115b6e32c5
  name: Multi-Cloud Tenant Database
---

Organizations following a multi-cloud strategy often start implementing dedicated processes for [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md) and maintaining a [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) on each platform. This makes it difficult to establish visibility over the organization’s multi-cloud adoption. 

Furthermore, maintaining different tenant databases per platform leads to inconsistent metadata about your cloud tenants. This makes it difficult to establish a consistent level of governance across multiple cloud providers and platform technologies. There is also a lot of redundant effort for data integration with each platform’s cloud tenant database, especially when considering capabilities like [Link Cloud Tenants to CMDB/EAM](/maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md) or [Multi-Cloud Tagging Policy](/maturity-model/security-and-compliance/multi-cloud-tagging-policy.md).

## Best Practices for Establishing Multi-Cloud Visibility with a Cloud Tenant Database

To successfully implement a multi-cloud tenant database, it needs to serve as a [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) for each platform. Review that building block for considerations and best practices of building a cloud tenant database. This building block focuses on the considerations to establish a consistent multi-cloud database.

### Align and Centralize Requirements

If your organization has historically managed cloud platforms as separate silos, chances are high that platform teams have implemented processes like [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md), [Tenant Deprovisioning / Decomissioning](/maturity-model/tenant-management/tenant-deprovisioning-decomissioning.md)  or [Cloud Tenant Tagging](/maturity-model/security-and-compliance/cloud-tenant-tagging.md) individually. When building a multi-cloud tenant database, you will also have to consider how to align these processes across clouds so they can be integrated with a single multi-cloud tenant database. A natural next step in this process could be implementing the building block [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md). 

Creating this alignment between different platform implementations and functional stakeholders (IAM, Compliance, Finance) can be challenging. Establishing a [Cloud Foundation team](/fe4fd51c8f5746f1afa12fc3402063b8) empowered with a clear-cut mission is the best approach to overcome these challenges.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Start your Multi-Cloud Journey</CtaHeader>
  <CtaText>Implementing a multi-cloud strategy has its pitfalls. Read these 6 tips to start your multi-cloud journey.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/03/04/6-things-to-watch-out-for-when-starting-your-cloud-journey/">Start your Cloud Journey</CtaButton>
</CallToAction>

### Consider Collaborative Approaches to Maintaining Tenant Metadata

Maintaining tenant data at scale is a lot of work. Even more so than with a platform-specific [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md), enabling collaboration between different stakeholders is the key to maintaining a high-quality information repository about cloud tenants. The building block  [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) covers implementing this in more detail.

### Maintain a Cloud Service Register to Meet Regulatory Requirements

Industry-specific regulation can require your organization to maintain a register of all cloud outsourcing activities. A multi-cloud tenant database can help meet these requirements. One example of this is the “Cloud Service Register” in the financial industry as recommended by the European Banking Authority’s [Recommendations on Cloud Outsourcing](https://www.eba.europa.eu/sites/default/documents/files/documents/10180/2170121/5fa5cdde-3219-4e95-946d-0c0d05494362/Final%20draft%20Recommendations%20on%20Cloud%20Outsourcing%20%28EBA-Rec-2017-03%29.pdf?retry=1).

