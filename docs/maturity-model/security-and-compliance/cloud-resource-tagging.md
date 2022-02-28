---
id: 344b75a4-595b-4ba5-8851-ddfb6d4acf7c
url: https://www.notion.so/Cloud-Resource-Tagging-344b75a4595b4ba58851ddfb6d4acf7c
title: Cloud Resource Tagging
description: >-
  Cloud resources are tagged using a consistent tagging strategy to facilitate
  security and compliance processes for cloud workloads.
category: 🔖 Security & Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Security & Compliance
  enables:
    - 707c41b8-6da0-4e78-b982-fa4b1365521b
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations:
    - acf452d3-8425-41e2-ba8b-ee212a6fb189
  name: Cloud Resource Tagging
---

A tag is a label assigned to a cloud resource to apply custom metadata. Almost anything in a cloud [Resource Hierarchy](/maturity-model/tenant-management/resource-hierarchy.md) is taggable - from the cloud tenant on the top level down to single resources like virtual machines and databases. 

> **💡** **Tag early, tag often** - at the highest possible layer in the resource hierarchy. Review the building block [Cloud Tenant Tagging](/maturity-model/security-and-compliance/cloud-tenant-tagging.md) for an introduction to the concept of tagging and general considerations specific to leveraging tagging to build a solid cloud foundation.

This building block will focus on the specifics of tagging cloud resources.

Cloud Foundation teams can tag resources with information relevant to security and compliance processes.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Make your Cloud Security a Priority</CtaHeader>
  <CtaText>One central advantage of using the cloud is rapid scalability. <b>Tag early - tag often </b> to keep track of what is going on in your cloud infrastructure while it is constantly growing and changing.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/">Learn more</CtaButton>
</CallToAction>

## Best Practices for Cloud Resource Tagging

In addition to the concerns and best practices about cloud tagging already laid out in [Cloud Tenant Tagging](/maturity-model/security-and-compliance/cloud-tenant-tagging.md), the following best practices apply specifically to cloud resource tagging.

### Hold Customers Accountable for Resource Tagging 

It’s difficult for the cloud foundation team to anticipate what kind of cloud resources internal customers want to deploy and how they will deploy them. The responsibility for tagging them correctly must consequently reside with internal cloud customers. Cloud Foundation teams should thus set clear expectations, for example by defining and communicating a tag catalog or cloud tagging policy.

Automated enforcement of these policies is partially possible. For example, if your cloud foundation team wants to ensure that all cloud resources storing personally identifiable information (PII) are tagged accordingly, you can enforce a policy on common data storage resources such as Azure Storage Account or S3 Buckets to only allow creation of those resources when they contain a `data-classification:pii` or `data-classification:other` tag. Cloud Foundation teams can also audit the correct use of tags using [Automated Security Scanning](/maturity-model/security-and-compliance/automated-security-scanning.md) tools.

### Avoid Chargeback via Resource Tagging

In contrast to a lot of published advice around the use of cloud resource tagging, the cloud foundation maturity model recommends avoiding resource tagging for chargeback.

> **⚠️** **Cloud chargeback based on resource tagging is an anti-pattern** that’s often used to cover up a lack of proper tenant isolation and unclear responsibilities. Cloud Foundation teams should ensure  [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md) is not a bottleneck for internal cloud customers and implement [Chargeback via consumption cost allocation](/maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md) on the cloud tenant level.

As with every rule, there are also valid exceptions for leveraging cloud resource tagging to process chargeback.

- Service Providers can use resource tagging to implement [Consumption based pay-per-use for internal Services](/maturity-model/cost-management/consumption-based-pay-per-use-for-internal-services.md), e.g. tagging cloud resources used by a service-consumer and charging back the incurred cost

- Cloud Tenants used to host lift&shift workloads as part of [Cloud Zones](/maturity-model/security-and-compliance/cloud-zones.md) for traditionally “non-cloud” workloads often avoid effort to re-architect application deployments by co-locating resources consumed by different internal customers in the same cloud tenant (e.g. VMs on the same virtual network used by different IT Systems)

Leveraging resource tagging for chargeback requires solid automation to detect untagged or incorrectly tagged resources.  

### Align Cloud Resource Tagging across Multiple Clouds

Cloud resource tagging is a platform-zone-scoped building block in the cloud foundation maturity model. Cloud Foundation teams following a multi-cloud strategy should look into [Multi-Cloud Tagging Policy](/maturity-model/security-and-compliance/multi-cloud-tagging-policy.md) to implement consistent tagging across all cloud platforms. This becomes especially critical when the cloud foundation team wants to centralize security and compliance capabilities like [Incident Management Process](/maturity-model/security-and-compliance/incident-management-process.md). 

