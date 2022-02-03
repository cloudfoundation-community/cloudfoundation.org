---
id: e063e4d2-81f4-4bb8-ac7a-7424ba882161
url: >-
  https://www.notion.so/Chargeback-via-consumption-cost-allocation-e063e4d281f44bb8ac7a7424ba882161
title: Chargeback via consumption cost allocation
category: 💵 Cost Management
layout: CFMMBlock
properties:
  pillar: 💵 Cost Management
  enables:
    - 02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6
    - d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - cd162600-e742-4a80-b022-989da423ca43
  scope: ☁️ Platform
  summary: >-
    Cloud tenant owners are transparently charged for the resource consumption
    as it is charged from the cloud provider.
  tool-implementations: []
  name: Chargeback via consumption cost allocation
---

Pay-per-use is an essential cornerstone of the cloud computing paradigm. It helps balance the freedom to allocate resources dynamically and at any time with an incentive mechanism for consumers to only allocate resources they actually need. 

## Why You Should Implement Chargeback via Consumption Cost Allocation

Traditionally, many organizations tried to leverage simplified cost allocations for IT infrastructure. These simplified models typically pool IT infrastructure cost and then distribute it between consumers on a pooling factor basis. Many organizations break down this split on a business unit or division level only, making it difficult to track the individual resource consumption of an IT system.

It’s also important to consider how often this cost allocation and chargeback happens. Most IT controlling departments implement shared cost or pooling models on a “ex post” basis, simply accumulating and then distributing all the cost incurred in a quarter or financial year. Product owners responsible for IT systems thus have a slow feedback loop about the actual resource consumption and cost their systems incur. And more often than not, the engineers actually making resource allocation decisions never get to see these cost reports and thus have little incentive to actually optimize a systems resource usage.

Subjecting cloud cost to a traditional shared cost allocation cancels many benefits of cloud computing. Most importantly, it disables the key incentive for teams to leverage the cloud’s technical scaling capabilities to optimize resource consumption. 

## How to Implement Cloud Cost Allocation

### Establish Proper Tenant Management

Cloud providers make consumption data available on a tenant level. With proper tenant management you should have established a [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) that includes basic cost allocation data like cost centers. This information from your tenant database will make it it easy to split up the cloud provider’s bill to cost centers, without requiring any additional effort like applying billing tags to cloud resources.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Next Level Cloud Cost Management</CtaHeader>
  <CtaText>Track costs and split bills no matter the complexity of large multi-cloud architectures.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/finops/">Free Whitepaper</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Learn more</CtaButton>
</CallToAction>

### Summarize Consumption Data in Your Chargeback Statements

It’s important that your customers understand what exactly they are being charged for. This visibility into consumption data is important to keep all stakeholders in the loop. For example, it’s common that managers do not find the time to look into raw consumption data on the cloud consoles every month. However, having summarized consumption data included in their IT chargeback statement provides a transparent feedback loop and keeps them aware of the cloud consumption under their responsibility.

Public cloud platforms offer APIs to import consumption data, e.g. AWS Cost Explorer API, Azure Cost Management API, or GCP Billing Exports in BigQuery. For private clouds, look into a metering solution and see how [Private Cloud pay-per-use chargeback](/maturity-model/cost-management/private-cloud-pay-per-use-chargeback.md) can work.

### Consider Full Cost Allocation

Chargeback via consumption cost allocation is only the first step towards establishing cloud cost transparency and accountability. Consumption data on its own does not include additional overhead that your organization incurs for managing the cloud, e.g. provider management, security, and compliance as well as the cost of conducting the chargeback process itself. To also include these costs, consider implementing [Chargeback at full cost allocation](/maturity-model/cost-management/chargeback-at-full-cost-allocation.md).