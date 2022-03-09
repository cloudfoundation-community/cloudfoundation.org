---
id: ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9
url: >-
  https://www.notion.so/Self-Service-Multi-Cloud-Tenant-Database-ab10bed170d547cfb3cd4a4448bdb9a9
title: Self-Service Multi-Cloud Tenant Database
description: >-
  Owners of cloud tenants can register, update and remove tenant metadata in a
  central multi-cloud tenant database in self service.
category: 🗂 Tenant Management
pageType: CFMMBlock
sidebar: false
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 11af37b7-c948-4486-a5da-5b1db6de8193
  scope: 🏢 Core
  tool-implementations:
    - e2123339-0641-4d44-b774-32ce23fd634d
    - 334eb216-fa16-4946-9fe5-8f66bb7fc3fa
  name: Self-Service Multi-Cloud Tenant Database
---

This building block represents an evolution of the capabilities of a [Multi-Cloud Tenant Database](./multi-cloud-tenant-database.md). Once your cloud foundation team is serving a growing number of internal cloud customers, maintaining up to date metadata about each cloud tenant (see [Cloud Tenant Database](./cloud-tenant-database.md) for more details) becomes a daunting task. For example, one key piece of information you want to store in a cloud tenant database is the security contact for the cloud tenant. This is the technical person that you will contact about any incidents or security issues detected for that cloud tenant. It’s critical that this contact information is always up to date so that  your organization is capable of reacting quickly to security incidents (this capability is part of the building block [Incident Management Process](../security-and-compliance/incident-management-process.md)).

> **💡** Self-service enables the cloud foundation team to shift the responsibility for maintaining up to date tenant metadata to cloud customers.

Unfortunately, your cloud customers can decide at any point to change the responsibilities within their team. Chances are, they won’t inform the cloud foundation team about this change. Even if they do, it’s a manual step for cloud foundation team to update the information in the tenant database.

## Best Practices for Building a Self-Service Multi-Cloud Tenant Database

Here’s a set of best practices to consider when building self-service for your cloud tenant database.

### Design Authorization Concept around Responsibilities

Managers responsible for multiple IT systems should be able to edit the metadata for these IT systems only.  This establishes clear responsibilities and ensures that data quality is maintained at a high level

### Notify Stakeholders about Missing Metadata

When your metadata schema evolves, for example by including a new field, this data will be initially missing from the majority of your existing cloud tenants. Your tenant database should thus have a process to contact your cloud customers and ask them to fill out the additional metadata.

### Have an Administrative Interface

While self-service will free up a lot of time for the cloud foundation team, there will be exceptions to the regular process. Having an administrative interface to override tenant data is thus a useful capability for your cloud foundation team.