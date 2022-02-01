---
id: cd162600-e742-4a80-b022-989da423ca43
url: >-
  https://www.notion.so/Monthly-cloud-tenant-billing-report-cd162600e7424a80b022989da423ca43
title: Monthly cloud tenant billing report
category: 💵 Cost Management
layout: CFMMBlock
properties:
  pillar: 💵 Cost Management
  enables:
    - 28740e92-5559-4931-ab04-17cfb026edd5
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Tenant owners can view a monthly cloud tenant billing report listing all
    incurred charges for cloud resource consumption.
  tool-implementations:
    - 635ebffa-17e9-4231-9d38-b59625be9b03
  name: Monthly cloud tenant billing report
---

## What is a cloud tenant billing report?

A cloud tenant billing report makes cloud consumption transparent to DevOps teams. Accessing cloud tenant billing reports monthly ensures that DevOps teams are aware of their impact on resource costs.    

## Why is monthly cloud tenant billing reporting important?

All organizations that are successfully using the cloud share a cloud-native mindset. The DevOps teams in these organizations use the properties of the cloud to their advantage. An important aspect is pay-per-use pricing which encourages to keep an eye on resource usage. This is especially critical when organizations aim to implement FinOps (Cloud Financial Management) practices with the goal to bring financial accountability to the pay-per-use model of the cloud. Pay-per-use pricing aligns incentives. It enables DevOps teams to take ownership of their cloud usage. With monthly cloud tenant billing reports, they have a closed feedback loop: Improve the application efficiency and see the costs go down.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Next Level Cloud Cost Management</CtaHeader>
  <CtaText>Track costs and split bills no matter the complexity of large multi-cloud architectures.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/finops/">Free Whitepaper</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Learn more</CtaButton>
</CallToAction>

## Proven patterns when building monthly cloud tenant billing report

### Cover all cloud platforms

A cloud without billing is not a cloud. Public cloud providers offer great cloud tenant billing reports, satisfying the needs of most DevOps teams. Historically many private cloud technologies lack the capabilities and the operating model/mindset did not call for billing. However embracing multi-cloud should strongly look at billing private cloud, too. See [Private Cloud pay-per-use chargeback](/maturity-model/cost-management/private-cloud-pay-per-use-chargeback.md) for more details.

### Automate billing reports

Cloud Foundation teams that want to generate billing reports on a monthly basis for different cloud platforms have to aim for a high degree of automation across the entire process. The cost of manual steps in the process typically becomes prohibitive once a cloud foundation team scales beyond serving a handful of customers. 

Automation of this process offers further avenues, like providing billing previews more frequently (e.g. hourly). This provides tight feedback loops to engineering teams actively scaling their systems up and down.

### Unify tenant billing reports across clouds

The interfaces and billing data formats are different for every cloud provider. Providing a cost view across clouds is only possible after unifying data from all different sources (see [Monthly cloud project billing report](/maturity-model/cost-management/monthly-cloud-project-billing-report.md)).

Furthermore, building chargeback capabilities also depends on building a common billing data view across clouds (see [Chargeback via consumption cost allocation](/maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md)) and managing global IT spend.

The fine granular data of each cloud can still be used for individual cost optimization (we have separate building blocks for those as well). However, having that unified chargeback process is really important. Lots of organizations run into problems “trying to run before walking”, e.g. trying to do [Global Cost Optimization via Reservations](/maturity-model/cost-management/global-cost-optimization-via-reservations.md)