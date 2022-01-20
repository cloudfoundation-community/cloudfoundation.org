---
id: cf125421-fd90-4bff-a4c6-f7c994a14591
url: >-
  https://www.notion.so/API-Gateway-to-on-premises-APIs-cf125421fd904bffa4c6f7c994a14591
title: API Gateway to on-premises APIs
category: 🛠 Service Ecosystem
layout: CFMMBlock
properties:
  pillar: 🛠 Service Ecosystem
  enables: []
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  summary: >-
    Provide managed API (L7) connectivity to APIs running in on-premise
    environments.
  tool-implementations: []
  name: API Gateway to on-premises APIs
---

This building block can be built in various ways, and is thus related

- A central HTTP reverse proxy that sits in a hub (see [On-Premise Network Connection](/maturity-model/service-ecosystem/on-premise-network-connection.md) ). Consuming subscriptions access this proxy via [Tenant to Tenant Transit Networks](/maturity-model/service-ecosystem/tenant-to-tenant-transit-networks.md) ).

- An API Gateway solution, optionally running on the internet. Customers rely on L7 security to connect. Usually requires [Managed Internet Egress](/maturity-model/service-ecosystem/managed-internet-egress.md) .