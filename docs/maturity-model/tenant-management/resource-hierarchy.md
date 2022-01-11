---
id: ac8a21c3-f692-4d23-a9bb-796fd311c39f
url: https://www.notion.so/Resource-Hierarchy-ac8a21c3f6924d23a9bb796fd311c39f
title: Resource Hierarchy
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  summary: >-
    Definition of a cloud resource hierarchy that facilitates tenant isolation
    and policy enforcement. Cloud tenants are deliberately placed in this
    resource hierarchy when tenants are provisioned.
  tool-implementations: []
  name: Resource Hierarchy
---

[https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/management-group-and-subscription-organization](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/management-group-and-subscription-organization) has many good design guidelines. Most importantly

**Design recommendations:**

- Keep the management group hierarchy reasonably flat, with no more than three to four levels ideally. This restriction reduces management
overhead and complexity.

- Avoid duplicating your organizational structure into a deeply
nested management group hierarchy. Management groups should be used for
policy assignment versus billing purposes. This approach necessitates
using management groups for their intended purpose in enterprise-scale
architecture, which is providing Azure policies for workloads that
require the same type of security and compliance under the same
management group level.



<!-- could not resolve mentioned page e872fb6f-6b6b-442f-9664-45322f8b86b4 --> 



We have a Whitepaper [https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/](https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/)