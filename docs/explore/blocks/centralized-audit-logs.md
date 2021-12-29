---
id: 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
url: https://www.notion.so/Centralized-audit-logs-2c7cfeb1248143b8b31c82cb5ba3375f
title: Centralized audit logs
category: Blocks
layout: CFMMBlock
properties:
  cluster: 🔖 Compliance
  enables: []
  journey-stage: ⭐️⭐️
  depends-on: []
  scope: 🛬 Landing Zone
  summary: >-
    Audit logs from all cloud tenants (API/resource access) are centrally
    collected and stored.
  tool-implementations: []
  name: Centralized audit logs
---

## Why centralized audit logs?

Audit Logs ensure are records of what actions were performed by whom. A centralized audit log stores audit logs from all cloud tenants.

The audit logs we need to store here cover interactions with the cloud API. A common example would be answering the question “who deployed and configured this specific Cloud Function?”. This is important to balance the freedom given to teams: “We let you deploy your own workload, but we will be looking over your shoulders”.

Centralized audit logs make analysis of logs easier for auditors. Standardizing and providing centralized audit log as part of Landing Zones frees DevOps teams from the burden of finding out how to comply with auditor requirements.

## Proven pattern when implementing centralized audit logs

### Store and retain first, worry about analytics later

Audit logs enable incident analysis right at the start. You can still build SIEM and preventive capabilities later. See ( [Cloud SIEM](/explore/blocks/cloud-siem.md) ).

### Carefully guard access to centralized audit logs

DevOps teams are responsible for keeping secrets from leaking into logs. Even with rolling credentials, there is a chance that centralized audit logs contain sensible information. Therefore access should be restricted carefully to minimize risk.

### Create a concept that outlines your centralized audit log strategy

DevOps teams and Auditors want to know how the system works and need to know how to interact with it. Laying it out in a concept that is shared widely reduces dependencies.