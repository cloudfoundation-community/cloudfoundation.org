---
id: 0dd09c75-2acd-4e87-9721-6b5f563da035
url: >-
  https://www.notion.so/Resource-Authorization-Management-0dd09c752acd4e8797216b5f563da035
title: Resource Authorization Management
description: >-
  Establish consistent guidelines and guardrails for managing authorization to
  cloud resources in Landing Zones. Authorization management should consider key
  principles like segregation of duties, need-to-know and separation of
  privileged and unprivileged roles.
category: 🔐 IAM
pageType: CFMMBlock
properties:
  enables:
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
    - dff7d733-d987-4145-aa1a-e340b5bcff81
    - 3c65a957-cb62-40fe-978e-709e3450f7fe
    - 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
    - b0a04ae8-c9b3-4060-abfd-e760723995d8
    - 74295ae4-dcd5-449b-8825-f12c5267e89b
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - f271478b-3921-494f-ab2c-de97808d3bb7
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
    - 1afea746-da65-4164-9029-5e0bfa9432b1
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations:
    - 01a9cbca-3dd4-4378-b1f5-1ae64b76cc19
  name: Resource Authorization Management
---

Resource Authorization Management describes the processes and practices used to grant permissions on cloud resources. As such it is about finding a balance between agility and control for each Landing Zone.

There are two fundamental design approaches to answering this question: Open and Closed Landing Zones.

## Open and Closed Landing Zone Designs

**Open** landing zone designs allow teams to create and modify IAM roles and permissions on cloud tenants. The cloud foundation only enforces a minimum set of IAM policies on the tenant.  

**Closed** landing zone designs on the other hand prevent teams from creating or modifying IAM roles and permissions on cloud tenants. Teams must request all such changes via the cloud foundation team or the provided tooling like [Service Account Management](./service-account-management.md).

### Benefits and Risks of Landing Zone Designs

<!-- included database a5214235-32cb-4fbf-b216-764bc7213ba3 -->
| Criteria                     | Closed Landing Zone                                                                                                                                                                                                                                                        | Open Landing Zone                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privilege Escalation Risk    | ✅ Easy to control by scoping role permissions appropriately and avoiding IAM related permissions.                                                                                                                                                                          | ⚠️ Difficult to secure against privilege escalation attacks. Few platforms offer built-in mitigations capabilities (e.g. Kubernetes), others required complex measures (e.g. Azure Policy countering Azure RBAC). <br>Furthermore users can accumulate permissions over time.                                                                  |
| Principle of Least Privilege | ⚠️ As roles tend to be more generic (cross resources) difficult to implement because user and service accounts often carry too many permissions. Risk of rogue users and automation impacting resources (e.g. unintentionally deleting resources).                         | ✅ Allows teams to create dedicated IAM roles for users and service accounts scoped to the least privileges necessary. Team members working in the same tenants can have different permissions on services and resources. Depending on the platform, "sudo" modes can be implemented by allowing users to assume a higher privileged role. <br> |
| Recertification              | ✅ Simplified recertification based on known risk profiles of standard IAM roles. Depending on the implementation of Federated Identity and Authentication across supported cloud platforms, certification of the central IAM repository (e.g. an AD) might be sufficient.  | ⚠️ Difficult to perform as cloud tenants can have highly individualized IAM roles and assignments on resource level. This makes it difficult to assess risk profiles of individual roles and consider it in recertification processes appropriately.                                                                                           |



## Key Considerations and Best Practices

- **Start with default roles in cloud-native Landing Zones**

    Cloud providers typically offer a set of built-in roles that grant typical set of permissions (e.g. `Contributor` on Azure or `Editor` on GCP). While a more fine-granular segregation of roles can enable better fulfillment of least-privilege principle, the advantages of centralized oversight and consistency typically outweigh these benefits in the early stages of a cloud journey. Most authorization concepts use 2-3 types of default roles (e.g. `Reader`, `Developer`, `Manager`). 

- **Use a clear and consistent mapping of roles to groups across all cloud platforms**

    Creating "role-groups" with a consistent naming policy like `$tenant-$role` in cloud platform directories simplifies permission management by reducing the number of permissions assignments necessary (e.g. after [Tenant Provisioning](../tenant-management/tenant-provisioning.md)). Also, these "role-groups" can be easily integrated with existing IAM infrastructure, see [Identity and Access Management Alignment](./identity-and-access-management-alignment.md) and [Federated Identity and Authentication](./federated-identity-and-authentication.md) 