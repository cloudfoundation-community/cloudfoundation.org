---
id: 4f9ee73a-23a9-4aa3-b956-0df22e6156d0
url: https://www.notion.so/Managed-DNS-Services-4f9ee73a23a94aa3b9560df22e6156d0
title: Managed DNS Services
description: >-
  Teams can manage DNS Zones and Records for their cloud workloads in
  self-service.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations: []
  name: Managed DNS Services
---

Many cloud workloads host web services that need to be available via DNS. This can cover internal domains (e.g. split-horizon DNS) as well as public domains. 

## Proven Patterns When Implementing DNS Services

### Leverage Existing Internal Services

Most organizations already have internal processes for managing DNS, e.g. via an ITSM ticketing system or IPAM system like Infoblox. While a direct and fully automated integration with these systems provides the highest degree of automation, application teams will already greatly benefit from managing their infrastructure services from the [Foundation Service Platform](./foundation-service-platform.md) even if the actual service implementation just sends a service request by email. 

### Delegate Entire DNS Zones

Most cloud platforms offer managed DNS services, e.g. AWS Route 53 or Google Cloud DNS. These cloud DNS services typically offer tight integration with the cloud’s workload services like API Gateways and CDN services. 

Application teams can best leverage these integrations when the organization delegates an entire DNS zone to the cloud platform’s DNS service. Below you can find a typical example implementation

- An application team has a GCP project provided by the cloud foundation called  `app-prod`

- An application team requests an internal DNS Service for `.app.example.com`

- The organization’s authoritative DNS team creates a `SOA` record delegating the zone `.app.example.com` to Google Cloud DNS in the `app-prod` GCP project

- The application team can now use Google Cloud DNS inside the `app-prod` project to manage records for their application workloads, e.g. integrating it with GKE ingress so that the ingress controller automatically manages DNS

As you can see from the example above, the tight integration between GKE and Cloud DNS removes a lot of manual work that the application team would otherwise have to perform to create and manage the correct DNS entries.

