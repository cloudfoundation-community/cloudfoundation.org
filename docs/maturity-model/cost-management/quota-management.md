---
id: fdd09e3d-c1f8-47be-8e1f-ece8449bf237
url: https://www.notion.so/Quota-Management-fdd09e3dc1f847be8e1fece8449bf237
title: Quota Management
description: >-
  Quotas are a simple mechanism for protecting cloud foundations and application
  teams against unforeseen spikes in usage/spend.
category: 💵 Cost Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on: []
  recommended: []
  scope: 🏢 Core
  tool-implementations:
    - 6d20b1f0-3c57-4b37-9f11-c25e5d2d1704
  name: Quota Management
---

Quotas are a simple mechanism for protecting cloud foundations and application teams against unforeseen spikes in usage/spend.

Managing quotas is a balancing act. Tight quotas can block healthy growth and necessary operations. Generous quotas do not protect against runaway workloads and unexpected spikes in costs.

## Proven Patterns When Implementing Quota Management

### Set Default Quotas per Landing Zone

Generous quotas are better than no quotas. We recommend to set quotas if your platform supports them. Think of it as the usage/spend pendant of IAM’s “least privilege principle”.

### Manage Quotas per Tenant

Every application team starts with the default quota of the Landing Zone they are consuming. From there on, increases need to be requested and granted on a per-tenant basis because they heavily depend on the workload running in the tenant to be effective. 

### Allow Moderate Increases of Quota in Self-Service

Allowing application teams to moderately increase quotas in self-service reduces the operational burden for the cloud foundation team. Instead of directly granting the higher quota, this ensures the higher usage/spend is a conscious decision of the application team.

