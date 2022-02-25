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
layout: CFMMBlock
properties:
  pillar: 🛠 Service Ecosystem
  enables: []
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
  scope: 🛬 Landing Zone
  summary: >-
    Provides managed IP (L3) connectivity to on-premises networks. This is
    commonly implemented using hub&spoke network architectures and a combination
    of VPNs or private network peerings.
  tool-implementations: []
  name: On-Premise Network Connection
---

TODO: describe IPAM integration



A key challenge with On-Premise network connections is to make them scale



1. shared vm and vm based nat system; load balancer inside vpc

    1. cf would maintain nat

1. multiple shared vpc with vpc peering;

    1. subnets and vpc for customer projects would be handled by cloud foundation

1. completely isolated vpcs and projects

    1. private service connect/virtual private connect; consume them even if you do not

1. don't do onprem; do the internet with API gateway