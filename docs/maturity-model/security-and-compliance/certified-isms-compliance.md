---
id: 3c7081e5-c451-40b6-806d-a8d21b130612
url: >-
  https://www.notion.so/Certified-ISMS-Compliance-3c7081e5c45140b6806da8d21b130612
title: Certified ISMS Compliance
description: >-
  Landing zones and its operation by the cloud foundation team are certified
  according to an information security management system like ISO 27001 or C5.
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️⭐️
  depends-on:
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
    - 802fdd8d-7fc0-4749-937f-e9e0ccb3f273
    - e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
    - 64284b14-faab-461c-80bb-5e8efbae4dcc
    - 012dc29a-5b79-4eeb-8154-9ef0f2ae0f02
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations: []
  name: Certified ISMS Compliance
---

One way to achieve and demonstrate compliance in your cloud journey is to get your Cloud Foundation certified based on one of the common frameworks like C5 or ISO27001. These are standard frameworks for information security combining technical and organizational measures.

## Proven Patterns When Implementing ISMS Compliant Cloud Foundations

### Start with a Specific Use Case

Even if you are implementing an ISMS compliant Cloud Foundation for a large variety of applications, it makes sense to identify a couple of specific use cases to start with. There is a good chance you will identify a handful of application types that you want to accommodate for in the future. E.g. you can have cloud-native applications in contrast to applications that require on-premise connectivity, representing different [Cloud Zones](./cloud-zones.md) of your Cloud Foundation.

### Provide Standard Security Templates

Once you identified the different application types you want to support with your Cloud Foundation, you can go ahead and provide standard security templates for these use cases. The standard templates will be applied to all applications of this type to ensure a consistent implementation of security requirements. This facilitates audits as you can easily proof how security requirements are implemented for a large number of applications. Furthermore, it will be much easier to handle and implement future changes, due to regulatory changes or new technical capabilities.

### Map Control Catalogs with Technical Security Controls

When implementing security requirements, we are often faced with a gap between the organizational and mostly document-heavy part of it and its technical implementation. While dedicated security or governance departments feel comfortable when dealing with abstract descriptions of  hundreds of security controls, their technical counterparts may have a tough time interpreting these requirements and translating them into cloud-specific implementation patterns. This gap bears the risk of having inconsistent implementations of the same control in the catalog, making it hard to audit and maintain over time. Therefore, having a centrally defined mapping between your control catalog and the actual implementations will reduce complexity and increase consistency of your security setup.

### Automate Control Implementation

You can prevent security findings, if relevant configurations are automatically rolled out and continuously enforced in your cloud tenants. [Modular Landing Zones](../tenant-management/modular-landing-zones.md) are a great way to achieve this. Following such a preventive approach is that it is much more efficient than handling misconfigurations or vulnerabilities in a reactive manner, e.g. when scanning each cloud environment for possible misconfigurations (see [Resource Configuration Scanning](./resource-configuration-scanning.md)), as this will require continuous remediation actions that cost resources.

### Keep the User Experience in Mind

A key to success when implementing a cloud foundation is to keep the user experience along the entire cloud project lifecycle in mind. Especially when building up powerful capabilities like ISMS compliance, it’s important to ensure that the initial aim of your cloud foundation: Enabling application teams to build applications in the cloud. Following the previous steps will help you to implement an end-to-end process that will help to achieve great control of your cloud landscape without slowing down and reducing agility of your application teams.