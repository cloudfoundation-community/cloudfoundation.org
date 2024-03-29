---
id: ac8a21c3-f692-4d23-a9bb-796fd311c39f
url: https://www.notion.so/Resource-Hierarchy-ac8a21c3f6924d23a9bb796fd311c39f
title: Resource Hierarchy
description: >-
  Define a cloud resource hierarchy structure that facilitates tenant isolation
  and policy enforcement. Maintain the integrity of this hierarchy to ensure
  capabilities built atop of it remain effective.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  recommended: []
  scope: ☁️ Platform
  tool-implementations:
    - 11f50039-a1d6-49de-9fbd-247a1955b474
    - 616451c2-8afc-4626-acae-7a0fc24384e1
    - 8bf8d22f-4612-4050-9e7f-4b0a51b2a839
    - 3d96d0aa-90b8-433e-8463-5be26014e70b
    - 3da9cf6c-972f-4152-9c85-9505fa6a8d2a
    - e018667f-0198-4fa2-b82f-967b960390a7
    - 43ba3b98-c6a2-4d2a-b4e2-93bc6841f3b7
    - 1c2e8bb1-5a32-4435-b319-bac181f57481
    - f02d3382-32e0-4d45-912e-a1c914d1afa5
    - 9c0cb471-dfd4-4c0f-98c8-7434d0193577
  name: Resource Hierarchy
---

Every cloud platform has a concept of multi-tenancy. At the most basic level, every resource or service in a cloud platform belongs to a “tenant”.  Tenants provide strong isolation guarantees between different customers so that resources in one tenant can not affect resources belonging to another tenant.

Tenants and cloud resources therefore always form the concept of a hierarchy. This hierarchy allows operators to establish rules and policies at the tenant level, that then apply to all resources within the tenant. One example of those are RBAC roles that grant permissions to modify an object storage bucket. When a user has this RBAC role assigned on the tenant level, they will have permission to modify any object storage bucket within the tenant.

Most cloud platforms today also offer higher-level constructs that allow modeling resource hierarchies above the tenant level, e.g. by grouping related tenants under folders or organization units. These higher-level constructs afford cloud foundation teams to centrally define and enforce policies across multiple tenants, thereby reducing complexity and simplifying governance. 

Designing and leveraging the cloud resource hierarchy is therefore an important starting point for establishing proper cloud governance. By deliberately placing cloud tenants in this hierarchy right from the start (see [Tenant Provisioning](./tenant-provisioning.md)), cloud foundation teams can easily ensure the consistent enforcement of guardrails like [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md).

## Examples of Cloud Resource Hierarchy

The following list is a quick reference to the different resource hierarchies in cloud platforms. The list uses bold font to denote the **tenant** concept.

- **AWS:** Organization → Organization Unit → **Account** → *Resources*

- **Azure:** Root Management Group (AAD Tenant) → Management Group → **Subscription** → Resource Group → *Resources*

- **GCP:** Organization → Folder → **Project** → *Resources*

- **Kubernetes (and OpenShift): Namespace (Project)** → *Resources*

    - **OpenStack:** Domain → **Project** → *Resources*

- **Cloud Foundry:** Foundation → Organization → **Space** → Resources

> **⛅** Despite all the differences in naming and implementation details, there are a lot of conceptual similarities between the different platforms. Cloud foundation teams on a mission to implement a multi-cloud strategy can leverage these conceptual similarities to drive a consistent governance approach across multiple clouds. 

## Best Practices for Setting up Cloud Resource Hierarchy

> **💡** Cloud Resource Hierarchy is an important early design decision to make in your cloud journey. Pay attention to its scalability along these dimensions
>   - managing a large number of tenants
>   - managing day-two operations like reorganization and changing responsibilities
>   - adopting a multi-cloud strategy

### As Flat as Possible, as Deep as Necessary

Keep the resource hierarchy above the tenant level as flat as possible to reduce complexity and management overhead. Every layer in the resource hierarchy can define its own set of policies and exceptions. Deeply nested structures thus make it more difficult to track the final set of policies that a tenant inherits. This complexity makes it more difficult to maintain and evolve your cloud foundation.

### Automate Deployment and Maintenance of the Resource Hierarchy

