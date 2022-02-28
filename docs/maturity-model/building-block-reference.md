---
id: 479f18c8-ac4b-477d-b5b4-4df2f04fc4f3
url: >-
  https://www.notion.so/Building-Block-Reference-479f18c8ac4b477db5b44df2f04fc4f3
title: Building Block Reference
category: Maturity Model
order: 20
---

## Definition

> **💡** Building Blocks are the **capabilities** that a Cloud Foundation can provide.

Not all building blocks might be necessary for a cloud foundation that satisfies an organization's requirements. This needs to be answered according to the organization's unique requirements. We advocate an agile and iterative approach.

## Properties

The Cloud Foundation Maturity Model assigns three properties to every building block: Journey Stage, Pillar and Scope.

Every building block has countless imaginable implementations. When assessing implementations and possible implementations the degree of automation is captured as Implementation Maturity.

These four properties are described below.

### Journey Stage

> **💡** Each Building Block has a Journey Stage. The Journey Stage is a **subjective measure of how advanced a capability is for the majority of Cloud Foundations.** It gives an indication at which stage of an organization’s cloud journey the capability becomes relevant.

As the individual needs of organizations vary, it's not productive to recommend a strictly ordered implementation sequence. However, Cloud Foundation teams will often find that implementing capabilities in a certain order reduces complexity and enables achieving a desired level of capabilities more easily. The journey stage in the Cloud Foundation Maturity model is therefore a guideline when teams should consider implementing a certain capability.

- ⭐️ **Essential:** Capabilities that a cloud foundation team should provide right at the start of an organization's cloud journey. Not providing these will inevitably lead to brittle processes when attempting to implement more advanced capabilities later ("building on sand" instead of building on a solid foundation). 

- ⭐️⭐️ **Recommended:** Capabilities that cloud foundation teams should implement as an organization's cloud adoption accelerates. Capabilities on this journey stage allow organization’s to take full advantage of the cloud paradigm. Not implementing these capabilities should be a conscious decision as it leaves potential benefits untapped.

- ⭐️⭐️⭐️ **Best practice:** Capabilities that most cloud foundation teams implement to provide services and govern cloud landscapes of significant size. Cloud Foundation teams looking into these capabilities typically serve well over 100 internal customers.

- ⭐️⭐️⭐️⭐️ **Advanced:** Capabilities on this journey stage allow Cloud Foundation teams to address the growing variety of stakeholder and customer demands as an organization's cloud adoption matures. Cloud Foundation teams should evaluate capabilities on this level  for "critical mass".

- ⭐️⭐️⭐️⭐️⭐️ **Industry leading:** Capabilities that transform the Cloud Foundation team into sort of an internal cloud provider.

It's not uncommon to find cloud journeys generating demand for capabilities in different speed across functionality Pillars (see below). For example, a financial service organization might put more emphasis on advancing capabilities of the compliance Pillar. 

### Pillar

> **💡** Pillars group **related organizational capabilities**. You can think of them as functional pillars of your cloud foundation.

Cloud Foundation teams needs to cover many different organizational aspects of cloud adoption and consumption. Pillars group related capabilities that are typically interfacing with different stakeholders inside an organizations.

- **🗂 Tenant Management:** Manage provisioning, configuration and lifecycle of cloud environments (e.g. AWS Accounts). This is often an original responsibility of cloud foundation teams that requires internal alignment between platform specialists.

- **🔐 IAM:** Provide Identity and Access management capabilities for all available cloud platforms and services. Needs alignment with Enterprise IAM stakeholders.

- **🔖 Security & Compliance:** Provide capabilities for governing workloads and enforcing security guidelines across all available cloud platforms and services.  Interfaces with IT Security and Compliance stakeholders.

- **💵 Cost Management:** Provide cost management and chargeback capabilities for all available cloud platforms and services. Interfaces with Finance/Controlling stakeholders.

- **🛠 Service Ecosystem:** Provide managed services that help teams build and operate application on the cloud faster and more efficiently (e.g. on-prem connectivity). Interfaces with internal or external teams providing these services. 

### Scope

> **💡** The Scope describes at which "layer" of a cloud foundation the building block needs to be implemented.

