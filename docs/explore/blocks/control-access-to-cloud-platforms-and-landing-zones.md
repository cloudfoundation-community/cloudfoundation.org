---
id: e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
url: >-
  https://www.notion.so/Control-access-to-cloud-platforms-and-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2
title: Control access to cloud platforms and Landing Zones
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🔖 Compliance
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

## How to manage cloud platform access

Serving DevOps team standardized cloud resources in self-service depending on pre-defined parameters helps to increase control while decreasing manual effort for managing provisioning, maintaining and governance various deployment scenarios.

The Cloud Foundation teams want to cover more use cases for the usage of cloud resources without neglecting compliance or security. Depending on the use cases certain restrictions may be necessary. Usually the restriction of cloud usage and the self-service provisioning contradict each other or forces a decision to gain more control at the cost of slower provisioning process.

Based on governance, compliance and risk multiple templates for cloud provisioning can be defined. The most primary use case differentiation is the definition of an security baseline for various staging environment (e.g. dev, test, qa, prod). The more complex a differentiation between the landing zones are e.g. between departments, risk estimations, type of access etc. the better is an automated mechanism to check the compliance and permission to consume specific cloud templates.

This will help the Cloud Foundation team to have full control for the cloud while still being able to fast and easy provision the DevOps teams cloud resources.

With restriction of the landing zone consumption for certain scenarios (use cases) based on metadata will allow the the fast provisioning while still having the necessary control.



Achieving the automated steering of cloud provisioning based on the metadata it is important to clarify the following questions:

- What are the requirements for the use cases? Define and create Landing Zones according to these requirements for the general defined use cases.

- Depending on which information can I make the decision which landing zone should be applicable for the cloud consumer?

- How could an implementation of the metadata mapping to the landing zones look like? Try to write down a concept for the “Zone Model”

    - Avoid to over-engineer the concept or the technical implementation. Cloud access controls depending on metadata and landing zones can be broken down to very simple problem statements instead of solving a complex structure at once.

> 📖 A short use case scenario to make things a bit more clear:

Cloud Foundation team ABC want to regulate the usage of clouds and landing zones depending based on the teams:
> risk estimate: high, middle, low
> usage of on-premise integration: yes, no

Therefore landing zones for the use cases are defined with these metadata in where the project needs the appropriate metadata risk estimate and on-premise integration to match.



Call to action:

- white paper for meta information management

- white paper about landing zones

## Azure

In Azure metadata can be tagged on resources and subscriptions.

## AWS

In AWS metadata can be tagged on either the Organisational (account) or on an resource level.

## GCP

In GCP metadata can be tagged as labels on resources and projects.

