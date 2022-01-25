---
id: e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
url: >-
  https://www.notion.so/Control-access-to-cloud-platforms-and-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2
title: Control access to cloud platforms and Landing Zones
category: 🔖 Security & Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Security & Compliance
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 707c41b8-6da0-4e78-b982-fa4b1365521b
  scope: 🏢 Core
  summary: >-
    Implement automated policies to steer cloud consumers to appropriate cloud
    platforms and landing zones based on metadata about the cloud consumer.
  tool-implementations:
    - acf452d3-8425-41e2-ba8b-ee212a6fb189
    - d24b4c3a-1f97-4426-8999-f82a97bf1e75
  name: Control access to cloud platforms and Landing Zones
---

The Cloud Foundation team enforces compliance by validating projects risk estimate and on-premise integration usage match the target landing zone

## Why manage access to cloud platforms and landing zones

Cloud Foundation teams want to enable fast self-service cloud tenant provisioning (see [Self-Service Multi-Cloud Tenant Database](/maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md) ). Depending on the requirements (from Cloud Foundation customers) landing zones must be defined (see [Monolithic Landing Zone](/maturity-model/tenant-management/monolithic-landing-zone.md) and [Modular Landing Zones](/maturity-model/tenant-management/modular-landing-zones.md) ) and access to these Landing Zones controlled. Managing the access to the landing zones can be complex and may need manual effort which makes its desirable to be automated.

> **✏️**" **Example Scenario** Implementation of specific security requirements based on assessments. 
The most common known landing zone differentiation is probably the staging. We will only look into the network connectivity for simplification. While a PROD system needs to implement all security controls to be connected to the public world - DEV systems should usually never be connected to the internet.
Now the Question: How do I ensure that the DevOps Teams uses a DEV landing zone for their DEV cloud tenant and not accidentally (or intentionally) the PROD landing zone?

See **How to manage access to landing zones**

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Learn More on Automated Access Control</CtaHeader>
  <CtaText>Understand how organizations leverage Cloud Zones in practice or how to pave your path to a winning multi-cloud tagging strategy.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/use-case-cloud-zones/">Use Case Cloud Zones</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/">Tell me how to tag</CtaButton>
</CallToAction>



The Cloud Foundation team wants to enable their customers and provide them cloud tenants according to their requirements without neglecting compliance and security. It is therefore appropriate to define landing zones depending on clusters of similar use cases (or similar requirements) or based on governance, compliance and risk to reduce the implementation effort - the benefits of re-usable artifacts.

> **✏️**" **Example** :
Depending on the use cases certain restrictions or specific requirements may be necessary. 
Use cases can be as simple as staging environments or more complex for on-premise connectivity or restrictions cloud resources in the cloud tenant. Additionally various policies or rules can be defined for the landing zones.

The most common use case for access controls on landing zones are the definition of a security baseline for various staging environments (e.g. dev, test, QA, prod). The more differentiated the access controls need to be, the more important automated access controls become.

Usually, the restriction and controls on cloud tenants and the self-service provisioning contradict each other. This could force a decision to establish more control at the cost of a slower provisioning processes. It is important to know where your “balance of freedom” is defined. This means that the Cloud Foundation team needs to agree with their stakeholders (e.g. security) on the balance between the responsibilities for the self-service cloud tenant provisioning and the controls for restricting the access to landing zones. Again, automation can support you to keep accelerating the self-service provisioning.

## How to manage access to landing zones

The m etadata allows Cloud Foundation teams to control the access to landing zones. It also can be used to generate reporting and automating access checks. This will enable the Cloud Foundation team to have full control of the cloud governance while provisioning cloud tenants fast to DevOps teams.

> **✏️**" **Example Scenario** Restricting access based on risk and networking requirements

Cloud Foundation team *Likvid Bank*  n eeds to regulate the access to cloud platforms and landing zones as required by their internal compliance.
The access to the landing zones is depending on their risk estimate and on-premise integration.
> risk estimate: high, middle, low
> usage of on-premise integration: yes, no

The Cloud Foundation team enforces compliance by validating projects risk estimate and on-premise integration usage match the target landing zone.

If the project has a risk estimate of *high* and on-premise integration *no* it should only be able to use landing zones appropriated security configuration, integration setup etc.) and so on. The appropriated landing zones will have therefore the metadata risk estimate *high* and on-premise integration *no.*

### Manual access control

For the manual access control the metadata is only used to store the information which landing zone should be used for the cloud tenant provisioning. An operator from the Cloud Foundation team will read this information (on a form, ticket or other project related document) and provide the cloud tenant with the according landing zone.

### Automated access control

> **ℹ️**" Pre-requisition for the automated access control is the (semi-)automated [Tenant Provisioning](/maturity-model/tenant-management/tenant-provisioning.md) .

It is important to clarify the following questions to achieve the automated steering of cloud provisioning based on the metadata:

- What are the requirements for the use cases? Define and create Landing Zones according to these requirements for the defined use cases.

- Depending on which information can I make the decision which landing zone should be applicable for the cloud consumer?

- How could an implementation of the metadata mapping to the landing zones look like? Try to write down a concept for the “Zone Model”

    - Avoid to over-engineer the concept or the technical implementation. Cloud access controls based on metadata can be implemented with simple matching rules.

The metadata needs to be stored on the landing zone as well as on the customers request (e.g. on a digital form, ticket or directly on the provisioned cloud tenant). The landing zones is then applied on the cloud tenant based on the metadata. Therefore the automation implementation are read the metadata from the request ticket, create a cloud tenant and apply the landing zone which matches the metadata. Each cloud provider has APIs to apply landing zones on cloud tenants. Alternatively, the customer could only choose a landing zone in a form depending on the input metadata.

## Challenges

The following challenges need to be tackled to start with the metadata based access controls:

- What controls or tools are offered by the cloud provider to enforce policies, apply templates, landing zones or similar for the cloud resources provisioning?

- How can the metadata be synchronised across multiple cloud platforms and cloud resources?

## Azure

In Azure metadata can be tagged on resources and subscriptions.

## AWS

In AWS metadata can be tagged on either the Organisational (account) or on an resource level.

## GCP

In GCP metadata can be tagged as labels on resources and projects.

