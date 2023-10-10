---
id: 2be4d7d1-4109-406b-a4f7-da6c566123fd
url: https://www.notion.so/Virtual-Network-Service-2be4d7d14109406ba4f7da6c566123fd
title: Virtual Network Service
description: >-
  A virtual network service provides a pre-configured virtual network. It is a
  pre-requisite for higher-level services built on virtual networks.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables:
    - f90c7375-88b9-42dc-8e98-a65c006b927a
    - 2468d240-6cca-4680-b9c4-6f237defa511
    - 6e343acc-95bd-42aa-bb32-bdcce1c7d4ad
    - a31e4077-4e84-4129-a46c-1070a8591181
    - 6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on: []
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations:
    - f34c8753-fb41-4341-9d91-351836126962
    - 7e7bdd75-b6f7-4717-b7d6-c083cb1a71f8
    - e5ff3f30-d1b0-4bea-a0a0-cb3a3f1cd6f5
    - bb4aee68-0b2a-4746-98bf-18d200e58b9b
    - d77dc8b6-b1ce-4c6a-a208-dcaf5e485743
    - edf7468a-c867-4038-9e93-7b64f4a4ffcc
    - 2e5dfd35-751d-4562-b723-8e65f4e79408
    - 785eec49-493b-46a6-8540-2237135f0fba
    - b6a3508f-701f-4ce4-99b0-778f25c6c8a4
    - 9b244e63-eb03-454a-a33b-ebb9d90e8137
    - 0337257c-3de3-49c0-b339-eba3222eb9af
  name: Virtual Network Service
---

## Why a Virtual Network Service?

A virtual network allows resources to communicate with other resources. The other resources may be within the same virtual network, but could also be on-premise or on the internet. All cloud resources need a virtual network, which makes a virtual network service essential.

A virtual network service provides virtual networks to application teams. 

A virtual network service has two inputs:

- a cloud tenant for the virtual network

- an IP address range, often in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation), which can either be provided by a Network Engineer or automatically by an IP address management tool (IPAM)

A virtual network service creates the virtual network in the cloud tenant. If necessary it registers the IP address range in the organization's IP address management tool (IPAM) thus taking the burden away from application teams.

Given the security implications, networking services must be provided centrally for most Landing Zones. The virtual network service forms the basis for the networking offering. 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Cloud-native Service Marketplace</CtaHeader>
  <CtaText>Implement enterprise-wide distribution of cloud infrastructure services via a <b>service Marketplace</b>.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/15/cloud-infrastructure-services-enterprise-wide-distribution-via-a-marketplace/">Learn more</CtaButton>
</CallToAction>

## Proven Patterns When Implementing Virtual Network Services

### Implement a Hub & Spoke Approach

Defining a central hub with e.g. configured access to on-prem network is a very common approach for a scalable network architecture. If Cloud Tenants (e.g. Azure Subscriptions) need access to On-Prem, a Spoke network is deployed into the tenant and connects it to the Hub.

### Align with Your [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) 

Organizations should strive to make applications go full cloud-native on networking (L7, APIs) or provide strongly centralized services (L3 networking like on-premise).

### Embrace Cloud Paradigm Shift

On-premise used L3 connectivity and often no authN/Z on the application layer. The cloud moves this to L7. Network zones are the most difficult to implement as they have a lot of shared responsibilities and interfaces.

### Shift Your View on Networking

On-premise networks are mostly flat, whereas in the cloud we can do micro-segmentation and networks become very hierarchical with application teams having a lot of autonomy over their subnets

### Provide It as a Landing Zone Module

Virtual network services can be modules for Modular Landing Zones (see [Modular Landing Zones](../tenant-management/modular-landing-zones.md)).

### Make It Compatible with Adjacent Services

Virtual networks are most useful in combination with

- Firewall rules

- External IP addresses

- DNS entries

Most applications need to connect to resources outside the virtual network than their own. The following services need a virtual network as input: 

- [On-Premise Network Connection](./on-premise-network-connection.md) 

- [Tenant to Tenant Transit Networks](./tenant-to-tenant-transit-networks.md) 

- [Cloud to Cloud interconnects](./cloud-to-cloud-interconnects.md) 

- [Managed Internet Egress](./managed-internet-egress.md) 

Utilizing a Hub and Spoke architecture is a very common choice when working
with Networks. Hub and Spoke can be used to allow traffic between multiple resources. It can connect Virtual Networks to each other or to your On-Premise Networks. Here are the basic steps to create a Hub and Spoke Network

1. Create a Hub Virtual Network that contains services that will be shared across all Spoke Networks. Each Spoke Network will be peered to the Hub by a Gateway connection.

1. Create Spoke Virtual Networks or gather information about your On-Premise networks. Make sure none of the networks are sharing the same CIDR address ranges.

1. Create a connection to allow traffic between a Spoke Network (VNet or On-Premise) and the Hub. Create Route Tables for each Spoke to direct traffic. This will allow traffic to securely flow between Spokes as needed.

The Hub Network can hold resources that can be shared and accessed by the Spoke Networks. Some things that your Hub can handle are gateways to securely connect networks, central location of logs for each Spoke, diagnostics to analyze and alert on events in the logs, load balancers, configuration metadata and a central Firewall to apply policies to all Spokes among other things.

### Azure

Azure has two options for creating a Hub and Spoke Virtual Network Service: **Customer-Managed infrastructure** components or a **Microsoft-Managed infrastructure with Azure VWAN**.

#### Customer**-Managed Infrastructure**

Managing your own Hub and Spoke Network provides some benefits including

