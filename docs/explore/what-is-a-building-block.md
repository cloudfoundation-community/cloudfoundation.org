---
id: e6848e89-8f3c-4e14-824f-b0122c3fc3cc
url: >-
  https://www.notion.so/What-is-a-Building-Block-e6848e898f3c4e14824fb0122c3fc3cc
title: What is a Building Block
category: Explore
order: 10
properties:
  order: 10
  documentation: Reference
  category: Explore
  redaction-state: Draft
  name: What is a Building Block
---

> 💡 Building Blocks are the **fundamental capabilities** that a Cloud Foundation can provide.

Not all building blocks might be necessary for a cloud foundation that satisfies an organisation's requirements. This needs to be answered according to the organisation's unique requirements. We advocate an agile and iterative approach.

## Journey Stage

> 💡 Each Building Block has a Journey Stage. The Journey Stage is a subjective measure of how advanced a capability is for the majority of Cloud Foundations and at what stage of an organisations cloud journey the capability becomes relevant.

As the individual needs of organisations vary, it's not productive to recommend a strictly ordered implementation sequence. However, Cloud Foundation teams will often find that implementing capabilities in a certain order reduces complexity and enables achieving a desired level of capabilities more easily. The journey stage in the Cloud Foundation Maturity model is therefore a guideline when teams should consider implementing a certain capability.

- ⭐️ **Essential:** Capabilities that a cloud foundation team should provide right at the start of an organisation's cloud journey. Not providing these will inevitably lead to brittle processes when attempting to implement more advanced capabilities later ("building on sand" instead of building on a solid foundation).

- ⭐️⭐️ **Recommended:** Capabilities that cloud foundation teams should implement as an organisation's cloud adoption accelerates. Capabilities on this journey stage allow organisations to take full advantage of the cloud paradigm. Not implementing these capabilities should be a conscious decision as it leaves potential benefits untapped.

- ⭐️⭐️⭐️ **Best practice:** Capabilities that most cloud foundation teams implement to provide services and govern cloud landscapes of significant size. Cloud Foundation teams looking into these capabilities typically serve well over 100 internal customers.

- ⭐️⭐️⭐️⭐️ **Advanced:** Capabilities on this journey stage allow Cloud Foundation teams to address the growing variety of stakeholder and customer demands as an organisation's cloud adoption matures. Cloud Foundation teams should evaluate capabilities on this level  for "critical mass".

- ⭐️⭐️⭐️⭐️⭐️ **Industry leading:** Capabilities that transform the Cloud Foundation team into sort of an internal cloud provider.

It's not uncommon to find cloud journeys generating demand for capabilities in different speed across functionality clusters (see below). For example, a financial service organisation might put more emphasis on advancing capabilities of the compliance cluster.

## Cluster

> 💡 Clusters help group related organizational capabilities. You can think of them as functional pillars of your cloud foundation.

Cloud Foundation teams needs to cover many different organisational aspects of cloud adoption and consumption. Clusters group related capabilities that are typically interfacing with different stakeholders inside an organisations.

- **🔐 IAM:** Provide Identity and Access management capabilities for all available cloud platforms and services. Needs alignment with Enterprise IAM stakeholders.

- **🗂 Tenant Management:** Manage provisioning, configuration and lifecycle of cloud environments (e.g. AWS Accounts). This is often an original responsibility of cloud foundation teams that requires internal alignment between platform specialists.

- **💵 Chargeback:** Provide cost management and chargeback capabilities for all available cloud platforms and services. Interfaces with Finance/Controlling stakeholders.

- **🔖 Compliance:** Provide capabilities for governing workloads and enforcing security guidelines across all available cloud platforms and services. Interfaces with IT Security and Compliance stakeholders.

- **🛠 Managed Services:** Provide managed services that help teams build and operate cloud services faster and more efficiently. Interfaces with internal or external teams providing these services.

- **🌍 Networking:** Provide connectivity to on-prem and cloud-to-cloud workloads. Interfaces with IT Network stakeholders responsible for network design and operation.

## Scope

> 💡 The scope describes at which "layer" of a cloud foundation the building block needs to be implemented.

Many cloud foundation teams share the experience that the technical implementation of capabilities, is the smaller of their challenges. Creating organisational alignment about the exact requirements for a capability design and its effective implementation into the organisations existing processes is the more difficult part. In addition to Clusters, we therefore group capabilities into Scopes, indicating at which level a capability needs to be coordinated.

- 🏢 **Core** : Building blocks that are centrally enforced and across all cloud platforms.

- ☁️ **Platform:** Building blocks that need to be individually implemented for each cloud platform.

- 🛬 **Landing Zone:** Building blocks that typically require individual implementation for each landing zone (or groups of related landing zones).

Together with "Cluster" cloud foundation teams can determine the stakeholders that need to be involved in the design and implementation of a particular building block.

## Implementation Maturity

> 💡 Each building block can be implemented in different levels of automation.

- **Manual** : Operator executes operations by hand.

- **Semi-Automated:** Operators execute operations using a script. Execution and parameterisation of the script manually.

- **Fully Automated:** Execution and parameterisation of the operation are fully automated. Operators only oversee the aggregate operation of the automation.