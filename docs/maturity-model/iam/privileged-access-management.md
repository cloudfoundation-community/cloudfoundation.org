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
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
  scope: ☁️ Platform
  tool-implementations: []
  name: Privileged Access Management
---

## What Is PAM?

Access to cloud tenants is usually not a privileged operation from a cloud foundation perspective but for DevOps team it is the other way round. From the DevOps team perspective, cloud tenants are an infrastructure and access to the application infrastructure is usually administrative/privileged. DevOps teams using these cloud tenants need to be equipped with appropriate means to secure access to the environments. 

## Key Points

- Let us first understand what is open and closed landing zone.

**Open** landing zone designs allow teams to create and modify IAM roles and permissions on cloud tenants. The cloud foundation only enforces a minimum set of IAM policies on the tenant.  

**Closed** landing zone designs on the other hand prevent teams from creating or modifying IAM roles and permissions on cloud tenants. Teams must request all such changes via the cloud foundation team.

For more details on authorization and privileged access, please refer  to the topic [Authorization Concept](./authorization-concept.md).

- meshStack manages access to cloud platforms, projects and resources. In case urgent intervention is required by someone without regular access permissions there must be a defined process to securely access meshProjects and associated meshTenants. Depending on your organization's requirements, these procedures can be augmented with additional organizational or technical procedures.

Use cases for **emergency users** and emergency intervention include

- An important application has stopped functioning and operating users needs access to debug and fix the problem

- Project access for a specific user must be immediately revoked (e.g. due to an account compromise)

In all cases, access permissions can always be modified through the [meshPartner](https://docs.meshcloud.io/docs/administration.index.html) account which is managed by an operations team. If available, a user with customer admin access is also sufficient for some cases.

## Implementation of PAM

### Azure Active Directory (AAD)

Privileged Identity Management (PIM) is a service in Azure Active Directory (Azure AD) that enables you to manage, control, and monitor access to important resources in your organization. For more details, please refer to [Azure AD Privileged Identity Management](https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure).

### Google Cloud Identity

In Azure it is possible to restrict access to the production environment using Azure AD. This can be achieved using Google Cloud Organization Service. Also, if you use Google Cloud Directory Sync you can manage users through Azure Active Directory and use it to authenticate against Google Cloud.

### AWS SSO

PAM solutions are designed to enforce consistent PAM best practices every time a new AWS account is set up, whether that’s by the security team, the infrastructure team or a single developer building an application. For more details, please refer to [**Managing temporary elevated access**](https://aws.amazon.com/blogs/security/managing-temporary-elevated-access-to-your-aws-environment/).

