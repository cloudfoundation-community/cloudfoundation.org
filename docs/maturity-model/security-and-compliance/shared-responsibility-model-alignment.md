---
id: 57c521ba-73a4-4187-a507-bbd5eaa80212
url: >-
  https://www.notion.so/Shared-Responsibility-Model-Alignment-57c521ba73a44187a507bbd5eaa80212
title: Shared Responsibility Model Alignment
description: >-
  Establish and align a shared responsibility model clarifying  responsibilities
  between application teams, the cloud foundation and cloud providers. This
  enables balancing agility and control across the foundation’s offerings.
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - 3c7081e5-c451-40b6-806d-a8d21b130612
    - e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - 119bfca5-dda6-408c-b35d-c59d0f209fcf
    - b6b24f70-3fba-4f67-a375-2b0d26a16324
    - 3c65a957-cb62-40fe-978e-709e3450f7fe
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - af14b5df-77b4-4def-b761-8fadabd241ca
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  recommended: []
  scope: 🏢 Core
  tool-implementations:
    - c596a5f1-dc63-46b6-8d1f-25dcf12ff484
  name: Shared Responsibility Model Alignment
---

Outsourcing responsibility for building and operating infrastructure is a key benefit of working with a cloud computing provider. Since cloud computing is a form of outsourcing however, it requires a clear separation of responsibilities between the provider on one side and the customer on the other. In between the responsibilities clearly owned by the provider, like building and operating datacenters, and the customer, like developing and operating their own applications, lie the shared responsibilities. 

The common known shared responsibility model definition explained by cloud providers like AWS, GCP or Azure are not sufficient to enable a success story for enterprises as it does not take into account customer internal structures and organizations at all. Every successful cloud-native organization has defined an agreed-on holistic shared responsibility model.

The foundation of a well-defined cloud-native organization is the documentation of the shared responsibility model as well as further information for other stakeholders. This is implemented usually in form of a documented internally shared wiki like Confluence.

![image-a225542d-2bd5-434a-a62d-c469db0f453a](./a225542d-2bd5-434a-a62d-c469db0f453a.png)

The minimum participants in a shared responsibility model are the cloud providers and DevOps teams as responsible parties. In practice shared teams - like CCoE (Cloud Center of Excellence), Cloud Foundation, Central IT, or infrastructure teams - are also involved and need to be considered when defining your own organization's shared responsibility model.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Cloud Stakeholder Map</CtaHeader>
  <CtaText>Use a template to understand relevant roles and easily build your own Cloud Stakeholder Map.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/cloudfoundation-stakeholder-map/">Download Template</CtaButton>
</CallToAction>

## Best Practices for Aligning a Shared Responsibility Model

Defining your organization’s shared responsibility model is a challenging task. Not only do you need to involve a lot of different stakeholders, but most organizations also find themselves in the midst of a cultural change from traditional IT processes to embracing a cloud-native mindset. 

### Show, Don’t Tell

Discussing responsibilities on a whiteboard is very different from applying them in the real world. This counts double when most of the stakeholders at the table don’t have first hand experience operating in a cloud-native mindset. For example, your IT Security team may be reluctant to give  application teams freedom to deploy resources on their own, fearing potential security issues. While the IT Security team may be aware that they can enforce policies automatically with [Resource Configuration Policies](./resource-configuration-policies.md), they often lack confidence in these new technologies and their ability to leverage it. This can result in a distorted view of the solution space available to distribute responsibilities between the cloud foundation team, IT security and application teams.

### Divide and Conquer

The demands of application teams considering moving to the cloud are not created equal. From our experience, it’s useful to establish different cloud use cases early on in the cloud journey like Lift & Shift Workloads or Cloud-native workloads and discuss responsibilities for them separately. For each of those use cases the cloud foundation team should consider the typical internal cloud customer

- What type of application does the internal customer want to run? Is it self-developed or a vendor solution?

- What technical skills does the internal customer have? Are they already well-versed in using the cloud or do they need significant hand-holding to get started?

- What operational capabilities does the internal customer have? Can they look after their applications 24/7 or will they need support from a central operations team?

The definition of different use cases simplifies aligning responsibilities by reducing the number of stakeholders involved and eliminating some conflicting interests like cloud-native customers favoring more freedom vs. lift & shift customers demanding a higher level of managed services. These use cases should also inform the design of the Landing Zones provided by the cloud foundation team, e.g. a [Lift & Shift Landing Zone](../tenant-management/lift-and-shift-landing-zone.md), [Cloud-native Landing Zone](../tenant-management/cloud-native-landing-zone.md) or [Container Platform Landing Zone](../tenant-management/container-platform-landing-zone.md).

### Document Responsibilities

Internal cloud customers can only fulfill their responsibilities when they’re aware of them and are equipped with the right skills and knowledge. It’s thus paramount that the cloud foundation team thoroughly documents the results of aligning shared responsibilities between its different stakeholders. This documentation should not only capture “what” was decided but also “why”. One example could be

> We expect internal cloud customers that want to operate server-based software from external software vendors to use a Lift & Shift cloud migration strategy. We assume these cloud customers have little cloud skill and do not want to deploy or maintain virtual machines on the cloud on their one  Our [Lift & Shift Landing Zone](../tenant-management/lift-and-shift-landing-zone.md) will therefore offer a fully managed virtual machine service, comparable to the existing service level for servers provided by central IT on-premise.

### Consider the Cloud Provider SRM

The shared responsibility model by cloud providers like AWS, Azure, or GCP - only shows the model from the external perspective. In general, the models describe the responsibility of the Cloud Provider and the consumer party (you). In short, the model defines a responsibility border based on the service offering:

- The Cloud provider is responsible for the provided infrastructure up to the service or application itself depending on the service offering model - SaaS, PaaS, IaaS

- The Consumer party is responsible from the Operating System to the (virtual) networking up to their own data moving to the cloud depending on the consumed service offering model

The shared responsibility model for your cloud foundation therefore also needs to consider the “consumer party” responsibilities defined by the cloud provider. The cloud foundation team should work together with specialists for each of the cloud providers to clarify  scope, questions, and various other things. Especially of interest to the cloud foundation team is how the shared responsibility provider implements the model for its various services as well as how to secure their cloud for their responsible parts.

The Cloud Foundation team should be the first point of contact in regards to cloud-related topics - therefore it supports other teams (their internal customers) regarding topics like integration of services and platforms. They are the internal anchor point for the cloud journey.