Many cloud foundation teams share the experience that the technical implementation of capabilities, is the smaller of their challenges. Creating organizational alignment about the exact requirements for a capability design and its effective implementation into the organizations existing processes is the more difficult part. In addition to Pillars, we therefore group capabilities into Scopes, indicating at which level a capability needs to be coordinated.

- 🏢 **Core**: Building blocks that are centrally enforced and across all cloud platforms.

- ☁️ **Platform:** Building blocks that need to be individually implemented for each cloud platform.

- 🛬 **Landing Zone:** Building blocks that typically require individual implementation for each landing zone (or groups of related landing zones).

Together with "Pillar" cloud foundation teams can determine the stakeholders that need to be involved in the design and implementation of a particular building block.

### Implementation Maturity

> **💡** Each building block can be implemented in different levels of automation.

- **Manual**: Operator executes operations by hand.

- **Semi-Automated:** Operators execute operations using a script. Execution and parameterization of the script manually.

- **Fully Automated:** Execution and parameterization of the operation are fully automated. Operators only oversee the aggregate operation of the automation. 



<!-- included database 6e7a1291-6f21-4979-b582-452b0158e2b2 -->
## By Pillar - 🔐 IAM

| Name                                                                                                    | Scope       | Journey Stage |
| ------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| [Identity and Access Management Concept](/maturity-model/iam/identity-and-access-management-concept.md) | 🏢 Core     | ⭐️            |
| [Federated Identity and Authentication](/maturity-model/iam/federated-identity-and-authentication.md)   | ☁️ Platform | ⭐️            |
| [Authorization Concept](/maturity-model/iam/authorization-concept.md)                                   | 🏢 Core     | ⭐️⭐️          |
| [Privileged Access Management](/maturity-model/iam/privileged-access-management.md)                     | ☁️ Platform | ⭐️⭐️          |
| [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md)                   | ☁️ Platform | ⭐️⭐️          |
| [Service Account Management](/maturity-model/iam/service-account-management.md)                         | ☁️ Platform | ⭐️⭐️⭐️⭐️      |

## By Pillar - 🗂 Tenant Management

| Name                                                                                                                                                                      | Scope       | Journey Stage |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| [Multi-Cloud Tenant Database](/maturity-model/tenant-management/multi-cloud-tenant-database.md)                                                                           | 🏢 Core     | ⭐️            |
| [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md)                                                                                       | ☁️ Platform | ⭐️            |
| [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md)                                                                                           | ☁️ Platform | ⭐️            |
| [Resource Hierarchy](/maturity-model/tenant-management/resource-hierarchy.md)                                                                                             | ☁️ Platform | ⭐️            |
| [Link Cloud Tenants to CMDB/EAM](/maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md)                                                                      | 🏢 Core     | ⭐️⭐️          |
| [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md)                                                 | 🏢 Core     | ⭐️⭐️          |
| [Tenant Deprovisioning / Decommissioning](/maturity-model/tenant-management/tenant-deprovisioning-decommissioning.md)                                                     | ☁️ Platform | ⭐️⭐️          |
| [Playground / Sandbox Environments](/maturity-model/tenant-management/playground-sandbox-environments.md)                                                                 | ☁️ Platform | ⭐️⭐️          |
| [Monolithic Landing Zone](/maturity-model/tenant-management/monolithic-landing-zone.md)                                                                                   | ☁️ Platform | ⭐️⭐️          |
| [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md) | 🏢 Core     | ⭐️⭐️⭐️        |
| [Modular Landing Zones](/maturity-model/tenant-management/modular-landing-zones.md)                                                                                       | ☁️ Platform | ⭐️⭐️⭐️        |
| [Tenant Inventory Reconciliation](/maturity-model/tenant-management/tenant-inventory-reconciliation.md)                                                                   | 🏢 Core     | ⭐️⭐️⭐️⭐️      |

## By Pillar - 💵 Cost Management

