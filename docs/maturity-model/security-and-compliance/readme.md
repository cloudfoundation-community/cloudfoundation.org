---
id: 321cc809-0eec-477f-8f75-6d39da0c8b1a
url: https://www.notion.so/Security-Compliance-321cc8090eec477f8f756d39da0c8b1a
title: 🔖 Security & Compliance
description: >-
  Provide capabilities for governing workloads and enforcing security guidelines
  across all available cloud platforms and services.
category: Pillar
pageType: CFMMPillar
sidebar: false
properties:
  short-name: Compliance
---

Ensuring security and compliance of IT systems is among the biggest concerns of organizations adopting a multi-cloud strategy. Leveraging cloud service provides with public cloud platforms is a form of outsourcing that requires oversight by a retained organization - and the cloud foundation team is best positioned to fulfill this need. This includes ensuring that workloads running on the cloud platform are managed and secured in accordance with the organization’s internal standards and policies.

However, Cloud Foundation teams cannot absorb *all* responsibilities of building and running secure systems. After all they cannot possibly forsee all the use cases and applications that internal cloud customers will built atop the cloud’s infrastructure. It’s therefore inevitable that the cloud foundation team has to provide a clear [Shared Responsibility Model](./shared-responsibility-model.md) that defines its responsibilities between the cloud service provider and the organization’s internal cloud customers. 

> **💡** It’s helpful to apply the same considerations to private cloud platforms as well and not treat them as “safe by default”. They require a similar split in responsibilities between platform teams and internal cloud customers.

## Key Activities for Multi-Cloud Security & Compliance

Multi-Cloud Security & Compliance involves the following key activities and capabilities 

- Establish a clear [Shared Responsibility Model](./shared-responsibility-model.md) for all cloud platforms. 

- Establish a security baseline leveraging cloud capabilities like [Resource Policies - Blacklisting](./resource-policies-blacklisting.md) and [Centralized audit logs](./centralized-audit-logs.md) 

- Depending on the scope and scale of the cloud foundation, having multiple [Cloud Zones](./cloud-zones.md) can help offering “zones” with different sets of responsibility shares

- Establish a [Multi-Cloud Tagging Policy](./multi-cloud-tagging-policy.md) serving the needs of all cloud foundation stakeholders and processes

- Providing compliance capabilities like supporting an [Incident Management Process](./incident-management-process.md) powered by [Automated Security Scanning](./automated-security-scanning.md)

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Security & Compliance pillar has several important links to other cloud foundation capabilities

[🗂 Tenant Management](../tenant-management/readme.md) 

- [Cloud Tenant Tagging](./cloud-tenant-tagging.md) helps provide essential metadata for security & compliance processes directly in the cloud platform

- [Link Cloud Tenants to CMDB/EAM](../tenant-management/link-cloud-tenants-to-cmdbeam.md) can often enable extending existing security & compliance processes to cloud tenants

[🔐 IAM](../iam/readme.md) 

- The scope of permissions granted to internal cloud customers as part of an [Authorization Concept](../iam/authorization-concept.md) should reflect the responsibility split defined in the [Shared Responsibility Model](./shared-responsibility-model.md)  

[💵 Cost Management](../cost-management/readme.md) 

- Compliance considerations can also extend into cost management, for example [Budget Approval Process](../cost-management/budget-approval-process.md) or [Billing to different legal entities](../cost-management/billing-to-different-legal-entities.md)

[🛠 Service Ecosystem](../service-ecosystem/readme.md) 

- Centrally managed and secured services provided by the cloud foundation team can help raise and organization’s cloud security posture, for example by centralizing risky services like [Virtual Network Service](../service-ecosystem/virtual-network-service.md) with [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) or [Managed Internet Egress](../service-ecosystem/managed-internet-egress.md) 

## Designing a Multi-Cloud Security & Compliance Strategy

Especially when considering a multi-cloud scenario, cloud foundation teams need to design a security & compliance strategy that enables consistently securing workloads across all cloud platforms. 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Multi-Cloud Security and Compliance: The Comprehensive Guide 2021</CtaHeader>
  <CtaText>Take a look into the Security Guide 2021 for more insights on building an effective multi-cloud security & compliance strategy.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/05/19/multi-cloud-security-and-compliance/">Read the Security & Compliance Guide</CtaButton>
</CallToAction>

## Key Stakeholders for Multi-Cloud Security & Compliance

Cloud Foundation teams need to cover the spectrum of knowledge about the organization’s security & compliance guidelines all the way to the technical implementation capabilities in different cloud platforms. Inter-disciplinary teams comprising information security specialists, enterprise architects and platform specialists are best positioned to define and automate security baselines that are compatible with both, compliance requirements and real-world- application requirements.

Cloud Foundation teams should pay special attention to strategically leveraging automation opportunities. Very often this allows automating security controls with technical measures, instead of requiring internal cloud customers to implement individual solutions based on organizational measures.