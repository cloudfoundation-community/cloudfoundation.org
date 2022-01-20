---
id: 913a8ad1-7ad4-4ade-9e88-801a7afa4b40
url: https://www.notion.so/Modular-Landing-Zones-913a8ad17ad44ade9e88801a7afa4b40
title: Modular Landing Zones
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Landing Zones are extendable with with services. These services have their
    own lifecycle and can be reconfigured during the lifespan of a tenant. The
    modular design allows combining services like LEGO® blocks.
  tool-implementations: []
  name: Modular Landing Zones
---

## Why Modular Landing Zones?

<!-- unsupported block type: synced_block -->

A Landing Zone describes how a cloud tenant should be prepared before DevOps teams can access it.

Modular Landing Zones have a baseline and are extendable with optional modules.

The baseline determines

- Where a tenant lives in the cloud provider’s resource hierarchy

- Which roles team leads can assign their developers

Common examples for optional modules are

- [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md) 

- [Managed CI/CD Platform](/maturity-model/service-ecosystem/managed-cicd-platform.md)

- [On-Premise Network Connection](/maturity-model/service-ecosystem/on-premise-network-connection.md)

Already a small number of optional modules can lead to a large number of combinations of those modules.

Modular Landing Zones allow tailoring Landing Zones to the needs of every DevOps team while keeping redundancy low and complexity manageable.

## Proven patterns for building Modular Landing Zones

### Split up existing Monolithic Landing Zones

You do not have to start form scratch, if you already have an existing Monolithic Landing Zone (see [Monolithic Landing Zone](/maturity-model/tenant-management/monolithic-landing-zone.md) ). When splitting up existing Landing Zones, a general guideline is: Policies and security settings go into the Landing Zone baseline. Infrastructure that requires workload (e.g. [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md) , [Virtual Network Service](/maturity-model/service-ecosystem/virtual-network-service.md) ) goes into modules.

### Use a Cloud Foundation Platform

Cloud Foundation teams need control over who gets access to what Landing Zone (see [Control access to cloud platforms and Landing Zones](/maturity-model/security-and-compliance/control-access-to-cloud-platforms-and-landing-zones.md) ). At the same time, a low time-to-cloud is only sustainable via self-service onboarding for DevOps teams (see [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) ). Therefore a highly integrated solution is necessary for applying a baseline of Landing Zones to tenants. This makes Cloud Foundation Platform the best choice for managing the baseline of Landing Zones.

### Use Infrastructure as Code tooling

Most teams build the optional modules for Landing Zones with Infrastructure as Code tooling. Common examples are Terraform, Azure BluePrint or Bicep , Google Cloud Resource Manager or AWS Cloud Formation.

### Manage Services GitOps style

GitOps is a proven pattern for managing optional Landing Zones modules. Having easily accessible definitions of Infrastructure as Code files in a version control system makes inspecting and updating Landing Zones a lot easier. When integrating with Cloud Foundation Platforms that support Open Service Broker API for implementing Landing Zones modules, the open-source [UniPipe Service Broker](https://github.com/meshcloud/unipipe-service-broker/) can be used to implement a GitOps workflow.

### Find the right balance between control and freedom

Do DevOps teams get IAM management rights in their tenant? An “open” approach to tenant permissions allows DevOps teams to iterate faster. A “closed” approach minimizes risks stemming from misconfigured permissions.

