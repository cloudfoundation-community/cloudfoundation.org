---
id: 09e744c5-e12a-49e8-8b6f-b7e3c44ba63b
url: >-
  https://www.notion.so/Resource-Configuration-Scanning-09e744c5e12a49e88b6fb7e3c44ba63b
title: Resource Configuration Scanning
description: >-
  Scan cloud resource configurations against a catalog of configuration policies
  for potential security risks and compliance violations.
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - 802fdd8d-7fc0-4749-937f-e9e0ccb3f273
    - dff7d733-d987-4145-aa1a-e340b5bcff81
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - 344b75a4-595b-4ba5-8851-ddfb6d4acf7c
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations: []
  name: Resource Configuration Scanning
---

After implementing policies that proactively prevent insecure or incompliant resource configurations with [Resource Configuration Policies](./resource-configuration-policies.md), cloud foundation teams should consider looking into scanning cloud resources for risky configurations and reacting accordingly with an [Incident Management Process](./incident-management-process.md).

## Overview of Tools for Cloud Resource Configuration Scanning

There are a number of different tools and techniques that Cloud Foundation Teams can leverage to implement cloud resource configuration scanning. These tools have different strengths and weaknesses. 

> **🌤️** Cloud foundation teams should strongly consider starting with the first-party solutions offered by cloud providers as they benefit from tight integration and timely updated support for new cloud services and resource types. 

### Implementing Resource Configuration Scanning on AWS

For an AWS cloud platform, most foundation teams leverage the following services 

- [AWS Guard Duty](https://aws.amazon.com/guardduty/) - monitors AWS Accounts and resource configuration for IaaS and Container Workloads 

- [AWS Config](https://aws.amazon.com/config/) - records change events to AWS resources and evaluates them against policies for a wide range of services

One practical downside of these solutions is their lack of cost predictability due to complex pricing models and a strong dependence on the actual workloads and resources deployed by your organization.   Another challenge is that achieving a comprehensive overview of all resources requires extensive knowledge of a myriad of services and solutions.

### Implementing Resource Configuration Scanning on Azure

On Azure, most foundation teams leverage [Azure](https://azure.microsoft.com/en-us/products/azure-policy/#overview)[ Policy](https://azure.microsoft.com/de-de/products/azure-policy/#overview) with `audit` effects in combination with Azure Security Center and optionally Azure Sentinel.  The integration between policy and result reporting in Azure Security is very strong, including initiative management (grouping of multiple policies) and built-in dashboarding.

### Implementing Resource Configuration Scanning on GCP

Google Cloud offers some built-in capabilities for configuration scanning as part of the extensive [Security Command Center](https://cloud.google.com/security-command-center#section-7) product. Depending on your organization’s needs, this solution may be oversized (or exactly what you need) since it also covers [Incident Management Process](./incident-management-process.md) and [Cloud SIEM](./cloud-siem.md) needs as well. 

> **⛈️** The [Forseti](https://github.com/forseti-security/forseti-security) open source solution developed by Google has seen its latest releases in 2020. At this point we don’t advise adopting it for new implementations.

GCP also offers a strong [cloud asset inventory](https://cloud.google.com/asset-inventory/docs/overview) service based on big query that makes implementing custom policies possible.

## Cloud Security Posture Management Solutions

Cloud foundation teams that need to provide multi-cloud coverage should evaluate third-party Cloud Security Posture Management solutions like [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud). These solutions provide cloud resource configuration, often based on custom asset inventories and bespoke policy engines. Some of these tools also include “abstraction layers” for cloud resources across multiple clouds. Formulating policies against these abstraction layers can simplify policy implementation effort by writing policies only once, at the sacrifice of precision and the ability to account for cloud-specific configuration issues. 

## Enforcing Compliance at Deployment-Time

When your organization uses a standardized SDLC toolchain (e.g. GitHub and deploying all resources via Terraform Cloud), enforcing compliance via tools like Sentinel is an option. However, in practice we see most organizations not having the required standardization in deployment processes and cloud foundation teams not in the right position to enforce these practices. This does not mean that adding these components does not provide value to the organization, but we see their role more in augmenting resource configuration scanning implemented at the cloud platform level rather than as a full replacement.