| Name                                                                                                                                              | Scope       | Journey Stage |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| [Private Cloud pay-per-use chargeback](/maturity-model/cost-management/private-cloud-pay-per-use-chargeback.md)                                   | ☁️ Platform | ⭐️            |
| [Monthly cloud tenant billing report](/maturity-model/cost-management/monthly-cloud-tenant-billing-report.md)                                     | ☁️ Platform | ⭐️            |
| [Chargeback via consumption cost allocation](/maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md)                       | ☁️ Platform | ⭐️            |
| [Pay-per-Use for internal Services](/maturity-model/cost-management/pay-per-use-for-internal-services.md)                                         | 🏢 Core     | ⭐️⭐️          |
| [Monthly Cloud Project Billing Report](/maturity-model/cost-management/monthly-cloud-project-billing-report.md)                                   | 🏢 Core     | ⭐️⭐️          |
| [Global Cost Optimization via Reservations](/maturity-model/cost-management/global-cost-optimization-via-reservations.md)                         | ☁️ Platform | ⭐️⭐️          |
| [Chargeback at full cost allocation](/maturity-model/cost-management/chargeback-at-full-cost-allocation.md)                                       | ☁️ Platform | ⭐️⭐️          |
| [Budget Approval Process](/maturity-model/cost-management/budget-approval-process.md)                                                             | 🏢 Core     | ⭐️⭐️⭐️        |
| [Billing to different legal entities](/maturity-model/cost-management/billing-to-different-legal-entities.md)                                     | ☁️ Platform | ⭐️⭐️⭐️        |
| [Monthly Cloud Project Carbon Footprint Report](/maturity-model/cost-management/monthly-cloud-project-carbon-footprint-report.md)                 | 🏢 Core     | ⭐️⭐️⭐️⭐️      |
| [Consumption based pay-per-use for internal Services](/maturity-model/cost-management/consumption-based-pay-per-use-for-internal-services.md)     | 🏢 Core     | ⭐️⭐️⭐️⭐️      |
| [Individual Project Cost Optimization via Reservations](/maturity-model/cost-management/individual-project-cost-optimization-via-reservations.md) | ☁️ Platform | ⭐️⭐️⭐️⭐️      |

## By Pillar - 🔖 Security & Compliance

| Name                                                                                                                                                  | Scope           | Journey Stage |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------- |
| [Shared Responsibility Model](/maturity-model/security-and-compliance/shared-responsibility-model.md)                                                 | 🏢 Core         | ⭐️            |
| [Resource Policies - Blacklisting](/maturity-model/security-and-compliance/resource-policies-blacklisting.md)                                         | 🛬 Landing Zone | ⭐️            |
| [Cloud Tenant Tagging](/maturity-model/security-and-compliance/cloud-tenant-tagging.md)                                                               | ☁️ Platform     | ⭐️⭐️          |
| [Centralized audit logs](/maturity-model/security-and-compliance/centralized-audit-logs.md)                                                           | 🛬 Landing Zone | ⭐️⭐️          |
| [Onboarding Portal](/maturity-model/security-and-compliance/onboarding-portal.md)                                                                     | 🏢 Core         | ⭐️⭐️⭐️        |
| [Incident Management Process](/maturity-model/security-and-compliance/incident-management-process.md)                                                 | 🏢 Core         | ⭐️⭐️⭐️        |
| [Cloud Resource Tagging](/maturity-model/security-and-compliance/cloud-resource-tagging.md)                                                           | ☁️ Platform     | ⭐️⭐️⭐️        |
| [Centralized workload and infrastructure logs](/maturity-model/security-and-compliance/centralized-workload-and-infrastructure-logs.md)               | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [SOC Integration](/maturity-model/security-and-compliance/soc-integration.md)                                                                         | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [Automated Security Scanning](/maturity-model/security-and-compliance/automated-security-scanning.md)                                                 | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [Cloud Zones](/maturity-model/security-and-compliance/cloud-zones.md)                                                                                 | 🏢 Core         | ⭐️⭐️⭐️⭐️      |
| [Control access to cloud platforms and Landing Zones](/maturity-model/security-and-compliance/control-access-to-cloud-platforms-and-landing-zones.md) | 🏢 Core         | ⭐️⭐️⭐️⭐️      |
| [Multi-Cloud Tagging Policy](/maturity-model/security-and-compliance/multi-cloud-tagging-policy.md)                                                   | 🏢 Core         | ⭐️⭐️⭐️⭐️      |
| [Cloud SIEM](/maturity-model/security-and-compliance/cloud-siem.md)                                                                                   | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [Certified ISMS Compliance](/maturity-model/security-and-compliance/certified-isms-compliance.md)                                                     | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️⭐️    |

