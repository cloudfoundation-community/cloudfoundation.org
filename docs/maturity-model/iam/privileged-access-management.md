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

## What Is Privileged Access Management (PAM)?

In an enterprise environment, “privileged access” is a term used to designate special access or abilities above and beyond that of a standard user. Privileged access allows organizations to secure their infrastructure and applications, run business efficiently and maintain the confidentiality of sensitive data and critical infrastructure.

Access to cloud tenants is usually not a privileged operation from a cloud foundation perspective but for DevOps team it is the other way round. From the DevOps team perspective, cloud tenants are an infrastructure and access to the application infrastructure is usually administrative/privileged. DevOps teams using these cloud tenants need to be equipped with appropriate means to secure access to the environments. 

## Key Points

Below you will find some important points to understand PAM better:

- Let us first understand what is open and closed landing zone.

    **Open** landing zone designs allow teams to create and modify Identity and Access Management (IAM) roles and permissions on cloud tenants. The cloud foundation only enforces a minimum set of IAM policies on the tenant.  

    **Closed** landing zone designs on the other hand prevent teams from creating or modifying IAM roles and permissions on cloud tenants. Teams must request all such changes via the cloud foundation team.

    For more details on authorization and privileged access, please refer to the topic [Authorization Concept](./authorization-concept.md).

- Emergency access accounts are highly privileged, and they are not assigned to specific individuals. Emergency access accounts are limited to emergency or "break glass"' scenarios where normal administrative accounts can't be used. It is recommended that you maintain a goal of restricting emergency account use to only the times when it is absolutely necessary. For example, when an important application has stopped functioning and operating users needs access to debug and fix the problem or when project access for a specific user must be immediately revoked due to an account compromise.

- PAM is grounded in the principle of least privilege wherein users only receive the minimum levels of access required to perform their job functions. The principle of least privilege is widely considered to be a best practice and is a fundamental step in protecting privileged access to high-value data and assets.

## Implementation of PAM

### Azure Active Directory (AAD)

Privileged Identity Management (PIM) is a service in Azure Active Directory (Azure AD) that enables you to manage, control, and monitor access to important resources in your organization. For more details, please refer to [Azure AD Privileged Identity Management](https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure).

### Google Cloud Identity

In Azure it is possible to restrict access to the production environment using Azure AD. This can be achieved using Google Cloud Organization Service. Also, if you use Google Cloud Directory Sync you can manage users through Azure Active Directory and use it to authenticate against Google Cloud.

### AWS SSO

PAM solutions are designed to enforce consistent PAM best practices every time a new AWS account is set up, whether that’s by the security team, the infrastructure team or a single developer building an application. For more details, please refer to [**Managing temporary elevated access**](https://aws.amazon.com/blogs/security/managing-temporary-elevated-access-to-your-aws-environment/).

