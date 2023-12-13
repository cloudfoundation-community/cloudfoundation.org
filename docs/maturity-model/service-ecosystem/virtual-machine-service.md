---
id: 58c92b8f-f836-4c69-aa6a-d11f0c8a9a44
url: https://www.notion.so/Virtual-Machine-Service-58c92b8ff8364c69aa6ad11f0c8a9a44
title: Virtual Machine Service
description: Provides VMs as a service for lift & shift and cloud newcomers.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️
  depends-on: []
  recommended:
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
    - 4f9ee73a-23a9-4aa3-b956-0df22e6156d0
    - 6e343acc-95bd-42aa-bb32-bdcce1c7d4ad
    - 2be4d7d1-4109-406b-a4f7-da6c566123fd
    - 2468d240-6cca-4680-b9c4-6f237defa511
    - d9c211e3-647c-4fd7-bf3b-3c806baeea7f
  scope: ☁️ Platform
  tool-implementations:
    - c3af4eea-6d9a-4c64-a117-ec018524979a
  name: Virtual Machine Service
---

Some application teams may lack the knowledge to operate their workloads in the cloud but may be comfortable with working in a data-center-like environment. Providing these teams with virtual machines as a service offers a stepping stone for bringing lift & shift workloads onto the cloud (see [Lift & Shift Landing Zone](../tenant-management/lift-and-shift-landing-zone.md)).

These virtual machines are typically not *fully* managed, they just provide VMs preconfigured with best practices and can be interacted with via the usual cloud tooling. For example, a team may be able to start/stop/snapshot its VM from the cloud console or via cli. This approach reduces implementation effort for the cloud foundation team (or the team responsible for providing the VM service) and exposes lift & shift teams to a reasonable degree of cloud-native tooling and operation practices.

## Proven Patterns When Implementing Virtual Machine Services

### Provide Virtual Machine Services in Tailored Landing Zones

Setting up dedicated lift & shift tenants ([Lift & Shift Landing Zone](../tenant-management/lift-and-shift-landing-zone.md)) with some opinionated best practices makes the switch to a cloud-native environment even smoother. For example by setting up a simple virtual network structure out of the box or restricting access to undesired cloud platform services.

### Set Clear Expectations about Service Levels

Virtual machines on the cloud come with a different set of SLAs and expectations compared to on-premise environments. Hypervisor hosts can fail or degrade more often and VMs may need to be reinstantiated by the customer. This is one of the primary reason we prefer handing over a larger portion of operation responsibilities to application teams compared to an on-premise environment where the typical shared responsibility alignment is “IT operations will make sure the VM is always running”.

> **🌤️** If this service-level is impractical to work with for the majority of your application teams, consider alternative solutions like “VMware on X” instead or re-evaluate the cloud-readiness of these workloads.

### Align Responsibilities for Operating System Maintenance

It’s important that application teams understand their responsibilities once a virtual machine is running. Will they have to patch the operating system or is the OS automatically enrolled in a patch management? Commonly unattended upgrades are automatically configured as part of the base image (see [Shared VM Image Repository](./shared-vm-image-repository.md)) and additional agents that ensure  [SOC Integration](../security-and-compliance/soc-integration.md) come already baked in.

In either case, it’s important the cloud foundation team decides about this early and provides clear guidance to all stakeholders (see [Shared Responsibility Model Alignment](../security-and-compliance/shared-responsibility-model-alignment.md)).

### Leverage Existing Services

By ensuring compatibility with existing services lift & shift projects get to benefit directly from their new cloud environment by simplifying operations.

- [Managed DNS Services](./managed-dns-services.md) and [Managed SSL Certificates](./managed-ssl-certificates.md) for securely exposing applications.

- [Shared VM Image Repository](./shared-vm-image-repository.md) for a catalog of pre-approved and maintained base images

- [On-Premise Network Connection](./on-premise-network-connection.md) for providing or interacting with internal services and applications.

- [Tenant to Tenant Transit Networks](./tenant-to-tenant-transit-networks.md) can be used for linking up with other tenants to iteratively transition lift & shift projects to cloud-native tenants.

