---
id: 3892bc95-4464-417c-aab2-247da7a3015a
url: >-
  https://www.notion.so/Foundation-Service-Platform-3892bc954464417caab2247da7a3015a
title: Foundation Service Platform
description: >-
  Offer cloud foundation services like tenant management and managed cloud
  infrastructure services from a single self-service platform.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables:
    - 913a8ad1-7ad4-4ade-9e88-801a7afa4b40
    - c9728af5-49fe-4948-8701-2d6485bfbe93
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on: []
  recommended:
    - 5f9c0f7d-860a-488b-bbf8-897618e5c76f
    - 4f9ee73a-23a9-4aa3-b956-0df22e6156d0
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
    - 58c92b8f-f836-4c69-aa6a-d11f0c8a9a44
  scope: 🏢 Core
  tool-implementations: []
  name: Foundation Service Platform
---

Cloud is a way to deliver IT that maximizes business outcomes. Where classical IT services meant opening tickets or writing emails to 10 different stakeholders, the cloud is about having a single interface for DevOps teams to get everything they need to be productive. A cloud foundation service portal is a crucial part of getting away from a classical IT service operating model. 

> **🌤️** Most cloud foundation teams implementing a foundation service platform integrate it with [Self-Service Multi-Cloud Tenant Database](../tenant-management/self-service-multi-cloud-tenant-database.md) into a single solution.

A Cloud Foundation service platform typically supersedes [Individual Service Provisioning](./individual-service-provisioning.md) capabilities established earlier in the cloud journey.

## Best Practices for a Cloud Foundation Service Platform

### Make Platform Services Easily Discoverable

Making the complete service portfolio offered by the cloud foundation team as easily discoverable as possible, makes it more likely that customers can choose the best solution for the job. Ideally, teams only needs access to the platform service portal to explore the options available to them.

### Integrate Core Infrastructure Services

DevOps Teams moving to the cloud in a “hybrid” setting need internal services like IPAM, SSL certs, internal DNS etc. By offering these services from a central Cloud Foundation service portal, organizations can avoid the need to maintain separate systems of record like CMDBs. Instead, the cloud foundation team can maintain all cloud-related infrastructure inside a single solution, effectively creating an internal cloud control plane. Application teams can manage all their infrastructure from a single plane of glass and don’t need to fragment their resources across cloud-native and legacy ITSM systems.

### Enable Modular Landing Zones

A cloud foundation service portal is a natural companion to a [Modular Landing Zones](../tenant-management/modular-landing-zones.md) approach. Integrating tenant management and landing zone configuration capabilities with a cloud foundation service  portal 

### Leverage a Consistent Service Provisioning Workflow

Most services that cloud foundation teams offer to their teams need to tightly integrate with  the chosen landing zone design. Those integrations necessarily are platform-specific like

- [Virtual Network Service](./virtual-network-service.md) needs to create Azure VNETs, GCP VPCs, ...

- [Managed DevOps Toolchain](./managed-devops-toolchain.md) needs to integrate permissions on cloud tenants via an Azure Service Principal, GCP Service Account, ...

Integrating those services for multiple platforms necessarily means implementing platform-specific code. However, reusing a common service provisioning workflow across implementations can greatly enhance  productivity. 

For the two example services above, these parts could be modularized and shared across cloud platforms:

- [Virtual Network Service](./virtual-network-service.md) needs to reserve an IP range in an IPAM.

- [Managed DevOps Toolchain](./managed-devops-toolchain.md) needs to manage e.g. a CI/CD pipeline and grant access to user.

A cloud foundation service portal can provide a consistent interface to services for provisioning and parameterization while tooling like terraform enables a consistent implementation workflow.

