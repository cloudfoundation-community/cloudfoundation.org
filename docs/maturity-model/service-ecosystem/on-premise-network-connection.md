---
id: 2468d240-6cca-4680-b9c4-6f237defa511
url: >-
  https://www.notion.so/On-Premise-Network-Connection-2468d2406cca4680b9c46f237defa511
title: On-Premise Network Connection
description: >-
  Provides managed IP (L3) connectivity to on-premises networks. This is
  commonly implemented using hub&spoke network architectures and a combination
  of VPNs or private network peerings.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
  scope: 🛬 Landing Zone
  tool-implementations:
    - c688eecf-0335-4505-bdcb-bc6f6da28c63
    - 9cd1dd44-526e-4b3f-9969-8f9a94c187cb
    - 484e4f98-d1ce-41c2-8b2b-46ed1874d487
    - 8b36655b-1387-4bf2-b8ef-29826a349bb9
    - 8dea89f0-ab7e-4043-9e71-ad7a0232e64b
  name: On-Premise Network Connection
---

TODO: describe IPAM integration



A key challenge with On-Premise network connections is to make them scale

1. shared vm and vm based NAT system; load balancer inside VPC

    1. cloud foundation maintains NAT

1. multiple shared VPC with [VPC peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html);

    1.  cloud foundation maintains subnets and VPC for customer projects

1. completely isolated VPCs and projects

    1. [private service connect](https://cloud.google.com/vpc/docs/private-service-connect)/virtual private connect; consume them even if you do not

1. don't do onprem; use internet with API gateway

