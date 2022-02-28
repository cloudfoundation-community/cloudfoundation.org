---
id: bd309e8a-9ecd-4a0d-a3c3-b464f734ca54
url: https://www.notion.so/Tenant-Management-bd309e8a9ecd4a0da3c3b464f734ca54
title: 🗂 Tenant Management
description: >-
  Manage provisioning, configuration and lifecycle of cloud environments (e.g.
  AWS Accounts).
---

> **💡** Manage provisioning, configuration and lifecycle of cloud environments (e.g. AWS Accounts).

> **👥** This is often an original responsibility of cloud foundation teams that requires internal alignment between platform specialists.

Multi-tenancy is a cornerstone of cloud computing. It allows different tenants to share the same physical cloud infrastructure while maintaining strong isolation and security guarantees between tenants. 

Cloud providers have historically chosen slightly different ways for implementing the abstract concept of multi-tenancy. What they all have in common is that there’s some primitive concept that ties together all resources of a tenant and provides those isolation guarantees. These isolation primitives can be called differently in each platform:

- AWS: Accounts

- GCP: Projects

- Azure: Subscriptions

- Kubernetes (incl. OpenShift, AKS, ...): Namespaces

- Cloud Foundry: Spaces

- OpenStack: Project

Most Cloud Platforms today also have higher-level tenancy concepts that allow an organization to tie together a large number of these primitive tenants such as AWS and GCP Organizations, Azure Management Groups and similar constructs to form a [Resource Hierarchy](/maturity-model/tenant-management/resource-hierarchy.md). 

By leveraging the primitive tenant isolation concept, organizations adopting the cloud can segregate IT systems into individual tenants. This establishes clear boundaries of responsibility and improves security posture by limiting blast radius at an infrastructure level.