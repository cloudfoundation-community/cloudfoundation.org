---
id: b875ac41-2b38-4ce4-ab8b-76ddd876d789
url: https://www.notion.so/Cloud-Tenant-Database-b875ac412b384ce4ab8b76ddd876d789
title: Cloud Tenant Database
description: >-
  A central database provides information about cloud tenants using a unified
  schema. The database records essential metadata like the responsible owner of
  the tenant and a cost center for chargeback.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - e7d63253-2e39-4bbf-9dd6-da11bb3edd0d
    - ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9
    - 64284b14-faab-461c-80bb-5e8efbae4dcc
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  recommended:
    - 52d1e517-9d07-4acc-8c59-17526fa3af9d
  scope: ☁️ Platform
  tool-implementations:
    - 3481641d-0686-420d-8487-794acd4f5e04
    - e2123339-0641-4d44-b774-32ce23fd634d
  name: Cloud Tenant Database
---

When an organization with many IT systems sets out to adopting the cloud, it’s a best practice to separate each system into an isolated cloud tenant. Managing cloud tenants for more than a handful of IT systems quickly becomes a mess without the appropriate structure in place. A cloud tenant database is an essential capability for building a solid [🗂 Tenant Management](./readme.md) pillar of your cloud foundation.

## Why Build a Cloud Tenant Database?

A cloud tenant database provides clear responsibilities and accountability. Both are crucial to empowering engineering teams with freedom on the cloud. 

To ensure accountability, organizations must at all times maintain key information about the cloud tenants they own:

- **What** is running in this cloud tenant? Is it a productive workload? What are its security characteristics (e.g. works with confidential data?)

- **Who** is responsible for this cloud tenant? Who is the point of contact for security incidents? Who bears the cost? Who has access to it?

- **Where** is the cloud tenant? How is it uniquely identified?

There are many different ways to implement a cloud tenant database. Many cloud foundation teams start by maintaining their metadata directly in the cloud platform using cloud tenant tags.

> **💡** While  [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md)  is a valid way to implement a cloud tenant database, tagging often provides an insufficient solution to capture all relevant information due to technical limitations (amount of tags, data types, data length).

 In the cloud foundation maturity model, we therefore consider a tenant database and [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) separate capabilities.

## Proven Patterns When Building a Cloud Tenant Database

<!--notion-markdown-cms:raw-->
<CallToAction>
	<CtaHeader>Cloud Tenant Management Guide</CtaHeader>
	<CtaText>Learn more about the organizational needs driving cloud tenant database requirements in the "Cloud Tenant Management Guide - what you need to know in 2021" guide.</CtaText>
	<CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn More</CtaButton>
</CallToAction>

### Integrate with the Provisioning Process

In the early days of an organization’s cloud journey, cloud foundation teams may be tempted to just create and hand out new tenants on an ad-hoc basis. Especially when the team has not yet established a formal [Tenant Provisioning](./tenant-provisioning.md) process, these tenants may not be recorded in a cloud tenant database. Catching up on this mistake as soon as the cloud foundation scales to managing more than a handful of tenants, foundation teams find themselves painfully chasing after customers to enquire missing metadata. 

At this point, many organizations learn the downsides of the initial freedom they gave away:  abandoned cloud workloads that still incur significant charges, unclear ownership of security incidents, and unresponsive customers that impede their ability to iterate on the cloud foundation.

### Consider a Consistent Multi-Cloud Tenant Database

The “Cloud Tenant Database” building block looks at the platform scope, i.e. building a cloud tenant database for a single cloud platform only. As your organizations adopts a multi-cloud strategy, cloud foundation teams should consider the broader challenge of building a [Self-Service Multi-Cloud Tenant Database](./self-service-multi-cloud-tenant-database.md)  as early as possible. This can save duplicate efforts between platform teams and avoid integration challenges due to inconsistent metadata schemas for different cloud platforms.

### Plan for Automating Your Cloud Tenant Database

While a simple database like an Excel workbook on SharePoint is a much better start than going without a cloud tenant database, most cloud foundation teams will quickly outgrow the limitations of a home-grown solution. As the number of tenants grows, foundation teams will find the need to evolve the schema of metadata captured in their cloud tenant database. The cloud foundation team can also quickly become a bottleneck for updating metadata like changing ownership of an IT system, changing cost centers, etc.

Adopting a collaborative approach for maintaining the metadata together with their customers can solve these challenges. Cloud Foundation teams should thus look into the [Self-Service Multi-Cloud Tenant Database](./self-service-multi-cloud-tenant-database.md) or even better, [Multi-cloud tenant database integrated with lifecycle management](./multi-cloud-tenant-database-integrated-with-lifecycle-management.md) capability, as a key building block for that next stage of their cloud journey.

### Integrate with Other Information Repositories

Most organizations already maintain metadata about IT systems, e.g. in Enterprise Architecture Management (EAM) Systems or a Configuration Management Database (CMDB). Cloud Foundation teams should thus consider also implementing the building block [Link Cloud Tenants to CMDB/EAM](./link-cloud-tenants-to-cmdbeam.md). In many instances, this can be a simpler solution compared to manually maintaining duplicates in different systems.

## Common Metadata to Capture about Each Cloud Tenant

Based on the recommendation and best practices above, here’s a list of the most common fields associated with each cloud tenant. This list is of course not exhaustive or prescriptive, but you can use it as 

- `Tenant Id` AWS Account Number, GCP Project Id, ...

- `Environment` the environment (otherwise known as ‘stage’) the tenant is used for. Usually, this is documented in at least three possible flavors: a “development”, “test”, and “production” environment. Make sure that a tenant is only used for one environment.

- `IT System Id` this can be a unique identifier describing your IT system, e.g. in a CMDB or EAM system

- `Security Contact` the person responsible for the security of the workload running in this cloud tenant. This is the cloud foundation team’s point of contact for any security incidents detected in this tenant, e.g. to send alerts from [Resource Configuration Scanning](../security-and-compliance/resource-configuration-scanning.md).

- `Organizational Contact` the person organizationally responsible for the cloud tenant. This could be the manager of the team working with the cloud tenant.

- `Business Unit` and `Department` responsible for this cloud tenant. There is typically an implied relation to the Organizational Contact.

- `Data Classification` the sensitivity or confidentiality of the data that the IT system is working with in this cloud tenant. This is usually based on a classification according to an existing risk management system, e.g. “internal”, or “confidential”.

- `Cost Center` or other chargeback related information

- `Budget` even though cloud is pay per use, setting up cost alerts to prevent unexpectedly high cloud bills (bill-shock) is a common task of cloud foundation teams