- Cost Savings

- Overcoming subscription limits

- Workload isloation

- Can be customized to specific team requirements

You can find detailed information about how Azure handles Hub and Spoke network topology [here](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli)

[Here](https://learn.microsoft.com/en-us/azure/virtual-network-manager/tutorial-create-secured-hub-and-spoke) is information on how to create a Customer Managed Hub and Spoke Network

#### Microsoft-Managed Infrastructure with VWAN

Azure VWAN has benefits as well

- Integrated connectivity solutions in Hub and Spoke

- Automated Spoke setup and configuration

- Intuitive troubleshooting

- Security features maintained by team of Microsoft engineers

- Easy scalability

[Here](https://learn.microsoft.com/en-us/azure/architecture/networking/hub-spoke-vwan-architecture) is more information on what VWAN is, how it works and an overview of how to create a Hub and Spoke design with it

[Here](https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-point-to-site-portal) is information on how to use Azure VWAN to create Point to Site (P2S) connections. This allows users to connect to virtual resources inside of Azure.

### AWS

AWS also offers **Customer-Managed** or **AWS-Managed Infrastructure**. To get started, you can create multiple virtual networks called Virtual Private Clouds (VPCs) that contain EC2 instances, Relational Database Service (RDS) instances or any other number of other services offered by AWS.

#### Customer-Managed Infrastructure

If you want to utilize the **Customer-Managed** approach, you can connect your VPCs using a **Transit Gateway**. Transit Gateway is an AWS service that acts as a network transit hub and connects your AWS Virtual Private Clouds (VPCs) and your on-premises networks.

You can find more information about what a Transit Gateway is and how it works [here](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html)

You can find some best practices when working with Transit Gateway [here](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-best-design-practices.html)

You can follow the guide to setting up a basic Hub and Spoke network using Transit Gateway [here](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-getting-started.html)

#### AWS-Managed Infrastructure

If you want to utilize an **AWS-Managed** network, you can set up **Cloud WAN**. Cloud WAN is a managed service that can be used to build, manage, and monitor a unified global network that connects resources running across your cloud and on-premises environments. The Cloud WAN consists of a **Global Network** with a **Core Network** inside of the Global Network.

A **Global Network** is a single, private network that acts as a high-level container for your network objects. It can contain Transit Gateways and other AWS Cloud WAN Core Networks and can be managed in the Network Manager console.

A **Core Network** is the part of the Global Network managed by AWS and includes Regional Connection Points (VPNs, VPCs, Transit Gateway Connects).

You can find more information about what a Cloud WAN is and how it works [here](https://docs.aws.amazon.com/network-manager/latest/cloudwan/what-is-cloudwan.html#cloudwan-concepts-key)

And you can find information on how to create a Cloud WAN including a Global Network and Core Network [here](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-getting-started.html)

### GCP

GCP offers two options for managing a Hub and Spoke Network Architecture: [VPC Network Peering](https://cloud.google.com/vpc/docs/vpc-peering) and [Cloud VPN](https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

#### VPC Network Peering

VPC Network Peering allows for secure communication between resources over Google’s internal network using private IP addresses. Each spoke VPC network in this architecture has a peering relationship with a central hub VPC network as well as a Cloud NAT Gateway for outbound communication with the internet.

Some of the benefits of VPC Network Peering include

- Lower Network Latency because internal traffic never traverses the
public internet

- Increased Network Security because service owners do not need to have
their services exposed to the public internet

- Lower Network Costs for traffic between networks that are peered and
using internal IP addresses to communicate

There are some constraints when working with VPC Networking Peering. The peering connections between the spoke VPC networks and the hub VPC network don't allow transitive traffic; that is, inter-spoke communication through the hub is not possible. Resources such as GKE private nodes and Cloud SQL instances that have private IP addresses require a proxy for access from outside their VPC network. You are also limited to a maximum of 25 connections to a single VPC instance.

You can find more information about what VPC Network Peering is and how it works [here](https://cloud.google.com/vpc/docs/vpc-peering). You can find information about how to setup and use VPC Network Peering [here](https://cloud.google.com/vpc/docs/using-vpc-peering).

#### Cloud VPN

Cloud VPN allows you to overcome some of the constraints of VPC Network Peering. Cloud VPN allows for traffic to flow between Spokes and does not have a limit to the amount of connections to a single VPC instance. This allows your network to be more flexible and scale more easily.

To allow inter-Spoke traffic, you will need to initialize a Cloud VPN service in a Spoke Network and connect it to a VPN Gateway on your Hub Network.

Google Cloud offers two types of Cloud VPN gateways: HA VPN and Classic VPN. However, certain Classic VPN functionality is deprecated.

**HA VPN**

HA VPN is a high-availability (HA) Cloud VPN solution that lets you securely connect your on-premises network to your VPC network through an IPsec VPN connection in a single region. HA VPN provides an SLA of 99.99% service availability.

You can find more information about HA VPN [here](https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview#ha-vpn).

**Classic VPN**

All Cloud VPN gateways created before the introduction of HA VPN are considered Classic VPN gateways. Google recommends upgrading any Classic VPN services to HA VPN and has a guide on how to do that [here](https://cloud.google.com/network-connectivity/docs/vpn/how-to/moving-to-ha-vpn).

Classic VPN gateways have a single interface, a single external IP address, and support tunnels that use static routing (policy-based or route-based). You can also configure dynamic routing (BGP) for Classic VPN, but only for tunnels that connect to third-party VPN gateway software running on Google Cloud VM instances.

You can find more information about Classic VPN [here](https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview#classic-vpn).

