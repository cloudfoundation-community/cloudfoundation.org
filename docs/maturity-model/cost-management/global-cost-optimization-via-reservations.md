---
id: b6b24f70-3fba-4f67-a375-2b0d26a16324
url: >-
  https://www.notion.so/Global-Cost-Optimization-via-Reservations-b6b24f703fba4f67a3752b0d26a16324
title: Global Cost Optimization via Reservations
category: 💵 Cost Management
layout: CFMMBlock
properties:
  pillar: 💵 Cost Management
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Cloud providers offer different programs offering lower pay-per-use rates in
    exchange for making spend or resource reservation commitments (e.g. reserved
    instances). Centrally plan resource demand to take advantage of cost
    optimization opportunities offered by cloud providers. 
  tool-implementations: []
  name: Global Cost Optimization via Reservations
---

As an organization grows its consumption of cloud services, optimizing cloud spend becomes a powerful lever to reduce IT cost. One of the easiest methods to optimize cloud spend is to take advantage of commercial terms offered by cloud providers that allow exchanging a commitment of resource consumption for reduced rates. When calculating these commitments correctly, organizations can achieve cost savings instantaneously without any technical implementations or vendor negotiations.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Cloud Cost Management Guide</CtaHeader>
  <CtaText>Review this comprehensive multi-cloud cost management guide.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Multi-Cloud Cost Management Guide</CtaButton>
</CallToAction>

## What Are Cloud Resource Reservations

In the cloud foundation maturity model, we use the term “reservations” to describe any type of commercial agreement that offers reduced rate it exchange for some sort of reservation of cloud resources.

### Why Cloud Providers Offer Reduced Rates for Reservations

On-demand scaling is a cornerstone of cloud computing. By sharing infrastructure across many customers and different types of workloads, cloud providers can achieve very high utilization of their infrastructure. When customers take advantage of elastically scaling their workloads and the scaling patterns are not too closely correlated, cloud providers with a large number of customers can achieve an higher average utilization of their infrastructure compared to the utilization every customer could achieve when running their own dedicated infrastructure.

High utilization enables higher operational efficiency as well as accelerating the amortization of capital expenditures required to deliver cloud services (e.g. building data centers and buying hardware). 

As much as cloud providers benefit from elastic workloads, uncertainty about future resource consumption makes capacity planning difficult and risky. Cloud providers thus charge a considerable premium for “on demand” services that can be scaled up or down instantaneously. When customers reserve cloud resources, the cloud provider gains certainty about future consumption and can plan its investments accordingly. By reducing the rates for reserved resources, cloud providers incentivize their customers to participate in capacity planning.

### What Type of Reservation Options Do Cloud Providers Offer? 

At the most basic level, cloud providers offer commitment options based on **global financial spend** across the organization. Examples of these programs are Microsoft Enterprise Agreement or AWS Enterprise Discount Program. Organizations that plan to spend considerable amounts of money with a cloud provider (typically in the range of millions of USD/EUR) can negotiate good discounts this way. 

**Resource reservations** reserve a specific type of cloud resource, often also tied to a specific service region. Examples of these are

- AWS Reserved Instances and Savings Plans

- GCP Committed Use Discounts

- Azure Reserved Virtual Machine Instances

**Resource performance reservations** guarantee specific levels of resource performance, e.g. provisioned IOPS.

> **💡** Resource performance reservations are very workload specific and thus best implemented as [Individual Project Cost Optimization via Reservations](/maturity-model/cost-management/individual-project-cost-optimization-via-reservations.md). 

## Implementation

Cloud Foundation teams should consider implementing this building block before looking into  [Individual Project Cost Optimization via Reservations](/maturity-model/cost-management/individual-project-cost-optimization-via-reservations.md). However, depending on the organizational philosophy (cf. [Shared Responsibility Model](/maturity-model/security-and-compliance/shared-responsibility-model.md)) Cloud Foundation teams can also consider implementing only one or both capabilities.



