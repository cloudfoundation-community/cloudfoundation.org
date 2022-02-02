---
id: b875ac41-2b38-4ce4-ab8b-76ddd876d789
url: https://www.notion.so/Cloud-Tenant-Database-b875ac412b384ce4ab8b76ddd876d789
title: Cloud Tenant Database
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables:
    - 11af37b7-c948-4486-a5da-5b1db6de8193
    - 52d1e517-9d07-4acc-8c59-17526fa3af9d
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Maintenance of a database of cloud tenants and associated metadata like
    responsible owners and chargeback information like cost center.
  tool-implementations: []
  name: Cloud Tenant Database
---

When adopting the cloud, it’s a best practice to separate IT systems into isolated cloud tenants.

## Why Build a Cloud Tenant Database?

Managing cloud tenants for more than a handful of IT systems quickly becomes a mess without the appropriate structure in place. A cloud tenant database provides clear responsibilities and accountability. Both are crucial to empowering engineering teams with freedom on the cloud. 

To ensure accountability, organizations must at all times maintain key information about the cloud tenants they own:

- **What** is running in this cloud tenant? Is it a productive workload? What are its security characteristics (e.g. works with confidential data?)

- **Who** is responsible for this cloud tenant? Who is the point of contact for security incidents? Who bears the cost? Who has access to it?

- **Where** is the cloud tenant? How is it uniquely identified?

There are many different ways to implement a cloud tenant database. Many cloud foundation teams start by maintaining it directly in the cloud platform via  [Cloud tenant tagging](/maturity-model/tenant-management/cloud-tenant-tagging.md). While tagging is a valid implementation of a cloud tenant database, tagging often provides an insufficient solution to capture all relevant information (e.g. because tags limit the type and amount of data they can store). In the cloud foundation maturity model, we therefore consider a tenant database and [Cloud tenant tagging](/maturity-model/tenant-management/cloud-tenant-tagging.md) separate capabilities.

<!--notion-markdown-cms:raw-->
<CallToAction>
	<CtaHeader>Capture Key Information with Consistent Cloud Tagging</CtaHeader>
	<CtaText>Understand how to pave your path to a winning multi-cloud tagging strategy.</CtaText>
	<CtaButton class="btn-primary" url=" https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy / ">Tell me how to tag</CtaButton>
</CallToAction>

## Proven Patterns When Building a Cloud Tenant Database

### Integrate with the Provisioning Process

In the early days of an organization’s cloud journey, cloud foundation teams may be tempted to just create and hand out new tenants on an ad-hoc basis. Especially when the team has not yet established a formal [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md) process, these tenants may not be recorded in a cloud tenant database. Catching up on this mistake as soon as the cloud foundation scales to managing more than a handful of tenants, foundation teams find themselves painfully chasing after customers to enquire missing metadata. 

At this point, many organizations learn the downsides of the initial freedom they gave away:  abandoned cloud workloads that still incur significant charges, unclear ownership of security incidents, and unresponsive customers that impede their ability to iterate on the cloud foundation.

### Consider a Consistent Multi-Cloud Tenant Database

The “Cloud Tenant Database” building block looks at the platform scope, i.e. building a cloud tenant database for a single cloud platform only. Since most organizations follow a multi-cloud strategy, cloud foundation teams should consider the broader challenge of building a [Multi-Cloud Tenant Database](/maturity-model/tenant-management/multi-cloud-tenant-database.md) as early as possible. This can save duplicate efforts between platform teams and avoid integration challenges due to inconsistent metadata schemas for different cloud platforms.

### Plan for Automating Your Cloud Tenant Database

While a simple database like an Excel workbook on SharePoint is a much better start than going without a cloud tenant database, most cloud foundation teams will quickly outgrow the limitations of a home-grown solution. As the number of tenants grows, foundation teams will find the need to evolve the schema of metadata captured in their cloud tenant database. The cloud foundation team can also quickly become a bottleneck for updating metadata like changing ownership of an IT system, changing cost centers, etc.

Adopting a collaborative approach for maintaining the metadata together with their customers can solve these challenges. Cloud Foundation teams should thus look into the [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) or even better, [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md) capability, as a key building block for that next stage of their cloud journey.

### Integrate with Other Information Repositories

Most organizations already maintain metadata about IT systems, e.g. in Enterprise Architecture Management (EAM) Systems or a Configuration Management Database (CMDB). Cloud Foundation teams should thus consider also implementing the building block [Link Cloud Tenants to CMDB/EAM](/maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md). In many instances, this can be a simpler solution compared to manually maintaining duplicates in different systems.