## By Pillar - 🛠 Service Ecosystem

| Name                                                                                                                      | Scope           | Journey Stage |
| ------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------- |
| [Internal Service Marketplace](/maturity-model/service-ecosystem/internal-service-marketplace.md)                         | 🏢 Core         | ⭐️            |
| [Shared container registry](/maturity-model/service-ecosystem/shared-container-registry.md)                               | 🛬 Landing Zone | ⭐️⭐️          |
| [Shared VM Image Repository](/maturity-model/service-ecosystem/shared-vm-image-repository.md)                             | 🛬 Landing Zone | ⭐️⭐️          |
| [Virtual Network Service](/maturity-model/service-ecosystem/virtual-network-service.md)                                   | 🛬 Landing Zone | ⭐️⭐️          |
| [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md)                                               | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [Managed bastion hosts](/maturity-model/service-ecosystem/managed-bastion-hosts.md)                                       | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [3rd party PaaS Service Integration](/maturity-model/service-ecosystem/3rd-party-paas-service-integration.md)             | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [Managed DevOps Toolchain](/maturity-model/service-ecosystem/managed-devops-toolchain.md)                                 | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [On-Premise Network Connection](/maturity-model/service-ecosystem/on-premise-network-connection.md)                       | 🛬 Landing Zone | ⭐️⭐️⭐️        |
| [Managed Cloud Provider Support Contracts](/maturity-model/service-ecosystem/managed-cloud-provider-support-contracts.md) | ☁️ Platform     | ⭐️⭐️⭐️⭐️      |
| [Managed Data Lake access](/maturity-model/service-ecosystem/managed-data-lake-access.md)                                 | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [API Gateway to on-premises APIs](/maturity-model/service-ecosystem/api-gateway-to-on-premises-apis.md)                   | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [Kubernetes Cluster as a Service](/maturity-model/service-ecosystem/kubernetes-cluster-as-a-service.md)                   | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [In-house PaaS Service Integration](/maturity-model/service-ecosystem/in-house-paas-service-integration.md)               | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [Managed Internet Egress](/maturity-model/service-ecosystem/managed-internet-egress.md)                                   | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️      |
| [Cloud to Cloud interconnects](/maturity-model/service-ecosystem/cloud-to-cloud-interconnects.md)                         | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️⭐️    |
| [Tenant to Tenant Transit Networks](/maturity-model/service-ecosystem/tenant-to-tenant-transit-networks.md)               | 🛬 Landing Zone | ⭐️⭐️⭐️⭐️⭐️    |

## By Journey Stage - ⭐️

| Name                                                                                                                        | Scope           | Pillar                   |
| --------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| [Identity and Access Management Concept](/maturity-model/iam/identity-and-access-management-concept.md)                     | 🏢 Core         | 🔐 IAM                   |
| [Federated Identity and Authentication](/maturity-model/iam/federated-identity-and-authentication.md)                       | ☁️ Platform     | 🔐 IAM                   |
| [Multi-Cloud Tenant Database](/maturity-model/tenant-management/multi-cloud-tenant-database.md)                             | 🏢 Core         | 🗂 Tenant Management     |
| [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md)                                         | ☁️ Platform     | 🗂 Tenant Management     |
| [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md)                                             | ☁️ Platform     | 🗂 Tenant Management     |
| [Resource Hierarchy](/maturity-model/tenant-management/resource-hierarchy.md)                                               | ☁️ Platform     | 🗂 Tenant Management     |
| [Private Cloud pay-per-use chargeback](/maturity-model/cost-management/private-cloud-pay-per-use-chargeback.md)             | ☁️ Platform     | 💵 Cost Management       |
| [Monthly cloud tenant billing report](/maturity-model/cost-management/monthly-cloud-tenant-billing-report.md)               | ☁️ Platform     | 💵 Cost Management       |
| [Chargeback via consumption cost allocation](/maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md) | ☁️ Platform     | 💵 Cost Management       |
| [Shared Responsibility Model](/maturity-model/security-and-compliance/shared-responsibility-model.md)                       | 🏢 Core         | 🔖 Security & Compliance |
| [Resource Policies - Blacklisting](/maturity-model/security-and-compliance/resource-policies-blacklisting.md)               | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Internal Service Marketplace](/maturity-model/service-ecosystem/internal-service-marketplace.md)                           | 🏢 Core         | 🛠 Service Ecosystem     |

