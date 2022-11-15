---
id: e234e308-c739-4af4-9610-e81915f973d2
url: https://www.notion.so/Changelog-e234e308c7394af49610e81915f973d2
title: Changelog
category: Understanding Cloud Foundation
order: 40
---

## 2022-11

- The Cloud Foundation Maturity model now offers more interactive controls to explore the model. Here’s what we added

    - Filters for filtering blocks by scopes and journey stage

    - Interactive highlighting of block relations with color-coded relationships

    - Expert tools to allow manual block filtering as well as unfolding all block descriptions

    - A legend explains important CFMM concepts

- Added a new group of building blocks for use-case-specific Landing Zones to the Tenant Management Pillar

    - [Cloud-native Landing Zone](../maturity-model/tenant-management/cloud-native-landing-zone.md) offers cloud-native tenants for sophisticated internal customers building directly on the cloud

    - [Lift & Shift Landing Zone](../maturity-model/tenant-management/lift-and-shift-landing-zone.md) provides an optimized cloud environment for re-hosting or re-platforming VM based workloads.

    - [Container Platform Landing Zone](../maturity-model/tenant-management/container-platform-landing-zone.md) offers a developer-centric experience for building and running container-based applications on the cloud.

- Removed the “Monolithic Landing Zone” building block. We documented this as an anti-pattern but feel it makes more sense to include in the motivation for [Modular Landing Zones](../maturity-model/tenant-management/modular-landing-zones.md).

- Several key building blocks were refactored to describe the capability they represent instead of an implementation artifact or concept. This refactoring improves the consistency of the model and makes assessing implementation maturity of each block more consistent as well.

    - "Identity and Access Management Concept” was renamed to [Identity and Access Management Alignment](../maturity-model/iam/identity-and-access-management-alignment.md). It was also re-focused on establishing aligned processes for governing identities and access permissions across cloud platforms.

    - "Shared Responsibility Model” was renamed to [Shared Responsibility Model Alignment](../maturity-model/security-and-compliance/shared-responsibility-model-alignment.md) and considerably revised to describe useful strategies for aligning responsibilities between different stakeholders.

    - “Authorization Concept” was renamed to  [Resource Authorization Management](../maturity-model/iam/resource-authorization-management.md). We now also see this capability on the Landing Zone scope instead of the platform scope as landing zone’s built for different use cases can require different approaches to managing resource authorization.

    - The [Resource Hierarchy](../maturity-model/tenant-management/resource-hierarchy.md) block summary now also highlights the importance of maintaining the integrity of the hierarchy to ensure other capabilities built atop of it remain effective.

- Merged the “Multi-Cloud Tenant Database” block into the existing [Self-Service Multi-Cloud Tenant Database](../maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) block. Most teams that we have been advising on their cloud journeys have found little value in the distinction at Journey Stage one between the core-scope “Multi-Cloud Tenant Database” and the platform-scope [Cloud Tenant Database](../maturity-model/tenant-management/cloud-tenant-database.md) block. In practice, the need to establish a multi-cloud tenant database coincides with increased scoped for the cloud foundation team (more customers, more platforms) so merging this makes the model a little leaner and provides better distinction between these capabilities.

- We renamed the “Resource Policies - Blacklisting” building block to [Service and Location Restrictions](../maturity-model/security-and-compliance/service-and-location-restrictions.md). Cloud foundation teams can establish policies for allowed cloud services and regions via both blacklisting and whitelisting resources and we think the new name better captures this. 

- We added [Resource Configuration Policies](../maturity-model/security-and-compliance/resource-configuration-policies.md) as a journey stage 2 capability. Albeit often using the same implementation techniques as [Service and Location Restrictions](../maturity-model/security-and-compliance/service-and-location-restrictions.md), we see this as a differentiated capability leveraged by cloud foundation teams building bespoke landing zones for self-service application teams.

- Provided a first version of the [Resource Configuration Scanning](../maturity-model/security-and-compliance/resource-configuration-scanning.md) block, which was previously named “Automated Security Scanning”

- We recently change the scope of the [Tenant Provisioning](../maturity-model/tenant-management/tenant-provisioning.md) capability from “Platform” to “Landing Zone”. Consequentially the [Tenant Deprovisioning / Decommissioning](../maturity-model/tenant-management/tenant-deprovisioning-decommissioning.md) block was re-scoped to Landing Zone as well

## 2022-10

- Change scope of the [Tenant Provisioning](../maturity-model/tenant-management/tenant-provisioning.md) capability from “Platform” to “Landing Zone”. This change reflects that the “tenant” concept can be different for different landing zones (e.g. a Lift & Shift landing zone may provision an Azure Resource Group, a container landing zone provisions a K8s namespace on a shared cluster)

- Most cloud foundation teams take a structured approach to offering services in the service ecosystem pillar. We split up the [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md) block to better segregate the evolution of this capability along typical cloud journeys.

    - An [Individual Service Provisioning](../maturity-model/service-ecosystem/individual-service-provisioning.md) process helps cloud foundation teams support early adopters while foundation services are not highly standardized yet

    - A [Foundation Service Platform](../maturity-model/service-ecosystem/foundation-service-platform.md) brings standardization to services and how they are made available to customers

    - Larger organizations can evolve this into an [Internal Service Marketplace](../maturity-model/service-ecosystem/internal-service-marketplace.md), an advanced capability that enables “peer to peer” services between different teams

- Added [Managed DNS Services](../maturity-model/service-ecosystem/managed-dns-services.md) and [Managed SSL Certificates](../maturity-model/service-ecosystem/managed-ssl-certificates.md) blocks, capturing services that we often see cloud foundation teams offer for cloud-native workloads

