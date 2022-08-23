---
id: ce20312c-aa7a-453f-82f2-f186469dd973
url: >-
  https://www.notion.so/Monthly-Cloud-Project-Carbon-Footprint-Report-ce20312caa7a453f82f2f186469dd973
title: Monthly Cloud Project Carbon Footprint Report
description: >-
  Project owners can view a monthly report listing the consumption-based carbon
  footprint caused by their project’s cloud usage. This enables sustainability
  reporting and gives teams feedback towards achieving sustainability goals.
category: 💵 Cost Management
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 28740e92-5559-4931-ab04-17cfb026edd5
  scope: 🏢 Core
  tool-implementations:
    - 7f68e769-70d6-4c41-bdc2-de273d61bd23
    - ffab4f09-a975-4997-8213-15b7fa6ab10c
  name: Monthly Cloud Project Carbon Footprint Report
---

Carbon footprint reporting is the practice of compiling a regularly updated report listing the estimated carbon emissions caused by an organization’s activities. Applied to cloud computing, a carbon footprint report lists the organization’s consumed cloud resources and the emissions caused by the cloud provider for supplying them. This means that carbon footprint reporting is very similar to cost reporting and cloud foundation teams can thus follow similar processes to implement carbon footprint reporting effectively.

## Understanding Carbon Footprint Scopes

The [greenhouse gas protocol](https://ghgprotocol.org) is a widely recognized standard to categorize carbon emissions of an organization according to three different scopes

- **Scope 1 - Direct Emissions:** emissions directly caused by the organization e.g. in plants, factories, or by operating a fleet of vehicles

- **Scope 2 - Indirect Emissions:** emissions indirectly caused in the production of consumed energy, e.g. electricity or fuels

- **Scope 3 - Value Chain Emissions:** emissions caused for the production of consumed supply chain goods and services as well as lifecycle emissions of produced goods and services

According to this definition, consumption of public cloud services is a scope 3 emission for the consuming organization, while the energy used to run the data center is a scope 2 emission for the cloud provider.

## Estimating the Carbon Footprint of Cloud Resources

Estimating the carbon footprint of an individual cloud resource is a challenging task. Most cloud services run on physical infrastructure that the provider shares across their customers (multi-tenant). Cloud providers thus need to measure the infrastructure’s energy consumption and then attribute a share of it to individual cloud resources. The granularity of data included in the energy consumption model determines the accuracy of this attribution.

> **💡** Physical layers that can provide energy consumption data include the data center building, rack, server power supply, and even individual server components like CPUs or GPUs.

Lastly, the cloud provider also needs to account for the energy consumption of shared services like networking and the cloud’s control plane APIs and monitoring services.

After estimating the energy consumption of an individual cloud resource, the provider needs to multiply the amount of energy consumed with the carbon intensity of the data center’s local electricity supply. This calculation needs to account for the time when the energy was consumed, as the grid’s carbon intensity varies throughout the day with the availability of wind and solar energy.

## Proven Patterns When Implementing Cloud Carbon Footprint Reporting

Despite the methodological challenges for an accurate estimation of a cloud resource’s individual carbon footprint, it’s important to start making cloud consumers aware of their high-level impact. The following best practices should cloud foundation teams get started with carbon footprint reporting quickly and effectively.

### Integrate with Chargeback Process

Treat “cost to the budget” and “cost to the environment” as equally important cost factors. Building on the [Monthly Cloud Project Billing Report](./monthly-cloud-project-billing-report.md) building block, cloud foundation teams can include carbon footprint data on the same report. Just as with financial chargeback, the individual attribution to cloud projects helps teams feel responsible for their footprint and take ownership.

### Build on Established Public Cloud Carbon Reporting APIs

Most public cloud providers have announced their intent to provide first-party cloud carbon footprint reports to their customers.

- [Google Cloud Carbon Footprint](https://cloud.google.com/carbon-footprint) is the currently market-leading carbon reporting solution. It provides attributed emission data for all three scopes in a model closely following its cost reporting APIs. GCP makes emissions data available 15 days after each billing period and has extensively documented its [methodology](https://cloud.google.com/carbon-footprint/docs/methodology).

- [AWS Customer Carbon Footprint Tool](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/) is providing data in the AWS Console with a three-month delay to the billing period. This data is currently not available via an API.

- [Microsoft Sustainability Calculator](https://azure.microsoft.com/en-au/blog/microsoft-sustainability-calculator-helps-enterprises-analyze-the-carbon-emissions-of-their-it-infrastructure/) is a Power BI-based solution for Azure from 2020. There’s currently no API available nor is there integration into Azure Portal.

As an alternative to first-party reports, cloud foundation teams can also run carbon emission estimations on their own leveraging community-driven tools like [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org). A key advantage of this tool is that it can provide a consistent source of reporting for all three hyper-scale cloud providers. However, its estimation methodology is severely limited compared to the amount of data and insight available to cloud providers for producing first-party reports.

### Implement Carbon Footprint Reporting for Private Cloud & Services

With a suitable carbon emissions model, cloud foundation teams can also produce carbon reports for private cloud and internal services similar to [Private Cloud pay-per-use chargeback](./private-cloud-pay-per-use-chargeback.md) and [Consumption based pay-per-use for internal Services](./consumption-based-pay-per-use-for-internal-services.md).

When the internal billing logic is already capable of handling multiple currencies, adding carbon reports as another currency (e.g. CO2 instead of €) may be a viable implementation path.

### Integrate with Corporate Sustainability Reporting

Many organizations are adopting corporate sustainability reporting practices. Some organizations may even be required by recent legislation to meet new regulatory compliance requirements such as the European Union’s Corporate Sustainability Reporting Directive. A cloud foundation team can leverage the capability to generate individual cloud project carbon reports to provide data for these organization-wide reporting frameworks, e.g. to estimate emissions on a team or department level.