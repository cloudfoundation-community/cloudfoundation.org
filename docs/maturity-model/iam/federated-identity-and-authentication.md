---
id: b4678790-ab53-4219-83e7-fbde18383d05
url: >-
  https://www.notion.so/Federated-Identity-and-Authentication-b4678790ab53421983e7fbde18383d05
title: Federated Identity and Authentication
category: 🔐 IAM
layout: CFMMBlock
properties:
  pillar: 🔐 IAM
  enables:
    - 456f15f2-299e-4a8b-a8c9-cb0580a887d2
  journey-stage: ⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
  scope: ☁️ Platform
  summary: >-
    Integration Cloud Platform IAM systems with Enterprise IAM landscape incl.
    federated authentication.
  tool-implementations: []
  name: Federated Identity and Authentication
---

## Typical Implementations

Most organisations rely on an Active Directory or LDAP based on-premise system as a central user directory. Enterprise IAM Systems provision users to this central directory, integrating HR workflows and master data (user onboarding/offboarding) as well as permission workflows (approval, job roles etc.).

### Azure Active Directory

Synchronize the central enterprise AD to Azure using the [Azure AD Connect Sync](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sync-whatis) tool. Leverage [hybrid identity](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/) architecture to federate AAD authentication to an on-premise ADFS service.

Leveraging Azure AD Connect Sync also makes it trivial to implement [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md) .

### Google Cloud Identity

Synchronize the central enterprise AD or LDAP using to Google Cloud Identity using the [Google Cloud Directory Sync](https://support.google.com/a/answer/106368?hl=en) (GCDS) tool. Setup federated authentication to an on-premise authentication service such as ADFS or any other Identity Provider supporting SAML/OIDC based authentication.

Leveraging GCDS also makes it trivial to implement [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md) .

### AWS SSO

[AWS SSO](https://aws.amazon.com/single-sign-on/) supports the SCIM protocol for identity provisioning and deprovisioning. While SCIM is a well-established protocol, many deployed on-premise IAM systems still lack support for this protocol. Typical IAM architectures deploying AWS SSO therefore use a "cloud-enabled" Identity Provider such as Azure Active Directory or Google Cloud Identity that supports SCIM in a "two-tiered" IAM architecture that synchronises identities from On-Premise to e.g. AAD and then from AAD to AWS SSO.

Leveraging SCIM in this manner also makes it trivial to implement [Identity Lifecycle Management](/maturity-model/iam/identity-lifecycle-management.md) .

## Sync Groups

A fundamental pre-requisite for these federated identity architectures is to determine the set of identities to synchronise to cloud directories. It's best practice to avoid syncing the whole on-premise directory, as this needlessly distributes personally identifiable information (PII) and violates "need to know" principles.

Only a subset of identities managed in an on-premise IAM system are relevant to a cloud foundation. Typically, the relevant set includes IT staff working on cloud related projects and excludes general office staff. A "sync group" determines the identities relevant for syncing to the cloud directories and can be built using automated rules via job roles, department membership or using membership request/approval workflows.