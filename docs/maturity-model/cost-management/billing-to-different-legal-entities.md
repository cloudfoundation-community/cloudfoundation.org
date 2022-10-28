---
id: 0217c4da-6542-41d6-84c7-12af887e7d15
url: >-
  https://www.notion.so/Billing-to-different-legal-entities-0217c4da654241d684c712af887e7d15
title: Billing to different legal entities
description: >-
  Support billing cloud workloads to different legal entities of an enterprise
  for compliance or organizational reasons.
category: 💵 Cost Management
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1
  scope: ☁️ Platform
  tool-implementations: []
  name: Billing to different legal entities
---

International organizations with different legal entities have to comply with local tax regulations. This means that IT chargeback to correctly assign cloud costs in internal cost accounting to the legal entities responsible for them. Correct and legally compliant internal cost accounting usually requires that cloud foundation teams not only charge back consumption cost, but also do [Chargeback at full cost allocation](./chargeback-at-full-cost-allocation.md).

There are different ways to implement billing to different legal entities

- process cloud cost data into internal cost accounting, paid from a single enterprise contract with the cloud provider. This has the advantage of having less effort for contract management and larger contract volumes (negotiation advantage)

- manage different enterprise contracts with the cloud provider, e.g. billing accounts (GCP), enterprise agreement (Azure) or Payer Accounts (AWS). This requires technical capabilities to correctly handle billing account assignment in the [Tenant Provisioning](../tenant-management/tenant-provisioning.md) and puts additional complexity into the [Chargeback via consumption cost allocation](./chargeback-via-consumption-cost-allocation.md) process, because cloud foundation teams need to collect data from more sources