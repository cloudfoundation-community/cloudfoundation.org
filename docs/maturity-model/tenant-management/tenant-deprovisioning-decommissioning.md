---
id: 119bfca5-dda6-408c-b35d-c59d0f209fcf
url: >-
  https://www.notion.so/Tenant-Deprovisioning-Decommissioning-119bfca5dda6408cb35dc59d0f209fcf
title: Tenant Deprovisioning / Decommissioning
description: >-
  Process for decommissioning and deprovisioning cloud tenants that are no
  longer needed.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
    - 155c0ead-cbd0-4e0c-9387-cc57946f80e9
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
  recommended:
    - 77942f5f-e395-49c6-8927-e5fa3ef28aef
  scope: 🛬 Landing Zone
  tool-implementations:
    - 431fe444-0b73-4592-b525-7e09a48a6457
    - bac2d6a9-0bab-4d58-b89e-9b3315f86b79
    - 244b3e52-37bd-4669-a8d4-c208eb2fe529
    - 87441a90-61d1-46f3-a3e0-50902ca974fd
  name: Tenant Deprovisioning / Decommissioning
---

At the start of an organization’s cloud journey, cloud foundation teams focus on the challenge of [Tenant Provisioning](./tenant-provisioning.md), giving little afterthought to “day-2” challenges. After all, supporting cloud adoption is the key imperative at this stage. As most cloud foundation teams have to find out the hard way, the initial surge of excitement about bringing more internal customers into the cloud soon turns into an operational chore. Some of your cloud customers will inevitably abandon their projects. When they forget to decommission all cloud infrastructure, the organization ends up with zombie workloads.

> **💡** Establishing a clean tenant decommission process is paramount for avoiding problems like abandoned “zombie workloads” that pose a security risk and incur uncontrolled cloud spend. 

## Tackle Zombie Workloads with Clear Decommissioning Responsibilities

Most zombie workloads are the result of unclear responsibilities - not malice. When investigating the chain of unfortunate events that leads to them, cloud foundation teams often hear a series of excuses from their customers.

- “I didn’t create that AWS Account, so I didn’t consider it my job to delete it!”

- “Deleting that GCP Project brought up a scary confirmation dialog about losing all data forever! I didn’t feel sure if there isn’t something important worth saving in there so I just left it.”

- “When the project team was wound down, I took on responsibilities in a new project and assumed one of my old colleagues would delete the Azure Subscription.”

If any of those situations happen in your organization, the cloud foundation team needs to establish and communicate its [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) better. 

## Proven Patterns for Implementing a Cloud Tenant Decommissioning Process

Tenant decommissioning is a fundamental tenant management process. Cloud foundation teams will need it to implement higher-level capabilities in the Tenant Management pillar like [Multi-cloud tenant database integrated with lifecycle management](./multi-cloud-tenant-database-integrated-with-lifecycle-management.md).

### Plan for Involuntary Decommissioning

Setting clear boundaries and expectations with a [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md) is crucial. Unfortunately, the cloud foundation team sometimes has to enforce these boundaries. For example, cloud foundation teams may find internal customers

- violating their duty to handle assigned incidents as part of the [Incident Management Process](../security-and-compliance/incident-management-process.md).

- not providing enough or incorrect metadata in the [Cloud Tenant Database](./cloud-tenant-database.md) to enable proper [Chargeback via consumption cost allocation](../cost-management/chargeback-via-consumption-cost-allocation.md).

- operating unregistered cloud tenants found via [Tenant Inventory Reconciliation](./tenant-inventory-reconciliation.md).

In these cases, the cloud foundation team needs the capability and authorization to forcefully decommission cloud tenants in their workload.

### Consider Data Retention and Recovery Requirements

Decommissioning a cloud tenant results in the destruction of all workload and data stored in the cloud tenant. While systems that were not used productively will typically not have relevant data that needs to be kept, productive systems may require special precautions. Regulations for the financial service industry for example can require that organizations maintain records processed in systems (and the means to read them!) for a minimum period of 10 years. 

> **💡** A good [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md) concept that’s consistently applied can help cloud foundation teams quickly determine if decommissioning a cloud tenant requires special precautions, for example, if the tenant was used for productive workloads.

Another consideration is that cloud tenants very often also hold other valuable resources like public IP Addresses, DNS Records, and Cryptographic Keys (e.g. SSL Certificates, Encryption Keys) that may be used well beyond the scope of an individual IT System. Public cloud providers are multi-tenant environments. Cloud resources like IP Addresses and DNS Names may be reused by other customers of the cloud provider. This can open attack vectors for phishing or spoofing. Some examples that cloud foundation teams should be aware of

- Cloud providers pool public IP Addresses and reuse [enables subdomain takeover](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/10-Test_for_Subdomain_Takeover) attacks.

- DNS Names for [S3 Buckets can be reused](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html) and this can enable [subdomain takeover](https://towardsaws.com/subdomain-takeover-aws-s3-bucket-4699815d1b62).

- IP Addresses are an important signal in email sender reputation management. Apart from losing a valuable high-reputation IP, spammers can abuse the IP to spoof email and send spam or phishing emails.

### Security Implications of Automated Tenant Decommissioning

Scenarios like [Playground / Sandbox Environments](./playground-sandbox-environments.md) call for automation of tenant decommissioning. However, an automation system capable of deleting most of an organization's cloud workload with only a handful of API calls is a big security risk and conversely an attractive attack target. To mitigate this risk, automation systems for tenant decommissioning should include checks and balances. Useful mitigations are

- 4-eye principle approval processes for tenant deletion

- restrict the automation’s permissions to non-productive tenants (e.g. designated by landing zone or [Cloud Tenant Tagging](../security-and-compliance/cloud-tenant-tagging.md))

### Decommissioning of AWS Accounts Best Practices

AWS Organizations has [important caveats](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html) to consider when closing organization member accounts.

- Closed accounts will be suspended and then follow a [staged close process](https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/) until termination.

- Organization member accounts can only be closed by logging in with the account root user, this typically requires a password reset procedure that’s difficult to automate.

- AWS Account root email addresses cannot be reused.

- AWS will continue to charge for reserved instances and saving plans [even after the account has been closed](https://aws.amazon.com/premiumsupport/knowledge-center/closed-account-bill/).

- AWS will [stop on-demand billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html#on-demand-closure) as soon as the account is closed. However, on-demand charges for any workload that is not explicitly deleted before account closure will be incurred when the account is reinstated during the post-closure period. 

### Considerations for Decommissioning OpenStack Projects 

OpenStack does not include a process for deleting all cloud resources when deleting a project in Keystone. Cloud foundation teams thus need to ensure deletion of all of a project’s cloud resources in each OpenStack service (Nova, Neutron, Cinder, ...) in order to avoid creating orphaned workloads.



