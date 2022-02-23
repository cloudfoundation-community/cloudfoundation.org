---
id: 9ee0a54d-9b9e-47dd-9fc0-9d81213ce76c
url: https://www.notion.so/IAM-9ee0a54d9b9e47dd9fc09d81213ce76c
title: 🔐 IAM
category: Understanding Cloud Foundation
order: 21
---

Identity and Access Management (IAM) is a crucial key pillar regarding any application or integration effort. IAM covers the life cycle for identities as well as controls for authentication and authorisation. There are multiple ways to integrate or implement an IAM system in a classical enterprise architecture.

Explore best practices, good real world examples or standards regarding IAM integration to design your own secure identity life cycle in the cloud. Public cloud providers offer integrations and solutions for identity federation, identity sync or managing cloud native identities.

The following shows an example high level architecture:

```mermaid
graph TB
	iam[Enterprise IAM System]
	identitySource[(Golden Identity Source)]
	identityConnector[Connector/Sync]
	az[Azure AAD]
	gc[Google GCD]
	aws[AWS SSO]
	user([User])

iam --> identitySource
user -- 1. login --> iam
identitySource --> identityConnector
identityConnector --> az
identityConnector --> gc
identityConnector --> aws
user -. 2. access .-> az
user -. 2. access .-> gc
user -. 2. access .-> aws
```



The IAM pillar in the Cloud Foundation Model tries to solve the following problems:

- Multi-Cloud IAM architecture and implementation with federated identities

- Multi-Cloud autorisation utilising cloud native capabilities

- Managing privileged user access in the cloud (e.g. administrative users)

- Identity lifecycle management in an mulit-cloud environment (Joiner-Mover-Leaver)

- Managing technical and service users



Important concepts and principals for a successful IAM alignment and integration for your Multicloud strategy and Cloud Foundation transformation are:

- Role Based Access Control: Privileges and permissions are assigned by using Role definitions instead of individual assignments e.g. by defining groups of permissions for Auditor (read only)

- Authentication (AuthN) and Authorization (AuthZ): How can users be identified, validated and authorised?

- Federation: Protocols like SAML, OIDC and OAuth can be used to use identities of a trustworthy source to enable AuthN and AuthZ in 3rd party applications and solutions.

- Least Privilege: Users should only have access required by their role and tasks to avoid privilege creep, prevent violations of separation of duties and accidents.



```html

```



<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>The Cloud Identity and Access Management Guide for 2021</CtaHeader>
  <CtaText>Take a look into the IAM Guide 2021 for more insights regarding Cloud Identity and Access Management.</CtaText>
  <CtaButton url="https://www.meshcloud.io/2021/01/19/the-cloud-identity-and-access-management-guide-for-2021/">I want to read the IAM Guide</CtaButton>
</CallToAction>



