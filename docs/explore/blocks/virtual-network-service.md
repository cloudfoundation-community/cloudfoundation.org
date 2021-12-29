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

## Why a virtual network service?

A virtual network allows resources within to communicate with other resources. The other resources may be within the same virtual network, but could also be on an on-premise or on the internet. All cloud resources need a virtual network, which makes a virtual network service essential.

A virtual network service provides virtual networks to DevOps teams.

A virtual network service has two inputs:

- a cloud tenant for the virtual network

- an IP address range, often in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)

A virtual network service creates the virtual network in the cloud tenant. If necessary it registers the IP address range in the organization's IP address management tool (IPAM) thus taking the burden of doing so from DevOps teams.

Given the security implications, networking services must be provided centrally for most Cloud Zones. (See [Cloud Zones](/explore/blocks/cloud-zones.md) ) The virtual network service forms the basis for the networking offering.

## Proven pattern when implementing virtual network services

### Align with your [Shared Responsibility Model](/explore/blocks/shared-responsibility-model.md) 

Organizations should strive to make  applications go full cloud-native on networking (L7, APIs) or provide strongly centralized services (L3 networking like on-prem) .

### Embrace cloud paradigm shift

On-prem used L3 connectivity and often no authN/Z on application layer, cloud moves this to L7. Network zones are the most difficult to implement as they have a lot of shared responsibilities and interfaces.

### Shift your view on networking

On-prem networks are mostly flat, whereas in the cloud we can do micro-segmentations and networks become very hierarchical with DevOps teams having a lot of autonomy over their subnets

### Provide it as a Landing Zone module

Virtual network services can be modules for Modular Landing Zones (see [Modular Landing Zones](/explore/blocks/modular-landing-zones.md) ).

### Make it compatible with adjacent services

Virtual networks are most useful in combination with

- Firewall rules

- External IP addresses

- DNS entries

Most applications need to connect to resources outside the virtual network than their own. The following services need a virtual network as input:

- [On-Premise Network Connection](/explore/blocks/on-premise-network-connection.md) 

- [Tenant to Tenant Transit Networks](/explore/blocks/tenant-to-tenant-transit-networks.md) 

- [Cloud to Cloud interconnects](/explore/blocks/cloud-to-cloud-interconnects.md) 

- [Managed Internet Egress](/explore/blocks/managed-internet-egress.md) 

