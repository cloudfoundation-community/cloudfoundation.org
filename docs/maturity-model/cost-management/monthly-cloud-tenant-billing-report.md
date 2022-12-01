---
id: cd162600-e742-4a80-b022-989da423ca43
url: >-
  https://www.notion.so/Monthly-cloud-tenant-billing-report-cd162600e7424a80b022989da423ca43
title: Monthly cloud tenant billing report
description: >-
  Application teams can view a monthly cloud tenant billing report listing all
  incurred charges for cloud resource consumption.
category: 💵 Cost Management
pageType: CFMMBlock
properties:
  enables:
    - 28740e92-5559-4931-ab04-17cfb026edd5
    - e063e4d2-81f4-4bb8-ac7a-7424ba882161
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on: []
  recommended: []
  scope: ☁️ Platform
  tool-implementations:
    - 635ebffa-17e9-4231-9d38-b59625be9b03
    - 2896046e-fd61-4fa7-b381-67bb4f8893b2
  name: Monthly cloud tenant billing report
---

A cloud tenant billing report makes cloud consumption transparent to application teams. Accessing cloud tenant billing reports monthly ensures that application teams are aware of their impact on resource costs.    

## Why Is Monthly Cloud Tenant Billing Reporting Important?

All organizations that are successfully using the cloud share a cloud-native mindset. The application teams in these organizations use the properties of the cloud to their advantage. An important aspect is pay-per-use pricing which encourages to keep an eye on resource usage. This is especially critical when organizations aim to implement FinOps (Cloud Financial Management) practices with the goal to bring financial accountability to the pay-per-use model of the cloud. Pay-per-use pricing aligns incentives. It enables application teams to take ownership of their cloud usage. With monthly cloud tenant billing reports, they have a closed feedback loop: Improve the application efficiency and see the costs go down.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Next Level Cloud Cost Management</CtaHeader>
  <CtaText>Track costs and split bills no matter the complexity of large multi-cloud architectures.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/finops/">Free Whitepaper</CtaButton>
  <CtaButton class="btn-secondary" url="https://www.meshcloud.io/2020/12/23/the-2021-guide-to-multi-cloud-billing-and-cost-management/">Learn more</CtaButton>
</CallToAction>

## Proven Patterns When Building Monthly Cloud Tenant Billing Reports

### Start with Built-in Tools Where Possible

Start with setting up the cloud platform’s built-in tools so that application teams have access to their cost and consumption data in the cloud platform itself.

- In AWS [enable IAM User access to Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html) allows users to have access to AWS Cost Explorer for their own Accounts. Unfortunately you have to consider this setting already in [Tenant Provisioning](../tenant-management/tenant-provisioning.md).

- In Azure allow users access to Azure Cost Management on subscription or resource group scope by giving application teams access to the `Cost Management Reader` role

- In GCP there’s unfortunately no simple way to expose billing data via the GCP console for each individual application team without granting access on the entire billing account. 

GCP is not the only cloud platform that does not offer per-tenant reports for application teams out of the box. Many private cloud platforms like Kubernetes, OpenStack and Cloud Foundry lack built-int billing capabilities. However, a cloud without billing is not a cloud. The Cloud Foundation Maturity Model track this as separate capability in [Private Cloud pay-per-use chargeback](./private-cloud-pay-per-use-chargeback.md) and [Pay-per-Use for internal Services](./pay-per-use-for-internal-services.md).

### Build an Automated Billing Report System

As outlined in the section above, the built-in tools offered by cloud platforms have limitations. Cloud Foundation teams that want to generate billing reports on a monthly basis for different cloud platforms have to aim for a high degree of automation across the entire process. The cost of manual steps in the process typically becomes prohibitive once a cloud foundation team scales beyond serving a handful of application team. 

Automation of this process offers further avenues, like providing billing previews more frequently (e.g. hourly). This provides tight feedback loops to engineering teams actively scaling their systems up and down. Review the tools below for a list of solutions that offer this capability.

### Export and Archive Raw Billing Data

Set up the cloud platform’s recommended exports for raw billing data and make sure to archive them for analysis later. 

- In AWS set up [Cost and Usage reports](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html) to an S3 Bucket

- In GCP set up [Cloud Billing export to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery)

- In Azure [set up a scheduled export](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-export-acm-data?tabs=azure-portal) of Cost Management data

### Unify Tenant Billing Reports across Clouds

The interfaces and billing data formats are different for every cloud provider. Providing a cost view across clouds is only possible after unifying data from all different sources (see [Monthly Cloud Project Billing Report](./monthly-cloud-project-billing-report.md)).

Furthermore, building chargeback capabilities also depends on building a common billing data view across clouds (see [Chargeback via consumption cost allocation](./chargeback-via-consumption-cost-allocation.md)) and managing global IT spend.

The fine granular data of each cloud can still be used for individual cost optimization. However, having that unified chargeback process is really important. Lots of organizations run into problems “trying to run before walking”, e.g. trying to do [Global Cost Optimization via Reservations](./global-cost-optimization-via-reservations.md)

