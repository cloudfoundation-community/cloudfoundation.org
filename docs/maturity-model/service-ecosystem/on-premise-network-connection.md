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
  enables:
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations:
    - c688eecf-0335-4505-bdcb-bc6f6da28c63
    - 9cd1dd44-526e-4b3f-9969-8f9a94c187cb
    - 484e4f98-d1ce-41c2-8b2b-46ed1874d487
    - 8b36655b-1387-4bf2-b8ef-29826a349bb9
    - 8dea89f0-ab7e-4043-9e71-ad7a0232e64b
    - f096be8c-0f83-4d92-a1e3-b095f1dc6270
  name: On-Premise Network Connection
---

A common approach to address on-prem connectivity is applying the Hub & Spoke design. You define a central hub in your cloud platform that actually connects to the On-Premise network. All managed tenants then connect via a Spoke network to this Hub to get access to On-Prem. Setting up the spoke must be done in a scalable way as the number of spokes grows with the number of tenants who need this access. This can be achieved by e.g. integrating the On-Prem connectivity via a [Virtual Network Service](./virtual-network-service.md).



TODO: describe IPAM integration



A key challenge with On-Premise network connections is to make them scale

1. shared vm and vm based NAT system; load balancer inside VPC

    1. cloud foundation maintains NAT

1. multiple shared VPC with [VPC peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html);

    1.  cloud foundation maintains subnets and VPC for customer projects

1. completely isolated VPCs and projects

    1. [private service connect](https://cloud.google.com/vpc/docs/private-service-connect)/virtual private connect; consume them even if you do not

1. don't do onprem; use internet with API gateway



## How to Implement an on-Premise Network Connection

### Azure

There are 3 options for connecting an on-premise network to an Azure Virtual Network

1. A **VPN Gateway** sends encrypted traffic in a Hybrid network over the public internet. This option would cause some latency in performance and is best suited for applications with minimal traffic between the Azure Virtual Network and the on-premise servers. You can find more information on how to establish a VPN Gateway [here](https://learn.microsoft.com/en-us/azure/vpn-gateway/tutorial-create-gateway-portal) and [here](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/dmz/secure-vnet-dmz?tabs=portal) is a guide on how to Implement a secure Hybrid network

1. An **Azure ExpressRoute** sends traffic between on-premise and cloud resources using a dedicated, private connection. This option is suitable for large-scale, mission-critical workloads that require scalability. This option can be more complex to set up and requires working with a third party to establish the connection between the on-premise and Azure resources but is faster than a VPN Gateway connection and supports dynamic scaling of bandwidth. You can find an example of a Hybrid network utilising an ExpressRoute connection [here](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/expressroute).

1. **ExpressRoute with VPN Failover** combines the previous two options. Using this design, you get the high bandwidth and availability of an ExpressRoute connection with a backup VPN Gateway connection if there are any issues with the ExpressRoute connection. This option is the most complex and requires a VPN Gateway and ExpressRoute connection but is the most reliable and ensures the most availability. You can find more information about how to design and connect ExpressRoute with VPN Failover [here](https://learn.microsoft.com/en-us/azure/expressroute/use-s2s-vpn-as-backup-for-expressroute-privatepeering).



### AWS

There are 2 options for connecting your on-premise resources to your resources in the AWS cloud: **AWS Site-to-Site VPN** or **AWS Direct Connect**.



**AWS Site-to-Site VPN** is a fully-managed service that creates a secure connection between your data centre or branch office and your AWS resources using IP Security (IPSec) tunnels. Site-to-Site VPN is a private, secure, and highly-available connection between your resources and allows for increased performance and monitoring of your applications. This connection is very useful for migrating your service to AWS and creating secure connections between remote locations. A Site-to-Site VPN can be created using the AWS Management Console, AWS Command Line Interface, AWS SDKs, or the Query API. You can find more detailed information about AWS Site-to-Site VPN and how to create a connection [here](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html).



**AWS Direct Connect** allows you to securely connect your on-premise data centre to your AWS VPC via an AWS Direct Connect Router. To setup this connection you have to take the following steps

1. Request an AWS Direct Connect dedicated connection

1. create a Virtual Interface

1. Download the router configuration

1. Verify the Virtual Interface

1. Configure redundant connections (optional)

You can find more detailed information about creating different types of Direct Connection [here](https://docs.aws.amazon.com/directconnect/latest/UserGuide/resiliency_toolkit.html).



### GCP

GCP utilises **Cloud VPN** to create secure connections between your on-premise network and your GCP-hosted resources through and IPsec VPN connection. GCP provides 2 options for connecting your resources: **High-Availability (HA) VPN** or **Classic VPN**.



**HA VPN** is the preferred connection type for connecting your on-premise and VPC networks. It supports site-to-site connections and utilizes an IPsec VPN connection in a single region with an SLA of 99.99% service availability.

One option for using **HA VPN** is to deploy **HA VPN over Cloud Interconnect**. **Cloud Interconnect** connects your on-premise data centre to you Google Cloud resources with low latency and high availability. [**Dedicated Interconnect**](https://cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview) creates a physical direct connection between your on-premise network and Google’s network while [**Partner Interconnect**](https://cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/provisioning-overview)[ ](https://cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/provisioning-overview)provides connectivity through a supported service provider
You can find more information about **HA VPN** [here](https://cloud.google.com/network-connectivity/docs/vpn/concepts/topologies).



**Classic VPN** allows your on-premise hosts to communicate through one or more IPsec VPN tunnels to Compute Engine virtual machine (VM). **Classic VPN** supports both policy-based and route-based VPN configurations, providing flexibility in designing the network topology. While **Classic VPN** offers secure connectivity, it does not provide the same level of high availability and automatic failover capabilities as **HA VPN**. Therefore, it is recommended to consider **HA VPN** for scenarios that require continuous and resilient connectivity. You can find more information about **Classic VPN** [here](https://cloud.google.com/network-connectivity/docs/vpn/concepts/classic-topologies)

