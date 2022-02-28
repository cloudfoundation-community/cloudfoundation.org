---
id: 18256d4f-e096-4281-809a-f77c5dd20ef0
url: >-
  https://www.notion.so/Service-Account-Management-18256d4fe0964281809af77c5dd20ef0
title: Service Account Management
description: >-
  Managed provisioning and inventory of Service Accounts including their
  permission sets. Enables central enforcement of compliance policies for
  technical users like re-certification, credential strength and credential
  rotation.
category: 🔐 IAM
layout: CFMMBlock
properties:
  pillar: 🔐 IAM
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 137ac22d-b96c-4d49-aa83-da5779e3d59c
  scope: ☁️ Platform
  tool-implementations: []
  name: Service Account Management
---

## Why Service Account Management?

Service Accounts are identities that are tied to an application instead of a human. Service Accounts are used when automating tasks in the cloud.

Controlling access permissions is a central measure to minimize security risks in the cloud. Service Account Management means staying in control of access permissions. This is similar to the care with which access for human users is controlled.

Careful Service Account Management is especially relevant for cloud platforms where the creation of service accounts requires global administrative privileges. Take Azure for example: Creating a Service Principal requires AAD permissions. Therefore teams cannot create service accounts in self-service inside an isolated cloud tenant.

The approach to Service Account Management needs to be documented in [Identity and Access Management Concept](/maturity-model/iam/identity-and-access-management-concept.md).

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Enable Self-Service and Control Access Permissions</CtaHeader>
  <CtaText>Service Account Management for central enforcement of compliance policies for technical users like re-certification, credential strength and credential rotation.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2020/10/15/cloud-infrastructure-services-enterprise-wide-distribution-via-a-marketplace/">Learn more</CtaButton>
</CallToAction>

## Proven Patterns for Service Account Management

### Self-Service Is King

Time-to-cloud does not stop with a created tenant. Make it easy for DevOps teams to create scoped Service Accounts, preferably self-service (See [Modular Landing Zones](/maturity-model/tenant-management/modular-landing-zones.md) ).

### Decide if You Need to Document Permissions

Documentation of access rights is a common requirement for organizations in the finance or healthcare industries. If your organization requires access to be documented in an external system, it is worth automating the documentation system. This frees DevOps teams from the burden of figuring out where to go after the account is created.

### Clarify Who Is Responsible

There are multiple ways to do this: 

- Make the security owner of the project responsible for establishing proper use of service accounts

- Make the person creating them accountable for their use.  [Centralized audit logs](/maturity-model/security-and-compliance/centralized-audit-logs.md) always contain a log finding out who created a Service Account.

### Monitor Service Account Usage

Especially anti-patterns like lack of key rotation, extensive permissions (e.g. service accounts should never use default roles like GCP roles/editor) and unused service accounts should be detected and actions should be taken.