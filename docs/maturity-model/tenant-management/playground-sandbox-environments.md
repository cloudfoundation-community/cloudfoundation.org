---
id: 155c0ead-cbd0-4e0c-9387-cc57946f80e9
url: >-
  https://www.notion.so/Playground-Sandbox-Environments-155c0eadcbd04e0c9387cc57946f80e9
title: Playground / Sandbox Environments
description: >-
  Application teams can quickly provision cloud environments for experimentation
  and learning. Playgrounds use relaxed policies (e.g. more cloud services are
  allowed) but come with time- or spend-limits that are tightly controlled.
  Expired playgrounds are automatically deprovisioned. 
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - 09b13be0-5b72-466c-a0ba-5d8ad2777dfd
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - 119bfca5-dda6-408c-b35d-c59d0f209fcf
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - 37862f9f-3d8a-4e25-8e90-e487dc455b0c
    - e5bc388b-865a-45a1-8b30-ddc66f76fd07
  recommended:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
    - d3839083-6870-4308-aa35-c48e17b0b79e
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - af14b5df-77b4-4def-b761-8fadabd241ca
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
    - cd162600-e742-4a80-b022-989da423ca43
    - fdd09e3d-c1f8-47be-8e1f-ece8449bf237
    - e5bc388b-865a-45a1-8b30-ddc66f76fd07
  scope: ☁️ Platform
  tool-implementations:
    - 8b5e9c3f-82b4-429c-ad60-49176671d537
    - 66d6549a-98b5-4ff0-b1d1-7bb66bd7cc3b
  name: Playground / Sandbox Environments
---

A sandbox environment is a special type of cloud tenant. It is fully isolated from other environments in the cloud platform and enables application teams to experiment and learn in the cloud without being exposed to risks that typically come with a regular cloud tenant. Think about risks such as unintended access to the cloud tenant, forgetting about deleting resources and causing shadow IT in the organization, or simply spending more than desired on cloud services.

## Why Use a Sandbox Environment?

A sandbox environment is a powerful tool for enabling application teams to learn more about the cloud in a secure and isolated environment. It gives developers the freedom that they need to learn and experiment with the large variety of cloud services that are offered nowadays. A sandbox environment is a superior alternative to providing developers access to existing cloud tenants where other projects might be already worked on. Sandbox environments will accelerate the cloud expertise in your organization with the least risk associated.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Manage all Accounts - across all Clouds</CtaHeader>
  <CtaText>Having large numbers of accounts with multiple cloud providers requires an airtight management solution: The creation, administration, security configuration and deprovisioning has to be easy and transparent.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn more</CtaButton>
</CallToAction>

## Best Practices of Sandbox Environments

The following best practices minimize the risks of newly provisioned sandbox environments in your cloud foundation team:

- **Set a mandatory time limit.** Ask teams for the time period that they would like to experiment with a given cloud provider. After this time period ends, automatically deprovision the cloud tenant. This prevents idle cloud services from running indefinitely. Not actively cleaning up cloud resources creates shadow IT in the organization which will continue to cause unnecessary costs.

- **Set a spending limit.** Set a limit on what teams are allowed to spend in a sandbox environment. This prevents overspending on cloud services and forces teams to think twice about incurring costs when consuming cloud services and eliminates the risks of unwanted cloud bills. This will also incentivize teams to think strategically about where to spend budget for cloud services.

- **Provide relaxed policies.** Providing the right policies (e.g. which cloud services can be consumed) is important when dealing with real cloud projects. But for a sandbox environment, which is isolated from any other development or production cloud tenants, this is a lot less relevant. That is why you can provide much more relaxed policies to sandbox environments. This enables the application teams to maximize their experimentation with as little friction as possible.

