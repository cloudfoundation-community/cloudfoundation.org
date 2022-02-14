---
id: 64284b14-faab-461c-80bb-5e8efbae4dcc
url: >-
  https://www.notion.so/Tenant-Inventory-Reconciliation-64284b14faab461c80bb5e8efbae4dcc
title: Tenant Inventory Reconciliation
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on: []
  scope: 🏢 Core
  summary: >-
    The inventory of cloud tenants is automatically reconciled against the
    tenants actually present in the cloud platforms. This allows organizations
    to detect "shadow IT" or "dark matter" in the cloud. A process is in place
    to adopt these existing tenants into the prescribed governance model. 
  tool-implementations:
    - 9b740724-686e-45f2-8924-9000279b806b
  name: Tenant Inventory Reconciliation
---

After implementing basic functionality for managing cloud tenants like [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) or even more advanced capabilities like [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md), a cloud foundation team still misses a critical control for ensuring there are are no shadow workloads running on cloud platforms. 

> **💡** **Shadow workloads** are workloads running on a cloud platform that have unclear ownership, information security risk and cost responsibility. They are typically the result from brownfield situations or side-administration creating cloud tenants without the cloud foundation teams’ involvement. 

Actively reconciling the inventory of cloud tenants registered in a cloud tenant database with the actual tenants present in the cloud platform. This active reconciliation allows cloud foundation teams to detect unregistered tenants and take remediating action like adopting the tenant into the foundation’s governance structure, recording an explicit exception or even shutting down the tenant.

## Best Practices for Tenant Inventory Reconciliation

Implementing a tenant inventory reconciliation process is easy when a cloud foundation team has already implemented earlier journey-stage capabilities like [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) as well as solid cost management capabilities like [Monthly Cloud Project Billing Report](/maturity-model/cost-management/monthly-cloud-project-billing-report.md). 

### Integrate with Monthly Cost Management Process

A monthly cloud cost chargeback process offers a great opportunity for reconciling the tenant inventory and tracking down any unaccounted tenants. Unregistered tenants become obvious when comparing cloud provider billing data with the actual amounts charged back to internal cloud customers.