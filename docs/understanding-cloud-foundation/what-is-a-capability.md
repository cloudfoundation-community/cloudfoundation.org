---
id: 479f18c8-ac4b-477d-b5b4-4df2f04fc4f3
url: https://www.notion.so/What-is-a-Capability-479f18c8ac4b477db5b44df2f04fc4f3
title: What is a Capability
category: Understanding Cloud Foundation
order: 30
---

> **💡** Capabilities describe the **technical and organizational ability** to perform an essential function or process that helps build a successful Cloud Foundation.

The Cloud Foundation Maturity Model assigns some common properties to every capability. These properties enables you to quickly identify what the capability is about and how it relates to other capabilities in the model.

## Pillar

> **💡** Pillars group **related organizational capabilities**. You can think of them as functional pillars of your cloud foundation.

Cloud Foundation teams needs to cover many different organizational aspects of cloud adoption and consumption. Pillars group related capabilities that are typically interfacing with different stakeholders inside an organizations.

- [🗂 Tenant Management](../maturity-model/tenant-management/readme.md)**:** Manage provisioning, configuration and lifecycle of cloud environments (e.g. AWS Accounts). This is often an original responsibility of cloud foundation teams that requires internal alignment between platform specialists.

- [🔐 IAM](../maturity-model/iam/readme.md)**:** Provide Identity and Access management capabilities for all available cloud platforms and services. Needs alignment with Enterprise IAM stakeholders.

- [🔖 Security & Compliance](../maturity-model/security-and-compliance/readme.md)**:** Provide capabilities for governing workloads and enforcing security guidelines across all available cloud platforms and services.  Interfaces with IT Security and Compliance stakeholders.

- [💵 Cost Management](../maturity-model/cost-management/readme.md)**:** Provide cost management and chargeback capabilities for all available cloud platforms and services. Interfaces with Finance/Controlling stakeholders.

- [🛠 Service Ecosystem](../maturity-model/service-ecosystem/readme.md)**:** Provide managed services that help teams build and operate application on the cloud faster and more efficiently (e.g. on-prem connectivity). Interfaces with internal or external teams providing these services. 

## Journey Stage

> **💡** Each Capability has a Journey Stage. The Journey Stage is a **subjective measure of how advanced a capability is for the majority of Cloud Foundations.** It gives an indication at which stage of an organization’s cloud journey the capability becomes relevant.

As the individual needs of organizations vary, it's not productive to recommend a strictly ordered implementation sequence. However, Cloud Foundation teams will often find that implementing capabilities in a certain order reduces complexity and enables achieving a desired level of capabilities more easily. The journey stage in the Cloud Foundation Maturity model is therefore a guideline when teams should consider implementing a certain capability.

- ⭐️ **Essential:** Capabilities that a cloud foundation team should provide right at the start of an organization's cloud journey. Not providing these will inevitably lead to brittle processes when attempting to implement more advanced capabilities later ("building on sand" instead of building on a solid foundation). 

- ⭐️⭐️ **Recommended:** Capabilities that cloud foundation teams should implement as an organization's cloud adoption accelerates. Capabilities on this journey stage allow organization’s to take full advantage of the cloud paradigm. Not implementing these capabilities should be a conscious decision as it leaves potential benefits untapped.

- ⭐️⭐️⭐️ **Best practice:** Capabilities that most cloud foundation teams implement to provide services and govern cloud landscapes of significant size. Cloud Foundation teams looking into these capabilities typically serve well over 100 internal customers.

- ⭐️⭐️⭐️⭐️ **Advanced:** Capabilities on this journey stage allow Cloud Foundation teams to address the growing variety of stakeholder and customer demands as an organization's cloud adoption matures. Cloud Foundation teams should evaluate capabilities on this level  for "critical mass".

- ⭐️⭐️⭐️⭐️⭐️ **Industry leading:** Capabilities that transform the Cloud Foundation team into sort of an internal cloud provider.

It's not uncommon to find cloud journeys generating demand for capabilities in different speed across functionality Pillars (see below). For example, a financial service organization might put more emphasis on advancing capabilities of the compliance Pillar. 

## Scope

> **💡** The Scope describes at which "layer" of a cloud foundation the capability needs to be implemented.

Many cloud foundation teams share the experience that the technical implementation of capabilities, is the smaller of their challenges. Creating organizational alignment about the exact requirements for a capability design and its effective implementation into the organizations existing processes is the more difficult part. In addition to Pillars, we therefore group capabilities into Scopes, indicating at which level a capability needs to be coordinated.

- 🏢 **Core**: Capabilities that are centrally built and coordinated across all cloud platforms.

- ☁️ **Platform:** Capabilities that need to be individually implemented for each cloud platform.

- 🛬 **Landing Zone:** Capabilities that typically require individual implementation or adaptation for each landing zone.

Together with "Pillar" cloud foundation teams can determine the stakeholders that need to be involved in the design and implementation of a particular capabilities.

## Implementation Maturity

> **💡** Each capability can be implemented in different levels of maturity. Maturity can be measured in different dimensions. This section describes important dimensions to consider.

### Confidence

The cloud foundation team’s confidence in the mastery of a specific capability. We observed the following patterns among teams to describe their confidence in capabilities:

- **proof of concept**: initial implementation of a capability but little to no operational experience

- **tailoring:** the team has started collecting operational experience with the capability and is aware of  gaps in terms of coverage or adaptations to the organization’s unique requirements

- **established standard operating procedure**: the implementation is widely understood among the relevant stakeholders and regarded as fit for purpose

### Automation

When describing and comparing implementations of the same capability, it’s often useful to categorize the degree of automation that a cloud foundation team can achieve.

- **Manual**: Operator executes operations by hand.

- **Semi-Automated:** Operators execute operations using a script. Execution and parameterization of the script manually.

- **Fully Automated:** Execution and parameterization of the operation are fully automated. Operators only oversee the aggregate operation of the automation. 



