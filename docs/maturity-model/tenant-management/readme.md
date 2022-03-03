---
id: bd309e8a-9ecd-4a0d-a3c3-b464f734ca54
url: https://www.notion.so/Tenant-Management-bd309e8a9ecd4a0da3c3b464f734ca54
title: 🗂 Tenant Management
description: >-
  Manage provisioning, configuration and lifecycle of cloud environments (e.g.
  AWS Accounts).
category: Pillar
---

Multi-tenancy is a cornerstone of cloud computing. It allows different customers of a cloud computing provider to share the same physical cloud infrastructure while maintaining strong isolation and security guarantees between tenants. Correctly leveraging the tenant isolation primitives like Accounts (AWS), Subscriptions (Azure) or Projects (GCP) is therefore very important to build a strong foundation for cloud security. 

Tenant management is not only important for cloud security. It’s also the fundamental “entry point” into the cloud platform’s control plane for every operation. Whether you’re deploying new cloud resources, configuring IAM or reviewing resource consumption with the platform’s reporting features, the tenant is always part of the operation’s context. 

## Key Activities in Multi-Cloud Tenant Management

Multi-Cloud Tenant Management involves the following key activities and capabilities 

- Establish processes for [Tenant Provisioning](./tenant-provisioning.md) and [Tenant Deprovisioning / Decommissioning](./tenant-deprovisioning-decommissioning.md) 

- Define your organization’s [Resource Hierarchy](./resource-hierarchy.md)

- Build a database of cloud tenants according to your organization’s needs starting with a simple [Cloud Tenant Database](./cloud-tenant-database.md) as the minimum

- Establish a process for building and applying landing zones, e.g. [Modular Landing Zones](./modular-landing-zones.md) 

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Tenant Management pillar has several important links to other cloud foundation capabilities

[🔐 IAM](../iam/readme.md) 

- As the tenant is a fundamental entry point into the cloud, controlling access to the cloud at tenant-level is a key consideration for a multi-cloud [Authorization Concept](../iam/authorization-concept.md) 

[🔖 Security & Compliance](../security-and-compliance/readme.md) 

- Tenant databases need to provide necessary metadata to enable [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) and [Cloud Resource Tagging](../security-and-compliance/cloud-resource-tagging.md) for compliance purposes

- The tenant management process needs to identify the responsible security contact for each cloud tenant, which is an important prerequisite for establishing an [Incident Management Process](../security-and-compliance/incident-management-process.md) and informing the right stakeholders about the results of [Automated Security Scanning](../security-and-compliance/automated-security-scanning.md) 

[💵 Cost Management](../cost-management/readme.md) 

- Tenant management process needs to identify the responsible cost owners so that the organization can leverage [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md) and [Monthly cloud tenant billing report](../cost-management/monthly-cloud-tenant-billing-report.md) for cost owners

[🛠 Service Ecosystem](../service-ecosystem/readme.md) 

- The concept of an “internal customer” that can order cloud tenants seamlessly extends well into also enabling that same customer to provision services from the service ecosystem. This is also a key requirement when adopting a [Modular Landing Zones](./modular-landing-zones.md) approach that provides baseline configurations for cloud tenants that customers can then extend with additional services

## Designing a Multi-Cloud Tenant Management Strategy

Especially when considering a multi-cloud scenario, cloud foundation teams need to design a tenant management strategy that they can implement consistently across all cloud platforms. 

<!--notion-markdown-cms:raw-->
<CallToAction>
	<CtaHeader>Cloud Tenant Management Guide</CtaHeader>
	<CtaText>Learn more about the organizational needs driving cloud tenant database requirements in the "Cloud Tenant Management Guide - what you need to know in 2021" guide.</CtaText>
	<CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn More</CtaButton>
</CallToAction>

## Key Stakeholders for Multi-Cloud Tenant Management

Cloud Tenant Management is an “original responsibility” of cloud foundation teams. Other Cloud Foundation Pillars like [🔐 IAM](../iam/readme.md) or [💵 Cost Management](../cost-management/readme.md) often have existing stakeholders in an IT organization responsible for their respective core activities. Tenant management however is a “new” requirement that arises out of cloud adoption specifically.

Nonetheless, many IT organizations already have encountered similar challenges. For example, IT Service Management requires the notion of an “internal customer”. The “internal customer” is a key concept and any stakeholders involved in their definition like Enterprise Architecture Boards, ITSM, or CMDB teams are important key stakeholders to the cloud foundation team.

Inside the cloud foundation team, there are often different platform specialists or even platform owners focusing on different platforms each. In order to avoid “platform silos” (see  [Approaches to building a Cloud Foundation](../../understanding-cloud-foundation/approaches-to-building-a-cloud-foundation.md) section “Platform by Platform”), it’s very important that the cloud foundation team aligns the tenant management processes across all cloud platforms.

Additional stakeholders to the tenant management process are security and compliance as well as cost management stakeholders, as cloud tenant structure and cloud tenant metadata are key enablers for cloud management activities in their domains.