---
id: cf125421-fd90-4bff-a4c6-f7c994a14591
url: >-
  https://www.notion.so/API-Gateway-to-on-premises-APIs-cf125421fd904bffa4c6f7c994a14591
title: API Gateway to on-premises APIs
description: >-
  Provide managed API (L7) connectivity to APIs running in on-premise
  environments.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  tool-implementations: []
  name: API Gateway to on-premises APIs
---

This building block can be built in various ways, and is thus related

- A central HTTP reverse proxy that sits in a hub (see [On-Premise Network Connection](./on-premise-network-connection.md)). Consuming subscriptions access this proxy via [Tenant to Tenant Transit Networks](./tenant-to-tenant-transit-networks.md)).

- An API Gateway solution, optionally running on the internet. Customers rely on L7 security to connect. Usually requires [Managed Internet Egress](./managed-internet-egress.md). 