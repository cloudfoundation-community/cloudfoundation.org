---
id: 37862f9f-3d8a-4e25-8e90-e487dc455b0c
url: >-
  https://www.notion.so/Identity-and-Access-Management-Alignment-37862f9f3d8a4e258e90e487dc455b0c
title: Identity and Access Management Alignment
description: >-
  Establish and align processes for governing identities and access permissions
  across cloud platforms with the responsible IAM stakeholders of the
  organization.
category: 🔐 IAM
pageType: CFMMBlock
properties:
  enables:
    - 1afea746-da65-4164-9029-5e0bfa9432b1
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - b4678790-ab53-4219-83e7-fbde18383d05
    - 456f15f2-299e-4a8b-a8c9-cb0580a887d2
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  scope: 🏢 Core
  tool-implementations: []
  name: Identity and Access Management Alignment
---

Identity and Access Management is essential to use any cloud platform. Even though every cloud platform has a unique IAM system, it’s important that Cloud Foundation Teams establish a consistent set of requirements minimum standards for integrating existing Enterprise IAM processes and systems with cloud platforms.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Easy Management of Roles, Users and Permissions</CtaHeader>
  <CtaText>Managing Identities is at the core of managing trust in the cloud. Doing so requires an airtight concept - especially for the growing complexity of multi-cloud environments.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/19/the-cloud-identity-and-access-management-guide-for-2021/">Learn more</CtaButton>
</CallToAction>

The cloud foundation team should align these requirements early with relevant IAM stakeholders in the organization. You can typically find them by locating the team responsible for your organization’s Active Directory and asking for their stakeholders. This helps gain an overview of relevant organizational and technical requirements and prevent costly complexity increases due to inconsistent platform integrations. 

Once your team has established and aligned Identity and Access Management processes, the cloud foundation team can proceed implementing concrete IAM capabilities for cloud platforms and landing zones like

- [Federated Identity and Authentication](./federated-identity-and-authentication.md) 

- [Privileged Access Management](./privileged-access-management.md) 

- [Resource Authorization Management](./resource-authorization-management.md) 

- [Service Account Management](./service-account-management.md) 

## Establish an Identity and Access Management Concept 

An Identity and Access Management Concept is a document that describes your Identity and Access Management architecture for future reference. An important distinction is IAM for humans vs. IAM for workload. Making this distinction in the Identity and Access Management Concept enables a focused discussion of one topic at a time.

#### Core Questions

- What is your source of identities? 

- How do identities flow from the source to other systems? (See [Federated Identity and Authentication](./federated-identity-and-authentication.md))

- What level of separation will you have between different applications?

- How do you keep a central overview over access permissions when there are multiple clouds involved?

#### Specific Questions on IAM for Humans

An Identity and Access Management Concept needs to answer the following questions:

- How do you ensure Joiner / Mover / Leaver processes are supported in different parts of your Identity and Access Management landscape? (See [Identity Lifecycle Management](./identity-lifecycle-management.md))

- How does a cloud-native, self-service approach fit together with the control requirements your organization has? 

- Are there distinctions between identities (normal users versus admin users)? If yes, these distinctions must be laid out in the Identity and Access Management Concept. (See [Privileged Access Management](./privileged-access-management.md) )

- The public cloud providers have [Resource Hierarchy](../tenant-management/resource-hierarchy.md) that allow inheriting permissions. Carefully crafting permission inheritance is a proven way of staying in control of access rights.  he design of your resource hierarchies must be taken into account for the Identity and Access Management Concept.

#### Specific Questions on IAM for Cloud Resources

An Identity and Access Management Concept needs to answer the following questions:

- What documentation around access rights needs to happen? Documentation of access rights is a common requirement for companies in the finance or healthcare industries.

- How does a cloud-native, self-service approach fit together with the control requirements your organization has? (See [Service Account Management](./service-account-management.md) )

- What guidelines do you have for teams migrating to the cloud? What guidelines should teams starting in the cloud follow (e.g. zero trust)?