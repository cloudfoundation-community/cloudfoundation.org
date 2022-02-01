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
  redaction-state: Draft
  journey-stage: ⭐️
  depends-on:
    - b875ac41-2b38-4ce4-ab8b-76ddd876d789
  scope: 🏢 Core
  summary: >-
    A central database provides information about tenants in different clouds
    using a unified information schema. Tenants can be registered in this
    database via an API or are stored there by combining different tenant
    lists/exports into a common database schema (ETL). 
  tool-implementations: []
  name: Multi-Cloud Tenant Database
---

Organizations following a multi-cloud strategy often start implementing dedicated processes for [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md) and maintaining a [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) on each platform. This makes it difficult to establish visibility over the organization’s multi-cloud adoption. 

Furthermore, maintaining different tenant databases per platform leads to inconsistent metadata about your cloud tenants, making it difficult to establish a consistent level of governance across multiple cloud providers and platform technologies. There is also a lot of redundant effort for data integration with each platform’s cloud tenant database, especially when considering capabilities like [Link Cloud Tenants to CMDB/EAM](/maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md) or [Central Management of Tenant tags and metadata](/maturity-model/security-and-compliance/central-management-of-tenant-tags-and-metadata.md).

## Best Practices for Establishing Multi-Cloud Visibility with a Cloud Tenant Database

To successfully implement a multi-cloud tenant database, it needs to cater to the demands of each individual platform and also establish consistency across all platforms. You should thus review the platform-scoped building block [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) first. 

### Don’t Settle on the Lowest Common Denominator

Requires strong guidance by an empowered cloud foundation team (don’t build platform silos) 