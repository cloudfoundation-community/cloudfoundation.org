---
id: 02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6
url: >-
  https://www.notion.so/Private-Cloud-pay-per-use-pricing-02e4de2c7e1e4dd9aa76b58a88f04ff6
title: Private Cloud pay-per-use pricing
category: Blocks
layout: CFMMBlock
properties:
  cluster: 💵 Chargeback
  enables: []
  journey-stage: ⭐️
  depends-on:
    - cd162600-e742-4a80-b022-989da423ca43
  scope: ☁️ Platform
  summary: >-
    Resource consumption on private cloud platforms such as OpenStack, Cloud
    Foundry or OpenShift (when used as a multi-tenant platform) is billed
    according to a pay-per-use pricing model.
  tool-implementations:
    - c7b3902e-6708-4b0e-9e43-776f863baa3e
  name: Private Cloud pay-per-use pricing
---

Pay-per-use is an essential pillar of cloud computing. The freedom to allocate resources dynamically and at any time must be balanced by an incentive mechanism that helps ensure consumers only allocate the actually needed resources. Internal billing on a pay-per-use model achieves this.

Not doing a pay-per-use pricing model such as shared cost, or fixed cost contributions lead down a path of treating a cloud platform in a "non-cloud" way - just like with other legacy IT infrastructure. This throws many of the benefits of cloud out of the window. Private cloud platforms thus often fail to meet the goals set out (e.g. cost savings due to higher resource utilization are not attained when customers can free-ride on the platform → "eh-da-kosten")



Common methods to arrive at pricing models

- study the public cloud market for typical pricing models (e.g. charge per vCPU, RAM, storage for IaaS, charge by RAM for PaaS)

- calculate prices according to CAPEX/OPEX cost of the cloud platform and expected usage



Requires a profit-center mindset



#### How to arrive at a pricing model for an OpenShift cluster running on a public cloud provider

1. Collect usage data for the cluster for a month. A good starting point is to collect consumed CPU, RAM per namespace.

    <!-- included database 2416694f-cb53-41e8-99f2-a9f8fb5b9b04 -->
    | Namespace                | Usage Amount | Usage Type   |
    | ------------------------ | ------------ | ------------ |
    | customer-b               | 33000        | RAM in GiB-h |
    | customer-a               | 28000        | RAM in GiB-h |
    | openshift-kube-apiserver | 1800         | RAM in GiB-h |
    | openshift-logging        | 50000        | RAM in GiB-h |
    | customer-b               | 19000        | CPU in CPU-h |
    | openshift-logging        | 6500         | CPU in CPU-h |
    | openshift-kube-apiserver | 1500         | CPU in CPU-h |
    | customer-a               | 37000        | CPU in CPU-h |

1. Filter out shared namespaces that should not end up in cost allocations to specific customers. Calculate the sum for each Usage Type.

    <!-- included database f6d47d09-c8fa-42d2-86c0-e6f54d23c3b5 -->
    | Name         | Usage Amount |
    | ------------ | ------------ |
    | CPU in CPU-h | 56000        |
    | RAM in GiB-h | 61000        |

1. Collect total costs of operating the cluster on the public cloud.

    **Example operating cost** : 100000 US-$

1. 