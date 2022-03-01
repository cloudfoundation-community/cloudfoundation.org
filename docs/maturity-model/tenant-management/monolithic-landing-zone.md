---
id: 57c00ed4-e699-4167-a0f5-6009bf31b600
url: https://www.notion.so/Monolithic-Landing-Zone-57c00ed4e6994167a0f56009bf31b600
title: Monolithic Landing Zone
description: >-
  Landing Zones includes a common set of core resources like virtual networks.
  These resources are managed with the same life-cycle as the underlying cloud
  tenant.
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations:
    - 254476a2-de92-4724-a06e-65931ebb5aec
  name: Monolithic Landing Zone
---



Early stage cloud foundations often start with a “one-size-fits-all” approach to Landing Zones. This means that the baseline configuration provisioned and enforced by the landing zone has to serve multiple concerns. For example the landing zone may include a prescriptive network configuration for enabling [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) as well as mandatory audit configuration (see [Centralized audit logs](../security-and-compliance/centralized-audit-logs.md) ). When the Cloud Foundation team encounters a new concern, like [Managed DevOps Toolchain](../service-ecosystem/managed-devops-toolchain.md) , it also gets added to the baseline. Because different DevOps teams have different needs most Cloud Foundations will split up an organically grown Monolithic Landing Zone into [Modular Landing Zones](./modular-landing-zones.md). The pain points frequently encountered are listed in the last section of this page.

The Monolithic Landing Zone is known to be a local maximum that keeps complexity low in the short term while sacrificing flexibility in the long term. 

## When to Build a Monolithic Landing Zone

> **⚠️** For Cloud Foundation that are getting started with building Landing Zones the Monolithic Approach is considered an anti-pattern. A modular approach as laid out in [Modular Landing Zones](./modular-landing-zones.md)  is recommended.

For Cloud Foundations that find themselves with organically grown Monolithic Landing Zone, the next section will help to decide when to re-structure existing Monolithic Landing Zones.

## Pain Points of Monolithic Landing Zone

As Cloud Foundations serve more customers the limitations of the Monolithic Landing Zone  approach will become more numerous. Here are indicators that your Cloud Foundation needs to move to [Modular Landing Zones](./modular-landing-zones.md):

- Every time a customer wants to book a service, it is added to the Monolithic Landing Zone.

- The Monolithic Landing Zone creates workload that is not required by some teams.

- The Monolithic Landing Zone hosts conflicting combinations like different [Managed DevOps Toolchain](../service-ecosystem/managed-devops-toolchain.md) providers or [Virtual Network Service](../service-ecosystem/virtual-network-service.md)s.

- Customers request different combinations of Landing Zone services that are managed with a growing number of feature-toggles.

- Re-using parts of Monolithic Landing Zone is not easily possible for other Landing Zones.

