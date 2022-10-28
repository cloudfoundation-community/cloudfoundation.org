---
id: 5f9c0f7d-860a-488b-bbf8-897618e5c76f
url: >-
  https://www.notion.so/Managed-SSL-Certificates-5f9c0f7d860a488bbbf8897618e5c76f
title: Managed SSL Certificates
description: >-
  Teams can request and renew SSL certificates for their cloud workloads in
  self-service.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  scope: ☁️ Platform
  tool-implementations: []
  name: Managed SSL Certificates
---

Many organizations run their own Certificate Authorities for internal domains. When application teams run internal services on the cloud, they need to be able to request and manage SSL certificates. 

## Best Practices for Offering Managed SSL Certificates

### Leverage Existing Internal Services

Most organizations already have internal processes for managing certificates, e.g. via an ITSM ticketing system. While a direct and fully automated integration with these systems provides the highest degree of automation, application teams will already greatly benefit from managing their infrastructure services from the [Foundation Service Platform](./foundation-service-platform.md) even if the actual service implementation just sends a service request by email. 

### Integrate with Key Vault, DNS

Certificates always have sensitive private key materials, consider integrating this service with [Managed Key Vault](./managed-key-vault.md) block. Also, integration with a [Managed DNS Services](./managed-dns-services.md) may be desirable to shortcut domain validation etc.