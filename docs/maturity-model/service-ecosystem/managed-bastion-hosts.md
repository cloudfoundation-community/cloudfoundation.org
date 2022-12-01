---
id: 6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9
url: https://www.notion.so/Managed-bastion-hosts-6c9827e973b249f5bfb53fe23fd5b9e9
title: Managed bastion hosts
description: >-
  Application teams can use a managed service to access resources on private
  cloud networks using managed bastion hosts or gateway services. These gateways
  are hardened and centrally audited.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations: []
  name: Managed bastion hosts
---

There’s two main implementation strategies for building bastion hosts

- leveraging cloud-native services like [Azure Bastion](https://learn.microsoft.com/en-us/azure/bastion/bastion-overview) by pre-configuring them to integrate with your landing zone’s network infrastructure (see [Virtual Network Service](./virtual-network-service.md))

- building a custom bastion host, possibly on top of an already existing [Virtual Machine Service](./virtual-machine-service.md) and with PAM software components on top like [boundary](https://www.boundaryproject.io) or CyberArk

