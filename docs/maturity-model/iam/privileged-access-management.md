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
  enables:
    - 18256d4f-e096-4281-809a-f77c5dd20ef0
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
  recommended: []
  scope: ☁️ Platform
  tool-implementations:
    - aade65c8-e80c-46e8-b993-23a50076f62d
    - 3d5c12a5-9f91-4e6a-9b3c-774d5389b9d7
    - 9cae193b-0656-4bac-bdd8-34cff905b947
    - 5b377afd-a818-45a5-b834-f74244da53cd
    - 4830a114-548a-461f-97b4-91cc6d9811a0
    - 40707260-c803-4910-99bf-c5a860e74328
    - 03e67c51-82e1-4e4d-87df-dc431954f9b8
  name: Privileged Access Management
---

## What Is Privileged Access Management (PAM)?

Privileged Access Management (PAM) refers to the implementation of security measures and best practices to control and monitor access to critical resources within cloud platforms. For cloud foundation teams, it is about safeguarding administrative roles that enable access to core infrastructure, ensuring the security, compliance, and visibility needed to oversee application teams' cloud usage.

> **💡** From the perspective of application teams, privileged access management refers to access to cloud tenants and infrastructure running their workloads. The cloud foundation maturity model discusses this perspective separately in the [Resource Authorization Management](./resource-authorization-management.md) capability.

This article explores the essential aspects of Privileged Access Management and provides best practice recommendations for AWS, Azure, and GCP.

### **The Significance of Privileged Access Management**

Privileged Access Management is essential for several reasons:

1. **Security:** Protecting privileged accounts is critical to prevent unauthorized access and potential security breaches that could lead to data leaks or system compromises.

1. **Compliance:** Many regulatory standards require strict control and monitoring of privileged access, making PAM crucial for maintaining compliance.

1. **Operational Efficiency:** Proper PAM ensures that authorized users have the necessary access to perform their duties efficiently, reducing operational risks.

1. **Auditing and Monitoring:** It allows for comprehensive tracking and auditing of actions taken by privileged users, enabling timely threat detection and response. This is usually provided by [Centralized audit logs](../security-and-compliance/centralized-audit-logs.md).

### **Privileged Roles for Cloud Foundation Teams**

A typical cloud foundation will have various roles, each with its set of responsibilities. These roles typically include:

- **Security Auditors:** Responsible for ensuring compliance and security across cloud resources.

- **Billing Admins:** Manage financial aspects of cloud usage and allocate costs to various teams or projects.

- **Network Admins:** Oversee networking configurations, ensuring connectivity and security.

- **Platform Engineers:** Responsible for deploying Landing zones, performing or automating [Tenant Provisioning](../tenant-management/tenant-provisioning.md), [Tenant Deprovisioning / Decommissioning](../tenant-management/tenant-deprovisioning-decommissioning.md) as well as deploying individual services as part of [Modular Landing Zones](../tenant-management/modular-landing-zones.md).

### **Emergency Access Accounts and "Break Glass Routine"**

Emergency access accounts are a crucial part of PAM. These accounts are reserved for rare, critical situations, such as when standard access mechanisms fail or during security incidents. To ensure controlled access:

- **Define Strict Access Procedures:** Create detailed procedures for who can access these accounts and under what circumstances.

- **Regular Review:** Periodically review and update these procedures to ensure their effectiveness.

- **Multi-Factor Authentication (MFA):** Enforce MFA for emergency accounts to add an extra layer of security.

If your organization is already using on-premise Privileged Access Management solutions like CyberArk, you can extend their capabilities to the cloud. These solutions offer centralized control and monitoring of privileged access, making them valuable in a multi-cloud environment.

## Best Practices for Implementing Privileged Access Management

### **AWS Privileged Access Management Best Practices**

- **Root User Credential Management:** The AWS root user should have its password securely stored and only accessed through a well-documented and tightly controlled[ "break glass" procedure](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html). Cloud Foundation teams should not hand over these credentials to application teams.

- **Use IAM Roles:** AWS Identity and Access Management (IAM) roles should be employed for day-to-day administrative tasks instead of root user access.

- **Temporary Access:** Assume privileged roles only for the duration necessary to perform administrative operations to implement [Temporary Elevated Access](https://aws.amazon.com/blogs/security/managing-temporary-elevated-access-to-your-aws-environment/).

### **Azure Privileged Access Management Best Practices**

Azure Active Directory (AAD) provides built-in PAM mechanisms:

- **Azure Privileged Identity Management (PIM):** Azure PIM allows just-in-time privileged access, ensuring roles are only active when needed.

- **Azure Conditional Access:** Implement Conditional Access policies to restrict access based on various criteria, such as location, device, and risk.

> **💡** Leveraging some of these features requires AAD Premium P1 or P2 Licenses.

### GCP **Privileged Access Management Best Practices**

GCP does not have similar built-in PAM capabilities like AAD. Its lack of Root user credentials (like in AWS) however simplify PAM management.

- **External Identity Providers:** GCP allows you to integrate with external identity providers (IdPs), such as Google Workspace, LDAP, or SAML-based providers. This is similar to Azure's ability to integrate with external IdPs.

In conclusion, Privileged Access Management is a cornerstone of cloud security and governance. By implementing the best practices outlined for AWS, Azure, and GCP, cloud foundation teams can ensure the integrity and security of their cloud infrastructure while supporting the diverse needs of their application teams.

