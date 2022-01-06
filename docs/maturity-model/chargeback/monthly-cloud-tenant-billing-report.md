---
id: cd162600-e742-4a80-b022-989da423ca43
url: >-
  https://www.notion.so/Monthly-cloud-tenant-billing-report-cd162600e7424a80b022989da423ca43
title: Monthly cloud tenant billing report
category: 💵 Chargeback
layout: CFMMBlock
properties:
  pillar: 💵 Chargeback
  enables:
    - 02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6
    - 28740e92-5559-4931-ab04-17cfb026edd5
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Tenant owners can view a monthly cloud tenant billing report listing all
    incurred charges for cloud resource consumption.
  tool-implementations: []
  name: Monthly cloud tenant billing report
---

## What is a cloud tenant billing report?

A cloud tenant billing report makes cloud consumption transparent to DevOps teams. Accessing cloud tenant billing reports monthly ensures that DevOps teams are aware of their impact on resource costs.

## Why is monthly cloud tenant billing reporting important?

All organizations that are successfully using the cloud share a cloud-native mindset . The DevOps teams in these organizations use the properties of the cloud to their advantage. An important aspect is pay-per-use pricing which encourages to keep an eye on resource usage. Therefore pay-per-use pricing aligns incentives. With monthly cloud tenant billing reports, DevOps teams have a closed feedback loop: Improve the application efficiency and see the costs go down.

## Proven patterns when building monthly cloud tenant billing report

### Cover all cloud platforms

A cloud without billing is not a cloud. Public cloud providers offer great cloud tenant billing reports, satisfying the needs of most DevOps teams. Historically many private cloud technologies lack the capabilities and the operating model/mindset did not call for billing. However embracing multi-cloud should strongly look at billing private cloud, too. (See [Private Cloud pay-per-use pricing](/maturity-model/chargeback/private-cloud-pay-per-use-pricing.md) )

### Unify tenant billing reports across clouds

The interfaces and billing data formats are different for every cloud provider. Providing a cost view across clouds is only possible after unifying data from all different sources (see [Monthly cloud project billing report](/maturity-model/chargeback/monthly-cloud-project-billing-report.md) ).

Furthermore, building chargeback capabilities also depends on building a common billing data view across clouds (see [Chargeback via consumption cost allocation](/maturity-model/chargeback/chargeback-via-consumption-cost-allocation.md) ) and managing global IT spend.

The fine granular data of each cloud can still be used for individual cost optimization (we have separate building blocks for those as well). However, having that unified chargeback process is really important. Lots of organizations run into problems “trying to run before walking”, e.g. trying to do [Global Cost Optimization via Reservations](/maturity-model/chargeback/global-cost-optimization-via-reservations.md)