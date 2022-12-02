---
id: f271478b-3921-494f-ab2c-de97808d3bb7
url: >-
  https://www.notion.so/Data-Science-Landing-Zone-f271478b3921494fab2cde97808d3bb7
title: Data Science Landing Zone
description: >-
  A landing zone optimized for data science workloads like AI/ML models and
  self-service data analysis.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️⭐️
  depends-on:
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
    - b4678790-ab53-4219-83e7-fbde18383d05
  recommended:
    - 74bf9fe5-6bd5-4940-9714-aad2b25e03c4
  scope: ☁️ Platform
  tool-implementations: []
  name: Data Science Landing Zone
---

Data science teams in your organization that want to run data science workloads like AI or ML models may not have dedicated software engineering or cloud infrastructure engineering skills among their members. By providing a data science landing zone allowing only a small subset of relevant cloud services via [Service and Location Restrictions](../security-and-compliance/service-and-location-restrictions.md) you can provide these teams a safe and productive environment to run interactive computing environments like Jupyter notebooks against large data lakes and cloud-based data warehouses. Going even further, cloud foundation teams can design a data science landing zone to also allow access to dedicated cloud infrastructure like GPUs for training models or rapidly scaling compute capacity. 

> **🌤️** Based on our experience data science landing zones are most useful for developing and testing models. Production models are often run by dedicated teams with significant software and operations experience together with other workloads, e.g. as part of an application living in a [Cloud-native Landing Zone](./cloud-native-landing-zone.md).

Here are some example of simple landing zone designs for data science workloads

**GCP Example**

- a central BigQuery data warehouse

- different data science each receive their own GCP project and read-only access to the data warehouse, either as part of the landing zone or as an optional [Managed Data Lake access](../service-ecosystem/managed-data-lake-access.md) service

- analysts can run their own queries, either directly from Google Cloud Console, Looker Dashboards or third party solutions

- data science teams get charged transparently for all the big query jobs they consumed, enabling [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md) via a [Monthly cloud tenant billing report](../cost-management/monthly-cloud-tenant-billing-report.md) 

