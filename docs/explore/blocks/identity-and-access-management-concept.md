---
id: 37862f9f-3d8a-4e25-8e90-e487dc455b0c
url: >-
  https://www.notion.so/Identity-and-Access-Management-Concept-37862f9f3d8a4e258e90e487dc455b0c
title: Identity and Access Management Concept
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🔐 IAM
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

Identity and Access Management is at the core of managing trust in the cloud. Authentication and Authorization based on identities replace mechanisms from the private data center era such as trust-based on host IP.

An Identity and Access Management concept is a document that describes your Identity and Access Management architecture for future reference.

Here are core questions you will have to keep in mind while working on an Identity and Access Management concept:

- What is your source of identities?

- How do identities flow from the source to other systems? [Federated Identity and Authentication](/explore/blocks/federated-identity-and-authentication.md) 

- How do you ensure Joiner / Mover / Leaver processes are supported in different parts of your IAM landscape? [Identity Lifecycle Management](/explore/blocks/identity-lifecycle-management.md)

- What documentation around access rights needs to happen. Documentation of access rights is a common requirement for companies in the finance or healthcare industries.

- What level of separation will you have between different applications?

- What guidelines do you have for teams migrating to the cloud? What guidelines should teams starting in the cloud follow?

- How do you keep a central overview over access permissions when there are multiple clouds involved?

- How does a cloud-native, self-service approach fit together with the control requirements your organization has?

- Are there distinctions between identities (normal users versus admin users versus technical users)? If yes, these distinctions must be laid out in the Identity and Access Management concept.



Azure

After setting up your AAD, an important question is on how to map demand for cloud resources to the Azure resource hierarchy.

[https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/](https://www.meshcloud.io/modeling-your-organizational-hierarchy-on-azure/)



GCP

For GCP the recommendation is to map applications that want to use the cloud to projects. See [https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/](https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/)



AWS

AWS accounts = applications that want to use the cloud. See [https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/](https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/)



[ ] Headlines