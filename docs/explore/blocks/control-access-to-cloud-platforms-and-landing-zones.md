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
  tool-implementations: []
  name: Control access to cloud platforms and Landing Zones
---



What do we describe here?

- governance compliance consumption of Landing Zones - cloud templates

- defining several security baselines for different use cases

- gaining back control while still severing all needs of the DevOps teams



What kind of pain does the the reader has?

- restrict the usage of certain Landing Zones depending use case, stage approvals etc.

- fast provisioning independent of the restriction level



What kind of Information regarding this topic is relevant for the user?

- best practice and whats observable in the industry



This should be the goal the reader want to achieve?

- showing the possibility of managing various control access to landing zones



What are the pitfalls we currently know of?

- over engineering of the implementation concept

- all landing zones share the same base line with the highest security restrictions instead of an appropriate level



How can we help a reader to reach the automated access to cloud platforms depending on their Landing Zone / Zone Model other restriction?

- Using meta information

- guide how to approach and realize the zone concept



Can I give the user any best practice or example?

- simple control access like consumption Landing Zones of specific environments, departments - or any other meta data

- complex control access depending on the use case, criticality of information, cloud model etc.



Call to action:

- collie for inventory of current Cloud Accounts with some information

- white paper for meta information management

- white paper about landing zones



<!-- unsupported block type: column_list -->

<!-- unsupported block type: column -->

## AWS

In AWS meta information can be tagged on either the Organisational (account) or on an resource level.

<!-- unsupported block type: column -->

## Azure

In Azure meta information can be tagged on resources and subscriptions.

<!-- unsupported block type: column -->

## GCP

In GCP meta information can be tagged as labels on resources and projects.