## By Journey Stage - ⭐️⭐️

| Name                                                                                                                      | Scope           | Pillar                   |
| ------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| [Authorization Concept](/maturity-model/iam/authorization-concept.md)                                                     | 🏢 Core         | 🔐 IAM                   |
| [Privileged Access Management](/maturity-model/iam/privileged-access-management.md)                                       | ☁️ Platform     | 🔐 IAM                   |
| [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md)                                     | ☁️ Platform     | 🔐 IAM                   |
| [Link Cloud Tenants to CMDB/EAM](/maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md)                      | 🏢 Core         | 🗂 Tenant Management     |
| [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) | 🏢 Core         | 🗂 Tenant Management     |
| [Tenant Deprovisioning / Decommissioning](/maturity-model/tenant-management/tenant-deprovisioning-decommissioning.md)     | ☁️ Platform     | 🗂 Tenant Management     |
| [Playground / Sandbox Environments](/maturity-model/tenant-management/playground-sandbox-environments.md)                 | ☁️ Platform     | 🗂 Tenant Management     |
| [Monolithic Landing Zone](/maturity-model/tenant-management/monolithic-landing-zone.md)                                   | ☁️ Platform     | 🗂 Tenant Management     |
| [Pay-per-Use for internal Services](/maturity-model/cost-management/pay-per-use-for-internal-services.md)                 | 🏢 Core         | 💵 Cost Management       |
| [Monthly Cloud Project Billing Report](/maturity-model/cost-management/monthly-cloud-project-billing-report.md)           | 🏢 Core         | 💵 Cost Management       |
| [Global Cost Optimization via Reservations](/maturity-model/cost-management/global-cost-optimization-via-reservations.md) | ☁️ Platform     | 💵 Cost Management       |
| [Chargeback at full cost allocation](/maturity-model/cost-management/chargeback-at-full-cost-allocation.md)               | ☁️ Platform     | 💵 Cost Management       |
| [Cloud Tenant Tagging](/maturity-model/security-and-compliance/cloud-tenant-tagging.md)                                   | ☁️ Platform     | 🔖 Security & Compliance |
| [Centralized audit logs](/maturity-model/security-and-compliance/centralized-audit-logs.md)                               | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Shared container registry](/maturity-model/service-ecosystem/shared-container-registry.md)                               | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Shared VM Image Repository](/maturity-model/service-ecosystem/shared-vm-image-repository.md)                             | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Virtual Network Service](/maturity-model/service-ecosystem/virtual-network-service.md)                                   | 🛬 Landing Zone | 🛠 Service Ecosystem     |

## By Journey Stage - ⭐️⭐️⭐️⭐️

| Name                                                                                                                                                  | Scope           | Pillar                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| [Service Account Management](/maturity-model/iam/service-account-management.md)                                                                       | ☁️ Platform     | 🔐 IAM                   |
| [Tenant Inventory Reconciliation](/maturity-model/tenant-management/tenant-inventory-reconciliation.md)                                               | 🏢 Core         | 🗂 Tenant Management     |
| [Monthly Cloud Project Carbon Footprint Report](/maturity-model/cost-management/monthly-cloud-project-carbon-footprint-report.md)                     | 🏢 Core         | 💵 Cost Management       |
| [Consumption based pay-per-use for internal Services](/maturity-model/cost-management/consumption-based-pay-per-use-for-internal-services.md)         | 🏢 Core         | 💵 Cost Management       |
| [Individual Project Cost Optimization via Reservations](/maturity-model/cost-management/individual-project-cost-optimization-via-reservations.md)     | ☁️ Platform     | 💵 Cost Management       |
| [Cloud Zones](/maturity-model/security-and-compliance/cloud-zones.md)                                                                                 | 🏢 Core         | 🔖 Security & Compliance |
| [Control access to cloud platforms and Landing Zones](/maturity-model/security-and-compliance/control-access-to-cloud-platforms-and-landing-zones.md) | 🏢 Core         | 🔖 Security & Compliance |
| [Multi-Cloud Tagging Policy](/maturity-model/security-and-compliance/multi-cloud-tagging-policy.md)                                                   | 🏢 Core         | 🔖 Security & Compliance |
| [Cloud SIEM](/maturity-model/security-and-compliance/cloud-siem.md)                                                                                   | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Managed Cloud Provider Support Contracts](/maturity-model/service-ecosystem/managed-cloud-provider-support-contracts.md)                             | ☁️ Platform     | 🛠 Service Ecosystem     |
| [Managed Data Lake access](/maturity-model/service-ecosystem/managed-data-lake-access.md)                                                             | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [API Gateway to on-premises APIs](/maturity-model/service-ecosystem/api-gateway-to-on-premises-apis.md)                                               | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Kubernetes Cluster as a Service](/maturity-model/service-ecosystem/kubernetes-cluster-as-a-service.md)                                               | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [In-house PaaS Service Integration](/maturity-model/service-ecosystem/in-house-paas-service-integration.md)                                           | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Managed Internet Egress](/maturity-model/service-ecosystem/managed-internet-egress.md)                                                               | 🛬 Landing Zone | 🛠 Service Ecosystem     |

