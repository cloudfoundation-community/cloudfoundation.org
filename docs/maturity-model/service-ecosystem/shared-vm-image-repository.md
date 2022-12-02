---
id: d9c211e3-647c-4fd7-bf3b-3c806baeea7f
url: >-
  https://www.notion.so/Shared-VM-Image-Repository-d9c211e3647c4fd7bf3b3c806baeea7f
title: Shared VM Image Repository
description: A central repository provides hardened virtual machine images.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️
  depends-on: []
  recommended:
    - d5c797b4-6300-4c58-aa98-76bbfc49fcc8
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
  scope: 🛬 Landing Zone
  tool-implementations: []
  name: Shared VM Image Repository
---

One key decision is if you want to allow application teams to “bring your own image”. 

However, most application teams don’t want to bother with this and use images already provided in the cloud. There are two main implementation approaches for this

- use cloud-provider managed virtual machine base images, maybe applying a policy to restrict them to a subset of available images (e.g. only allow CentOS, Ubuntu)

- provide “golden images” managed by your organizations

The golden image approach has a few advantages, e.g. when it comes to wiring up existing server management infrastructure like [SOC Integration](../security-and-compliance/soc-integration.md). It’s however quite a bit of work, considering cloud-specific specialties (kernel extensions for hypervisor support, cloud-init scripts etc.)

