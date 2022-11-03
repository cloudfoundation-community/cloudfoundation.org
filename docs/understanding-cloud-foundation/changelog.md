---
id: e234e308-c739-4af4-9610-e81915f973d2
url: https://www.notion.so/Changelog-e234e308c7394af49610e81915f973d2
title: Changelog
category: Understanding Cloud Foundation
order: 40
---

## 2022-11

- Merged the “Multi-Cloud Tenant Database” block into the existing [Self-Service Multi-Cloud Tenant Database](../maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) block. Most teams that we have been advising on their cloud journeys have found little value in the distinction at Journey Stage one between the core-scope “Multi-Cloud Tenant Database” and the platform-scope [Cloud Tenant Database](../maturity-model/tenant-management/cloud-tenant-database.md) block. In practice, the need to establish a multi-cloud tenant database coincides with increased scoped for the cloud foundation team (more customers, more platforms) so merging this makes the model a little leaner and provides better distinction between these capabilities.

- We renamed the “Resource Policies - Blacklisting” building block to [Service and Location Restrictions](../maturity-model/security-and-compliance/service-and-location-restrictions.md). Cloud foundation teams can establish policies for allowed cloud services and regions via both blacklisting and whitelisting resources and we think the new name better captures this. 

- We added [Resource Configuration Policies](../maturity-model/security-and-compliance/resource-configuration-policies.md) as a journey stage 2 capability. Albeit often using the same implementation techniques as [Service and Location Restrictions](../maturity-model/security-and-compliance/service-and-location-restrictions.md), we see this as a differentiated capability leveraged by cloud foundation teams building bespoke landing zones for self-service application teams.

- Provided a first version of the [Resource Configuration Scanning](../maturity-model/security-and-compliance/resource-configuration-scanning.md) block, which was previously named “Automated Security Scanning”

## 2022-10

- Change scope of the [Tenant Provisioning](../maturity-model/tenant-management/tenant-provisioning.md) capability from “Platform” to “Landing Zone”. This change reflects that the “tenant” concept can be different for different landing zones (e.g. a Lift & Shift landing zone may provision an Azure Resource Group, a container landing zone provisions a K8s namespace on a shared cluster)

- Most cloud foundation teams take a structured approach to offering services in the service ecosystem pillar. We split up the [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md) block to better segregate the evolution of this capability along typical cloud journeys.

    - An [Individual Service Provisioning](../maturity-model/service-ecosystem/individual-service-provisioning.md) process helps cloud foundation teams support early adopters while foundation services are not highly standardized yet

    - A [Foundation Service Platform](../maturity-model/service-ecosystem/foundation-service-platform.md) brings standardization to services and how they are made available to customers

    - Larger organizations can evolve this into an [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md), an advanced capability that enables “peer to peer” services between different teams

- Added [Managed DNS Services](../maturity-model/service-ecosystem/managed-dns-services.md) and [Managed SSL Certificates](../maturity-model/service-ecosystem/managed-ssl-certificates.md) blocks, capturing services that we often see cloud foundation teams offer for cloud-native workloads

