---
id: ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9
url: >-
  https://www.notion.so/Self-Service-Multi-Cloud-Tenant-Database-ab10bed170d547cfb3cd4a4448bdb9a9
title: Self-Service Multi-Cloud Tenant Database
description: >-
  Application teams can register, update and remove tenant metadata in a central
  multi-cloud tenant database in self service.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - b875ac41-2b38-4ce4-ab8b-76ddd876d789
  recommended: []
  scope: 🏢 Core
  tool-implementations:
    - e2123339-0641-4d44-b774-32ce23fd634d
    - 334eb216-fa16-4946-9fe5-8f66bb7fc3fa
  name: Self-Service Multi-Cloud Tenant Database
---

Organizations embarking on their cloud journey often start implementing a first cloud platform or provider, later followed by a second (see [Approaches to building a Cloud Foundation](../../understanding-cloud-foundation/approaches-to-building-a-cloud-foundation.md)). As the organization’s cloud strategy evolves towards embracing a multi-cloud approach, individual “platform silos” make it difficult to establish visibility and control over the organization’s multi-cloud adoption.

The lack of a central cloud tenant database makes it difficult to establish a consistent level of governance across multiple cloud providers and platform technologies. There is also a lot of redundant effort for data integration with each platform’s cloud tenant database, especially when considering capabilities like [Link Cloud Tenants to CMDB/EAM](./link-cloud-tenants-to-cmdbeam.md) or [Multi-Cloud Tagging Policy](../security-and-compliance/multi-cloud-tagging-policy.md).

### Empowering Application Teams with Self-Service

Cloud foundation teams supporting multi-cloud strategies typically also start experiencing growing pains serving a growing number of application teams. As you onboard more and more teams, maintaining up to date metadata about each cloud tenant (see [Cloud Tenant Database](./cloud-tenant-database.md) for more details) becomes a daunting task. For example, one key piece of information you want to store in a cloud tenant database is the security contact responsible for the tenant. This is the technical person that you will contact about any incidents or security issues detected for that cloud tenant. It’s critical that this contact information is always up to date so that your organization is capable of reacting quickly to security incidents (see [Incident Management Process](../security-and-compliance/incident-management-process.md)).

> **💡** Self-service enables the cloud foundation team to shift the responsibility for maintaining up to date tenant metadata to application teams.

Unfortunately, application teams can decide at any point to change the responsibilities within their team. Chances are, they won’t inform the cloud foundation team about this change. Even if they do, it’s a manual step for the cloud foundation team to update the information in the tenant database. All of this back-and-forth to maintain up to date metadata is not very efficient for application teams either.

## Best Practices for Building a Self-Service Multi-Cloud Tenant Database

Here’s a set of best practices to consider to implement a multi-cloud tenant database that serves both the needs of the Cloud Foundation Team as well as application teams.

### Standardize Tenant Management Processes across Platforms

If your organization has historically managed cloud platforms as separate silos, chances are high that platform teams have implemented processes like [Tenant Provisioning](./tenant-provisioning.md), [Tenant Deprovisioning / Decommissioning](./tenant-deprovisioning-decommissioning.md)  or [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) individually. When building a multi-cloud tenant database, you will also have to consider how to align these processes across clouds so they can be integrated with a single multi-cloud tenant database. A natural next step in this process could be implementing the building block [Multi-cloud tenant database integrated with lifecycle management](./multi-cloud-tenant-database-integrated-with-lifecycle-management.md). 

Creating this alignment between different platform implementations and functional stakeholders (IAM, Compliance, Finance) can be challenging. Establishing a Cloud Foundation team empowered with a clear-cut mission is the best approach to overcome these challenges.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Start your Multi-Cloud Journey</CtaHeader>
  <CtaText>Implementing a multi-cloud strategy has its pitfalls. Read these 6 tips to start your multi-cloud journey.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/03/04/6-things-to-watch-out-for-when-starting-your-cloud-journey/">Start your Cloud Journey</CtaButton>
</CallToAction>

### Design Authorization Concept around Responsibilities

Managers responsible for multiple IT systems should be able to edit the metadata for these IT systems only.  This establishes clear responsibilities and ensures that data quality is maintained at a high level

### Notify Stakeholders about Missing Metadata

When your metadata schema evolves, for example by including a new field, this data will be initially missing from the majority of your existing cloud tenants. Your tenant database should thus have a process to contact your application teams and ask them to fill out the additional metadata.

### Provide an Administrative Interface

While self-service will free up a lot of time for the cloud foundation team, there will be exceptions to the regular process. Having an administrative interface to override tenant data is thus a useful capability for your cloud foundation team. It’s also useful in case your cloud foundation starts out with a manual cloud onboarding process and there’s certain metadata that your team needs to vet and authoritatively enter into the system before accepting a new customer. Your team can later consider automating some of these manual vetting processes with a [Guided Cloud Onboarding](../security-and-compliance/guided-cloud-onboarding.md) process.

### Maintain a Cloud Service Register to Meet Regulatory Requirements

Industry-specific regulation can require your organization to maintain a register of all cloud outsourcing activities. A multi-cloud tenant database can help meet these requirements. One example of this is the “Cloud Service Register” in the financial industry as recommended by the European Banking Authority’s [Recommendations on Cloud Outsourcing](https://www.eba.europa.eu/sites/default/documents/files/documents/10180/2170121/5fa5cdde-3219-4e95-946d-0c0d05494362/Final%20draft%20Recommendations%20on%20Cloud%20Outsourcing%20%28EBA-Rec-2017-03%29.pdf?retry=1).