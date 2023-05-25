---
id: 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
url: https://www.notion.so/Centralized-audit-logs-2c7cfeb1248143b8b31c82cb5ba3375f
title: Centralized audit logs
description: >-
  Audit logs from all cloud tenants (API/resource access) are centrally
  collected and stored. 
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - dff7d733-d987-4145-aa1a-e340b5bcff81
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - 012dc29a-5b79-4eeb-8154-9ef0f2ae0f02
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - af14b5df-77b4-4def-b761-8fadabd241ca
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations:
    - 50e4e2e5-9fb6-49f7-8b57-6988b865b412
    - beba1d31-43fe-4663-b3f5-cd32d6a5cf54
    - c9c553ab-812b-4b46-a985-8c01fda8985b
    - 493d1813-21f3-4d9a-88b1-133010d9a68b
    - 523e8239-f830-4d33-a66c-7c135463e694
    - baf114e2-c764-4145-8302-85d3bfe62901
    - 39343d1a-be7a-47dc-85f7-bda80f99c1ef
    - fa06b5f1-05ae-4b99-bf1e-941597fd796b
    - 67c9d1dc-7e7b-4b1e-b6fb-8b2547482ca7
  name: Centralized audit logs
---

Audit Logs are records of what actions were performed by whom. A centralized audit log stores audit logs from all cloud tenants.

The audit logs we need to store here cover interactions with the cloud API. A common example would be answering the question “who deployed and configured this specific Cloud Function?”. This is important to balance the freedom given to teams: “We let you deploy your own workload, but we will be looking over your shoulders”.

Centralized audit logs make an analysis of logs easier for auditors. Standardizing and providing a centralized audit log as part of Landing Zones frees application teams from the burden of finding out how to comply with auditor requirements. 



<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Make your Cloud Security a Priority</CtaHeader>
  <CtaText>Standardizing and providing a centralized audit log as part of Landing Zones frees application teams from the burden of finding out how to comply with auditor requirements.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/05/19/multi-cloud-security-and-compliance/">Learn more</CtaButton>
</CallToAction>

## Proven Patterns When Implementing Centralized Audit Logs

### Store and Retain First, Worry about Analytics Later

Audit logs enable incident analysis right at the start. You can still build SIEM and preventive capabilities later. See ([Cloud SIEM](./cloud-siem.md)).

### Carefully Guard Access to Centralized Audit Logs

Application teams are responsible for keeping secrets from leaking into logs. Even with rolling credentials, there is a chance that centralized audit logs contain sensible information. Therefore access should be restricted carefully to minimize risk.

### Create a Concept That Outlines Your Centralized Audit Log Strategy

Application teams and Auditors want to know how the system works and need to know how to interact with it. Laying it out in a concept that is shared widely reduces dependencies. 



## How Implement Centralized Audit Logs

#### Azure

1. Create a Log analytics workspace

1. Assign the policy “[**Configure Azure Activity logs to stream to specified Log Analytics workspace**](https://portal.azure.com/#blade/Microsoft_Azure_Policy/PolicyDetailBlade/definitionId/%2Fproviders%2FMicrosoft.Authorization%2FpolicyDefinitions%2F2465583e-4e78-4c15-b6be-a36cbc7c8b0f)**”** which set diagnostic settings for the azure activity log.

#### AWS

To set up central audit logs in AWS, set up [AWS CloudTrail](https://docs.aws.amazon.com/audit-manager/latest/userguide/security-logging-and-monitoring.html) and Amazon [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).

Add the following Service Control Policy to prevent CloudTrail from being switched off

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "cloudtrail:StopLogging",
                "cloudtrail:DeleteTrail"
            ],
            "Resource": "*",
            "Effect": "Deny"
        }
    ]
}
```

Similarly, add the following Service Control Policy for preventing changes to AWS Config

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "config:DeleteConfigRule",
                "config:DeleteConfigurationRecorder",
                "config:DeleteDeliveryChannel",
                "config:StopConfigurationRecorder"
            ],
            "Resource": "*",
            "Effect": "Deny"
        }
    ]
}
```

#### GCP

To set up central audit logs in Google Cloud Platform (GCP), you can utilize [Cloud Audit Logs ](https://cloud.google.com/logging/docs/audit)and [Cloud Monitoring](https://cloud.google.com/monitoring/docs). Cloud audit logs are always enabled and can not be switched off.

However, we recommend to additionally switch on Data Access Logs. See [Google Cloud documentation](https://cloud.google.com/logging/docs/audit/configure-data-access) for how to do that.

