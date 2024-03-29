---
id: d1904912-b420-4a10-a62c-aa578fb847ff
url: >-
  https://www.notion.so/Service-and-Location-Restrictions-d1904912b4204a10a62caa578fb847ff
title: Service and Location Restrictions
description: >-
  Basic policies on cloud resources restrict access to incompliant cloud
  services and cloud regions (geographic locations).
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - af14b5df-77b4-4def-b761-8fadabd241ca
    - dff7d733-d987-4145-aa1a-e340b5bcff81
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - f271478b-3921-494f-ab2c-de97808d3bb7
  redaction-state: mvp1
  journey-stage: ⭐️
  depends-on:
    - ac8a21c3-f692-4d23-a9bb-796fd311c39f
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
  recommended: []
  scope: 🛬 Landing Zone
  tool-implementations:
    - 7beb3669-9658-4b4d-a87a-a136d9556f32
    - 483a6e1f-f717-44f0-bab1-7aa1049ef367
    - 694f24b9-1588-499b-9406-2f5f747747ba
    - c7020f93-4d65-4609-ae64-5ea3e76add60
    - 24f0be77-129c-4802-80fd-2c58c6374300
    - 8a4e5f69-742c-43ef-948b-ed39fc21b3d8
    - 4a2514ab-25e3-4d9c-aca7-9ef3f2b4a094
    - 7c317222-5658-447c-9ade-44f90e9aee96
    - b153c072-1a43-46fb-90fa-60263f6d4705
  name: Service and Location Restrictions
---

Building a cloud Landing Zone is a proven pattern to establish the guardrails that allow a cloud foundation team to offer a great deal of freedom while staying in control. Policies that constrain what resources your customers can deploy on the cloud are the most fundamental type of guardrail a landing zone can put in place. 

There are two fundamental approaches to establishing these policies: **whitelisting** and **blacklisting.** Whitelisting starts from the assumption that all types of resources are forbidden unless explicitly allowed in a whitelist. Blacklisting starts from the opposite assumption that all types of resources are allowed unless explicitly forbidden on a blacklist. Both approaches require a certain amount of maintenance as the demands of internal customers change and cloud providers evolve their service offerings.

> **💡** In contrast to resource whitelisting, the blacklisting approach favors agility by empowering application teams to use cloud services within their own responsibility. For many organizations, this is the better default when a primary motivation for cloud adoption is to increase IT agility. The Cloud Foundation team establishes guardrails by blacklisting known incompliant services.

Cloud platforms offer different types of mechanisms to implement these policies. The most common mechanisms are

- **Location-based policies** can forbid the deployment of resources in a particular cloud location or region. For example, your organization may want to restrict deployment to certain geographic regions in order to comply with data privacy regulations.

- **Resource- or service type-based policies** can forbid the use of certain types of cloud services. Motivations to enforce these restrictions include services that do not meet required regulatory standards or carry a high risk (e.g. security issues due to misconfiguration, bill-shock) associated with them.v

- **Quota-based policies** are mostly relevant to private cloud platforms. They enable private cloud operators to protect the stability of their platforms and can also substitute missing platform functionality for implementing location- or resource-based policies. An example of this substitution is setting a resource quota to zero, effectively blacklisting customer projects from using it. A motivating use case for this can be a storage pool that’s dedicated to a Database as a Service platform offered as part of a [In-house PaaS Service Integration](../service-ecosystem/in-house-paas-service-integration.md).

- **IAM-based policies** are an implementation alternative when a resource-based policy mechanism is not available. Never granting the required IAM permissions to create a type of resource (or actively denying its creation) effectively creates a blacklist for the resource.

## Proven Patterns for Implementing Cloud Resource Policies

The myriad of cloud services and the technical abilities to implement resource black listing of most cloud platforms are endless. This can make it difficult for cloud foundation teams to find the right balance between establishing important guard rails, while not getting lost in the details.

<!--notion-markdown-cms:raw-->
<CallToAction>
  <CtaHeader>Multi-Cloud Security and Compliance</CtaHeader>
  <CtaText>Check out meshcloud’s comprehensive guide to “<b>Multi-Cloud Security and Compliance</b>” as an introduction to challenges of defining your compliance strategy and building compliant landing zones.</CtaText>
  <CtaButton class="btn-primary" url="https://www.meshcloud.io/2021/05/19/multi-cloud-security-and-compliance/">Read the Guide</CtaButton>
