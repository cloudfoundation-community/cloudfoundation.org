---
id: 0dd09c75-2acd-4e87-9721-6b5f563da035
url: https://www.notion.so/Authorization-Concept-0dd09c752acd4e8797216b5f563da035
title: Authorization Concept
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🔐 IAM
  enables:
    - 1afea746-da65-4164-9029-5e0bfa9432b1
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: 🏢 Core
  summary: >-
    Define a multi-cloud authorization concept that platforms can implement
    independently and according to the cloud platform's native authorization
    capabilities. The authorization concept should consider key principles like
    segregation of duties, need-to-know and separation of privileged and
    unprivileged roles.
  tool-implementations:
    - 01a9cbca-3dd4-4378-b1f5-1ae64b76cc19
  name: Authorization Concept
---

## Key considerations and Best Practices

- **Start with default roles** - cloud providers typically offer a set of built-in roles that grant typical set of permissions (e.g. `Contributor` on Azure or `Editor` on GCP). While a more fine-granular segregation of roles can enable better fulfilment of least-privilege principle, the advantages of centralised oversight and consistency typically outweigh these benefits in the early stages of a cloud journey. Most authorization concepts use 2-3 types of default roles (e.g. `Reader` , `Developer` , `Manager` ).

- **Use a clear and consistent mapping of roles to groups across all cloud platforms -** creating "role-groups" with a consistent naming policy like `$tenant-$role` in cloud platform directories simplifies permission management by reducing the number of permissions assignments necessary (e.g. after [Tenant Provisioning](/explore/blocks/tenant-provisioning.md) ). Also, these "role-groups" can be easily integrated with existing IAM infrastructure, see [Identity and Access Management](/explore/blocks/identity-and-access-management.md) and [Federated Identity and Authentication](/explore/blocks/federated-identity-and-authentication.md) 

