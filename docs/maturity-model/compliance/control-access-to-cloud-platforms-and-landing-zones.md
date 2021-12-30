---
id: e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
url: >-
  https://www.notion.so/Control-access-to-cloud-platforms-and-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2
title: Control access to cloud platforms and Landing Zones
category: 🔖 Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Compliance
  enables: []
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 707c41b8-6da0-4e78-b982-fa4b1365521b
  scope: 🏢 Core
  summary: >-
    Implement automated policies to steer cloud consumers to appropriate cloud
    platforms and landing zones based on metadata about the cloud consumer.
  tool-implementations:
    - acf452d3-8425-41e2-ba8b-ee212a6fb189
  name: Control access to cloud platforms and Landing Zones
---

## How to manage cloud platform and landing zone access

Serving DevOps team standardized cloud resources in self-service depending on pre-defined parameters helps to increase control while decreasing manual effort for managing provisioning, maintaining and governance various deployment scenarios.

The Cloud Foundation teams want to cover more use cases for the usage of cloud resources without neglecting compliance, security and other requirements. Depending on the use cases certain restrictions or specific requirements may be necessary. Usually the restriction of cloud usage and the self-service provisioning contradict each other or forces a decision to gain more control at the cost of slower provisioning process.

Based on governance, compliance and risk multiple templates for cloud provisioning should be defined. Managing various templates covering different scenarios will reduce the effort for individual implementation or provisioning. The most primary use case differentiation is the definition of an security baseline for various staging environment (e.g. dev, test, QA, prod). The more complex a differentiation between the landing zones are e.g. between departments, risk estimations, type of access etc. the better is an automated mechanism to check the compliance and permission to consume specific cloud templates.

With restriction of the landing zone consumption for certain scenarios (use cases) based on metadata will enable the Cloud Foundation team to have full control of the cloud governance while still being able to fast and easy provision the DevOps teams cloud resources.



It is important to clarify the following questions to achieve the automated steering of cloud provisioning based on the metadata:

- What are the requirements for the use cases? Define and create Landing Zones according to these requirements for the general defined use cases.

- Depending on which information can I make the decision which landing zone should be applicable for the cloud consumer?

- How could an implementation of the metadata mapping to the landing zones look like? Try to write down a concept for the “Zone Model”

    - Avoid to over-engineer the concept or the technical implementation. Cloud access controls depending on metadata and landing zones can be broken down to very simple problem statements instead of solving a complex structure at once.

> 📖 A short use case scenario to make things a bit more clear:

Cloud Foundation team ABC want to regulate the usage of clouds and landing zones depending on the teams:
> risk estimate: high, middle, low
> usage of on-premise integration: yes, no

Therefore landing zones for the use cases are defined with these metadata in where the project needs the appropriate metadata risk estimate and on-premise integration to match.

If the project has a risk estimate of *high* and on-premise integration *no* it should only be able to use landing zones appropriated (security configuration, integration setup etc.) for this use case.

## Challenges

The following challenges needs to be tackled to start with the the metadata based access controls:

- What controls or tools are offered by the cloud provider to enforce policies, apply templates, landing zones or similar for the cloud resources provisioning?

- How can the metadata be synchronised across multiple cloud platforms and cloud resources?



> ✅ Checkout meshcloud’s blog post regarding Cloud Tagging “ **Your Path to a Winning Multi-Cloud Tagging Strategy** ” as an introduction to cloud tagging and its benefits towards your Cloud Governance. [https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/](https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/) 

> ✅ The “Cloud Zone” use case is a practical example for using tags to manage cloud platform and landing zone access. [https://www.meshcloud.io/use-case-cloud-zones/](https://www.meshcloud.io/use-case-cloud-zones/)

## Azure

In Azure metadata can be tagged on resources and subscriptions.

## AWS

In AWS metadata can be tagged on either the Organisational (account) or on an resource level.

## GCP

In GCP metadata can be tagged as labels on resources and projects.

