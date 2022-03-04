---
id: 1afea746-da65-4164-9029-5e0bfa9432b1
url: >-
  https://www.notion.so/Privileged-Access-Management-1afea746da65416490295e0bfa9432b1
title: Privileged Access Management
description: >-
  Implement appropriate security controls for privileged access as defined in
  the Authorization Concept. These must cover access to administrative cloud
  platform roles (e.g. Global Admins, Global Readers) and shared services (e.g.
  on-premise connectivity hubs). 
category: 🔐 IAM
layout: CFMMBlock
sidebar: false
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
  scope: ☁️ Platform
  tool-implementations: []
  name: Privileged Access Management
---

Access to cloud tenants is usually not a privileged operation from the point of view of a cloud foundation, however DevOps teams using these cloud tenants need to be equipped with appropriate means to secure access to their environments. From DevOps team PoV cloud tenants are infrastructure and access to application infra is usally administrative/privileged from this PoV.

- See meshStack authroization concept 

- Emergency Users [https://docs.meshcloud.io/docs/administration.emergency-users.html#docsNav](https://docs.meshcloud.io/docs/administration.emergency-users.html#docsNav)



Common implementations for platform operator PAM: 

- for Azure could be using [Azure AD Privileged Identity Management](https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure)

- "break glass" routines to recover root account access (e.g. MFA + password reset procedures, sharded keys etc.)

