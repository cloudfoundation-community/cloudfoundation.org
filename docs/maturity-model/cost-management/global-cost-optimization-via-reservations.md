---
id: b6b24f70-3fba-4f67-a375-2b0d26a16324
url: >-
  https://www.notion.so/Global-Cost-Optimization-via-Reservations-b6b24f703fba4f67a3752b0d26a16324
title: Global Cost Optimization via Reservations
description: >-
  Cloud providers offer different programs offering lower pay-per-use rates in
  exchange for making spend or resource reservation commitments (e.g. reserved
  instances). Centrally plan resource demand to take advantage of cost
  optimization opportunities offered by cloud providers. 
category: 💵 Cost Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
  recommended: []
  scope: ☁️ Platform
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

> **💡** Resource performance reservations are very workload specific and thus best implemented as [Individual Project Cost Optimization via Reservations](./individual-project-cost-optimization-via-reservations.md). 

## Proven Patterns for Implementing Global Cloud Cost Optimizations

When implementing a cloud cost optimization strategy, it’s important that cloud foundation teams adopt an iterative approach. Cloud cost optimization requires planning and effort. Different measures will have a different return on investment in terms of the cloud foundation team’s effort. A good guideline is therefore to implement measures with high impact and low effort first before moving on to measures with more effort and less savings potential. Cost optimization has diminishing returns.

### Control Access to Reservation and Commitment Programmes

The first consideration is that the ability to create reservations and commitments, sometimes even programatically through an API, can quickly hold the organization liable for hundreds of thousands to millions of dollars to the cloud provider. The landing zone should therefore tightly control who in the organization can make these reservations, e.g. by denying access to the APIs via [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md) or not granting the required permissions via the [Identity and Access Management Alignment](../iam/identity-and-access-management-alignment.md).

Typically, organizations have compliance rules on spend thresholds that can be approved by each level of management. Centralizing spend decisions to the cloud foundation team is therefore a valid and easy approach to ensure compliance.. 

### Leverage Cloud Provider’s Cost Optimization Tools

A key advantage of implementing cost optimization globally on the organization level is that the cloud foundation team can much more accurately identify base-load demands that are shared across the whole organization. For example, a web application may need to scale up during the day time, while a batch job runs only at night. If both applications can use the same type of virtual machine instances, the cloud foundation team can identify the opportunity to purchase a reservation for those instances, whereas each application team individually would not.

The cloud providers have added more and more capabilities to detect these optimization, e.g. with tools like [AWS Reservation Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ri-recommendations.html) and GCPs various [cost recommender services](https://cloud.google.com/recommender/docs/recommenders). These tools can not only identify opportunities for purchasing resources more efficiently with reservations, but can also identify idle workloads and give right-sizing recommendations.

### Combine with Individual Project Cost Optimization

Depending on the organizational philosophy (cf. [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md)) Cloud Foundation teams should also consider [Individual Project Cost Optimization via Reservations](./individual-project-cost-optimization-via-reservations.md).  While global cost optimization can spot optimization opportunities across the whole enterprise, individual projects often times have better local information about their workloads. For example, a team may be spinning up a new large database cluster that makes up a majority of their cloud spend. They already know that this cluster is going to be always-on base-load and can therefore buy a reservation right away. Review the [Individual Project Cost Optimization via Reservations](./individual-project-cost-optimization-via-reservations.md) building block for more information.

