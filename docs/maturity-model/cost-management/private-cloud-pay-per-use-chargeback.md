---
id: 02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6
url: >-
  https://www.notion.so/Private-Cloud-pay-per-use-chargeback-02e4de2c7e1e4dd9aa76b58a88f04ff6
title: Private Cloud pay-per-use chargeback
description: >-
  Resource consumption on multi-tenant private cloud platforms such as
  OpenStack, Cloud Foundry or OpenShift is billed according to a pay-per-use
  pricing model.
category: 💵 Cost Management
layout: CFMMBlock
properties:
  pillar: 💵 Cost Management
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
  scope: ☁️ Platform
  summary: >-
    Resource consumption on multi-tenant private cloud platforms such as
    OpenStack, Cloud Foundry or OpenShift is billed according to a pay-per-use
    pricing model.
  tool-implementations:
    - c7b3902e-6708-4b0e-9e43-776f863baa3e
  name: Private Cloud pay-per-use chargeback
---

As outlined in the building block [Chargeback via consumption cost allocation](/maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md), pay-per-use is an essential cornerstone of cloud computing. It helps balance the freedom to allocate resources dynamically and at any time with an incentive mechanism for consumers to only allocate resources they actually need. When offering private cloud platforms such as OpenStack, Cloud Foundry or multi-tenant Kubernetes clusters such as OpenShift, organizations should implement a pay-per-use model for these platforms. 

## Why you should implement private cloud chargeback using pay-per-use 

Organizations seeking to successfully implement a hybrid cloud strategy want to offer private and public cloud services to their teams. While public cloud vendors offer their services exclusively in a pay-per-use model, private cloud platforms often operate in an on-premise IT environment full of legacy processes like shared cost models.

A key challenge with shared cost models is that they treat IT infrastructure as a cost center and chargeback on an “at cost” basis only. This mindset stifles innovation because it does not incentivize IT to develop and improve infrastructure services unless there’s a budgeted order from “the business”. This pressures IT into a reactive mindset, instead of enabling new services with a proactive attitude towards innovation. 

> **💡** A **cost center** is only responsible for its contribution to the organization’s cost, while a **profit center** is responsible for cost and profit. 

Subjecting a private cloud to traditional shared cost allocation cancels many benefits of cloud computing. Most importantly, it disables the key incentive for teams to leverage the cloud’s technical scaling capabilities to optimize resource consumption. Private cloud platforms thus often fail to meet the goals set out like cost savings due to higher resource utilization.

The most successful implementations of a private cloud operate with a public cloud mindset. This means treating the private cloud as a profit center, offering internal customers the best quality of service in a convincing commercial package

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Next Level Cloud Cost Management</CtaHeader>
  <CtaText>Track costs and split bills no matter the complexity of large multi-cloud architectures.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/finops/">Free Whitepaper</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Learn more</CtaButton>
</CallToAction>

## How to implement Private Cloud Pay-per-use Pricing

Now that we covered the motivation for using a pay-per-use cost model to chargeback private cloud consumption, this section looks at key considerations for successfully implementing such a pricing model.

### Automate private Cloud Metering and Chargeback

In order to provide cost feedback loops to all IT system stakeholders (responsible product owners, engineers), cost reports must be available on a frequent basis. It’s a best practice to provide [Monthly cloud tenant billing report](/maturity-model/cost-management/monthly-cloud-tenant-billing-report.md)s with fine granular listings of the individual resources consumed. While considerably more work than an annual cost split based on a pooling factor, proper tooling can automate the entire process of metering resource consumption, applying a pricing model and generating monthly billing reports. See the [Monthly cloud tenant billing report](/maturity-model/cost-management/monthly-cloud-tenant-billing-report.md) building block for more details.

### Build a private cloud pricing model

A key consideration for building a successful private cloud pricing model is setting pricing up front. This is a big shift from the “ex post” model of shared cost allocation and requires a profit-center mindset.

To arrive at a private cloud pricing model, organizations should study the public cloud market for typical pricing models. For example, most public cloud providers charge IaaS services by vCPU, RAM, storage and network traffic, while most PaaS services only charge for RAM. In the next step, the platform team needs to calculate its own cost for building (e.g. CAPEX for hardware) and running (e.g. OPEX for staff) the cloud platform. When factoring in the expected usage of the platform, platform teams can arrive at a pricing model that will allow them to break even quickly given a successful uptake of its offering within the organization.

#### Example: Calculating a pricing model for an OpenShift cluster 

This section presents an example calculation of a pricing model for an OpenShift Cluster. The cluster has been running for a while already, so there’s confidence in the actual cost incurred.

> **💡** The example assumes the OpenShift cluster is running on a public cloud provider. This makes it very easy to determine the actual cost for running the cluster’s infrastructure. If we’d be looking at a cluster running on a private IaaS cloud instead, it may be necessary to establish a pay-per-use pricing model for the IaaS layer as well.

1. Collect the cluster’s infrastructure resource consumption. A good starting point is the IaaS bill for all resources consumed by the cluster. To this resource consumption, add the expected operational overhead (e.g. for operations staff).

1. Collect resource consumption within the cluster. A good starting for OpenShift is to collect the consumed CPU and RAM per namespace.

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

    > **💡** Start with a simple model of the most important resource consumption drivers first. While it may be more accurate to also include additional factors such as storage (persistent volumes) and network resources (Ingress/Egress, IPs), these can make implementing a pricing model more complex. It’s better to start out simple and refine, rather than not starting at all because the model isn’t perfect.

1. Most private cloud platforms consume a certain amount of their own resources for running the platform. In our Kubernetes / OpenShift example, filter out shared namespaces hosting system components like `openshift-logging`.  Now calculate the sum of your customer’s resource consumption.

    > **💡** If you do not have resource consumption data yet, make reasonable estimates based on the expected adoption of the cloud platform in your organization.

    <!-- included database f6d47d09-c8fa-42d2-86c0-e6f54d23c3b5 -->
    | Name         | Usage Amount |
    | ------------ | ------------ |
    | CPU in CPU-h | 56000        |
    | RAM in GiB-h | 61000        |

1. Divide the infrastructure and operational cost from step 1 by the consumption in step 3 so that 

    ```plain text
    Resource Cost: 100.000$
    weight CPU: 50%
    weight RAM: 50%
    
    CPU-h price = Resource Cost * weight / total CPU-h 
      = 100.000$ * 50% / 56.000 
      = 0.89$ / CPU-h
    
    GiB-h price = Resource Cost * weight / total GiB-h 
      = 100.000$ * 50% / 61.000 
      = 0.82$ / GiB-h
    ```

    