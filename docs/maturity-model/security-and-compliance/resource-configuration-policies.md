---
id: af14b5df-77b4-4def-b761-8fadabd241ca
url: >-
  https://www.notion.so/Resource-Configuration-Policies-af14b5df77b44defb7618fadabd241ca
title: Resource Configuration Policies
description: >-
  Policies control the configuration of resources to enforce security and
  compliance standards like preventing public access to object storage buckets.
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - dff7d733-d987-4145-aa1a-e340b5bcff81
    - 2c7cfeb1-2481-43b8-b31c-82cb5ba3375f
    - 74295ae4-dcd5-449b-8825-f12c5267e89b
    - b0a04ae8-c9b3-4060-abfd-e760723995d8
  redaction-state: mvp1
  journey-stage: ⭐️⭐️
  depends-on:
    - d1904912-b420-4a10-a62c-aa578fb847ff
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
  name: Resource Configuration Policies
---

After implementing policies for basic [Service and Location Restrictions](./service-and-location-restrictions.md), many cloud foundation teams find the need to enforce configuration policies for certain cloud resources. Examples for common use cases of these policies are 

- Restricting public access to Object Storage Buckets to prevent accidental misconfiguration and exposure of data

- Restricting access to public IPs for enforcing a private-only networking model in a Landing Zone

- Enforcing activation of [Centralized workload and infrastructure logs](./centralized-workload-and-infrastructure-logs.md) in cloud resources like virtual machines

- Enforcing mandatory encryption of storage at rest, optionally in combination with a [Managed Key Vault](../service-ecosystem/managed-key-vault.md) 

Landing zones that offer a [Shared Responsibility Model Alignment](./shared-responsibility-model-alignment.md) with a high degree of freedom for application teams to directly provision cloud resources should strongly consider enforcing resource configuration policies as a preventive measure for security incidents. Cloud foundation teams should consider implementing a healthy balance of preventive and reactive security measures like [Resource Configuration Scanning](./resource-configuration-scanning.md) to achieve a good cloud security posture.

Landing zones that offer less freedom for application teams for direct resource provisioning can enforce resource configuration shared or managed services that already implement the desired policies like a [Virtual Network Service](../service-ecosystem/virtual-network-service.md) or [Managed bastion hosts](../service-ecosystem/managed-bastion-hosts.md). This approach is usually most effective when combined with [Service and Location Restrictions](./service-and-location-restrictions.md) that prevent direct provisioning of the affected cloud resources.

## Proven Patterns for Implementing Cloud Resource Configuration Policies

There are a myriad of cloud services and technical options to implement resource configuration policies on most cloud platforms. This can make it difficult for cloud foundation teams to find the right balance between establishing important guard rails, while not getting lost in the details. It’s therefore essential that cloud foundation teams decide on a crisp [Shared Responsibility Model Alignment](./shared-responsibility-model-alignment.md) and strong [Service and Location Restrictions](./service-and-location-restrictions.md) for their Landing zones first, so they can restrict the “problem scope” of cloud resources that may need mandatory configuration policies.

### Leverage the Cloud API as the Policy Enforcement Point

In a self-service model where application teams are able to directly interact with the cloud to provision resources, the cloud platform’s API offers the only possible policy enforcement point for implementing preventive policies.

The most common tools to achieve preventive resource configuration policies on popular cloud platforms are

- Azure Policy with `Deny` effect

- AWS IAM Policies and service-specific APIs like S3 `PublicAccessBlock`

- GCP Organization Policies

- Kubernetes Admission Controllers with Open Policy Agent

Start out with the most basic policies before going more fine granular. A cloud foundation evolves and you will have to plan for supporting this evolution anyway. In practice, this means starting with basic restrictions before going into details.

### Review Provider Best-Practices and Published Policies

All of the hyper-scale cloud providers offer extensive guidance and reference implementations of best-practice configurations for secure resource configuration. Many providers offer libraries of published and maintained policies (e.g. [Azure built-in policy definitions](https://learn.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies)) that you can leverage out of the box. Reference landing zone implementations supplied by the cloud providers (see the Related Tools section below) also often contain custom policy implementations that can serve as templates for your own policies.

### Leverage Infrastructure-as-Code and Resource Hierarchy

The policies and guardrails established by your cloud foundation team will have to evolve. By leveraging a [Resource Hierarchy](../tenant-management/resource-hierarchy.md) you can easily define policies at a central location and have them inherit to a large number of cloud tenants. Infrastructure-as-code also helps maintaining the set of policies and establishing a proper change management for the inevitable evolution of your policy definitions.

### Build a Test Environment and Automate Testing

Custom resource configuration policies often contain complex logic. Having a dedicated environment for developing and testing your landing zones is thus essential. 

### Document Policy Decisions and Effects Extensively

Typical errors generated by cloud platforms in response to a violated resource configuration policy are very opaque. There’s nothing more frustrating for an application team trying to deploy their own cloud resources than a failed deployment with an obscure error message about a violated policy that the team didn’t know exists.

This is especially critical if the team was planning on using a particular service or configuration for their application and was not aware that the desired service or configuration is not available in the landing zone. Cloud foundation teams should thus maintain a central documentation of the resource policies effective in a particular landing zone. Most importantly, foundation teams should also document **why** a policy is in place and what compliance controls this helps implement with an accompanying compliance statement. Infrastructure as Code Landing Zone Frameworks like the [Landing Zone Construction Kit](https://landingzone.meshcloud.io) can help automate this documentation of policy and compliance statements for your landing zones.

