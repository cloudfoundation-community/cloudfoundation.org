---
id: 57502241-e2f4-4b75-9e33-de39b26a6eb8
url: https://www.notion.so/Cost-Management-57502241e2f44b759e33de39b26a6eb8
title: 💵 Cost Management
description: >-
  Provide cost management and chargeback capabilities for all available cloud
  platforms and services.
category: Pillar
pageType: CFMMPillar
properties:
  short-name: Cost Mgmt.
---

Pay-per-use is an essential cornerstone of the cloud computing paradigm. When deploying and scaling cloud resources is just a single API call away, managing the cost incurred under consumption-based billing is extremely important. Cloud Service Providers typically charge the organization as a single unit under an enterprise contract. Cloud Foundation teams need to process these invoices and allocate the cost to application teams (chargeback). Good cost management practices that leverage the technical capabilities of cloud cost reporting and involve all stakeholders of a cloud foundation are crucial to a successful cloud journey.

## Key Activities in Multi-Cloud Cost Management

The Cost Management pillar of the Cloud Foundation Maturity Model encompasses the following key activities and capabilities

- Ensure that cost-owners and product owners responsible for IT systems have access to [Monthly cloud tenant billing report](./monthly-cloud-tenant-billing-report.md). For public cloud platforms, this is typically easy to implement based on reports provided by the cloud service provider. 

- At a minimum, establish [Chargeback via consumption cost allocation](./chargeback-via-consumption-cost-allocation.md) based on the cost reports provided by cloud platforms. This should also cover [Private Cloud pay-per-use chargeback](./private-cloud-pay-per-use-chargeback.md).

- Standardizing the chargeback process across multiple cloud platforms is important. Establishing the concept of a [Monthly Cloud Project Billing Report](./monthly-cloud-project-billing-report.md) helps abstracting the chargeback process from individual platforms, and also enables [Pay-per-Use for internal Services](./pay-per-use-for-internal-services.md) 

- Leverage cost optimization opportunities, for example by implementing [Global Cost Optimization via Reservations](./global-cost-optimization-via-reservations.md) or delegating it to application teams as [Individual Project Cost Optimization via Reservations](./individual-project-cost-optimization-via-reservations.md)

- Align with stakeholders whether your organization wants to establish [Chargeback at full cost allocation](./chargeback-at-full-cost-allocation.md) that also covers the overhead of providing cloud foundation services

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Cost Management pillar has several important links to other cloud foundation capabilities

[🗂 Tenant Management](../tenant-management/readme.md) 

- Tenant management process needs to provide the required data for chargeback. Usually a [Cloud Tenant Database](../tenant-management/cloud-tenant-database.md) or [Self-Service Multi-Cloud Tenant Database](../tenant-management/self-service-multi-cloud-tenant-database.md)  keeps track of the responsible cost owners and cost-centers for chargeback.

[🔐 IAM](../iam/readme.md) 

- The [Resource Authorization Management](../iam/resource-authorization-management.md) should ensure that non-technical project stakeholders have sufficient access to cost reporting capabilities

[🔖 Security & Compliance](../security-and-compliance/readme.md) 

- Cost Management processes often have a compliance angle to it. For example [Budget Approval Process](./budget-approval-process.md) define budgets, and when application teams overrun them you may want to handle them with an [Incident Management Process](../security-and-compliance/incident-management-process.md).

[🛠 Service Ecosystem](../service-ecosystem/readme.md) 

- Once the cloud foundation team has established a clear chargeback process, extending it to the service ecosystem with [Pay-per-Use for internal Services](./pay-per-use-for-internal-services.md) or chargeback for [3rd party PaaS Service Integration](../service-ecosystem/3rd-party-paas-service-integration.md) is relatively straightforward and helps managing them with a cloud-native mindset.

## Designing a Multi-Cloud Cost Management Strategy

Especially when considering a multi-cloud scenario, cloud foundation teams need to design a security & compliance strategy that enables consistently securing workloads across all cloud platforms. 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Guide to Multi-Cloud Billing and Cost Management</CtaHeader>
  <CtaText>Take a look at the comprehensive multi-cloud cost management guide for more insights on building an effective multi-cloud cost management strategy.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Read the Cost Management Guide</CtaButton>
</CallToAction>

## Key Stakeholders for Multi-Cloud Cost Management

The pay-per-use model for cloud consumption requires highly automated systems to process and chargeback cost, which can vary wildly from month to month. It’s therefore crucial for cloud foundation teams to have the capability to either procure and integrate third-party tooling or build custom automation solutions around cloud platform APIs. 

In any case, the cloud foundation team needs to involve stakeholders from IT finance or controlling very closely. Many organizations find it extremely challenging to adopt internal processes to a pay-per-use paradigm when coming from a “traditional” IT background that views IT as a shared cost center. A strong mandate by the cloud foundation team to build cloud-native processes and a supportive controlling organization that’s running the “backoffice” processes for chargeback (e.g. ERP Systems) is mandatory in these situations.

To gain the required support, Cloud Foundation Teams should seek to include upper management stakeholders like CIOs or CTOs early in the design process for the cost management pillar. One challenge that cloud foundation teams often need to overcome is that upper management is typically not much concerned about cloud costs at the outset of an organization’s cloud adoption. However, a lack of proper discipline and careful maintenance of individual responsibility for cloud cost can quickly lead to cloud costs spiraling out of control once cloud adoption accelerates. Cloud Foundation teams should therefore make their case based on planned cloud spends, for example based on [Budget Approval Process](./budget-approval-process.md) data or negotiated spend commitments made with cloud providers.