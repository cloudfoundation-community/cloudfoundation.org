---
id: 59fc4d46-739d-4d49-8bd7-d7b4882709ba
url: >-
  https://www.notion.so/Container-Platform-Landing-Zone-59fc4d46739d4d498bd7d7b4882709ba
title: Container Platform Landing Zone
description: >-
  A dedicated landing zone offering a developer-centric experience for building
  and running container-based applications on the cloud on top of a container
  platform.
category: 🗂 Tenant Management
pageType: CFMMBlock
properties:
  enables: []
  journey-stage: ⭐️⭐️
  depends-on:
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
    - 0dd09c75-2acd-4e87-9721-6b5f563da035
    - deb9d28e-e592-4c3c-b7da-020b7ba6bb0d
    - d1904912-b420-4a10-a62c-aa578fb847ff
    - b4678790-ab53-4219-83e7-fbde18383d05
  recommended:
    - 4f9ee73a-23a9-4aa3-b956-0df22e6156d0
    - 5f9c0f7d-860a-488b-bbf8-897618e5c76f
    - 02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6
    - cf487857-542f-4d74-8fe9-885b7be8ccf3
    - 71143f29-2fe9-452b-8398-fc40f270a2b6
    - 1a1cdeb0-de7e-4ea9-a963-e409b9abed54
  scope: ☁️ Platform
  tool-implementations:
    - bfc77006-225b-4425-afd0-ee8f897367ba
  name: Container Platform Landing Zone
---

- Many organizations have in-house application development teams. Unless they established DevOps (proper) and have dedicated resources embedded within every application team, providing a central platform bundling infrastructure operations makes sense (internal developer platform)

- Many application teams target containers and kubernetes specifically as an abstraction layer. Reduced vendor lock-in, reasonable abstraction over cloud infrastructure

- Central platform teams can build multi-tenant k8s on top of managed cloud provider offerings (e.g. GKE, AKS etc.) more easily. Should look into this angle first before offering [Kubernetes Cluster as a Service](../service-ecosystem/kubernetes-cluster-as-a-service.md) - it’s easier to operate fewer bigger clusters than many small cluster

- Caveat: Kubernetes is not specifically designed for hosting multi-tenant workloads, albeit this is usually fine in an in-house platform context with semi-trusted workloads. Some kubernetes based platforms like OpenShift offer better implementations

- Developer experience essentially “serverless”, i.e. no infrastructure responsibility.

- Can “augment” these landing zones with cloud-native tenant access, e.g. for object storage, cloud-native DBs (Dynamo DB etc.) → very powerful

- Alternative is a proprietary fully-managed serverless stack, e.g. AWS lambda, Azure Functions etc. Using containers is optional here, but has advanatages (see toolchain below)

- Landing Zone can deliver integrated [Managed DevOps Toolchain](../service-ecosystem/managed-devops-toolchain.md), [Shared container registry](../service-ecosystem/shared-container-registry.md), SDLC tooling etc.

- Landing Zone should set IAM policies and resource Quotas

- Should include [Private Cloud pay-per-use chargeback](../cost-management/private-cloud-pay-per-use-chargeback.md) 

