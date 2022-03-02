---
id: 0dd09c75-2acd-4e87-9721-6b5f563da035
url: https://www.notion.so/Authorization-Concept-0dd09c752acd4e8797216b5f563da035
title: Authorization Concept
description: >-
  Define a multi-cloud authorization concept that platforms can implement
  independently and according to the cloud platform's native authorization
  capabilities. The authorization concept should consider key principles like
  segregation of duties, need-to-know and separation of privileged and
  unprivileged roles.
category: 🔐 IAM
pageType: CFMMBlock
properties:
  pillar: 🔐 IAM
  enables:
    - 1afea746-da65-4164-9029-5e0bfa9432b1
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
  scope: 🏢 Core
  tool-implementations:
    - 01a9cbca-3dd4-4378-b1f5-1ae64b76cc19
  name: Authorization Concept
---

## Key Considerations and Best Practices

- **Start with default roles** - cloud providers typically offer a set of built-in roles that grant typical set of permissions (e.g. `Contributor` on Azure or `Editor` on GCP). While a more fine-granular segregation of roles can enable better fulfilment of least-privilege principle, the advantages of centralised oversight and consistency typically outweigh these benefits in the early stages of a cloud journey. Most authorization concepts use 2-3 types of default roles (e.g. `Reader`, `Developer`, `Manager`). 

- **Use a clear and consistent mapping of roles to groups across all cloud platforms -** creating "role-groups" with a consistent naming policy like `$tenant-$role` in cloud platform directories simplifies permission management by reducing the number of permissions assignments necessary (e.g. after [Tenant Provisioning](../tenant-management/tenant-provisioning.md)). Also, these "role-groups" can be easily integrated with existing IAM infrastructure, see [Identity and Access Management Concept](./identity-and-access-management-concept.md) and [Federated Identity and Authentication](./federated-identity-and-authentication.md) 

## Open vs. Closed Landing Zones

**Open** landing zone designs allow teams to create and modify IAM roles and permissions on cloud tenants. The cloud foundation only enforces a minimum set of IAM policies on the tenant.  **Closed** landing zone designs on the other hand prevent teams from creating or modifying IAM roles and permissions on cloud tenants. Teams must request all such changes via the cloud foundation team or the provided tooling like [Service Account Management](./service-account-management.md).

### Benefits and Risks of Landing Zone Designs

<!-- included database a5214235-32cb-4fbf-b216-764bc7213ba3 -->
| Criteria                     | Closed Landing Zone                                                                                                                                                                                                                                                           | Open Landing Zone                                                                                                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privilege Escalation Risk    | ✅ Easy to control by scoping role permissions appropriately and avoiding IAM related permissions.                                                                                                                                                                             | ⚠️ Very difficult to secure against privilege escalation attacks. Few platforms offer built-in mitigations capabilities (e.g. Kubernetes), others required complex measures (e.g. Azure Policy countering Azure RBAC).                      |
| Principle of Least Privilege | ⚠️ Difficult to implement, user and service accounts often carry too many permissions. Risk of rogue users and automation impacting resources (e.g. unintentionally deleting resources).                                                                                      | ✅ Allows teams to create dedicated IAM roles for users and service accounts scoped to the least privileges necessary. Depending on the platform, "sudo" modes can be implemented by allowing users to assume a higher privileged role. <br> |
| Recertification              | ✅ Simplified recertification based on known risk profiles of available IAM roles. Depending on the implementation of  Federated Identity and Authentication  across supported cloud platforms, certification of the central IAM repository (e.g. an AD) might be sufficient.  | ⚠️ Difficult to perform as cloud tenants can have highly individualized IAM roles and assignments. This makes it difficult to assess risk profiles of individual roles and consider it in recertification processes appropriately.          |