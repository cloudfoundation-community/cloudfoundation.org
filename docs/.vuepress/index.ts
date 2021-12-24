export const index = [
  {
    "file": "docs/explore/blocks/cloud-siem.md",
    "meta": {
      "id": "012dc29a-5b79-4eeb-8154-9ef0f2ae0f02",
      "url": "https://www.notion.so/Cloud-SIEM-012dc29a5b794eeb81549ef0f2ae0f02",
      "title": "Cloud SIEM",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Cloud Tenant Audit logs are automatically analysed for anomalies\n- proactive analysis\n...",
      "tool-implementations": [],
      "name": "Cloud SIEM"
    }
  },
  {
    "meta": {
      "id": "01a9cbca-3dd4-4378-b1f5-1ae64b76cc19",
      "url": "https://www.notion.so/Multi-Cloud-Authorization-with-meshStack-01a9cbca3dd44378b1f51ae64b76cc19"
    },
    "properties": {
      "block": [
        "0dd09c75-2acd-4e87-9721-6b5f563da035"
      ],
      "tool": [
        "c5757e31-5c6c-487a-81b2-96ba50dda3af"
      ],
      "summary": "meshStack allows operators to define a multi-cloud role model that teams can consume in self-service. meshStack replicates assigned roles and groups to cloud platform directories and cloud tenants.",
      "link": "https://docs.meshcloud.io/docs/meshcloud.project.html#access-control-on-a-meshproject",
      "name": "Multi-Cloud Authorization with meshStack"
    }
  },
  {
    "file": "docs/explore/blocks/billing-to-different-legal-entities.md",
    "meta": {
      "id": "0217c4da-6542-41d6-84c7-12af887e7d15",
      "url": "https://www.notion.so/Billing-to-different-legal-entities-0217c4da654241d684c712af887e7d15",
      "title": "Billing to different legal entities",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Support billing cloud workloads to different legal entities of an enterprise. This may manifest e.g. as different billing accounts (GCP), enterprise agreement (Azure) or Payer Accounts (AWS).",
      "tool-implementations": [],
      "name": "Billing to different legal entities"
    }
  },
  {
    "file": "docs/explore/blocks/private-cloud-pay-per-use-pricing.md",
    "meta": {
      "id": "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6",
      "url": "https://www.notion.so/Private-Cloud-pay-per-use-pricing-02e4de2c7e1e4dd9aa76b58a88f04ff6",
      "title": "Private Cloud pay-per-use pricing",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️",
      "depends-on": [
        "cd162600-e742-4a80-b022-989da423ca43"
      ],
      "scope": "☁️ Platform",
      "summary": "Resource consumption on private cloud platforms such as OpenStack, Cloud Foundry or OpenShift (when used as a multi-tenant platform) is billed according to a pay-per-use pricing model.",
      "tool-implementations": [
        "c7b3902e-6708-4b0e-9e43-776f863baa3e"
      ],
      "name": "Private Cloud pay-per-use pricing"
    }
  },
  {
    "file": "docs/explore/blocks/automated-security-scanning.md",
    "meta": {
      "id": "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b",
      "url": "https://www.notion.so/Automated-Security-Scanning-09e744c5e12a49e88b6fb7e3c44ba63b",
      "title": "Automated Security Scanning",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [
        "802fdd8d-7fc0-4749-937f-e9e0ccb3f273"
      ],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Cloud workloads are automatically scanned for security/compliance violations (e.g. Azure Security Center, Forseti, AWS Guard Duty). This is about cloud resource configuration (e.g. VPC ACLs), not about workload configuration (e.g. software firewall)",
      "tool-implementations": [],
      "name": "Automated Security Scanning"
    }
  },
  {
    "file": "docs/plan/readme.md",
    "meta": {
      "id": "0bf64e3d-2d0a-410f-ad94-e7c7b8a6512b",
      "url": "https://www.notion.so/Overview-0bf64e3d2d0a410fad94e7c7b8a6512b",
      "title": "Overview",
      "category": "Plan",
      "order": 0
    },
    "properties": {
      "order": 0,
      "category": "Plan",
      "redaction-state": "Sketch",
      "name": "Overview"
    }
  },
  {
    "file": "docs/partners/readme.md",
    "meta": {
      "id": "0dc7ba44-fa38-44e1-adde-81ffeac910b9",
      "url": "https://www.notion.so/Overview-0dc7ba44fa3844e1adde81ffeac910b9",
      "title": "Overview",
      "category": "Partners",
      "order": 0
    },
    "properties": {
      "order": 0,
      "category": "Partners",
      "redaction-state": "Sketch",
      "name": "Overview"
    }
  },
  {
    "file": "docs/explore/blocks/authorization-concept.md",
    "meta": {
      "id": "0dd09c75-2acd-4e87-9721-6b5f563da035",
      "url": "https://www.notion.so/Authorization-Concept-0dd09c752acd4e8797216b5f563da035",
      "title": "Authorization Concept",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [
        "1afea746-da65-4164-9029-5e0bfa9432b1"
      ],
      "journey-stage": "⭐️⭐️",
      "depends-on": [
        "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
      ],
      "scope": "🏢 Core",
      "summary": "Define a multi-cloud authorization concept that platforms can implement independently and according to the cloud platform's native authorization capabilities. The authorization concept should consider key principles like segregation of duties, need-to-know and separation of privileged and unprivileged roles.",
      "tool-implementations": [
        "01a9cbca-3dd4-4378-b1f5-1ae64b76cc19"
      ],
      "name": "Authorization Concept"
    }
  },
  {
    "file": "docs/explore/blocks/tenant-deprovisioning-decomissioning.md",
    "meta": {
      "id": "119bfca5-dda6-408c-b35d-c59d0f209fcf",
      "url": "https://www.notion.so/Tenant-Deprovisioning-Decomissioning-119bfca5dda6408cb35dc59d0f209fcf",
      "title": "Tenant Deprovisioning / Decomissioning",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [
        "77942f5f-e395-49c6-8927-e5fa3ef28aef"
      ],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Process for decommissioning and deprovisioning cloud tenants that are no longer needed.",
      "tool-implementations": [],
      "name": "Tenant Deprovisioning / Decomissioning"
    }
  },
  {
    "file": "docs/explore/blocks/multi-cloud-tenant-database.md",
    "meta": {
      "id": "11af37b7-c948-4486-a5da-5b1db6de8193",
      "url": "https://www.notion.so/Multi-Cloud-Tenant-Database-11af37b7c9484486a5da5b1db6de8193",
      "title": "Multi-Cloud Tenant Database",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [
        "77942f5f-e395-49c6-8927-e5fa3ef28aef"
      ],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "A central database provides information about tenants in different clouds using a unified information schema. Tenants can be registered in this database via an API or are stored there by combining different tenant lists/exports into a common database schema (ETL).",
      "tool-implementations": [],
      "name": "Multi-Cloud Tenant Database"
    }
  },
  {
    "file": "docs/explore/blocks/3rd-party-paas-service-integration.md",
    "meta": {
      "id": "124d5b65-1e6c-47c5-81fc-134315c72e32",
      "url": "https://www.notion.so/3rd-party-PaaS-Service-Integration-124d5b651e6c47c581fc134315c72e32",
      "title": "3rd party PaaS Service Integration",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Teams can leverage third-party PaaS providers for managed services like DBaaS, observability platforms or analytics. Teams can manage service-lifecycle and IAM in self-service and are transparently charged for all consumption cost incurred.",
      "tool-implementations": [],
      "name": "3rd party PaaS Service Integration"
    }
  },
  {
    "file": "docs/explore/blocks/managed-key-vault.md",
    "meta": {
      "id": "137ac22d-b96c-4d49-aa83-da5779e3d59c",
      "url": "https://www.notion.so/Managed-Key-Vault-137ac22db96c4d49aa83da5779e3d59c",
      "title": "Managed Key Vault",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [
        "18256d4f-e096-4281-809a-f77c5dd20ef0"
      ],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Managed key management services that allow applications to securely store and retrieve credentials in the cloud. The key management service configuration is aligned with the organization's policies for cryptography and secret management.",
      "tool-implementations": [],
      "name": "Managed Key Vault"
    }
  },
  {
    "file": "docs/explore/blocks/playground-sandbox-environments.md",
    "meta": {
      "id": "155c0ead-cbd0-4e0c-9387-cc57946f80e9",
      "url": "https://www.notion.so/Playground-Sandbox-Environments-155c0eadcbd04e0c9387cc57946f80e9",
      "title": "Playground / Sandbox Environments",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "DevOps Teams / Developers can quickly provision cloud environments for experimentation / learning, thereby accelerating an organization's cloud journey. Playgrounds use relaxed policies (e.g. more cloud services are allowed) but come with time- or spend-limits that are tightly controlled. Expired playgrounds are automatically deprovisioned.",
      "tool-implementations": [],
      "name": "Playground / Sandbox Environments"
    }
  },
  {
    "file": "docs/partners/software-vendor/meshcloud.md",
    "meta": {
      "id": "16825279-41de-4c72-a09b-f071a85d1118",
      "url": "https://www.notion.so/meshcloud-1682527941de4c72a09bf071a85d1118",
      "title": "meshcloud",
      "category": "Software Vendor"
    },
    "properties": {
      "specialty": "Assessments",
      "category": "Software Vendor",
      "name": "meshcloud"
    }
  },
  {
    "file": "docs/explore/blocks/service-account-management.md",
    "meta": {
      "id": "18256d4f-e096-4281-809a-f77c5dd20ef0",
      "url": "https://www.notion.so/Service-Account-Management-18256d4fe0964281809af77c5dd20ef0",
      "title": "Service Account Management",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [
        "137ac22d-b96c-4d49-aa83-da5779e3d59c"
      ],
      "scope": "☁️ Platform",
      "summary": "Managed provisioning and inventory of Service Accounts including their permission sets. Enables central enforcement of compliance policies for technical users like re-certification, credential strength and credential rotation.",
      "tool-implementations": [],
      "name": "Service Account Management"
    }
  },
  {
    "file": "docs/explore/blocks/shared-container-registry.md",
    "meta": {
      "id": "1a1cdeb0-de7e-4ea9-a963-e409b9abed54",
      "url": "https://www.notion.so/Shared-container-registry-1a1cdeb0de7e4ea9a963e409b9abed54",
      "title": "Shared container registry",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "A central repository provides hardened container images.",
      "tool-implementations": [],
      "name": "Shared container registry"
    }
  },
  {
    "file": "docs/explore/blocks/privileged-access-management.md",
    "meta": {
      "id": "1afea746-da65-4164-9029-5e0bfa9432b1",
      "url": "https://www.notion.so/Privileged-Access-Management-1afea746da65416490295e0bfa9432b1",
      "title": "Privileged Access Management",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [
        "37862f9f-3d8a-4e25-8e90-e487dc455b0c",
        "0dd09c75-2acd-4e87-9721-6b5f563da035"
      ],
      "scope": "☁️ Platform",
      "summary": "Implement appropriate security controls for privileged access as defined in the Authorization Concept. These must cover access to administrative cloud platform roles (e.g. Global Admins, Global Readers) and shared services (e.g. on-premise connectivity hubs).",
      "tool-implementations": [],
      "name": "Privileged Access Management"
    }
  },
  {
    "file": "docs/explore/blocks/on-premise-network-connection.md",
    "meta": {
      "id": "2468d240-6cca-4680-b9c4-6f237defa511",
      "url": "https://www.notion.so/On-Premise-Network-Connection-2468d2406cca4680b9c46f237defa511",
      "title": "On-Premise Network Connection",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [
        "2be4d7d1-4109-406b-a4f7-da6c566123fd"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "Provides managed IP (L3) connectivity to on-premises networks. This is commonly implemented using hub&spoke network architectures and a combination of VPNs or private network peerings.",
      "tool-implementations": [],
      "name": "On-Premise Network Connection"
    }
  },
  {
    "file": "docs/explore/blocks/monthly-cloud-project-billing-report.md",
    "meta": {
      "id": "28740e92-5559-4931-ab04-17cfb026edd5",
      "url": "https://www.notion.so/Monthly-cloud-project-billing-report-28740e9255594931ab0417cfb026edd5",
      "title": "Monthly cloud project billing report",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Project owners can view a monthly billing report listing all incurred charges aggregated across all cloud platforms and services used in a project.",
      "tool-implementations": [],
      "name": "Monthly cloud project billing report"
    }
  },
  {
    "file": "docs/explore/blocks/virtual-network-service.md",
    "meta": {
      "id": "2be4d7d1-4109-406b-a4f7-da6c566123fd",
      "url": "https://www.notion.so/Virtual-Network-Service-2be4d7d14109406ba4f7da6c566123fd",
      "title": "Virtual Network Service",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [
        "f90c7375-88b9-42dc-8e98-a65c006b927a",
        "2468d240-6cca-4680-b9c4-6f237defa511",
        "6e343acc-95bd-42aa-bb32-bdcce1c7d4ad",
        "a31e4077-4e84-4129-a46c-1070a8591181",
        "6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9"
      ],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "A virtual network service provides a pre-configured virtual network. It is a pre-requisite for higher-level services built on virtual networks.",
      "tool-implementations": [],
      "name": "Virtual Network Service"
    }
  },
  {
    "file": "docs/explore/blocks/centralized-audit-logs.md",
    "meta": {
      "id": "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f",
      "url": "https://www.notion.so/Centralized-audit-logs-2c7cfeb1248143b8b31c82cb5ba3375f",
      "title": "Centralized audit logs",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Audit logs from all cloud tenants (API/resource access) are centrally collected and stored.",
      "tool-implementations": [],
      "name": "Centralized audit logs"
    }
  },
  {
    "file": "docs/tools/selecting-cloud-foundation-tools.md",
    "meta": {
      "id": "2efdc850-20dc-400c-982a-1279326ec5df",
      "url": "https://www.notion.so/Selecting-Cloud-Foundation-Tools-2efdc85020dc400c982a1279326ec5df",
      "title": "Selecting Cloud Foundation Tools",
      "category": "Tools",
      "order": 10
    },
    "properties": {
      "order": 10,
      "documentation": "Guide",
      "category": "Tools",
      "redaction-state": "Sketch",
      "name": "Selecting Cloud Foundation Tools"
    }
  },
  {
    "file": "docs/explore/blocks/cloud-tenant-resources-tagging.md",
    "meta": {
      "id": "344b75a4-595b-4ba5-8851-ddfb6d4acf7c",
      "url": "https://www.notion.so/Cloud-Tenant-resources-tagging-344b75a4595b4ba58851ddfb6d4acf7c",
      "title": "Cloud Tenant resources tagging",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Cloud tenant resources are tagged and managed according to the companies needs",
      "tool-implementations": [],
      "name": "Cloud Tenant resources tagging"
    }
  },
  {
    "file": "docs/explore/blocks/identity-and-access-management-concept.md",
    "meta": {
      "id": "37862f9f-3d8a-4e25-8e90-e487dc455b0c",
      "url": "https://www.notion.so/Identity-and-Access-Management-Concept-37862f9f3d8a4e258e90e487dc455b0c",
      "title": "Identity and Access Management Concept",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [
        "1afea746-da65-4164-9029-5e0bfa9432b1",
        "0dd09c75-2acd-4e87-9721-6b5f563da035",
        "b4678790-ab53-4219-83e7-fbde18383d05",
        "456f15f2-299e-4a8b-a8c9-cb0580a887d2"
      ],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Multi-Cloud IAM architecture concept based on federated identities and authentication.",
      "tool-implementations": [],
      "name": "Identity and Access Management Concept"
    }
  },
  {
    "meta": {
      "id": "3c377c14-3fbf-4766-a47a-e30bd070ed7f",
      "url": "https://www.notion.so/Managed-DevOps-toolchains-with-meshStack-3c377c143fbf4766a47ae30bd070ed7f"
    },
    "properties": {
      "block": [
        "71143f29-2fe9-452b-8398-fc40f270a2b6"
      ],
      "tool": [
        "c5757e31-5c6c-487a-81b2-96ba50dda3af"
      ],
      "summary": "meshStack allows cloud foundation teams to provide additional services via a marketplace. DevOps teams can provision services from this marketplace in self-service, while a service broker adhering to the Open Service Broker API automates the technical service provisioning.",
      "link": "https://docs.meshcloud.io/docs/marketplace.index.html",
      "name": "Managed DevOps toolchains with meshStack"
    }
  },
  {
    "file": "docs/explore/blocks/individual-project-cost-optimization-via-reservation.md",
    "meta": {
      "id": "3c65a957-cb62-40fe-978e-709e3450f7fe",
      "url": "https://www.notion.so/Individual-Project-Cost-Optimization-via-Reservation-3c65a957cb6240fe978e709e3450f7fe",
      "title": "Individual Project Cost Optimization via Reservation",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Enable cloud customers within your organisation to take advantage of cloud provider cost optimisation opportunities available on individual cloud tenants like instance reservations. The chargeback process considers any resulting pre-payments and benefits out of these reservations. A system is in place to manage associated risks (e.g. budget authorization, overcommitment, lack of budget).",
      "tool-implementations": [],
      "name": "Individual Project Cost Optimization via Reservation"
    }
  },
  {
    "file": "docs/explore/blocks/ceritfied-isms-compliance.md",
    "meta": {
      "id": "3c7081e5-c451-40b6-806d-a8d21b130612",
      "url": "https://www.notion.so/Ceritfied-ISMS-Compliance-3c7081e5c45140b6806da8d21b130612",
      "title": "Ceritfied ISMS Compliance",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
      "depends-on": [
        "57c521ba-73a4-4187-a507-bbd5eaa80212"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "The landing zone and its operation by the cloud foundation team are certified according to an information security management system like ISO 27001 or C5.",
      "tool-implementations": [],
      "name": "Ceritfied ISMS Compliance"
    }
  },
  {
    "file": "docs/plan/cloud-journey.md",
    "meta": {
      "id": "3f662324-3648-435b-a4ec-5ea5bc21c52e",
      "url": "https://www.notion.so/Cloud-Journey-3f6623243648435ba4ec5ea5bc21c52e",
      "title": "Cloud Journey",
      "category": "Plan",
      "order": 20
    },
    "properties": {
      "order": 20,
      "documentation": "Explanation",
      "category": "Plan",
      "redaction-state": "Sketch",
      "name": "Cloud Journey"
    }
  },
  {
    "file": "docs/explore/blocks/kubernetes-cluster-as-a-service.md",
    "meta": {
      "id": "42fae8c2-1ef8-4e1e-bcb4-eb6ca1520ec4",
      "url": "https://www.notion.so/Kubernetes-Cluster-as-a-Service-42fae8c21ef84e1ebcb4eb6ca1520ec4",
      "title": "Kubernetes Cluster as a Service",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Provides Kubernetes Clusters as a Service. These are deployed as workloads into the customer's cloud tenants.",
      "tool-implementations": [],
      "name": "Kubernetes Cluster as a Service"
    }
  },
  {
    "file": "docs/explore/blocks/identity-lifecycle-management.md",
    "meta": {
      "id": "456f15f2-299e-4a8b-a8c9-cb0580a887d2",
      "url": "https://www.notion.so/Identity-Lifecycle-Management-456f15f2299e4a8ba8c9cb0580a887d2",
      "title": "Identity Lifecycle Management",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [
        "b4678790-ab53-4219-83e7-fbde18383d05",
        "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
      ],
      "scope": "☁️ Platform",
      "summary": "Identities are consistently governed across throughout the entire lifecycle from provisioning to deprovisioning.",
      "tool-implementations": [],
      "name": "Identity Lifecycle Management"
    }
  },
  {
    "file": "docs/explore/the-building-blocks.md",
    "meta": {
      "id": "479f18c8-ac4b-477d-b5b4-4df2f04fc4f3",
      "url": "https://www.notion.so/The-Building-Blocks-479f18c8ac4b477db5b44df2f04fc4f3",
      "title": "The Building Blocks",
      "category": "Explore",
      "order": 20
    },
    "properties": {
      "order": 20,
      "documentation": "Reference",
      "category": "Explore",
      "redaction-state": "Draft",
      "name": "The Building Blocks"
    }
  },
  {
    "file": "docs/explore/readme.md",
    "meta": {
      "id": "4f1a5a1d-8abe-42e1-ba96-0f5a6b68e38f",
      "url": "https://www.notion.so/Explore-4f1a5a1d8abe42e1ba960f5a6b68e38f",
      "title": "Explore",
      "category": "Explore",
      "order": 0
    },
    "properties": {
      "order": 0,
      "documentation": "Reference",
      "category": "Explore",
      "redaction-state": "Sketch",
      "name": "Explore"
    }
  },
  {
    "file": "docs/explore/blocks/cloud-tenant-tagging.md",
    "meta": {
      "id": "52d1e517-9d07-4acc-8c59-17526fa3af9d",
      "url": "https://www.notion.so/Cloud-tenant-tagging-52d1e5179d074acc8c5917526fa3af9d",
      "title": "Cloud tenant tagging",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Cloud tenants are tagged and managed according to the companies needs",
      "tool-implementations": [],
      "name": "Cloud tenant tagging"
    }
  },
  {
    "file": "docs/explore/blocks/monolithic-landing-zone.md",
    "meta": {
      "id": "57c00ed4-e699-4167-a0f5-6009bf31b600",
      "url": "https://www.notion.so/Monolithic-Landing-Zone-57c00ed4e6994167a0f56009bf31b600",
      "title": "Monolithic Landing Zone",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Landing Zones includes a common set of core resources like virtual networks. These resources are managed with the same life-cycle as the underlying cloud tenant.",
      "tool-implementations": [],
      "name": "Monolithic Landing Zone"
    }
  },
  {
    "file": "docs/explore/blocks/shared-responsibility-model.md",
    "meta": {
      "id": "57c521ba-73a4-4187-a507-bbd5eaa80212",
      "url": "https://www.notion.so/Shared-Responsibility-Model-57c521ba73a44187a507bbd5eaa80212",
      "title": "Shared Responsibility Model",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [
        "3c7081e5-c451-40b6-806d-a8d21b130612"
      ],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "A shared responsibility model describes the services provided by the cloud foundation and how it interacts with the cloud provider's shared responsibility model.",
      "tool-implementations": [
        "c596a5f1-dc63-46b6-8d1f-25dcf12ff484"
      ],
      "name": "Shared Responsibility Model"
    }
  },
  {
    "file": "docs/tools/cli/collie-cli.md",
    "meta": {
      "id": "5c2013b6-4c56-4813-8be7-ad86757014af",
      "url": "https://www.notion.so/collie-cli-5c2013b64c5648138be7ad86757014af",
      "title": "collie-cli",
      "category": "cli"
    },
    "properties": {
      "category": "cli",
      "name": "collie-cli"
    }
  },
  {
    "file": "docs/tools/readme.md",
    "meta": {
      "id": "640be841-cf31-480d-835d-89d491b558f5",
      "url": "https://www.notion.so/Overview-640be841cf31480d835d89d491b558f5",
      "title": "Overview",
      "category": "Tools",
      "order": 0
    },
    "properties": {
      "order": 0,
      "category": "Tools",
      "redaction-state": "Sketch",
      "name": "Overview"
    }
  },
  {
    "file": "docs/explore/blocks/tenant-inventory-reconciliation.md",
    "meta": {
      "id": "64284b14-faab-461c-80bb-5e8efbae4dcc",
      "url": "https://www.notion.so/Tenant-Inventory-Reconciliation-64284b14faab461c80bb5e8efbae4dcc",
      "title": "Tenant Inventory Reconciliation",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "The inventory of cloud tenants is automatically reconciled against the tenants actually present in the cloud platforms. This allows organizations to detect \"shadow IT\" or \"dark matter\" in the cloud. A process is in place to adopt these existing tenants into the prescribed governance model.",
      "tool-implementations": [],
      "name": "Tenant Inventory Reconciliation"
    }
  },
  {
    "file": "docs/explore/blocks/managed-bastion-hosts.md",
    "meta": {
      "id": "6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9",
      "url": "https://www.notion.so/Managed-bastion-hosts-6c9827e973b249f5bfb53fe23fd5b9e9",
      "title": "Managed bastion hosts",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [
        "2be4d7d1-4109-406b-a4f7-da6c566123fd"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "Teams can use a managed service to access resources on private cloud networks using managed bastion hosts or gateway services. These gateways are hardened and centrally audited.",
      "tool-implementations": [],
      "name": "Managed bastion hosts"
    }
  },
  {
    "file": "docs/explore/blocks/tenant-to-tenant-transit-networks.md",
    "meta": {
      "id": "6e343acc-95bd-42aa-bb32-bdcce1c7d4ad",
      "url": "https://www.notion.so/Tenant-to-Tenant-Transit-Networks-6e343acc95bd42aabb32bdcce1c7d4ad",
      "title": "Tenant to Tenant Transit Networks",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
      "depends-on": [
        "2be4d7d1-4109-406b-a4f7-da6c566123fd"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "Provides managed connectivity between cloud tenants on the same cloud platform via centrally managed transit networks.",
      "tool-implementations": [],
      "name": "Tenant to Tenant Transit Networks"
    }
  },
  {
    "file": "docs/explore/blocks/central-management-of-tenant-tags-and-metadata.md",
    "meta": {
      "id": "707c41b8-6da0-4e78-b982-fa4b1365521b",
      "url": "https://www.notion.so/Central-Management-of-Tenant-tags-and-metadata-707c41b86da04e78b982fa4b1365521b",
      "title": "Central Management of Tenant tags and metadata",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [
        "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2",
        "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d"
      ],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Multi-Cloud governance is enforced by central management of tags and metadata for all kinds of cloud tenants, independent of the cloud provider",
      "tool-implementations": [],
      "name": "Central Management of Tenant tags and metadata"
    }
  },
  {
    "file": "docs/explore/blocks/managed-cicd-platform.md",
    "meta": {
      "id": "71143f29-2fe9-452b-8398-fc40f270a2b6",
      "url": "https://www.notion.so/Managed-CI-CD-Platform-71143f292fe9452b8398fc40f270a2b6",
      "title": "Managed CI/CD Platform",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Teams can use a CI/CD platform that is integrated with the cloud tenants used by the team. Service account and automation user credentials are automatically maintained and rotated.",
      "tool-implementations": [
        "3c377c14-3fbf-4766-a47a-e30bd070ed7f"
      ],
      "name": "Managed CI/CD Platform"
    }
  },
  {
    "file": "docs/explore/blocks/soc-integration.md",
    "meta": {
      "id": "74295ae4-dcd5-449b-8825-f12c5267e89b",
      "url": "https://www.notion.so/SOC-Integration-74295ae4dcd5449b8825f12c5267e89b",
      "title": "SOC Integration",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Virtual machines are integrated into a central Security Operations Center (SOC) solution like [Tenable.io](http://tenable.io) or Qualys. The cloud inventory of existing machines is reconciled against the SOC to ensure completeness.",
      "tool-implementations": [],
      "name": "SOC Integration"
    }
  },
  {
    "file": "docs/explore/blocks/managed-data-lake-access.md",
    "meta": {
      "id": "74bf9fe5-6bd5-4940-9714-aad2b25e03c4",
      "url": "https://www.notion.so/Managed-Data-Lake-access-74bf9fe56bd549409714aad2b25e03c4",
      "title": "Managed Data Lake access",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Teams can get managed access to central data warehouses and data lakes to combine this data with processing and infrastructure in their own cloud tenants. Common usage scenarios are \"analyst workbenches\" for cloud-native DL/DW tools like BigQuery that provide a self-service UI and \"advanced data pipelines\" where teams need to load/query data from the central lake into their own pipelines (e.g. different teams building ML models for different purposes from common data).",
      "tool-implementations": [],
      "name": "Managed Data Lake access"
    }
  },
  {
    "file": "docs/explore/blocks/multi-cloud-tenant-database-integrated-with-lifecycle-management.md",
    "meta": {
      "id": "77942f5f-e395-49c6-8927-e5fa3ef28aef",
      "url": "https://www.notion.so/Multi-cloud-tenant-database-integrated-with-lifecycle-management-77942f5fe39549c68927e5fa3ef28aef",
      "title": "Multi-cloud tenant database integrated with lifecycle management",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [
        "11af37b7-c948-4486-a5da-5b1db6de8193",
        "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
        "119bfca5-dda6-408c-b35d-c59d0f209fcf"
      ],
      "scope": "🏢 Core",
      "summary": "A central database of all multi-cloud tenants initiates tenant provisioning and deprovisioning processes. The database acts as an authoritative source of tenants and ensures tenant metadata is always up to date.",
      "tool-implementations": [],
      "name": "Multi-cloud tenant database integrated with lifecycle management"
    }
  },
  {
    "file": "docs/explore/blocks/in-house-paas-service-integration.md",
    "meta": {
      "id": "78586f52-5868-4ff6-b59b-5b71e66affd5",
      "url": "https://www.notion.so/In-house-PaaS-Service-Integration-78586f5258684ff6b59b5b71e66affd5",
      "title": "In-house PaaS Service Integration",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "In-house teams provide PaaS services for commonly needed infrastructure services like DBaaS, observability platforms or analytics. Teams can manage service-lifecycle and IAM in self-service and are transparently charged for all consumption cost incurred.",
      "tool-implementations": [],
      "name": "In-house PaaS Service Integration"
    }
  },
  {
    "file": "docs/tools/tool-support.md",
    "meta": {
      "id": "7eab5fc5-d5e2-41d5-b762-8d80fc98b2d4",
      "url": "https://www.notion.so/Tool-Support-7eab5fc5d5e241d5b7628d80fc98b2d4",
      "title": "Tool Support",
      "category": "Tools",
      "order": 11
    },
    "properties": {
      "order": 11,
      "documentation": "Reference",
      "category": "Tools",
      "redaction-state": "Sketch",
      "name": "Tool Support"
    }
  },
  {
    "file": "docs/explore/blocks/incident-management-process.md",
    "meta": {
      "id": "802fdd8d-7fc0-4749-937f-e9e0ccb3f273",
      "url": "https://www.notion.so/Incident-Management-Process-802fdd8d7fc04749937fe9e0ccb3f273",
      "title": "Incident Management Process",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [
        "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b",
        "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d"
      ],
      "scope": "🏢 Core",
      "summary": "There's a clear owner for every cloud tenant responsible for incident management. Incidents are automatically routed to these owners.",
      "tool-implementations": [],
      "name": "Incident Management Process"
    }
  },
  {
    "file": "docs/tools/downloads/stakeholder-map.md",
    "meta": {
      "id": "84cf2301-844f-4e77-8f86-ed3d9244d623",
      "url": "https://www.notion.so/Stakeholder-Map-84cf2301844f4e778f86ed3d9244d623",
      "title": "Stakeholder Map",
      "category": "Downloads"
    },
    "properties": {
      "category": "Downloads",
      "name": "Stakeholder Map"
    }
  },
  {
    "file": "docs/explore/blocks/modular-landing-zones.md",
    "meta": {
      "id": "913a8ad1-7ad4-4ade-9e88-801a7afa4b40",
      "url": "https://www.notion.so/Modular-Landing-Zones-913a8ad17ad44ade9e88801a7afa4b40",
      "title": "Modular Landing Zones",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Landing Zones allow modular extension with services or products. These services have their own lifecycle and can be reconfigured during the lifespan of a tenant. The modular design allows combining services like lego blocks.",
      "tool-implementations": [],
      "name": "Modular Landing Zones"
    }
  },
  {
    "file": "docs/explore/blocks/cloud-to-cloud-interconnects.md",
    "meta": {
      "id": "a31e4077-4e84-4129-a46c-1070a8591181",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-a31e40774e844129a46c1070a8591181",
      "title": "Cloud to Cloud interconnects",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
      "depends-on": [
        "2be4d7d1-4109-406b-a4f7-da6c566123fd"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "Provides managed connectivity between cloud tenants on different cloud platforms via centrally managed transit networks.",
      "tool-implementations": [],
      "name": "Cloud to Cloud interconnects"
    }
  },
  {
    "file": "docs/plan/approaches-to-building-a-cloud-foundation.md",
    "meta": {
      "id": "a544bc7c-979f-427a-8335-2011cdcb6247",
      "url": "https://www.notion.so/Approaches-to-building-a-Cloud-Foundation-a544bc7c979f427a83352011cdcb6247",
      "title": "Approaches to building a Cloud Foundation",
      "category": "Plan",
      "order": 40
    },
    "properties": {
      "order": 40,
      "documentation": "Explanation",
      "category": "Plan",
      "redaction-state": "Draft",
      "name": "Approaches to building a Cloud Foundation"
    }
  },
  {
    "file": "docs/explore/blocks/self-service-multi-cloud-tenant-database.md",
    "meta": {
      "id": "ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9",
      "url": "https://www.notion.so/Self-Service-Multi-Cloud-Tenant-Database-ab10bed170d547cfb3cd4a4448bdb9a9",
      "title": "Self-Service Multi-Cloud Tenant Database",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Owners of cloud tenants can register, update and remove tenants from a central cloud tenant database in self service.",
      "tool-implementations": [],
      "name": "Self-Service Multi-Cloud Tenant Database"
    }
  },
  {
    "file": "docs/explore/blocks/resource-hierarchy.md",
    "meta": {
      "id": "ac8a21c3-f692-4d23-a9bb-796fd311c39f",
      "url": "https://www.notion.so/Resource-Hierarchy-ac8a21c3f6924d23a9bb796fd311c39f",
      "title": "Resource Hierarchy",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Definition of a cloud resource hierarchy that facilitates tenant isolation and policy enforcement. Cloud tenants are deliberately placed in this resource hierarchy when tenants are provisioned.",
      "tool-implementations": [],
      "name": "Resource Hierarchy"
    }
  },
  {
    "file": "docs/explore/blocks/centralized-workload-and-infrastructure-logs.md",
    "meta": {
      "id": "b0a04ae8-c9b3-4060-abfd-e760723995d8",
      "url": "https://www.notion.so/Centralized-workload-and-infrastructure-logs-b0a04ae8c9b34060abfde760723995d8",
      "title": "Centralized workload and infrastructure logs",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Audit logs from cloud workloads and infrastructure (e.g. network flow logs) are centrally collected and stored.",
      "tool-implementations": [],
      "name": "Centralized workload and infrastructure logs"
    }
  },
  {
    "file": "docs/explore/blocks/federated-identity-and-authentication.md",
    "meta": {
      "id": "b4678790-ab53-4219-83e7-fbde18383d05",
      "url": "https://www.notion.so/Federated-Identity-and-Authentication-b4678790ab53421983e7fbde18383d05",
      "title": "Federated Identity and Authentication",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔐 IAM",
      "enables": [
        "456f15f2-299e-4a8b-a8c9-cb0580a887d2"
      ],
      "journey-stage": "⭐️",
      "depends-on": [
        "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
      ],
      "scope": "☁️ Platform",
      "summary": "Integration Cloud Platform IAM systems with Enterprise IAM landscape incl. federated authentication.",
      "tool-implementations": [],
      "name": "Federated Identity and Authentication"
    }
  },
  {
    "file": "docs/explore/blocks/global-cost-optimization-via-reservations.md",
    "meta": {
      "id": "b6b24f70-3fba-4f67-a375-2b0d26a16324",
      "url": "https://www.notion.so/Global-Cost-Optimization-via-Reservations-b6b24f703fba4f67a3752b0d26a16324",
      "title": "Global Cost Optimization via Reservations",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Cloud providers offer different programs offering lower pay-per-use rates in exchange for making spend or resource reservation commitments (e.g. reserved instances). Centrally plan resource demand to take advantage of cost optimization opportunities offered by cloud providers.",
      "tool-implementations": [],
      "name": "Global Cost Optimization via Reservations"
    }
  },
  {
    "file": "docs/explore/blocks/cloud-tenant-database.md",
    "meta": {
      "id": "b875ac41-2b38-4ce4-ab8b-76ddd876d789",
      "url": "https://www.notion.so/Cloud-Tenant-Database-b875ac412b384ce4ab8b76ddd876d789",
      "title": "Cloud Tenant Database",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Maintenance of a database of cloud tenants and associated metadata like responsible owners and chargeback information like cost center.",
      "tool-implementations": [],
      "name": "Cloud Tenant Database"
    }
  },
  {
    "file": "docs/tools/governance-platform/meshstack.md",
    "meta": {
      "id": "c5757e31-5c6c-487a-81b2-96ba50dda3af",
      "url": "https://www.notion.so/meshStack-c5757e315c6c487a81b296ba50dda3af",
      "title": "meshStack",
      "category": "Governance Platform"
    },
    "properties": {
      "category": "Governance Platform",
      "name": "meshStack"
    }
  },
  {
    "meta": {
      "id": "c596a5f1-dc63-46b6-8d1f-25dcf12ff484",
      "url": "https://www.notion.so/meshcloud-Cloud-Foundation-Stakeholder-Map-c596a5f1dc6346b68d1f25dcf12ff484"
    },
    "properties": {
      "block": [
        "57c521ba-73a4-4187-a507-bbd5eaa80212"
      ],
      "tool": [
        "84cf2301-844f-4e77-8f86-ed3d9244d623"
      ],
      "summary": "A good place to get started with a shared responsibility model is getting a clear picture of the involved parties. \n\nA Stakeholder Map lists Stakeholder and is a useful starting point for a Shared Responsibility Model.\n\nAn example Stakeholder map can be found under [https://www.meshcloud.io/cloud-foundation-stakeholder-map](https://www.meshcloud.io/cloud-foundation-stakeholder-map)",
      "link": "https://www.meshcloud.io/wp-content/uploads/2021/12/cloud-stakeholder-map.pdf",
      "name": "meshcloud Cloud Foundation Stakeholder Map"
    }
  },
  {
    "meta": {
      "id": "c7b3902e-6708-4b0e-9e43-776f863baa3e",
      "url": "https://www.notion.so/Private-Cloud-Metering-with-meshStack-c7b3902e67084b0e9e43776f863baa3e"
    },
    "properties": {
      "block": [
        "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6"
      ],
      "tool": [
        "c5757e31-5c6c-487a-81b2-96ba50dda3af"
      ],
      "summary": "meshStack has private cloud metering features for\n- OpenStack\n- Cloud Foundry\n- OpenShift\n- Kubernetes",
      "link": "https://docs.meshcloud.io/docs/meshstack.billing.html",
      "name": "Private Cloud Metering with meshStack"
    }
  },
  {
    "file": "docs/explore/blocks/pay-per-use-for-internal-services.md",
    "meta": {
      "id": "c9728af5-49fe-4948-8701-2d6485bfbe93",
      "url": "https://www.notion.so/Pay-per-Use-for-internal-Services-c9728af549fe494887012d6485bfbe93",
      "title": "Pay-per-Use for internal Services",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [
        "d2cb8a5e-3e28-448b-8944-14ff38fad792"
      ],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Enable usage based chargeback for internal, managed IT services offered via the cloud foundation (see Landing Zone building Blocks). Consumers can book services from a single marketplace and get a single \"invoice\" for chargeback.",
      "tool-implementations": [],
      "name": "Pay-per-Use for internal Services"
    }
  },
  {
    "file": "docs/explore/blocks/monthly-cloud-tenant-billing-report.md",
    "meta": {
      "id": "cd162600-e742-4a80-b022-989da423ca43",
      "url": "https://www.notion.so/Monthly-cloud-tenant-billing-report-cd162600e7424a80b022989da423ca43",
      "title": "Monthly cloud tenant billing report",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [
        "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6"
      ],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Tenant owners can view a monthly cloud tenant billing report listing all incurred charges for cloud resource consumption.",
      "tool-implementations": [],
      "name": "Monthly cloud tenant billing report"
    }
  },
  {
    "file": "docs/explore/blocks/api-gateway-to-on-premises-apis.md",
    "meta": {
      "id": "cf125421-fd90-4bff-a4c6-f7c994a14591",
      "url": "https://www.notion.so/API-Gateway-to-on-premises-APIs-cf125421fd904bffa4c6f7c994a14591",
      "title": "API Gateway to on-premises APIs",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Provide managed API (L7) connectivity to APIs running in on-premise environments.",
      "tool-implementations": [],
      "name": "API Gateway to on-premises APIs"
    }
  },
  {
    "file": "docs/explore/blocks/onboarding-portal.md",
    "meta": {
      "id": "cf487857-542f-4d74-8fe9-885b7be8ccf3",
      "url": "https://www.notion.so/Onboarding-Portal-cf487857542f4d748fe9885b7be8ccf3",
      "title": "Onboarding Portal",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "A dedicated onboarding portal helps teams fullfill organisational (e.g. budget) and regulatory (e.g. compliance) cloud onboarding duties.",
      "tool-implementations": [],
      "name": "Onboarding Portal"
    }
  },
  {
    "file": "docs/explore/blocks/resource-policies-blacklisting.md",
    "meta": {
      "id": "d1904912-b420-4a10-a62c-aa578fb847ff",
      "url": "https://www.notion.so/Resource-Policies-Blacklisting-d1904912b4204a10a62caa578fb847ff",
      "title": "Resource Policies - Blacklisting",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "Basic policies on cloud resources enforce Blacklisting of forbidden services, regions.",
      "tool-implementations": [],
      "name": "Resource Policies - Blacklisting"
    }
  },
  {
    "meta": {
      "id": "d24b4c3a-1f97-4426-8999-f82a97bf1e75",
      "url": "https://www.notion.so/Tenant-provisioning-with-meshStack-d24b4c3a1f9744268999f82a97bf1e75"
    },
    "properties": {
      "block": [
        "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d"
      ],
      "tool": [
        "c5757e31-5c6c-487a-81b2-96ba50dda3af"
      ],
      "summary": "meshStack automatically provisions and reconciles cloud tenants based on desired state. This includes metadata (tags) as well as authorization (role assignments, groups).",
      "link": "https://docs.meshcloud.io/docs/meshcloud.tenant.html",
      "name": "Tenant provisioning with meshStack"
    }
  },
  {
    "file": "docs/explore/blocks/chargeback-at-full-cost-allocation.md",
    "meta": {
      "id": "d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1",
      "url": "https://www.notion.so/Chargeback-at-full-cost-allocation-d2a35b4e7e9e4b1ca09769d0e8ce02f1",
      "title": "Chargeback at full cost allocation",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Cloud tenant owners are transparently charged for resource consumption in their cloud tenant as well as for any shared overhead cost incurred by the cloud foundation team for providing its services.",
      "tool-implementations": [],
      "name": "Chargeback at full cost allocation"
    }
  },
  {
    "file": "docs/explore/blocks/consumption-based-pay-per-use-for-internal-services.md",
    "meta": {
      "id": "d2cb8a5e-3e28-448b-8944-14ff38fad792",
      "url": "https://www.notion.so/Consumption-based-pay-per-use-for-internal-Services-d2cb8a5e3e28448b894414ff38fad792",
      "title": "Consumption based pay-per-use for internal Services",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [
        "c9728af5-49fe-4948-8701-2d6485bfbe93"
      ],
      "scope": "🏢 Core",
      "summary": "Enable fine-grained pay-per-use options for managed services offered on the cloud foundation, e.g. pay per API request, per GB/h stored etc.",
      "tool-implementations": [],
      "name": "Consumption based pay-per-use for internal Services"
    }
  },
  {
    "file": "docs/explore/blocks/managed-cloud-provider-support-contracts.md",
    "meta": {
      "id": "d871cfba-a86d-4ec1-a23d-42c9b3d73352",
      "url": "https://www.notion.so/Managed-Cloud-Provider-Support-Contracts-d871cfbaa86d4ec1a23d42c9b3d73352",
      "title": "Managed Cloud Provider Support Contracts",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Cloud tenant owners can enroll their tenants in support contracts and/or enterprise support agreements from cloud providers. Owners can access support in self-service and are transparently charged for support fees incurred.",
      "tool-implementations": [],
      "name": "Managed Cloud Provider Support Contracts"
    }
  },
  {
    "file": "docs/explore/blocks/shared-vm-image-repository.md",
    "meta": {
      "id": "d9c211e3-647c-4fd7-bf3b-3c806baeea7f",
      "url": "https://www.notion.so/Shared-VM-Image-Repository-d9c211e3647c4fd7bf3b3c806baeea7f",
      "title": "Shared VM Image Repository",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🛠 Managed Services",
      "enables": [],
      "journey-stage": "⭐️⭐️",
      "depends-on": [],
      "scope": "🛬 Landing Zone",
      "summary": "A central repository provides hardened virtual machine images.",
      "tool-implementations": [],
      "name": "Shared VM Image Repository"
    }
  },
  {
    "file": "docs/explore/blocks/tenant-provisioning.md",
    "meta": {
      "id": "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
      "url": "https://www.notion.so/Tenant-Provisioning-deb9d28ee5924c3cb7da020b7ba6bb0d",
      "title": "Tenant Provisioning",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [
        "77942f5f-e395-49c6-8927-e5fa3ef28aef"
      ],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "On-demand provisioning of primitive cloud tenants (e.g. AWS Accounts, Azure Subscriptions etc.).",
      "tool-implementations": [
        "d24b4c3a-1f97-4426-8999-f82a97bf1e75"
      ],
      "name": "Tenant Provisioning"
    }
  },
  {
    "file": "docs/explore/blocks/chargeback-via-consumption-cost-allocation.md",
    "meta": {
      "id": "e063e4d2-81f4-4bb8-ac7a-7424ba882161",
      "url": "https://www.notion.so/Chargeback-via-consumption-cost-allocation-e063e4d281f44bb8ac7a7424ba882161",
      "title": "Chargeback via consumption cost allocation",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️",
      "depends-on": [],
      "scope": "☁️ Platform",
      "summary": "Cloud tenant owners are transparently charged for the resource consumption as it is charged from the cloud provider.",
      "tool-implementations": [],
      "name": "Chargeback via consumption cost allocation"
    }
  },
  {
    "file": "docs/explore/blocks/control-access-to-cloud-platforms-and-landing-zones.md",
    "meta": {
      "id": "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2",
      "url": "https://www.notion.so/Control-access-to-cloud-platforms-and-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2",
      "title": "Control access to cloud platforms and Landing Zones",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🔖 Compliance",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [
        "707c41b8-6da0-4e78-b982-fa4b1365521b"
      ],
      "scope": "🏢 Core",
      "summary": "Implement automated policies to steer cloud consumers to appropriate cloud platforms and landing zones based on metadata about the cloud consumer.",
      "tool-implementations": [],
      "name": "Control access to cloud platforms and Landing Zones"
    }
  },
  {
    "file": "docs/explore/what-is-a-building-block.md",
    "meta": {
      "id": "e6848e89-8f3c-4e14-824f-b0122c3fc3cc",
      "url": "https://www.notion.so/What-is-a-Building-Block-e6848e898f3c4e14824fb0122c3fc3cc",
      "title": "What is a Building Block",
      "category": "Explore",
      "order": 10
    },
    "properties": {
      "order": 10,
      "documentation": "Reference",
      "category": "Explore",
      "redaction-state": "Draft",
      "name": "What is a Building Block"
    }
  },
  {
    "file": "docs/explore/blocks/link-cloud-tenants-to-cmdbeam.md",
    "meta": {
      "id": "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d",
      "url": "https://www.notion.so/Link-Cloud-Tenants-to-CMDB-EAM-e7d632532e394bbf9dd6da11bb3edd0d",
      "title": "Link Cloud Tenants to CMDB/EAM",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🗂 Tenant Management",
      "enables": [
        "802fdd8d-7fc0-4749-937f-e9e0ccb3f273"
      ],
      "journey-stage": "⭐️⭐️",
      "depends-on": [
        "707c41b8-6da0-4e78-b982-fa4b1365521b"
      ],
      "scope": "🏢 Core",
      "summary": "Maintain a link between cloud tenants and a central CMDB/EAM repository (e.g. IT System identifier, Application Id). Linking cloud tenants to CMDB/EAM systems is a foundational capability that enables use cases like basic chargeback, systematic risk assessment and change management.",
      "tool-implementations": [],
      "name": "Link Cloud Tenants to CMDB/EAM"
    }
  },
  {
    "file": "docs/explore/blocks/managed-internet-egress.md",
    "meta": {
      "id": "f90c7375-88b9-42dc-8e98-a65c006b927a",
      "url": "https://www.notion.so/Managed-Internet-Egress-f90c737588b942dc8e98a65c006b927a",
      "title": "Managed Internet Egress",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "🌍 Networking",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️⭐️",
      "depends-on": [
        "2be4d7d1-4109-406b-a4f7-da6c566123fd"
      ],
      "scope": "🛬 Landing Zone",
      "summary": "Cloud tenants can connect to internet egress using managed infrastructure that ensures compliance and cost efficiency (network separation, proxies etc.).",
      "tool-implementations": [],
      "name": "Managed Internet Egress"
    }
  },
  {
    "file": "docs/explore/blocks/budget-approval-process.md",
    "meta": {
      "id": "f96feedc-d969-48f8-adb4-93031cc0a24d",
      "url": "https://www.notion.so/Budget-Approval-Process-f96feedcd96948f8adb493031cc0a24d",
      "title": "Budget Approval Process",
      "category": "Blocks",
      "layout": "CFMMBlock"
    },
    "properties": {
      "cluster": "💵 Chargeback",
      "enables": [],
      "journey-stage": "⭐️⭐️⭐️",
      "depends-on": [],
      "scope": "🏢 Core",
      "summary": "Budgets are approved by controllers / people with budget responsibility",
      "tool-implementations": [],
      "name": "Budget Approval Process"
    }
  },
  {
    "file": "docs/plan/why-cloud-foundation.md",
    "meta": {
      "id": "fe4fd51c-8f57-46f1-afa1-2fc3402063b8",
      "url": "https://www.notion.so/Why-Cloud-Foundation-fe4fd51c8f5746f1afa12fc3402063b8",
      "title": "Why Cloud Foundation",
      "category": "Plan",
      "order": 30
    },
    "properties": {
      "order": 30,
      "documentation": "Explanation",
      "category": "Plan",
      "redaction-state": "Draft",
      "name": "Why Cloud Foundation"
    }
  }
];