While it may be tempting to initially deploy a cloud resource hierarchy manually, maintaining the hierarchy is important because a lot of fundamental capabilities like [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md) or [Tenant Provisioning](./tenant-provisioning.md) built atop of it. Maintaining your resource hierarchy via infrastructure as code helps preventing configuration drift and enforcing consistency. 

### Decouple Cloud Resource Hierarchy from Your Org Chart

Avoid duplicating your organizational structure into the cloud resource hierarchy.

> **💡** Many IT systems outlive the organizational team that initially created or deployed them. As the cloud is an infrastructure platform, start with IT systems as the primary unit of organization.

Organizational structures are much more likely to change than IT systems. For example, an IT system may be handed over to another team for maintenance, but stay the same otherwise. Or your organization undergoes a reorganization with big changes to reporting hierarchies and department numbers. Would you want to reflect every one of these changes in the cloud platform resource hierarchy? It’s much easier to apply these organizational changes in a [Cloud Tenant Database](./cloud-tenant-database.md) while leaving the IT system’s infrastructure otherwise untouched. Instead of encoding organizational metadata in the resource hierarchy, [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) offers a more flexible way to bring up-to-date metadata into the cloud.

Design your resource hierarchy so that your internal customers can leverage dedicated tenants for the different stages (e.g. development, production) of IT systems. Most likely you will want to enforce different guardrails for productive and non-productive environments, which implies that they will live in separate parts of the resource hierarchy.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Structure your clouds</CtaHeader>
  <CtaText>Check out meshcloud’s white paper “<b>Best Practices of Modeling your Organizational Structure in the Cloud</b>” as an introduction to organizational design in the cloud.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/best-practices-organizational-structure-in-the-cloud/">Tell me about structuring my clouds</CtaButton>
</CallToAction>

### Beware of Resource Hierarchies Serving Double-Duty 

A lot of guidance about setting up cloud resource hierarchies you may find elsewhere is focused on helping an organization *adopt* a *single cloud* only. There are two challenges with this type of guidance. First, it looks at practices from the perspective of an organization that’s new to cloud and wants to solve the “onboarding” part of the cloud journey while paying little attention to day two operations. Second, it emphasizes outsourcing governance operations as much as possible to the cloud platform’s built-in capabilities. This can create “organizational vendor lock-in” and make it difficult to implement consistent governance across multiple clouds.

When just starting out on a cloud journey, it’s tempting to leverage resource hierarchy to quickly offer self-service capabilities to larger organization units like departments or divisions by giving them their own place in the cloud resource hierarchy. For example, giving a department head `Owner` permissions on a Folder in a Google Cloud Organization can allow that department to quickly create new projects, manage IAM permissions and billing for all of their projects. However, this individual freedom will make it difficult to establish a scalable governance architecture leveraging landing zones to enforce consistency across a large number of cloud tenants. A proper [Tenant Provisioning](./tenant-provisioning.md) process, [Federated Identity and Authentication](../iam/federated-identity-and-authentication.md) and [Monthly cloud tenant billing report](../cost-management/monthly-cloud-tenant-billing-report.md) can provide similar (or greater!) freedom to your internal customers while ensuring a scalable governance approach. 

Another consideration is what governance concerns you want to leverage the resource hierarchy for. For example, if your primary aim is to leverage the resource hierarchy to establish and enforce consistent policies (e.g. to build landing zones), mixing this with billing concern (aggregate consumption charges per department) is going to result in a complex and less maintainable resource hierarchy. We thus recommend to separate concerns like [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md) to its own governance process instead of loading it onto the resource hierarchy.

### Separate Shared Services and Internal Customer Workloads

As the cloud foundation team you will likely want to add more advanced capabilities like [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) to your service offering later on. Separate these shared services and customer workloads in the resource hierarchy on a very high level up the tree. This is especially relevant if you want to simultaneously enforce policies like [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md) to enforce use of shared services. 

### Consider Separating Productive and Non-Productive Workloads

Strong separation of productive and non-productive workloads should go into different landing zones. Your resource hierarchy should reflect this. This especially critical if productive systems are facing additional regulatory requirements compared to development or test workloads.