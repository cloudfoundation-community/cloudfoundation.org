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



## How to Implement a Virtual Network Service



Utilizing a Hub and Spoke architecture is a very common choice when working
with Networks. Hub and Spoke can be used to allow traffic between multiple resources. It can connect Virtual Networks to each other or to your On-Premise Networks. Here are the basic steps to create a Hub and Spoke Network

1. Create a Hub Virtual Network that contains services that will be shared across all Spoke Networks. Each Spoke Network will be peered to the Hub by a Gateway connection.

1. Create Spoke Virtual Networks or gather information about your On-Premise networks. Make sure none of the networks are sharing the same CIDR address ranges.

1. Create a connection to allow traffic between a Spoke Network (VNet or On-Premise) and the Hub. Create Route Tables for each Spoke to direct traffic. This will allow traffic to securely flow between Spokes as needed.

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

Virtual Private Clouds can be created using the Google Cloud console, gcloud CLI, Terraform modules or Google API. You can create different types of VPCs using the Google documentation [here](https://cloud.google.com/vpc/docs/create-modify-vpc-networks#console)

