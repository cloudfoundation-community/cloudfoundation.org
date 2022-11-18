---
id: 1a1cdeb0-de7e-4ea9-a963-e409b9abed54
url: >-
  https://www.notion.so/Shared-container-registry-1a1cdeb0de7e4ea9a963e409b9abed54
title: Shared container registry
description: A central repository provides hardened container images.
category: 🛠 Service Ecosystem
pageType: CFMMBlock
properties:
  enables: []
  redaction-state: Draft
  journey-stage: ⭐️⭐️
  depends-on: []
  recommended:
    - 59fc4d46-739d-4d49-8bd7-d7b4882709ba
    - 71143f29-2fe9-452b-8398-fc40f270a2b6
  scope: 🛬 Landing Zone
  tool-implementations:
    - b441ec40-c21b-4c49-a57a-b4f5146789cd
  name: Shared container registry
---

Shared container registries allow teams building container-based applications to deliver their own containers for deployment and consume blessed base images from a central location. Organizations can leverage shared container registries to implement policies for scanning images for vulnerabilities and creating an inventory of software assets. The motivations for implementing a shared container registry can be similar to [Shared VM Image Repository](./shared-vm-image-repository.md) for IaaS applications.

Cloud Foundation teams should consider offering a shared container registry as part of their service offering in the following scenarios

- Your landing zones are enforcing restricted internet access and consumption of public registries is not easily possible

- You have compliance needs around vulnerability scanning, restricting acceptable 3rd party licenses or image archival

- You have a lot of development teams planning to use containers for application deployment and want to boost productivity by providing a managed services instead of each team rolling their own registry

To implement a shared container registry, cloud foundation teams can consider leveraging either cloud-native managed services such as Google Cloud Container Registry or dedicated open source registries like Project Quay.

