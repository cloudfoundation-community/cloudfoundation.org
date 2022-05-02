---
id: 621771b3-97a0-4c4e-80ab-3331cd6719f0
url: https://www.notion.so/Service-Ecosystem-621771b397a04c4e80ab3331cd6719f0
title: 🛠 Service Ecosystem
description: >-
  Provide managed services that help teams build and operate application on the
  cloud faster and more efficiently (e.g. on-prem connectivity). Interfaces with
  internal or external teams providing these services.
category: Pillar
pageType: CFMMPillar
properties:
  short-name: Service Ecosystem
---

As an organization’s cloud adoption accelerates, internal cloud customers will start requesting additional services from Cloud Foundation teams like managed on-premise connectivity or managed DevOps toolchains. Providing a rich ecosystem of services can helps teams build on the cloud more successfully and can also be an important enabler of cloud adoption speed.

In the same way that cloud platforms are composed out of multiple services built on a single control plane, successful cloud foundation teams adopt a similar approach to develop an internal cloud service ecosystem for the organization. Leveraging the same “cloud foundation control plane” that already offers [🗂 Tenant Management](../tenant-management/readme.md), [🔐 IAM](../iam/readme.md), [🔖 Security & Compliance](../security-and-compliance/readme.md) and [💵 Cost Management](../cost-management/readme.md) for managing internal cloud customer’s access to cloud platforms, the cloud foundation offers additional services to teams. In general Cloud Foundation teams should focus on offering “value-added” services that solve problems that are too complex or too costly to solve for internal customer leveraging cloud-native services individually. 

## Key Activities for a Multi-Cloud Service Ecosystem

Building a strong multi-cloud service ecosystem needs to consider the unique demands of the internal cloud customers. The building blocks however represent common capabilities that many organizations implement along their cloud journey:

- An [Internal Service Marketplace](./internal-service-marketplace.md) is the foundation for offering internal services in a consistent way and enabling teams outside the cloud foundation to build and consume services as well

- [Virtual Network Service](./virtual-network-service.md) is a fundamental capability that enables managed connectivity solutions such as [On-Premise Network Connection](./on-premise-network-connection.md) or [Managed Internet Egress](./managed-internet-egress.md) 

- [Managed DevOps Toolchain](./managed-devops-toolchain.md) can simplify adopting DevOps practices by allowing DevOps teams to concentrate on “what” over “how”

- Cloud Foundation teams should listen closely to the needs of internal cloud customers and evolve the service offering accordingly. For example:

    - Offering a [Shared VM Image Repository](./shared-vm-image-repository.md) and [Managed bastion hosts](./managed-bastion-hosts.md) as building blocks can accelerate internal cloud customers building IaaS solutions

    - [In-house PaaS Service Integration](./in-house-paas-service-integration.md) and [API Gateway to on-premises APIs](./api-gateway-to-on-premises-apis.md) can enable building cloud-native solutions e.g. based on serverless

As the cloud foundation approach is all about integrating the capabilities of its constituent pillars, the Service Ecosystem pillar has several important links to other cloud foundation capabilities

[🗂 Tenant Management](../tenant-management/readme.md) 

- Internal cloud customers should be able to order services from the cloud foundation’s service ecosystem based on the organizational metadata they already used to register, e.g. recorded in a [Cloud Tenant Database](../tenant-management/cloud-tenant-database.md). 

- Services are an important part of [Modular Landing Zones](../tenant-management/modular-landing-zones.md) and should thus be logical extensions to existing tenant management processes like [Tenant Provisioning](../tenant-management/tenant-provisioning.md). 

[🔐 IAM](../iam/readme.md) 

- Leverage existing IAM facilities such as [Federated Identity and Authentication](../iam/federated-identity-and-authentication.md) as well as the [Authorization Concept](../iam/authorization-concept.md) to manage teams’ access to internal services.

[🔖 Security & Compliance](../security-and-compliance/readme.md) 

- Encapsulating solutions commonly needed by cloud customers to run secure workloads in centrally managed and well-secured services can help raise the overall security of a cloud foundation. For example providing [Managed bastion hosts](./managed-bastion-hosts.md) or [Managed Key Vault](./managed-key-vault.md). 

[💵 Cost Management](../cost-management/readme.md) 

- Integrate metering and chargeback with cost management building blocks like [Pay-per-Use for internal Services](../cost-management/pay-per-use-for-internal-services.md). These are an integral part of enabling an [Internal Service Marketplace](./internal-service-marketplace.md).

## Designing a Multi-Cloud Service Ecosystem Strategy

Especially when adopting cloud at scale, cloud foundation teams can benefit tremendously from an internal service ecosystem strategy that enables the organization to build and offer additional services to internal cloud customers.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Building an Internal Cloud Service Ecosystem</CtaHeader>
  <CtaText>Take a look at the comprehensive guide for building successful cloud service ecosystems leveraging an enterprise-wide marketplace for cloud infrastructure services.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/15/cloud-infrastructure-services-enterprise-wide-distribution-via-a-marketplace/">Read the Cloud Service Guide</CtaButton>
</CallToAction>

## Key Stakeholders in a Multi-Cloud Service Ecosystem

The Cloud Foundation Maturity Model recommends building the cloud service ecosystem around the concept of an [Internal Service Marketplace](./internal-service-marketplace.md). Marketplaces naturally have three key-stakeholders: the marketplace provider, service providers and service customers.

The cloud foundation team should position itself as a **marketplace provider.** It is therefore responsible for aligning the marketplace with existing IT service management (ITSM) and governance processes like chargeback.

The cloud foundation team will also take on the role as one of the first **service-providers** on the marketplace. However, a successful service ecosystem requires that the marketplace provider also enables other providers to offer and “sell” services on its marketplace. This can be traditional infrastructure teams (e.g. offering a [Shared VM Image Repository](./shared-vm-image-repository.md) or [On-Premise Network Connection](./on-premise-network-connection.md)) as well as teams manging [3rd party PaaS Service Integration](./3rd-party-paas-service-integration.md) or even [In-house PaaS Service Integration](./in-house-paas-service-integration.md).

The internal cloud customers are the **service consumers.** Cloud Foundation teams play a critical role here as a facilitator matching consumer demands with the supply-side. As a part of this role, cloud foundation teams should also involve management stakeholders and enterprise architects to provide feedback for the evolution of the IT service portfolio.

Finally, the cloud foundation team should also incentivize security & compliance stakeholders to view the marketplace as an opportunity to provide “secured out of the box” services. This can help improve the overall security level of cloud workloads by providing building blocks that are aligned with security and compliance requirements.