## By Journey Stage - ⭐️⭐️⭐️

| Name                                                                                                                                                                      | Scope           | Pillar                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md) | 🏢 Core         | 🗂 Tenant Management     |
| [Modular Landing Zones](/maturity-model/tenant-management/modular-landing-zones.md)                                                                                       | ☁️ Platform     | 🗂 Tenant Management     |
| [Budget Approval Process](/maturity-model/cost-management/budget-approval-process.md)                                                                                     | 🏢 Core         | 💵 Cost Management       |
| [Billing to different legal entities](/maturity-model/cost-management/billing-to-different-legal-entities.md)                                                             | ☁️ Platform     | 💵 Cost Management       |
| [Onboarding Portal](/maturity-model/security-and-compliance/onboarding-portal.md)                                                                                         | 🏢 Core         | 🔖 Security & Compliance |
| [Incident Management Process](/maturity-model/security-and-compliance/incident-management-process.md)                                                                     | 🏢 Core         | 🔖 Security & Compliance |
| [Cloud Resource Tagging](/maturity-model/security-and-compliance/cloud-resource-tagging.md)                                                                               | ☁️ Platform     | 🔖 Security & Compliance |
| [Centralized workload and infrastructure logs](/maturity-model/security-and-compliance/centralized-workload-and-infrastructure-logs.md)                                   | 🛬 Landing Zone | 🔖 Security & Compliance |
| [SOC Integration](/maturity-model/security-and-compliance/soc-integration.md)                                                                                             | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Automated Security Scanning](/maturity-model/security-and-compliance/automated-security-scanning.md)                                                                     | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Managed Key Vault](/maturity-model/service-ecosystem/managed-key-vault.md)                                                                                               | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Managed bastion hosts](/maturity-model/service-ecosystem/managed-bastion-hosts.md)                                                                                       | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [3rd party PaaS Service Integration](/maturity-model/service-ecosystem/3rd-party-paas-service-integration.md)                                                             | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Managed DevOps Toolchain](/maturity-model/service-ecosystem/managed-devops-toolchain.md)                                                                                 | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [On-Premise Network Connection](/maturity-model/service-ecosystem/on-premise-network-connection.md)                                                                       | 🛬 Landing Zone | 🛠 Service Ecosystem     |

## By Journey Stage - ⭐️⭐️⭐️⭐️⭐️

| Name                                                                                                        | Scope           | Pillar                   |
| ----------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| [Certified ISMS Compliance](/maturity-model/security-and-compliance/certified-isms-compliance.md)           | 🛬 Landing Zone | 🔖 Security & Compliance |
| [Cloud to Cloud interconnects](/maturity-model/service-ecosystem/cloud-to-cloud-interconnects.md)           | 🛬 Landing Zone | 🛠 Service Ecosystem     |
| [Tenant to Tenant Transit Networks](/maturity-model/service-ecosystem/tenant-to-tenant-transit-networks.md) | 🛬 Landing Zone | 🛠 Service Ecosystem     |

