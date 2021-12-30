---
id: 37862f9f-3d8a-4e25-8e90-e487dc455b0c
url: >-
  https://www.notion.so/Identity-and-Access-Management-Concept-37862f9f3d8a4e258e90e487dc455b0c
title: Identity and Access Management Concept
category: 🔐 IAM
layout: CFMMBlock
properties:
  pillar: 🔐 IAM
  enables:
    - 1afea746-da65-4164-9029-5e0bfa9432b1
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - b4678790-ab53-4219-83e7-fbde18383d05
    - 456f15f2-299e-4a8b-a8c9-cb0580a887d2
  journey-stage: ⭐️
  depends-on: []
  scope: 🏢 Core
  summary: >-
    Multi-Cloud IAM architecture concept based on federated identities and
    authentication.
  tool-implementations: []
  name: Identity and Access Management Concept
---

## Why do you need an Identity and Access Management Concept?

Identity and Access Management is at the core of managing trust in the cloud. Authentication and Authorization based on identities replace mechanisms from the private data center era such as trust-based on host IP.

An Identity and Access Management Concept is a document that describes your Identity and Access Management architecture for future reference.

An important distinction is IAM for humans vs. IAM for workload. Making this distinction in the Identity and Access Management Concept allows the discussion of one topic at a time.

## What an Identity and Access Management Concept has to cover

#### Core questions

[ ] What is your source of identities?

[ ] How do identities flow from the source to other systems? (See [Federated Identity and Authentication](/maturity-model/iam/federated-identity-and-authentication.md) )

[ ] What level of separation will you have between different applications?

[ ] How do you keep a central overview over access permissions when there are multiple clouds involved?

#### Specific questions on IAM for humans

An Identity and Access Management Concept needs to answer the following questions:

[ ] How do you ensure Joiner / Mover / Leaver processes are supported in different parts of your Identity and Access Management landscape? (See [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md) )

[ ] How does a cloud-native, self-service approach fit together with the control requirements your organization has?

[ ] Are there distinctions between identities (normal users versus admin users)? If yes, these distinctions must be laid out in the Identity and Access Management Concept. (See [Privileged Access Management](/maturity-model/iam/privileged-access-management.md) )

#### Specific questions on IAM for workload

An Identity and Access Management Concept needs to answer the following questions:

[ ] What documentation around access rights needs to happen? Documentation of access rights is a common requirement for companies in the finance or healthcare industries.

[ ] How does a cloud-native, self-service approach fit together with the control requirements your organization has? (See [Service Account Management](/maturity-model/iam/service-account-management.md) )

[ ] What guidelines do you have for teams migrating to the cloud? What guidelines should teams starting in the cloud follow (e.g. zero trust)?

## How to set up resource hierarchy for access management

The public cloud providers have resource hierarchies that allow inheriting permissions. Carefully crafting permission inheritance is a proven way of staying in control of access rights.

The design of your resource hierarchies must be taken into account for the Identity and Access Management Concept.

#### Azure

For Azure, the recommendation is to map applications that want to use the cloud to subscriptions. See

[https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/](https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/)

#### GCP

For GCP, the recommendation is to map applications that want to use the cloud to projects. See [https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/](https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/)

#### AWS

For AWS, the recommendation is to map applications that want to use the cloud to accounts. See [https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/](https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/)