</CallToAction>

### Start Coarse, Go Fine

Start out with the most basic policies before going more fine granular. A cloud foundation evolves and you will have to plan for supporting this evolution anyway. In practice, this means starting with basic restrictions before going into details.

**In which geographies do you plan to leverage cloud services?** Unless you have explicit guidance from compliance stakeholders, start with allowing only your “home” geography. This can be where your organization is headquartered. For example, if you’re a US company blacklist all non-US regions in the cloud. 

> **💡** In contrast to the general advice to favor blacklisting, location-based restrictions often make more sense to implement as a whitelist.

**Restrict access to typical “shared services”**. Some cloud services like those required to implement [On-Premise Network Connection](../service-ecosystem/on-premise-network-connection.md) (e.g. AWS Transit Gateway, Azure ExpressRoute) should not be available to your application teams. Put those on a blacklist as they should be provided and controlled centrally by the cloud foundation team.

### Define Your Shared Responsibility Model

The [Shared Responsibility Model Alignment](./shared-responsibility-model-alignment.md) is the most important asset for establishing your cloud foundation’s philosophy. If you’re taking a “hands-off” approach that empowers application teams with a lot of freedom in exchange for a larger chunk of “residual responsibility”, you will have to spend less time evaluating all possible cloud services for blacklisting. On the other hand, if your cloud foundation aims to take a lot of responsibility from application teams’ shoulders, you will have to design and evaluate guardrails more consciously. 

### Involve Legal and Compliance Stakeholders

One of the cornerstones of the cloud foundation operating model is that legal and compliance stakeholders have more than just a seat at the table. They are part of the cloud foundation team. In contrast to other operating models where compliance stakeholders have a guiding and consulting role (”providing paper”), cloud foundation teams should take it in their responsibility to actually codify this guidance into technical policies (“providing automated policy”).

### Leverage Infrastructure-as-Code and Resource Hierarchy

The policies and guardrails established by your cloud foundation team will have to evolve. By leveraging a [Resource Hierarchy](../tenant-management/resource-hierarchy.md) you can easily define policies at a central location and have them inherit to a large number of cloud tenants. Infrastructure-as-code also helps maintaining the set of policies and establishing a proper change management for the inevitable evolution of your policy definitions.



## How to Implement Location Restrictions

### Azure

Assign the following policies to the management group containing your use case tailored landing zones:

- [Allowed locations](https://github.com/Azure/azure-policy/blob/master/built-in-policies/policyDefinitions/General/AllowedLocations_Deny.json)

- [Allowed locations for Resource Groups](https://github.com/Azure/azure-policy/blob/master/built-in-policies/policyDefinitions/General/ResourceGroupAllowedLocations_Deny.json)

See [Azure policy quickstarts](https://learn.microsoft.com/en-us/azure/governance/policy/assign-policy-portal) for how to assign policies.

### AWS

Create an IAM policy with the `aws:RequestedRegion` condition key for location restrictions as described [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-requested-region.html).

### GCP

Customize `Google Cloud Platform - Resource Location Restriction` organization policy as described [here](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations).



## How to Implement Service Restrictions

The objective is to enforce access restrictions for services that may not align with your organization's roadmap. For instance, let us think about the constraint of selecting different types of virtual machines:

### Azure

Assign the following policy to the management group containing your use case tailored landing zones:

- [Allowed virtual machine size SKUs](https://github.com/Azure/azure-policy/blob/master/built-in-policies/policyDefinitions/Compute/VMSkusAllowed_Deny.json)

### AWS

Create an IAM policy with the following JSON code, add instance types and locations that you want to allow. Attach this policy to all desired IAM Identities.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowLimitedInstanceTypes",
            "Effect": "Deny",
            "Action": "ec2:RunInstances",
            "Resource": "arn:aws:ec2:*:*:instance/*",
            "Condition": {
                "ForAnyValue:StringNotLike": {
                    "ec2:InstanceType": [
                        "*.nano",
                        "*.small",
                        "*.micro",
                        "*.medium"
                    ]
                }
            }
        }
    ]
}
```

### GCP

Create a JSON policy by putting “compute.vmExternalMachinesRestrictions” in the “constraint” field and the types of virtual machines to be allowed in the “Policy Values” field. Then Assign this policy to an organization, a folder, or a project.