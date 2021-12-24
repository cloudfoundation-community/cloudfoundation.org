---
id: 2be4d7d1-4109-406b-a4f7-da6c566123fd
url: https://www.notion.so/Virtual-Network-Service-2be4d7d14109406ba4f7da6c566123fd
title: Virtual Network Service
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🌍 Networking
  enables:
    - f90c7375-88b9-42dc-8e98-a65c006b927a
    - 2468d240-6cca-4680-b9c4-6f237defa511
    - 6e343acc-95bd-42aa-bb32-bdcce1c7d4ad
    - a31e4077-4e84-4129-a46c-1070a8591181
    - 6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  summary: >-
    A virtual network service provides a pre-configured virtual network. It is a
    pre-requisite for higher-level services built on virtual networks.
  tool-implementations: []
  name: Virtual Network Service
---

## What is a virtual network?

A virtual network allows resources within to communicate with other resources. The other resources may be within the same virtual network, but could also be on an on-premise or on the internet.

Most cloud resources need a virtual network, which makes a virtual network service important for cloud foundations.

## What is a virtual network service?

A virtual network service provides virtual networks to DevOps teams. The virtual network service has two inputs:

- a cloud tenant for the virtual network

- an IP address range, often in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)

The virtual network service registers the IP address range in the organization's IP address management tool (IPAM) and creates the virtual network in the cloud tenant.

## Best practices around virtual network services

Given the security implications, networking services must be provided centrally. The virtual network service forms the basis for the networking offering.

Virtual networks are most useful in combination with

- Firewall rules

- External IP addresses

- DNS entries

Most applications need to connect to resources outside the virtual network than their own. The following services need a virtual network as input:

- [On-Premise Network Connection](/explore/blocks/on-premise-network-connection.md) 

- [Tenant to Tenant Transit Networks](/explore/blocks/tenant-to-tenant-transit-networks.md) 

- [Cloud to Cloud interconnects](/explore/blocks/cloud-to-cloud-interconnects.md) 

- [Managed Internet Egress](/explore/blocks/managed-internet-egress.md) 

