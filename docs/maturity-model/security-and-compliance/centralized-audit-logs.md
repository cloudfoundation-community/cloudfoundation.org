---
id: 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
url: https://www.notion.so/Centralized-audit-logs-2c7cfeb1248143b8b31c82cb5ba3375f
title: Centralized audit logs
category: 🔖 Security & Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Security & Compliance
  enables: []
  redaction-state: mvp1
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

Audit Logs are records of what actions were performed by whom. A centralized audit log stores audit logs from all cloud tenants.

The audit logs we need to store here cover interactions with the cloud API. A common example would be answering the question “who deployed and configured this specific Cloud Function?”. This is important to balance the freedom given to teams: “We let you deploy your own workload, but we will be looking over your shoulders”.

Centralized audit logs make an analysis of logs easier for auditors. Standardizing and providing a centralized audit log as part of Landing Zones frees DevOps teams from the burden of finding out how to comply with auditor requirements. 



<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Make your Cloud Security a Priority</CtaHeader>
  <CtaText>Standardizing and providing a centralized audit log as part of Landing Zones frees DevOps teams from the burden of finding out how to comply with auditor requirements.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/05/19/multi-cloud-security-and-compliance/">Learn more</CtaButton>
</CallToAction>

## Proven patterns when implementing centralized audit logs

### Store and retain first, worry about analytics later

Audit logs enable incident analysis right at the start. You can still build SIEM and preventive capabilities later. See ([Cloud SIEM](/maturity-model/security-and-compliance/cloud-siem.md)).

### Carefully guard access to centralized audit logs

DevOps teams are responsible for keeping secrets from leaking into logs. Even with rolling credentials, there is a chance that centralized audit logs contain sensible information. Therefore access should be restricted carefully to minimize risk.

### Create a concept that outlines your centralized audit log strategy

DevOps teams and Auditors want to know how the system works and need to know how to interact with it. Laying it out in a concept that is shared widely reduces dependencies. 