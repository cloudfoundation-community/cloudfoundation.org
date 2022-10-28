---
id: fd11f3c0-cf7a-4717-940f-505ef796e2c5
url: >-
  https://www.notion.so/Individual-Service-Provisioning-fd11f3c0cf7a4717940f505ef796e2c5
title: Individual Service Provisioning
description: >-
  Cloud foundation teams can offer individual services and customizations
  through a standardized process.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations: []
  name: Individual Service Provisioning
---

In the early days of an organization’s cloud journey it’s common that landing zones and the service offered by the cloud foundation team are neither highly standardized nor automated. Nonetheless, the cloud foundation team still needs to support the demands of the first application teams moving to the cloud in a quick and agile way.

Building the capability to provision not-yet-formalized infrastructure services for application teams is thus a crucial capability to support the organization’s cloud journey.

## Proven Patterns for Individual Service Provisioning

### Leverage Infrastructure as Code and GitOps

Even though your team is going to start with “one-off” service implementations, you should leverage infrastructure as code to ensure you can eventually maintain and standardize the services. 

Let’s suppose you have an individual cloud tenant that needs to connect to a network hub as a precursor to a standardized [Virtual Network Service](./virtual-network-service.md). While you could just create the required network peering via the cloud provider’s portal or console (”ClickOps”), creating it via infrastructure as code stored in a version controlled code repository offers many advantages

- you can collaborate with the service requestor on the code as they can see exactly what you provisioned for them

- you can easily make changes to the service at any time while keeping a revision history of all changes

- you can leverage fast feedback cycles with manual service provisioning and later automate service provisioning via a CI/CD pipeline (”GitOps”)

- you can refactor and abstract the “one-off” service implementation into a standardized service implementation that exposes required configuration parameters to service consumers

### Standardize with Increasing Maturity 

Most cloud foundation teams eventually replace individual service provisioning workflows with standardized service provisioning via a [Foundation Service Platform](./foundation-service-platform.md).