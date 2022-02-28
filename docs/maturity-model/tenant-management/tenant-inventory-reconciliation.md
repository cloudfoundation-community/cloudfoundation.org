---
id: 64284b14-faab-461c-80bb-5e8efbae4dcc
url: >-
  https://www.notion.so/Tenant-Inventory-Reconciliation-64284b14faab461c80bb5e8efbae4dcc
title: Tenant Inventory Reconciliation
description: >-
  The inventory of cloud tenants is automatically reconciled against the tenants
  actually present in the cloud platforms. This allows organizations to detect
  "shadow IT" or "dark matter" in the cloud. A process is in place to adopt
  these existing tenants into the prescribed governance model. 
category: 🗂 Tenant Management
layout: CFMMBlock
properties:
  pillar: 🗂 Tenant Management
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on: []
  scope: 🏢 Core
  tool-implementations:
    - 9b740724-686e-45f2-8924-9000279b806b
  name: Tenant Inventory Reconciliation
---

After implementing basic functionality for managing cloud tenants like [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) or even more advanced capabilities like [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md), a cloud foundation team still misses a critical control for ensuring there are are no shadow workloads running on cloud platforms. 

> **💡** **Shadow workloads** are workloads running on a cloud platform that have unclear ownership, information security risk and cost responsibility. They are typically the result from brownfield situations or side-administration creating cloud tenants without the cloud foundation teams’ involvement. Shadow workloads are a form of “shadow IT”.

Tenant reconciliation is the comparison of the cloud tenant inventory registered in a cloud tenant database with the actual tenants present in the cloud platform. This reconciliation allows cloud foundation teams to detect unregistered tenants and take remediating action like adopting the tenant into the foundation’s governance structure, recording an explicit exception or even shutting down the tenant.

## Best Practices for Tenant Inventory Reconciliation

Implementing a tenant inventory reconciliation process is easy when a cloud foundation team has already implemented earlier journey-stage capabilities like [Cloud Tenant Database](/maturity-model/tenant-management/cloud-tenant-database.md) as well as solid cost management capabilities like [Monthly Cloud Project Billing Report](/maturity-model/cost-management/monthly-cloud-project-billing-report.md). 

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Manage Cloud Tenants - across all Clouds</CtaHeader>
  <CtaText>Having large numbers of accounts with multiple cloud providers requires an airtight management solution: Manage cloud tenant lifecycle and reconcile your inventory of cloud tenants automatically.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/01/27/cloud-tenant-management-what-you-need-to-know-in-2021/">Learn more</CtaButton>
</CallToAction>

### Restrict Tenant Creation

Cloud foundation teams should restrict the ability to create tenants in cloud platforms in order to avoid tenant creation outside the boundaries of well-defined processes (like [Multi-cloud tenant database integrated with lifecycle management](/maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md)). This restriction can take different forms, depending on the cloud platform:

- **AWS:** Ensure users do not have access to the `organizations:CreateAccount` permission.

- **Azure**: For the most commonly used Enterprise Agreement contract model, restrict access to Enrollment Accounts for creating new Subscription.

- **GCP**: Ensure users do not have the `resourcemanager.projects.create` permission, see [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects) Guide. This permission is also part of the predefined “Project Creator” role.

- **Kubernetes**: Restrict namespace create permission via [RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

- **Cloud Foundry:** Ensure users do not have the “Org Manager” Role, see [Cloud Foundry Role and Permissions](https://docs.cloudfoundry.org/concepts/roles.html)

### Integrate with Monthly Cost Management Process

A monthly cloud cost chargeback process offers a great opportunity for reconciling the tenant inventory and tracking down any unaccounted tenants. Unregistered tenants become obvious when comparing cloud provider billing data with the actual amounts charged back to internal cloud customers.

### Integrate with Incident Management Process

Discovering a shadow workload should be treated as an incident and the remediation thus be aligned with the [Incident Management Process](/maturity-model/security-and-compliance/incident-management-process.md). This means that cloud foundation teams should establish clear rules and procedures what happens upon discovering a shadow workload. An exemplary escalation plan for shadow workloads could be:

- immediately quarantining the workload by revoking all IAM permissions on the cloud tenant, placing firewall rules to prevent network access

- triggering a security escalation with a clear deadline, naming all people with access to the cloud tenant as responsible stakeholders

- offering a self-service onboarding process for registering these in-compliant cloud tenants (this is most useful in existing brownfield scenarios)

- starting a root cause analysis to find out how the tenant was created. Audit logs provided by the cloud platform will be helpful for this analysis

### Have a Clear Tenant Decomissioning Process

The final step of the escalation process for unregistered tenants is a forceful decomissioning of the tenant and its workload. This requires a clear [Tenant Deprovisioning / Decommissioning](/maturity-model/tenant-management/tenant-deprovisioning-decommissioning.md) process that also accounts for “involuntary” deprovisioning scenarios. See the referenced building block for more details.

### Perform Tenant Inventory Reconciliations Regularly

Because shadow workloads on cloud platforms can have profoundly negative information security implications, cloud foundation teams should run tenant inventory reconciliations frequently. Compared to running a big annual reconciliation with big excel-sheets, an automated and regular reconciliation will also spread the workload for dealing with in-compliant cloud tenants and keep remediation processes in the teams “working memory”.  Cloud foundation teams with mature capabilities will run these reconciliations daily.