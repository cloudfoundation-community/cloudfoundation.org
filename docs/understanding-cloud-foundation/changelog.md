---
id: e234e308-c739-4af4-9610-e81915f973d2
url: https://www.notion.so/Changelog-e234e308c7394af49610e81915f973d2
title: Changelog
category: Understanding Cloud Foundation
order: 40
---

## 2022-10

- Change scope of the [Tenant Provisioning](../maturity-model/tenant-management/tenant-provisioning.md) capability from “Platform” to “Landing Zone”. This change reflects that the “tenant” concept can be different for different landing zones (e.g. a Lift & Shift landing zone may provision an Azure Resource Group, a container landing zone provisions a K8s namespace on a shared cluster)

- Most cloud foundation teams take a structured approach to offering services in the service ecosystem pillar. We split up the [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md) block to better segregate the evolution of this capability along typical cloud journeys.

    - An [Individual Service Provisioning](../maturity-model/service-ecosystem/individual-service-provisioning.md) process helps cloud foundation teams support early adopters while foundation services are not highly standardized yet

    - A [Foundation Service Platform](../maturity-model/service-ecosystem/foundation-service-platform.md) brings standardization to services and how they are made available to customers

    - Larger organizations can evolve this into an [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md), an advanced capability that enables “peer to peer” services between different teams

- Added [Managed DNS Services](../maturity-model/service-ecosystem/managed-dns-services.md) and [Managed SSL Certificates](../maturity-model/service-ecosystem/managed-ssl-certificates.md) blocks, capturing services that we often see cloud foundation teams offer for cloud-native workloads

