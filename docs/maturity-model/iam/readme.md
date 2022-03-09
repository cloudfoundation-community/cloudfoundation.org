---
id: 9ee0a54d-9b9e-47dd-9fc0-9d81213ce76c
url: https://www.notion.so/IAM-9ee0a54d9b9e47dd9fc09d81213ce76c
title: 🔐 IAM
description: >-
  Provide Identity and Access management capabilities for all available cloud
  platforms and services.
category: Pillar
pageType: CFMMPillar
sidebar: false
properties:
  short-name: IAM
---

Identity and Access Management (IAM) is a crucial part of building a solid cloud foundation. After all, access to the cloud platform’s API to deploy and manage cloud resources is akin to providing the keys to a virtual data center. IAM covers the life-cycle of identities as well as controls for authentication and authorization. Leveraging the cloud platform’s IAM systems like AWS IAM, Azure RBAC or GCP IAM is therefore crucial to achieve cloud security.

## Key Activities in Multi-Cloud IAM

The IAM pillar of the Cloud Foundation Maturity Model encompasses the following key activities and capabilities

- An [Identity and Access Management Concept](./identity-and-access-management-concept.md) establishes a multi-cloud control plane for IAM with a consistent management paradigm for identity and permissions life-cycle across platforms.

- A [Federated Identity and Authentication](./federated-identity-and-authentication.md) architecture adapted to each cloud platform provides the technical integration.

- An [Authorization Concept](./authorization-concept.md) describes how the organization manages authorization for cloud tenants and resources. 

- Cloud Foundation teams should strongly consider also establishing formal processes for [Privileged Access Management](./privileged-access-management.md), e.g. for administrative users

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Identity and Access Management pillar has several important links to other cloud foundation capabilities

[🗂 Tenant Management](../tenant-management/readme.md) 

- As the tenant is the fundamental entry point into the cloud, providing access in line with the [Authorization Concept](./authorization-concept.md) should be part of the [Tenant Provisioning](../tenant-management/tenant-provisioning.md) processes.

[🔖 Security & Compliance](../security-and-compliance/readme.md) 

- The scope of permissions granted to internal cloud customers should reflect the responsibility split defined in the cloud foundation’s [Shared Responsibility Model](../security-and-compliance/shared-responsibility-model.md).

- Permissions are often a key component of [Automated Security Scanning](../security-and-compliance/automated-security-scanning.md) reports (e.g. to ensure principle of least privilege, preventing public access etc.).

- IAM changes should be included in [Centralized audit logs](../security-and-compliance/centralized-audit-logs.md). This is also important to document correct handling of Joiner/Mover/Leaver-Processes.

[💵 Cost Management](../cost-management/readme.md) 

- The [Authorization Concept](./authorization-concept.md) should ensure that non-technical project stakeholders have enough access to cost reporting capabilities, without requiring technical access to cloud resources.

[🛠 Service Ecosystem](../service-ecosystem/readme.md) 

- Cloud Foundation teams should evaluate how they can leverage existing permissions and IAM concepts to also grant teams access to internal services via an [Internal Service Marketplace](../service-ecosystem/internal-service-marketplace.md).

## Designing a Multi-Cloud IAM Strategy

Especially when considering a multi-cloud scenario, cloud foundation teams need to design an identity and access management strategy that they can implement consistently across all cloud platforms. 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>The Cloud Identity and Access Management Guide for 2021</CtaHeader>
  <CtaText>Take a look into the IAM Guide 2021 for a comprehensive guide to Cloud Identity and Access Management.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/19/the-cloud-identity-and-access-management-guide-for-2021/">Read the IAM Guide</CtaButton>
</CallToAction>

## Stakeholders to Involve for Multi-Cloud Tenant Management

Cloud Foundation teams should have team members with first-party expertise of the organization’s existing IAM infrastructure and the established compliance processes. These can be “liaison officers” to the Enterprise IAM teams that already exist in most organization. This helps the cloud foundation team build a [Federated Identity and Authentication](./federated-identity-and-authentication.md) architecture for all cloud platforms that is already aligned with the central IAM team. 

Cloud Foundation teams should also involve legal or compliance stakeholders to review data security concerns. IAM systems naturally deal with personally-identifiable information (PII) that is subject to high regulatory attention and scrutiny, e.g. through the EU GDPR.

Building a cloud IAM architectures on the “green grass” without considering existing systems, and, depending on the industry even regulatory requirements, can quickly stall an organization’s cloud journey. Since IAM is so fundamental to enabling using of the cloud, any mistakes in the decisions here proof very costly to change and reconcile later. This is why a strong alignment with Enterprise IAM teams and their compliance advisors is so important.