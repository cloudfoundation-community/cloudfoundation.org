---
id: 707c41b8-6da0-4e78-b982-fa4b1365521b
url: >-
  https://www.notion.so/Central-Management-of-Tenant-tags-and-metadata-707c41b86da04e78b982fa4b1365521b
title: Central Management of Tenant tags and metadata
category: 🔖 Security & Compliance
layout: CFMMBlock
properties:
  pillar: 🔖 Security & Compliance
  enables:
    - e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
    - e7d63253-2e39-4bbf-9dd6-da11bb3edd0d
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on: []
  scope: 🏢 Core
  summary: >-
    Multi-Cloud governance is enforced by central management of tags and
    metadata for all kinds of cloud tenants, independent of the cloud provider
  tool-implementations: []
  name: Central Management of Tenant tags and metadata
---

## Why cloud metadata, labels and tags are important for a successful cloud governance

Storing relevant metadata is essential when it comes to establishing a comprehensive cloud governance in your organisation. Tags allow you to capture the metadata on your cloud applications and environments in a structured manner and will benefit not only the cloud compliance and cloud security setup of your cloud environments but also helps tremendously in other cloud pillars such as tenant management and billing.



Metadata on cloud resources are called differently depending on the cloud provider. It may be more known as tags, labels, key-value-pair etc.

> ℹ️ In Azure and AWS its called Tags while in GCP its called labels.



Keeping the metadata close on the cloud account and on resources enables the cloud foundation team as well as other teams like the security, controlling and operations team to keep a better overview on the cloud resources. Also most of the cloud providers offer an API to read the metadata which allows the cloud foundation team to develop or build reporting automations or similar. The cloud providers usually enables the customers to create reports and dashboards for cloud resources based on the metadata by providing tools, CLIs or other native services.



The most common metadata manage on cloud accounts and resources are listed below:

<!-- unsupported block type: table -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

<!-- unsupported block type: table_row -->

## Challenges

The following challenges needs to be tackled to ensure a central management of tags and metadata:

- How can the tagging be enforces across multiple cloud platforms?

- How can it be ensured that tags are updated frequently to ensure correct metadata on cloud resources and accounts? Metadata can drift over time which needs to be corrected by re-applying centrally set tags on tenants continuously - which also ensures that temporary changes by users are automatically corrected.

- How can the central management of metadata be integrated in to the self-service cloud provisioning for DevOps teams? Managing central tags should enable the DevOps teams to manage the metadata for their projects and cloud resources while the Cloud Foundation teams creates a framework in which the DevOps teams can operate.

- Which metadata should be kept on the cloud accounts and resources? Each cloud providers has other limitations regarding the metadata (e.g. length of text, number of metadata etc.). Therefore it is important to align a strategy for each cloud platform for the central metadata - while platform teams still can add their own metadata as required (if limitations are not reached)



> ✅ Checkout meshcloud’s blog post regarding Cloud Tagging “ **Your Path to a Winning Multi-Cloud Tagging Strategy** ” as an introduction to cloud tagging and its benefits towards your Cloud Governance. [https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/](https://www.meshcloud.io/2020/10/27/your-path-to-a-winning-multi-cloud-tagging-strategy/) 

> ✅ Use collie-cli to checkout the current metadata on your public cloud accounts or to build your own small dashboards and automations. [https://collie-cli.io/](https://collie-cli.io/)
