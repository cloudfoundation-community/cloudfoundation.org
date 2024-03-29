---
id: e234e308-c739-4af4-9610-e81915f973d2
url: https://www.notion.so/Changelog-e234e308c7394af49610e81915f973d2
title: Changelog
category: Understanding Cloud Foundation
order: 40
---

## 2023-12

- The first release of the new [🧠 Knowledge](../maturity-model/knowledge/readme.md) pillar. This pillar focuses on building and disseminating shared knowledge within the Cloud Foundation. It includes key areas to foster an ongoing growth of the collected knowledge within the Cloud Foundation, and marks distinct steps for attaining foundational capabilities, all the way for becoming industry-leading in the way knowledge is handled and amplified within the Foundation.

- We’re now allowing for [public contributions](https://github.com/cloudfoundation-community/cloudfoundation.org/tree/main) to the Cloud Foundation Maturity Model, now accessible on GitHub under the [CC BY-SA 4.0](https://github.com/cloudfoundation-community/cloudfoundation.org/blob/main/LICENSE-docs) license.

## 2023-11

- As a major change we have renamed “building blocks” in the model and now consistently use the term “capability”. This simplifies the understanding of the model and removes the need for explaining “building blocks are capabilities”.

- Added a new building block [Billing Alerts](../maturity-model/cost-management/billing-alerts.md) to describe the recommended practice of setting up spending alerts on cloud tenants. 

## 2023-10

- We updated [Privileged Access Management](../maturity-model/iam/privileged-access-management.md) and also changed its journey stage from “Recommended” to “Essential”. While we realize many cloud foundation teams in the beginning of their cloud journey will not be able to implement a sophisticated solution for this capability at the start of their journey, this is better tracked as an implementation maturity rather than putting the capability on the shelf for later. This is especially critical on platforms like AWS where root account user credentials need to be protected.

- We update [Virtual Network Service](../maturity-model/service-ecosystem/virtual-network-service.md) to describe the most common implementation mechanisms and cloud services for AWS, GCP and Azure

- Changed [Centralized audit logs](../maturity-model/security-and-compliance/centralized-audit-logs.md) scope to to “Platform”. It was tagged as “Landing Zone” scope before but is more commonly implemented centrally for the entire cloud platform.

## 2023-06

- We added a new building block for [Quota Management](../maturity-model/cost-management/quota-management.md).

- We expanded a couple of building blocks like [Centralized audit logs](../maturity-model/security-and-compliance/centralized-audit-logs.md) and [Service and Location Restrictions](../maturity-model/security-and-compliance/service-and-location-restrictions.md) with short “How to implement” sections.

## 2022-12

- We aligned terminology in the model. We will from now on consistently refer to “application teams” when describing the consumers of a landing zone. From our experience this term more accurately reflects the different kind of teams that can consume a landing zone like development teams running their own workloads (DevOps Teams, Developer Teams) or teams running third party vendor software. The term is also more specific than “internal cloud customer” used before.

- Added a new building block for a [Data Science Landing Zone](../maturity-model/tenant-management/data-science-landing-zone.md) describing a landing zone for use by data scientists to develop AI or ML workloads.

- Added a [Virtual Machine Service](../maturity-model/service-ecosystem/virtual-machine-service.md) which can be an essential component of a [Lift & Shift Landing Zone](../maturity-model/tenant-management/lift-and-shift-landing-zone.md) but is also useful for other Landing Zones.

- We removed the Cloud Zones building block. The central idea behind Cloud Zones was finding commonalities between Use-Cases that allow you to build Landing Zones. To describe this idea we introduced the concept of “use-case requirements” in several building block pages. We found that Cloud Zones was not describing a separate capability cloud foundation teams are building up. We expanded [Shared Responsibility Model Alignment](../maturity-model/security-and-compliance/shared-responsibility-model-alignment.md), [Guided Cloud Onboarding](../maturity-model/security-and-compliance/guided-cloud-onboarding.md) and [Control Access to Landing Zones](../maturity-model/security-and-compliance/control-access-to-landing-zones.md) to reflect what was previously described in the Cloud Zones building block.

- We renamed the building block “Control access to Cloud Platform and Landing Zones” to [Control Access to Landing Zones](../maturity-model/security-and-compliance/control-access-to-landing-zones.md). This reflects that Landing Zones delivery is the central function of a cloud foundation team.

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

