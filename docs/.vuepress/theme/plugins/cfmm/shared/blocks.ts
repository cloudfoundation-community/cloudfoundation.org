export const index = [
  {
    "file": "maturity-model/security-and-compliance/cloud-siem.md",
    "frontmatter": {
      "id": "012dc29a-5b79-4eeb-8154-9ef0f2ae0f02",
      "url": "https://www.notion.so/Cloud-SIEM-012dc29a5b794eeb81549ef0f2ae0f02",
      "title": "Cloud SIEM",
      "description": "Audit logs for cloud tenants and cloud workloads are systematically analyzed for anomalies.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c7081e5-c451-40b6-806d-a8d21b130612"
        ],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "b0a04ae8-c9b3-4060-abfd-e760723995d8",
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Cloud SIEM"
      }
    }
  },
  {
    "file": "maturity-model/readme.md",
    "frontmatter": {
      "id": "0147ba13-9f83-42cd-9c10-2e5f113c96f2",
      "url": "https://www.notion.so/Explore-All-Building-Blocks-0147ba139f8342cd9c102e5f113c96f2",
      "title": "Explore All Building Blocks",
      "category": "Maturity Model",
      "order": 0,
      "layout": "MaturityModel"
    }
  },
  {
    "frontmatter": {
      "id": "01a9cbca-3dd4-4378-b1f5-1ae64b76cc19",
      "url": "https://www.notion.so/Multi-Cloud-Authorization-with-meshStack-01a9cbca3dd44378b1f51ae64b76cc19",
      "title": "Multi-Cloud Authorization with meshStack",
      "description": "meshStack allows operators to define a multi-cloud role model that teams can consume in self-service. meshStack replicates assigned roles and groups to cloud platform directories and cloud tenants.",
      "properties": {
        "block": [
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.authorization.html#meshproject-roles",
        "name": "Multi-Cloud Authorization with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/billing-to-different-legal-entities.md",
    "frontmatter": {
      "id": "0217c4da-6542-41d6-84c7-12af887e7d15",
      "url": "https://www.notion.so/Billing-to-different-legal-entities-0217c4da654241d684c712af887e7d15",
      "title": "Billing to different legal entities",
      "description": "Support billing cloud workloads to different legal entities of an enterprise for compliance or organizational reasons.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "5e282c7c-3ff4-4791-af90-91acea6201fc"
        ],
        "name": "Billing to different legal entities"
      }
    }
  },
  {
    "file": "maturity-model/cost-management/private-cloud-pay-per-use-chargeback.md",
    "frontmatter": {
      "id": "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6",
      "url": "https://www.notion.so/Private-Cloud-pay-per-use-chargeback-02e4de2c7e1e4dd9aa76b58a88f04ff6",
      "title": "Private Cloud pay-per-use chargeback",
      "description": "Resource consumption on multi-tenant private cloud platforms such as OpenStack, Cloud Foundry or OpenShift is billed according to a pay-per-use pricing model.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "c7b3902e-6708-4b0e-9e43-776f863baa3e"
        ],
        "name": "Private Cloud pay-per-use chargeback"
      }
    }
  },
  {
    "frontmatter": {
      "id": "0337257c-3de3-49c0-b339-eba3222eb9af",
      "url": "https://www.notion.so/Virtual-Network-Service-0337257c3de349c0b339eba3222eb9af",
      "title": "Virtual Network Service",
      "description": "With UniPipe you can easily provide a Virtual Network Service to e.g. grant on-prem connectivity or to integrate all your company’s productive applications into one network. All you need for this is a Terraform Module that sets up the networking inside the target tenant as needed.",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "56e4f66c-47e3-4849-9315-347694db82a1"
        ],
        "link": "https://github.com/meshcloud/unipipe-service-broker/wiki/Getting-started-with-unipipe-terraform-runner-on-Azure",
        "name": "Virtual Network Service"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "03e67c51-82e1-4e4d-87df-dc431954f9b8",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-03e67c5182e14e4d87dfdc431954f9b8",
      "title": "Privileged Access Management (PAM)",
      "description": "By default it defines only an Administrator group. But as you can base it on AWS Control Tower, you can make use of the advanced default roles created by AWS Control Tower.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/blob/main/reference/sample-configurations/aws-best-practices/iam-config.yaml",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "04470deb-8ef1-4c49-bcec-7243426790b5",
      "url": "https://www.notion.so/DevOps-Toolchains-with-GitLab-04470deb8ef14c49bcec7243426790b5",
      "title": "DevOps Toolchains with GitLab",
      "description": "GitLab offers Git repositories, CI/CD, artifact scanning and many more DevOps tools.",
      "properties": {
        "block": [
          "71143f29-2fe9-452b-8398-fc40f270a2b6"
        ],
        "tool": [
          "decefdc2-0883-4adb-8fc0-13b451bb8c2f"
        ],
        "link": "https://about.gitlab.com",
        "name": "DevOps Toolchains with GitLab"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/resource-configuration-scanning.md",
    "frontmatter": {
      "id": "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b",
      "url": "https://www.notion.so/Resource-Configuration-Scanning-09e744c5e12a49e88b6fb7e3c44ba63b",
      "title": "Resource Configuration Scanning",
      "description": "Scan cloud resource configurations against a catalog of configuration policies for potential security risks and compliance violations.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "802fdd8d-7fc0-4749-937f-e9e0ccb3f273"
        ],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "344b75a4-595b-4ba5-8851-ddfb6d4acf7c"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Resource Configuration Scanning"
      }
    }
  },
  {
    "frontmatter": {
      "id": "0db736c5-6801-4619-92a6-97c3842c907c",
      "url": "https://www.notion.so/Pay-per-Use-for-internal-Services-0db736c56801461992a697c3842c907c",
      "title": "Pay-per-Use for internal Services",
      "description": "meshStack can charge consumers for internal services based on the time the service was used.",
      "properties": {
        "block": [
          "c9728af5-49fe-4948-8701-2d6485bfbe93"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.meshmarketplace.metering.html",
        "name": "Pay-per-Use for internal Services"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/resource-authorization-management.md",
    "frontmatter": {
      "id": "0dd09c75-2acd-4e87-9721-6b5f563da035",
      "url": "https://www.notion.so/Resource-Authorization-Management-0dd09c752acd4e8797216b5f563da035",
      "title": "Resource Authorization Management",
      "description": "Establish consistent guidelines and guardrails for managing authorization to cloud resources in Landing Zones. Authorization management should consider key principles like segregation of duties, need-to-know and separation of privileged and unprivileged roles.",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "1afea746-da65-4164-9029-5e0bfa9432b1",
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "3c65a957-cb62-40fe-978e-709e3450f7fe",
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f",
          "b0a04ae8-c9b3-4060-abfd-e760723995d8",
          "74295ae4-dcd5-449b-8825-f12c5267e89b",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "f271478b-3921-494f-ab2c-de97808d3bb7"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "01a9cbca-3dd4-4378-b1f5-1ae64b76cc19"
        ],
        "name": "Resource Authorization Management"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/tenant-deprovisioning-decommissioning.md",
    "frontmatter": {
      "id": "119bfca5-dda6-408c-b35d-c59d0f209fcf",
      "url": "https://www.notion.so/Tenant-Deprovisioning-Decommissioning-119bfca5dda6408cb35dc59d0f209fcf",
      "title": "Tenant Deprovisioning / Decommissioning",
      "description": "Establish a process for safely decommissioning and deprovisioning cloud tenants that are no longer needed by application teams.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef",
          "155c0ead-cbd0-4e0c-9387-cc57946f80e9"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "recommended": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef"
        ],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "431fe444-0b73-4592-b525-7e09a48a6457",
          "bac2d6a9-0bab-4d58-b89e-9b3315f86b79",
          "244b3e52-37bd-4669-a8d4-c208eb2fe529",
          "87441a90-61d1-46f3-a3e0-50902ca974fd"
        ],
        "name": "Tenant Deprovisioning / Decommissioning"
      }
    }
  },
  {
    "frontmatter": {
      "id": "11f50039-a1d6-49de-9fbd-247a1955b474",
      "url": "https://www.notion.so/Resource-Hierarchy-11f50039a1d649de9fbd247a1955b474",
      "title": "Resource Hierarchy ",
      "description": "meshStack’s Landing Zones allow cloud foundation teams to pre-define a desired resource hierarchy for newly created (and yet existing) cloud tenants. meshStacks supports the hierarchy concept for all public and private cloud platforms, e.g. Azure Management Groups & AWS Organization Units.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/administration.landing-zones.html",
        "name": "Resource Hierarchy "
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/3rd-party-paas-service-integration.md",
    "frontmatter": {
      "id": "124d5b65-1e6c-47c5-81fc-134315c72e32",
      "url": "https://www.notion.so/3rd-party-PaaS-Service-Integration-124d5b651e6c47c581fc134315c72e32",
      "title": "3rd party PaaS Service Integration",
      "description": "Application teams can leverage third-party PaaS providers for managed services like DBaaS, observability platforms or analytics. Teams can manage service-lifecycle and IAM in self-service and are transparently charged for all consumption cost incurred.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "3rd party PaaS Service Integration"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-key-vault.md",
    "frontmatter": {
      "id": "137ac22d-b96c-4d49-aa83-da5779e3d59c",
      "url": "https://www.notion.so/Managed-Key-Vault-137ac22db96c4d49aa83da5779e3d59c",
      "title": "Managed Key Vault",
      "description": "Managed key management services that allow application teams to securely store and retrieve credentials in the cloud. The key management service configuration is aligned with the organization's policies for cryptography and secret management.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "d95e25dc-2643-4c17-9f78-76dc053d7d71",
          "1f3596eb-e73b-4b22-abf9-06d4ebfa0e1c"
        ],
        "name": "Managed Key Vault"
      }
    }
  },
  {
    "frontmatter": {
      "id": "13bd4bac-36f7-466e-a2b8-7f5c9f77c480",
      "url": "https://www.notion.so/Chargeback-via-consumption-cost-allocation-with-meshStack-13bd4bac36f7466ea2b87f5c9f77c480",
      "title": "Chargeback via consumption cost allocation with meshStack",
      "description": "meshStack sends chargeback statements to cloud tenant owners every month. These contain the exact charges from the cloud platform(s) and ensure that the right tenant owners are charged their own resource consumption.",
      "properties": {
        "block": [
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.billing-configuration.html#chargeback",
        "name": "Chargeback via consumption cost allocation with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/playground-sandbox-environments.md",
    "frontmatter": {
      "id": "155c0ead-cbd0-4e0c-9387-cc57946f80e9",
      "url": "https://www.notion.so/Playground-Sandbox-Environments-155c0eadcbd04e0c9387cc57946f80e9",
      "title": "Playground / Sandbox Environments",
      "description": "Application teams can quickly provision cloud environments for experimentation and learning. Playgrounds use relaxed policies (e.g. more cloud services are allowed) but come with time- or spend-limits that are tightly controlled. Expired playgrounds are automatically deprovisioned. ",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "119bfca5-dda6-408c-b35d-c59d0f209fcf",
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
        ],
        "recommended": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef",
          "cd162600-e742-4a80-b022-989da423ca43",
          "fdd09e3d-c1f8-47be-8e1f-ece8449bf237"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "8b5e9c3f-82b4-429c-ad60-49176671d537",
          "66d6549a-98b5-4ff0-b1d1-7bb66bd7cc3b"
        ],
        "name": "Playground / Sandbox Environments"
      }
    }
  },
  {
    "frontmatter": {
      "id": "171e6824-30db-4f64-9d19-a4d87ba56ed9",
      "url": "https://www.notion.so/Cloud-native-Landing-Zone-with-collie-171e682430db4f649d19a4d87ba56ed9",
      "title": "Cloud-native Landing Zone with collie",
      "description": "Collie supports developing your own cloud foundations quickly from reusable bundles that offer out-of-the-box IaC implementations of cloud native landing zones.",
      "properties": {
        "block": [
          "dff7d733-d987-4145-aa1a-e340b5bcff81"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": null,
        "name": "Cloud-native Landing Zone with collie"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "17a9ca39-5a77-4c5e-9b0e-87b01dc5e57a",
      "url": "https://www.notion.so/Identity-Lifecycle-Management-17a9ca395a774c5e9b0e87b01dc5e57a",
      "title": "Identity Lifecycle Management",
      "description": "meshStack creates and manages identities for each cloud tenant",
      "properties": {
        "block": [
          "456f15f2-299e-4a8b-a8c9-cb0580a887d2"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.identity-federation.html",
        "name": "Identity Lifecycle Management"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/service-account-management.md",
    "frontmatter": {
      "id": "18256d4f-e096-4281-809a-f77c5dd20ef0",
      "url": "https://www.notion.so/Service-Account-Management-18256d4fe0964281809af77c5dd20ef0",
      "title": "Service Account Management",
      "description": "Managed provisioning and inventory of Service Accounts including their permission sets. Enables central enforcement of compliance policies for technical users like re-certification, credential strength and credential rotation.",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "recommended": [
          "137ac22d-b96c-4d49-aa83-da5779e3d59c"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "b3f089d6-6f90-4741-88a7-69b59974d1dd",
          "8c890795-9f3d-4d37-8868-66a46e5cf83b"
        ],
        "name": "Service Account Management"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/shared-container-registry.md",
    "frontmatter": {
      "id": "1a1cdeb0-de7e-4ea9-a963-e409b9abed54",
      "url": "https://www.notion.so/Shared-container-registry-1a1cdeb0de7e4ea9a963e409b9abed54",
      "title": "Shared container registry",
      "description": "A central repository provides hardened container images.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "71143f29-2fe9-452b-8398-fc40f270a2b6"
        ],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "b441ec40-c21b-4c49-a57a-b4f5146789cd"
        ],
        "name": "Shared container registry"
      }
    }
  },
  {
    "frontmatter": {
      "id": "1a70d150-d6eb-4b2f-8d57-ddcf78631474",
      "url": "https://www.notion.so/GCP-CFT-Example-Foundation-1a70d150d6eb4b2f8d57ddcf78631474",
      "title": "GCP CFT - Example Foundation",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "file": "maturity-model/iam/privileged-access-management.md",
    "frontmatter": {
      "id": "1afea746-da65-4164-9029-5e0bfa9432b1",
      "url": "https://www.notion.so/Privileged-Access-Management-1afea746da65416490295e0bfa9432b1",
      "title": "Privileged Access Management",
      "description": "Implement appropriate security controls for privileged access as defined in the Authorization Concept. These must cover access to administrative cloud platform roles (e.g. Global Admins, Global Readers) and shared services (e.g. on-premise connectivity hubs). ",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "18256d4f-e096-4281-809a-f77c5dd20ef0"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "37862f9f-3d8a-4e25-8e90-e487dc455b0c",
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "aade65c8-e80c-46e8-b993-23a50076f62d",
          "3d5c12a5-9f91-4e6a-9b3c-774d5389b9d7",
          "9cae193b-0656-4bac-bdd8-34cff905b947",
          "5b377afd-a818-45a5-b834-f74244da53cd",
          "4830a114-548a-461f-97b4-91cc6d9811a0",
          "40707260-c803-4910-99bf-c5a860e74328",
          "03e67c51-82e1-4e4d-87df-dc431954f9b8"
        ],
        "name": "Privileged Access Management"
      }
    }
  },
  {
    "frontmatter": {
      "id": "1c2e8bb1-5a32-4435-b319-bac181f57481",
      "url": "https://www.notion.so/Resource-Hierarchy-1c2e8bb15a324435b319bac181f57481",
      "title": "Resource Hierarchy",
      "description": "Creates 2 Organizational units (OUs), Security and Sandbox. It also creates 3 shared accounts; a standalone management account (not belonging to an OU), and log archive and security audit in the Security OU. The Sandbox OU remains empty to contain the new provisioned accounts. You can create new OUs based on your desired structure. They will be governed by CT. AWS also offers a sample hierarchy with additional OUs that you can manually include.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "93b26c66-49b3-4ad5-ab78-9810a6334dc5"
        ],
        "link": "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "1f3596eb-e73b-4b22-abf9-06d4ebfa0e1c",
      "url": "https://www.notion.so/Managed-Key-Vault-1f3596ebe73b4b22abf906d4ebfa0e1c",
      "title": "Managed Key Vault",
      "description": "Creates a key vault in each level for storing the credential of the service principals and use it to impersonate and access only on the respective level.",
      "properties": {
        "block": [
          "137ac22d-b96c-4d49-aa83-da5779e3d59c"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/caf_launchpad/scenario/200",
        "name": "Managed Key Vault"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "244b3e52-37bd-4669-a8d4-c208eb2fe529",
      "url": "https://www.notion.so/Tenant-Provisioning-Tenant-Deprovisioning-244b3e5237bd4669a8d4c208eb2fe529",
      "title": "Tenant Provisioning / Tenant Deprovisioning",
      "description": "With stage 4-projects you can define projects, but you have to touch Terraform files to create or change projects. This feels more like coding instead of configuring it as it is done with Fabric FAST. So this approach of modifying Terraform does not seem to result in the best GitOps flow for managing projects.",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/tree/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0/4-projects",
        "name": "Tenant Provisioning / Tenant Deprovisioning"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/on-premise-network-connection.md",
    "frontmatter": {
      "id": "2468d240-6cca-4680-b9c4-6f237defa511",
      "url": "https://www.notion.so/On-Premise-Network-Connection-2468d2406cca4680b9c46f237defa511",
      "title": "On-Premise Network Connection",
      "description": "Provides managed IP (L3) connectivity to on-premises networks. This is commonly implemented using hub&spoke network architectures and a combination of VPNs or private network peerings.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8"
        ],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "c688eecf-0335-4505-bdcb-bc6f6da28c63",
          "9cd1dd44-526e-4b3f-9969-8f9a94c187cb",
          "484e4f98-d1ce-41c2-8b2b-46ed1874d487",
          "8b36655b-1387-4bf2-b8ef-29826a349bb9",
          "8dea89f0-ab7e-4043-9e71-ad7a0232e64b",
          "f096be8c-0f83-4d92-a1e3-b095f1dc6270"
        ],
        "name": "On-Premise Network Connection"
      }
    }
  },
  {
    "frontmatter": {
      "id": "24caa5e5-9302-44fc-9820-f75529573090",
      "url": "https://www.notion.so/CloudGate-24caa5e5930244fc9820f75529573090",
      "title": "CloudGate",
      "properties": {
        "category": "Onboarding"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "24f0be77-129c-4802-80fd-2c58c6374300",
      "url": "https://www.notion.so/Resource-Configuration-Policies-24f0be77129c480280fd2c58c6374300",
      "title": "Resource Configuration Policies",
      "description": "Assign different policies and initiatives based on Microsoft Cloud Adaption Framework. Some examples are: Deploy activity logs and keep them in log analytic workspace, Enable Microsoft Defender for different services, Enable Microsoft Sentinel, Prevent usage of Public-IP and etc.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/tree/main/modules/archetypes/lib/policy_definitions",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "254476a2-de92-4724-a06e-65931ebb5aec",
      "url": "https://www.notion.so/Monolithic-Landing-Zone-254476a2de924724a06e65931ebb5aec",
      "title": "Monolithic Landing Zone",
      "description": "meshStack enables you to create monolithic landing zones for all major public/private cloud platforms:\n- AWS\n- Azure\n- GCP\n- OpenShift\n- Kubernetes",
      "properties": {
        "block": [],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/administration.landing-zones.html",
        "name": "Monolithic Landing Zone"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/monthly-cloud-project-billing-report.md",
    "frontmatter": {
      "id": "28740e92-5559-4931-ab04-17cfb026edd5",
      "url": "https://www.notion.so/Monthly-Cloud-Project-Billing-Report-28740e9255594931ab0417cfb026edd5",
      "title": "Monthly Cloud Project Billing Report",
      "description": "Application teams can view a monthly billing report listing all incurred charges aggregated across all cloud platforms and cloud services making up their application.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "ce20312c-aa7a-453f-82f2-f186469dd973"
        ],
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "cd162600-e742-4a80-b022-989da423ca43"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "59cdf884-5bd2-4b55-87f8-824a4a35623c"
        ],
        "name": "Monthly Cloud Project Billing Report"
      }
    }
  },
  {
    "frontmatter": {
      "id": "2896046e-fd61-4fa7-b381-67bb4f8893b2",
      "url": "https://www.notion.so/Monthly-cloud-tenant-billing-report-2896046efd614fa7b38167bb4f8893b2",
      "title": "Monthly cloud tenant billing report",
      "description": "meshStack generates so-called tenant usage reports that contain the specific resources consumed within a cloud tenant in a given month. These tenant usage reports are visible for cloud tenant owners at any time.",
      "properties": {
        "block": [
          "cd162600-e742-4a80-b022-989da423ca43"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.project-metering.html#tenant-usage-reports",
        "name": "Monthly cloud tenant billing report"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/virtual-network-service.md",
    "frontmatter": {
      "id": "2be4d7d1-4109-406b-a4f7-da6c566123fd",
      "url": "https://www.notion.so/Virtual-Network-Service-2be4d7d14109406ba4f7da6c566123fd",
      "title": "Virtual Network Service",
      "description": "A virtual network service provides a pre-configured virtual network. It is a pre-requisite for higher-level services built on virtual networks.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "f90c7375-88b9-42dc-8e98-a65c006b927a",
          "2468d240-6cca-4680-b9c4-6f237defa511",
          "6e343acc-95bd-42aa-bb32-bdcce1c7d4ad",
          "a31e4077-4e84-4129-a46c-1070a8591181",
          "6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9",
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "f34c8753-fb41-4341-9d91-351836126962",
          "7e7bdd75-b6f7-4717-b7d6-c083cb1a71f8",
          "e5ff3f30-d1b0-4bea-a0a0-cb3a3f1cd6f5",
          "bb4aee68-0b2a-4746-98bf-18d200e58b9b",
          "d77dc8b6-b1ce-4c6a-a208-dcaf5e485743",
          "edf7468a-c867-4038-9e93-7b64f4a4ffcc",
          "2e5dfd35-751d-4562-b723-8e65f4e79408",
          "785eec49-493b-46a6-8540-2237135f0fba",
          "b6a3508f-701f-4ce4-99b0-778f25c6c8a4",
          "9b244e63-eb03-454a-a33b-ebb9d90e8137",
          "0337257c-3de3-49c0-b339-eba3222eb9af"
        ],
        "name": "Virtual Network Service"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/centralized-audit-logs.md",
    "frontmatter": {
      "id": "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f",
      "url": "https://www.notion.so/Centralized-audit-logs-2c7cfeb1248143b8b31c82cb5ba3375f",
      "title": "Centralized audit logs",
      "description": "Audit logs from all cloud tenants (API/resource access) are centrally collected and stored. ",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "012dc29a-5b79-4eeb-8154-9ef0f2ae0f02"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "50e4e2e5-9fb6-49f7-8b57-6988b865b412",
          "beba1d31-43fe-4663-b3f5-cd32d6a5cf54",
          "c9c553ab-812b-4b46-a985-8c01fda8985b",
          "493d1813-21f3-4d9a-88b1-133010d9a68b",
          "523e8239-f830-4d33-a66c-7c135463e694",
          "baf114e2-c764-4145-8302-85d3bfe62901",
          "39343d1a-be7a-47dc-85f7-bda80f99c1ef",
          "fa06b5f1-05ae-4b99-bf1e-941597fd796b",
          "67c9d1dc-7e7b-4b1e-b6fb-8b2547482ca7"
        ],
        "name": "Centralized audit logs"
      }
    }
  },
  {
    "frontmatter": {
      "id": "2e5dfd35-751d-4562-b723-8e65f4e79408",
      "url": "https://www.notion.so/Virtual-Networks-2e5dfd35751d4562b7238e65f4e79408",
      "title": "Virtual Networks",
      "description": "It can be implemented by running different modules in Level2/connectivity\n. Modules contain AZ firewall, hub and spoke, vWan, private DNS,…",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://aztfmod.github.io/documentation/docs/fundamentals/lz-intro#level-2-core-platform-connectivity",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "tools/selecting-cloud-foundation-tools.md",
    "frontmatter": {
      "id": "2efdc850-20dc-400c-982a-1279326ec5df",
      "url": "https://www.notion.so/Selecting-Cloud-Foundation-Tools-2efdc85020dc400c982a1279326ec5df",
      "title": "Selecting Cloud Foundation Tools",
      "category": "Tools",
      "order": 10
    }
  },
  {
    "file": "maturity-model/security-and-compliance/readme.md",
    "frontmatter": {
      "id": "321cc809-0eec-477f-8f75-6d39da0c8b1a",
      "url": "https://www.notion.so/Security-Compliance-321cc8090eec477f8f756d39da0c8b1a",
      "title": "🔖 Security & Compliance",
      "description": "Provide capabilities for governing workloads and enforcing security guidelines across all available cloud platforms and services.",
      "category": "Pillar",
      "pageType": "CFMMPillar",
      "properties": {
        "short-name": "Compliance"
      }
    }
  },
  {
    "frontmatter": {
      "id": "334eb216-fa16-4946-9fe5-8f66bb7fc3fa",
      "url": "https://www.notion.so/meshStack-Self-Service-Multi-Cloud-Tenant-Database-334eb216fa1649469fe58f66bb7fc3fa",
      "title": "meshStack Self-Service Multi-Cloud Tenant Database",
      "description": "meshStack allows internal customers to create and manage cloud tenants in self-service. This includes automated tenant creation as well as self-service metadata management for project owners as well as tenant administration for cloud foundation teams.",
      "properties": {
        "block": [
          "ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.metadata-tags.html",
        "name": "meshStack Self-Service Multi-Cloud Tenant Database"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/cloud-resource-tagging.md",
    "frontmatter": {
      "id": "344b75a4-595b-4ba5-8851-ddfb6d4acf7c",
      "url": "https://www.notion.so/Cloud-Resource-Tagging-344b75a4595b4ba58851ddfb6d4acf7c",
      "title": "Cloud Resource Tagging",
      "description": "Cloud resources are tagged using a consistent tagging strategy to facilitate security and compliance processes for cloud workloads.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "707c41b8-6da0-4e78-b982-fa4b1365521b",
          "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "acf452d3-8425-41e2-ba8b-ee212a6fb189"
        ],
        "name": "Cloud Resource Tagging"
      }
    }
  },
  {
    "frontmatter": {
      "id": "3481641d-0686-420d-8487-794acd4f5e04",
      "url": "https://www.notion.so/meshStack-Cloud-Tenant-Database-3481641d0686420d8487794acd4f5e04",
      "title": "meshStack Cloud Tenant Database",
      "description": "meshStack maintains an always-up-to-date list of cloud tenants active in the organization, including their applied metadata.",
      "properties": {
        "block": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/administration.tenants.html",
        "name": "meshStack Cloud Tenant Database"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/identity-and-access-management-alignment.md",
    "frontmatter": {
      "id": "37862f9f-3d8a-4e25-8e90-e487dc455b0c",
      "url": "https://www.notion.so/Identity-and-Access-Management-Alignment-37862f9f3d8a4e258e90e487dc455b0c",
      "title": "Identity and Access Management Alignment",
      "description": "The cloud foundation team can make make decisions about governing identities and access permissions across cloud platforms and landing zones. A process is in place to align decisions with responsible IAM stakeholders of the organization.",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "1afea746-da65-4164-9029-5e0bfa9432b1",
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "b4678790-ab53-4219-83e7-fbde18383d05",
          "456f15f2-299e-4a8b-a8c9-cb0580a887d2",
          "155c0ead-cbd0-4e0c-9387-cc57946f80e9"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [],
        "name": "Identity and Access Management Alignment"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/foundation-service-platform.md",
    "frontmatter": {
      "id": "3892bc95-4464-417c-aab2-247da7a3015a",
      "url": "https://www.notion.so/Foundation-Service-Platform-3892bc954464417caab2247da7a3015a",
      "title": "Foundation Service Platform",
      "description": "Offer cloud infrastructure services managed by the cloud foundation team from a self-service platform.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "913a8ad1-7ad4-4ade-9e88-801a7afa4b40",
          "c9728af5-49fe-4948-8701-2d6485bfbe93"
        ],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [
          "5f9c0f7d-860a-488b-bbf8-897618e5c76f",
          "4f9ee73a-23a9-4aa3-b956-0df22e6156d0",
          "2be4d7d1-4109-406b-a4f7-da6c566123fd",
          "58c92b8f-f836-4c69-aa6a-d11f0c8a9a44"
        ],
        "scope": "🏢 Core",
        "tool-implementations": [],
        "name": "Foundation Service Platform"
      }
    }
  },
  {
    "frontmatter": {
      "id": "39343d1a-be7a-47dc-85f7-bda80f99c1ef",
      "url": "https://www.notion.so/Centralized-Audit-Logs-39343d1abe7a47dc85f7bda80f99c1ef",
      "title": "Centralized Audit Logs",
      "description": "Enables CloudTrail service to aggregate action and event logs into the shared Log Archive account from different AWS accounts and records them in CloudWatch. With CT release ≥ 3.0, an organization trail is created to gather event logs on an organization level instead of a member trail that gathers logs on a per account basis.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "93b26c66-49b3-4ad5-ab78-9810a6334dc5"
        ],
        "link": "https://docs.aws.amazon.com/controltower/latest/userguide/logging-and-monitoring.html",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "3c377c14-3fbf-4766-a47a-e30bd070ed7f",
      "url": "https://www.notion.so/Managed-DevOps-toolchains-with-meshStack-3c377c143fbf4766a47ae30bd070ed7f",
      "title": "Managed DevOps toolchains with meshStack",
      "description": "meshStack allows cloud foundation teams to provide additional services via a marketplace. Application teams can provision services from this marketplace in self-service, while a service broker adhering to the Open Service Broker API automates the technical service provisioning.",
      "properties": {
        "block": [
          "71143f29-2fe9-452b-8398-fc40f270a2b6"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/marketplace.index.html",
        "name": "Managed DevOps toolchains with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/individual-project-cost-optimization-via-reservations.md",
    "frontmatter": {
      "id": "3c65a957-cb62-40fe-978e-709e3450f7fe",
      "url": "https://www.notion.so/Individual-Project-Cost-Optimization-via-Reservations-3c65a957cb6240fe978e709e3450f7fe",
      "title": "Individual Project Cost Optimization via Reservations",
      "description": "Enable application teams to take advantage of cloud provider cost optimization opportunities available on individual cloud tenants like instance reservations. The chargeback process considers any resulting pre-payments and benefits out of these reservations. A system is in place to manage associated utilization risks.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "57c521ba-73a4-4187-a507-bbd5eaa80212",
          "f96feedc-d969-48f8-adb4-93031cc0a24d",
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "4d280fde-532f-4eb2-9c9c-da2c9ece3c24"
        ],
        "name": "Individual Project Cost Optimization via Reservations"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/certified-isms-compliance.md",
    "frontmatter": {
      "id": "3c7081e5-c451-40b6-806d-a8d21b130612",
      "url": "https://www.notion.so/Certified-ISMS-Compliance-3c7081e5c45140b6806da8d21b130612",
      "title": "Certified ISMS Compliance",
      "description": "Landing zones and its operation by the cloud foundation team are certified according to an information security management system like ISO 27001 or C5.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
        "depends-on": [
          "57c521ba-73a4-4187-a507-bbd5eaa80212",
          "802fdd8d-7fc0-4749-937f-e9e0ccb3f273",
          "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2",
          "64284b14-faab-461c-80bb-5e8efbae4dcc",
          "012dc29a-5b79-4eeb-8154-9ef0f2ae0f02"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Certified ISMS Compliance"
      }
    }
  },
  {
    "frontmatter": {
      "id": "3d5c12a5-9f91-4e6a-9b3c-774d5389b9d7",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-3d5c12a59f914e6a9b3c774d5389b9d7",
      "title": "Privileged Access Management (PAM)",
      "description": "Leverages the use of groups instead of directly assigning roles to users. The principle of least privileged is applied by assigning necessary roles for each group. Furthermore, service accounts are created for automation that can be impersonated by selected groups.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/tree/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0/0-bootstrap",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "3d96d0aa-90b8-433e-8463-5be26014e70b",
      "url": "https://www.notion.so/Resource-Hierarchy-3d96d0aa90b8433e84635be26014e70b",
      "title": "Resource Hierarchy",
      "description": "You can pick from 4 different hierarchies, which makes it quite easy to find a hierarchy that matches your needs. Using even more custom ones is also possible by adapting the generated Terraform code in the end.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "410b6ce3-69b4-4ad9-bf16-d65e8bd512b7"
        ],
        "link": "https://cloud.google.com/docs/enterprise/setup-checklist#checklist-section-5",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "3da9cf6c-972f-4152-9c85-9505fa6a8d2a",
      "url": "https://www.notion.so/Resource-Hierarchy-3da9cf6c972f41529c859505fa6a8d2a",
      "title": "Resource Hierarchy",
      "description": "It creates a nice resource hierarchy with different levels. There is Platform MG which is dedicated to all the services and resources which need to be managed centrally. And the Landing Zones MG for the environments with internal or external connections.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/examples/management-groups/README.md",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "40707260-c803-4910-99bf-c5a860e74328",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-40707260c803491099bfc5a860e74328",
      "title": "Privileged Access Management (PAM)",
      "description": "By default, the user email set in the account request is assigned AdministratorAccess to the account. Additionally, groups created with CT are assigned with specific permissions. That is, AWSSecurityAuditPowerUsers\n group is assigned. AWSPowerUserAccess\n, AWSControlTowerAdmins\n group is assigned AWSOrganizationsFullAccess\n, AWSSecurityAuditors\n group is assigned AWSReadOnlyAccess \nto that account.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "410b6ce3-69b4-4ad9-bf16-d65e8bd512b7",
      "url": "https://www.notion.so/GCP-Setup-Checklist-410b6ce369b44ad9bf16d65e8bd512b7",
      "title": "GCP Setup Checklist",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/kubernetes-cluster-as-a-service.md",
    "frontmatter": {
      "id": "42fae8c2-1ef8-4e1e-bcb4-eb6ca1520ec4",
      "url": "https://www.notion.so/Kubernetes-Cluster-as-a-Service-42fae8c21ef84e1ebcb4eb6ca1520ec4",
      "title": "Kubernetes Cluster as a Service",
      "description": "Provides Kubernetes Clusters as a Service. These are deployed as workloads into the customer's cloud tenants.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "partner is working on it",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Kubernetes Cluster as a Service"
      }
    }
  },
  {
    "frontmatter": {
      "id": "431fe444-0b73-4592-b525-7e09a48a6457",
      "url": "https://www.notion.so/Private-Cloud-Tenant-Deprovisioning-with-meshStack-431fe4440b734592b5257e09a48a6457",
      "title": "Private Cloud Tenant Deprovisioning with meshStack",
      "description": "meshStack automates tenant lifecycle management for private cloud platforms OpenStack and Cloud Foundry including decommissioning. An automated resource check ensures customers delete all workload before decommissioning the tenant. ",
      "properties": {
        "block": [
          "119bfca5-dda6-408c-b35d-c59d0f209fcf"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.tenants.html#deprovisioning--deleting-projects",
        "name": "Private Cloud Tenant Deprovisioning with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "43ba3b98-c6a2-4d2a-b4e2-93bc6841f3b7",
      "url": "https://www.notion.so/Resource-Hierarchy-43ba3b98c6a24d2ab4e293bc6841f3b7",
      "title": "Resource Hierarchy",
      "description": "The resource hierarchy it creates is also based on the Azure landing zone conceptual architecture\n as part of the “Core Resources\n”. The hierarchy is meant to be customized under the Landing zones level.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/templates/platform/level1/alz",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/identity-lifecycle-management.md",
    "frontmatter": {
      "id": "456f15f2-299e-4a8b-a8c9-cb0580a887d2",
      "url": "https://www.notion.so/Identity-Lifecycle-Management-456f15f2299e4a8ba8c9cb0580a887d2",
      "title": "Identity Lifecycle Management",
      "description": "Identities are consistently governed across throughout the entire lifecycle from provisioning to deprovisioning.",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "b4678790-ab53-4219-83e7-fbde18383d05",
          "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "17a9ca39-5a77-4c5e-9b0e-87b01dc5e57a"
        ],
        "name": "Identity Lifecycle Management"
      }
    }
  },
  {
    "frontmatter": {
      "id": "465c3c4b-89f2-4ecb-8b56-7eaf74b1e658",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-465c3c4b89f24ecb8b567eaf74b1e658",
      "title": "Cloud Tenant Tagging",
      "description": "Provides a default_tags variable that can be adapted and applied to multiple resources and resource groups. Additionally base_module_tags includes a tag that shows the deployment source (i.e. terraform), this is by default enabled but can be disabled with disable_base_module_tags. One downside is that it is not clear which Azure objects will be tagged from the module structure. But there isn’t any policies forcing the tags to inherit.",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/docs/wiki/%5BVariables%5D-default_tags.md",
        "name": "Cloud Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "understanding-cloud-foundation/what-is-a-building-block.md",
    "frontmatter": {
      "id": "479f18c8-ac4b-477d-b5b4-4df2f04fc4f3",
      "url": "https://www.notion.so/What-is-a-Building-Block-479f18c8ac4b477db5b44df2f04fc4f3",
      "title": "What is a Building Block",
      "category": "Understanding Cloud Foundation",
      "order": 30
    }
  },
  {
    "frontmatter": {
      "id": "4830a114-548a-461f-97b4-91cc6d9811a0",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-4830a114548a461f97b491cc6d9811a0",
      "title": "Privileged Access Management (PAM)",
      "description": "Uses IAM Identity Center service to offer preconfigured groups. You can then add users to those groups based in their role in the organization.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "93b26c66-49b3-4ad5-ab78-9810a6334dc5"
        ],
        "link": "https://docs.aws.amazon.com/controltower/latest/userguide/sso.html",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "483a6e1f-f717-44f0-bab1-7aa1049ef367",
      "url": "https://www.notion.so/Resource-Configuration-Policies-483a6e1ff71744f0bab17aa1049ef367",
      "title": "Resource Configuration Policies",
      "description": "A good amount of reasonable default policies are rolled out via Terraform. They match the best practices provided by GCPs Cloud Foundation Toolkit.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/blob/master/1-org/envs/shared/org_policy.tf",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "484e4f98-d1ce-41c2-8b2b-46ed1874d487",
      "url": "https://www.notion.so/On-Premise-Network-Connection-484e4f98d1ce41c28b2b46ed1874d487",
      "title": "On-Premise Network Connection",
      "description": "You can choose to deploy the on-premises connectivity using the Virtual WAN or Azure Hub and Spoke. Here we can define a subscription specific to this connectivity appliance.",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/docs/Deploy/deploy-lz-vnet.md",
        "name": "On-Premise Network Connection"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "493d1813-21f3-4d9a-88b1-133010d9a68b",
      "url": "https://www.notion.so/Centralized-Audit-Logs-493d181321f34d9a88b1133010d9a68b",
      "title": "Centralized Audit Logs",
      "description": "Deploy Log Analytic Workspace and Enable logging through policy.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda",
          "8cea8fb4-02f7-4257-a0bd-24d6d1fd9225"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/src/resources/Microsoft.Authorization/policySetDefinitions/Deploy-Diagnostics-LogAnalytics.json",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "4a2514ab-25e3-4d9c-aca7-9ef3f2b4a094",
      "url": "https://www.notion.so/Resource-Configuration-Policies-4a2514ab25e34d9caca79ef3f2b4a094",
      "title": "Resource Configuration Policies",
      "description": "Accounts provisioned through AFT also inherit all guardrails from their parent OU which is covered by CT. Additional policies can be applied through AFT customization framework.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "4c50144f-1637-4136-8f78-3dfaa005d031",
      "url": "https://www.notion.so/Cloud-native-Landing-Zone-4c50144f163741368f783dfaa005d031",
      "title": "Cloud-native Landing Zone",
      "description": "Implements sufficient capabilities to implement a minimal cloud-native landing zone.",
      "properties": {
        "block": [
          "dff7d733-d987-4145-aa1a-e340b5bcff81"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": null,
        "name": "Cloud-native Landing Zone"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "4d280fde-532f-4eb2-9c9c-da2c9ece3c24",
      "url": "https://www.notion.so/Individual-Project-Cost-Optimization-via-Reservations-4d280fde532f4eb29c9cda2c9ece3c24",
      "title": "Individual Project Cost Optimization via Reservations",
      "description": "meshStack supports pre-paying AWS reserved instances and charging these back correctly to the cloud tenant owners. ",
      "properties": {
        "block": [
          "3c65a957-cb62-40fe-978e-709e3450f7fe"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.aws.reserved-instance-guide.html",
        "name": "Individual Project Cost Optimization via Reservations"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "understanding-cloud-foundation/readme.md",
    "frontmatter": {
      "id": "4f1a5a1d-8abe-42e1-ba96-0f5a6b68e38f",
      "url": "https://www.notion.so/What-is-a-Cloud-Foundation-4f1a5a1d8abe42e1ba960f5a6b68e38f",
      "title": "What is a Cloud Foundation",
      "category": "Understanding Cloud Foundation",
      "order": 0
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-dns-services.md",
    "frontmatter": {
      "id": "4f9ee73a-23a9-4aa3-b956-0df22e6156d0",
      "url": "https://www.notion.so/Managed-DNS-Services-4f9ee73a23a94aa3b9560df22e6156d0",
      "title": "Managed DNS Services",
      "description": "Application teams can manage DNS Zones and Records for their cloud workloads in self-service.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Managed DNS Services"
      }
    }
  },
  {
    "frontmatter": {
      "id": "507e5776-239f-4a65-a6f5-d4944536e35a",
      "url": "https://www.notion.so/Manage-access-to-Cloud-Zones-with-meshStack-507e5776239f4a65a6f5d4944536e35a",
      "title": "Manage access to Cloud Zones with meshStack",
      "description": "meshStack’s tags and policies are ideal for making Cloud Zones available to exactly the right customers.",
      "properties": {
        "block": [],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.policies.html",
        "name": "Manage access to Cloud Zones with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "50e4e2e5-9fb6-49f7-8b57-6988b865b412",
      "url": "https://www.notion.so/Centralized-Audit-Logs-50e4e2e59fb649f78b576988b865b412",
      "title": "Centralized Audit Logs",
      "description": "By default, it captures logs from GCP’s Cloud Audit and VPC Service Control violations. It can be further customized to capture even more logs by configuring what is so-called log sinks. That way you can i.e. push logs to BigQuery or a SIEM solution.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/00-bootstrap#organization-level-logging",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "5154be86-47d3-4453-888d-102be5b07786",
      "url": "https://www.notion.so/Multi-cloud-tenant-database-integrated-with-lifecycle-management-5154be8647d34453888d102be5b07786",
      "title": "Multi-cloud tenant database integrated with lifecycle management",
      "description": "meshStack automatically maintains the cloud tenant database as application teams provision or deprovision cloud tenants.",
      "properties": {
        "block": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.tenant.html",
        "name": "Multi-cloud tenant database integrated with lifecycle management"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "523e8239-f830-4d33-a66c-7c135463e694",
      "url": "https://www.notion.so/Centralized-Audit-Logs-523e8239f8304d33a66c7c135463e694",
      "title": "Centralized Audit Logs",
      "description": "Deploys log analytics workspace\n that enables centralized audit logging as part of the “Management Resources\n” module",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/docs/wiki/%5BUser-Guide%5D-Management-Resources.md",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/cloud-tenant-tagging.md",
    "frontmatter": {
      "id": "52d1e517-9d07-4acc-8c59-17526fa3af9d",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-52d1e5179d074acc8c5917526fa3af9d",
      "title": "Cloud Tenant Tagging",
      "description": "Cloud tenants are tagged using a consistent tagging strategy to facilitate cloud platform operations.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "707c41b8-6da0-4e78-b982-fa4b1365521b",
          "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "71c1b0fb-2eea-4492-bbb8-05a83098544c",
          "7547a774-2b9f-45fc-9123-fbb2e48ccd09",
          "ff879e0b-ee5d-4b43-8bd9-6878b2c2223b",
          "465c3c4b-89f2-4ecb-8b56-7eaf74b1e658",
          "6625c2e8-22fa-40c1-befa-b8b463598bbe",
          "5d42605d-2f58-4ad0-9fb9-eb07ba2067d7",
          "d68a65a0-19c2-47ac-92ef-5e8e6e549947"
        ],
        "name": "Cloud Tenant Tagging"
      }
    }
  },
  {
    "frontmatter": {
      "id": "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c",
      "url": "https://www.notion.so/Azure-LZ-Terraform-module-ES-53cb45d7bcd94eb9bfd5dad6eca0b88c",
      "title": "Azure LZ Terraform module - ES",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "557e72c2-227d-40bd-92b4-4c0707a3c2f5",
      "url": "https://www.notion.so/AWS-Landing-Zone-Accelerator-557e72c2227d40bd92b44c0707a3c2f5",
      "title": "AWS Landing Zone Accelerator",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "56e4f66c-47e3-4849-9315-347694db82a1",
      "url": "https://www.notion.so/UniPipe-56e4f66c47e348499315347694db82a1",
      "title": "UniPipe",
      "properties": {
        "category": "cli"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "file": "maturity-model/cost-management/readme.md",
    "frontmatter": {
      "id": "57502241-e2f4-4b75-9e33-de39b26a6eb8",
      "url": "https://www.notion.so/Cost-Management-57502241e2f44b759e33de39b26a6eb8",
      "title": "💵 Cost Management",
      "description": "Provide cost management and chargeback capabilities for all available cloud platforms and services.",
      "category": "Pillar",
      "pageType": "CFMMPillar",
      "properties": {
        "short-name": "Cost Mgmt."
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/shared-responsibility-model-alignment.md",
    "frontmatter": {
      "id": "57c521ba-73a4-4187-a507-bbd5eaa80212",
      "url": "https://www.notion.so/Shared-Responsibility-Model-Alignment-57c521ba73a44187a507bbd5eaa80212",
      "title": "Shared Responsibility Model Alignment",
      "description": "The cloud foundation team can make decisions about the shared responsibility model clarifying responsibilities between application teams, the cloud foundation and cloud providers. A process is in place to align decisions with relevant stakeholders in the organization. ",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c7081e5-c451-40b6-806d-a8d21b130612",
          "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf",
          "b6b24f70-3fba-4f67-a375-2b0d26a16324",
          "3c65a957-cb62-40fe-978e-709e3450f7fe",
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "cf487857-542f-4d74-8fe9-885b7be8ccf3"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "c596a5f1-dc63-46b6-8d1f-25dcf12ff484"
        ],
        "name": "Shared Responsibility Model Alignment"
      }
    }
  },
  {
    "frontmatter": {
      "id": "57e91719-5519-4fd3-a8e7-3afddb104a6f",
      "url": "https://www.notion.so/Virtual-Network-Building-Block-57e9171955194fd3a8e73afddb104a6f",
      "title": "Virtual Network Building Block",
      "properties": {
        "block": [],
        "tool": [],
        "link": "https://github.com/meshcloud/Building-Blocks/",
        "name": "Virtual Network Building Block"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/virtual-machine-service.md",
    "frontmatter": {
      "id": "58c92b8f-f836-4c69-aa6a-d11f0c8a9a44",
      "url": "https://www.notion.so/Virtual-Machine-Service-58c92b8ff8364c69aa6ad11f0c8a9a44",
      "title": "Virtual Machine Service",
      "description": "Provides VMs as a service for lift & shift and cloud newcomers.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "f077cfd1-d8f4-4c30-a1bd-4f252b840e4f"
        ],
        "recommended": [
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "4f9ee73a-23a9-4aa3-b956-0df22e6156d0",
          "6e343acc-95bd-42aa-bb32-bdcce1c7d4ad",
          "2be4d7d1-4109-406b-a4f7-da6c566123fd",
          "2468d240-6cca-4680-b9c4-6f237defa511",
          "d9c211e3-647c-4fd7-bf3b-3c806baeea7f"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "c3af4eea-6d9a-4c64-a117-ec018524979a"
        ],
        "name": "Virtual Machine Service"
      }
    }
  },
  {
    "frontmatter": {
      "id": "597617fd-06c3-4cab-bf0e-c19b84439a92",
      "url": "https://www.notion.so/Cloud-native-Landing-Zone-597617fd06c34cabbf0ec19b84439a92",
      "title": "Cloud-native Landing Zone",
      "description": "Implements sufficient capabilities to implement a minimal cloud-native landing zone.",
      "properties": {
        "block": [
          "dff7d733-d987-4145-aa1a-e340b5bcff81"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": null,
        "name": "Cloud-native Landing Zone"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "59cdf884-5bd2-4b55-87f8-824a4a35623c",
      "url": "https://www.notion.so/Monthly-cloud-project-billing-report-with-meshStack-59cdf8845bd24b5587f8824a4a35623c",
      "title": "Monthly cloud project billing report with meshStack",
      "description": "meshStack generates so-called chargeback statements for the resource consumption of each tenant. Cloud tenant owner can then view consumption over multiple cloud platforms in the same project.",
      "properties": {
        "block": [
          "28740e92-5559-4931-ab04-17cfb026edd5"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.project-metering.html#chargeback-statements",
        "name": "Monthly cloud project billing report with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "59e899aa-6007-4fe4-af79-64747b19984a",
      "url": "https://www.notion.so/Cloud-Interconnect-59e899aa60074fe4af7964747b19984a",
      "title": "Cloud Interconnect",
      "description": "In the network config directConnectGateways can be defined to connect to  networks at other cloud providers.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "notion://www.notion.so/47af5e8619ac4fa28f9ba0bfd6bd17eb",
        "name": "Cloud Interconnect"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/container-platform-landing-zone.md",
    "frontmatter": {
      "id": "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
      "url": "https://www.notion.so/Container-Platform-Landing-Zone-59fc4d46739d4d498bd7d7b4882709ba",
      "title": "Container Platform Landing Zone",
      "description": "A dedicated landing zone offering a developer-centric experience for building and running container-based applications on the cloud on top of a container platform.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "57c521ba-73a4-4187-a507-bbd5eaa80212",
          "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6",
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "b4678790-ab53-4219-83e7-fbde18383d05",
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "recommended": [
          "4f9ee73a-23a9-4aa3-b956-0df22e6156d0",
          "5f9c0f7d-860a-488b-bbf8-897618e5c76f",
          "cf487857-542f-4d74-8fe9-885b7be8ccf3",
          "71143f29-2fe9-452b-8398-fc40f270a2b6",
          "1a1cdeb0-de7e-4ea9-a963-e409b9abed54",
          "fdd09e3d-c1f8-47be-8e1f-ece8449bf237"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "bfc77006-225b-4425-afd0-ee8f897367ba"
        ],
        "name": "Container Platform Landing Zone"
      }
    }
  },
  {
    "frontmatter": {
      "id": "5a63a102-aa8d-45ef-9cdc-3fb8491fa790",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-5a63a102aa8d45ef9cdc3fb8491fa790",
      "title": "Cloud to Cloud interconnects",
      "description": "It supports Direct and Partner Interconnect.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/tree/d940f6e3401ad3f19987acf56ba70b086bb2a855/3-networks#networking-architecture",
        "name": "Cloud to Cloud interconnects"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "5b377afd-a818-45a5-b834-f74244da53cd",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-5b377afda81845a5b834f74244da53cd",
      "title": "Privileged Access Management (PAM)",
      "description": "Service Principals created and have privilege only on each specific level, You can impersonate them to deploy modules from that level",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/caf_launchpad",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "5c2013b6-4c56-4813-8be7-ad86757014af",
      "url": "https://www.notion.so/collie-cli-5c2013b64c5648138be7ad86757014af",
      "title": "collie-cli",
      "properties": {
        "category": "cli"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "5cbf2012-1384-4f19-b6f1-d515fff4dcc6",
      "url": "https://www.notion.so/Cloud-Carbon-Footprint-5cbf201213844f19b6f1d515fff4dcc6",
      "title": "Cloud Carbon Footprint",
      "properties": {},
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "5d42605d-2f58-4ad0-9fb9-eb07ba2067d7",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-5d42605d2f584ad09fb9eb07ba2067d7",
      "title": "Cloud Tenant Tagging",
      "description": "Tenants can be tagged via the project’s YAML file of the project factory. Defaults that shall be applied to all projects can also be defined. Tags cannot be defined at the Team level yet.",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/blob/master/fast/stages/03-project-factory/dev/data/defaults.yaml",
        "name": "Cloud Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "5e282c7c-3ff4-4791-af90-91acea6201fc",
      "url": "https://www.notion.so/meshStack-5e282c7c3ff44791af9091acea6201fc",
      "title": "meshStack",
      "description": "meshStack allows to bill different legal entities using tags in it’s chargeback export.",
      "properties": {
        "block": [
          "0217c4da-6542-41d6-84c7-12af887e7d15"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": null,
        "name": "meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-ssl-certificates.md",
    "frontmatter": {
      "id": "5f9c0f7d-860a-488b-bbf8-897618e5c76f",
      "url": "https://www.notion.so/Managed-SSL-Certificates-5f9c0f7d860a488bbbf8897618e5c76f",
      "title": "Managed SSL Certificates",
      "description": "Application teams can request and renew SSL certificates for their cloud workloads in self-service.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Managed SSL Certificates"
      }
    }
  },
  {
    "frontmatter": {
      "id": "616451c2-8afc-4626-acae-7a0fc24384e1",
      "url": "https://www.notion.so/Resource-Hierarchy-616451c28afc4626acae7a0fc24384e1",
      "title": "Resource Hierarchy",
      "description": "FabricFAST rolls out a best-practice resource hierarchy for a Cloud Landing Zone.\nA hierarchy that fits many companies is applied by default. It is divided into common branches like networking or security. A “Teams” branch contains all end-user projects. It can be easily customized via input variables (also see Tenant Provisioning below). Applying a completely different structure requires adaption to the Terraform files.\n\nFor other hierarchy structures, you can also use blueprints provided outside the context of fast stages, see “example foundations”.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/01-resman",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/readme.md",
    "frontmatter": {
      "id": "621771b3-97a0-4c4e-80ab-3331cd6719f0",
      "url": "https://www.notion.so/Service-Ecosystem-621771b397a04c4e80ab3331cd6719f0",
      "title": "🛠 Service Ecosystem",
      "description": "Provide managed services that help teams build and operate application on the cloud faster and more efficiently (e.g. on-prem connectivity).",
      "category": "Pillar",
      "pageType": "CFMMPillar",
      "properties": {
        "short-name": "Service Ecosys."
      }
    }
  },
  {
    "frontmatter": {
      "id": "635ebffa-17e9-4231-9d38-b59625be9b03",
      "url": "https://www.notion.so/Check-monthly-cloud-tenant-costs-with-collie-635ebffa17e942319d38b59625be9b03",
      "title": "Check monthly cloud tenant costs with collie",
      "description": "Open-source Collie CLI allows you to view monthly costs per tenant across AWS, Azure & GCP for a given timeframe.",
      "properties": {
        "block": [
          "cd162600-e742-4a80-b022-989da423ca43"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": "https://github.com/meshcloud/collie-cli/wiki#listing-costs-per-tenant",
        "name": "Check monthly cloud tenant costs with collie"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "tools/readme.md",
    "frontmatter": {
      "id": "640be841-cf31-480d-835d-89d491b558f5",
      "url": "https://www.notion.so/Overview-640be841cf31480d835d89d491b558f5",
      "title": "Overview",
      "category": "Tools",
      "order": 0
    }
  },
  {
    "file": "maturity-model/tenant-management/tenant-inventory-reconciliation.md",
    "frontmatter": {
      "id": "64284b14-faab-461c-80bb-5e8efbae4dcc",
      "url": "https://www.notion.so/Tenant-Inventory-Reconciliation-64284b14faab461c80bb5e8efbae4dcc",
      "title": "Tenant Inventory Reconciliation",
      "description": "The inventory of cloud tenants is automatically reconciled against the tenants actually present in the cloud platforms. This allows organizations to detect \"shadow IT\" or \"dark matter\" in the cloud. A process is in place to adopt these existing tenants into the prescribed governance model. ",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c7081e5-c451-40b6-806d-a8d21b130612"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "9b740724-686e-45f2-8924-9000279b806b"
        ],
        "name": "Tenant Inventory Reconciliation"
      }
    }
  },
  {
    "frontmatter": {
      "id": "6625c2e8-22fa-40c1-befa-b8b463598bbe",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-6625c2e822fa40c1befab8b463598bbe",
      "title": "Cloud Tenant Tagging",
      "description": "An object called global_settings\nis created and used by the module. It governs the creation of resources based on a set of common\ncriteria (naming convention, prefixes, region of the deployment, name of the environment, tags inheritance settings, etc.) But there isn’t any policies forcing the tags to inherit.",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/blob/main/caf_launchpad/documentation/variables.md",
        "name": "Cloud Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "66d6549a-98b5-4ff0-b1d1-7bb66bd7cc3b",
      "url": "https://www.notion.so/Playground-Sandbox-Environments-66d6549a98b54ff0b1d17bb66bd7cc3b",
      "title": "Playground / Sandbox Environments",
      "description": "It provides a dedicated folder for Sandbox environments. This folder has different and softer org policies applied. That allows for quicker evaluation as more complex, but secure policies don’t have to be applied here.\nSandbox projects can be created via the Project Factory just like normal projects. They are just put into the Sandbox folder.\nAutomatic expiration of Sandbox environments is not part of Fabric FAST. It has to be implemented in the GitOps flow around it.",
      "properties": {
        "block": [
          "155c0ead-cbd0-4e0c-9387-cc57946f80e9"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/blob/master/fast/stages/01-resman/branch-sandbox.tf",
        "name": "Playground / Sandbox Environments"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "67c9d1dc-7e7b-4b1e-b6fb-8b2547482ca7",
      "url": "https://www.notion.so/Centralized-Audit-Logs-67c9d1dc7e7b4b1eb6fb8b2547482ca7",
      "title": "Centralized Audit Logs",
      "description": "Uses the LogArchive Account to store the logs. It can be configured easily which logs shall be included.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/blob/main/reference/sample-configurations/aws-best-practices/global-config.yaml",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "694f24b9-1588-499b-9406-2f5f747747ba",
      "url": "https://www.notion.so/Resource-Configuration-Policies-694f24b91588499b94062f5f747747ba",
      "title": "Resource Configuration Policies",
      "description": "Assign different policies and initiatives based on Microsoft Cloud Adaption Framework. Some examples are: Deploy activity logs and keep them in log analytic workspace, Enable Microsoft Defender for different services, Enable Microsoft Sentinel, Prevent usage of Public-IP and etc.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/tree/main/src/resources/Microsoft.Authorization/policyDefinitions",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-bastion-hosts.md",
    "frontmatter": {
      "id": "6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9",
      "url": "https://www.notion.so/Managed-bastion-hosts-6c9827e973b249f5bfb53fe23fd5b9e9",
      "title": "Managed bastion hosts",
      "description": "Application teams can use a managed service to access resources on private cloud networks using managed bastion hosts or gateway services. These gateways are hardened and centrally audited.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Managed bastion hosts"
      }
    }
  },
  {
    "frontmatter": {
      "id": "6d20b1f0-3c57-4b37-9f11-c25e5d2d1704",
      "url": "https://www.notion.so/Quota-Management-with-meshStack-6d20b1f03c574b379f11c25e5d2d1704",
      "title": "Quota Management with meshStack",
      "description": "meshStack has built-in support for managing quotas for private platforms like OpenStack or OpenShift including for auto-approval of quota requests up to a defined threshold.",
      "properties": {
        "block": [
          "fdd09e3d-c1f8-47be-8e1f-ece8449bf237"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.tenant-quota.html",
        "name": "Quota Management with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/tenant-to-tenant-transit-networks.md",
    "frontmatter": {
      "id": "6e343acc-95bd-42aa-bb32-bdcce1c7d4ad",
      "url": "https://www.notion.so/Tenant-to-Tenant-Transit-Networks-6e343acc95bd42aabb32bdcce1c7d4ad",
      "title": "Tenant to Tenant Transit Networks",
      "description": "Provides managed connectivity between cloud tenants on the same cloud platform via centrally managed transit networks. ",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Tenant to Tenant Transit Networks"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/multi-cloud-tagging-policy.md",
    "frontmatter": {
      "id": "707c41b8-6da0-4e78-b982-fa4b1365521b",
      "url": "https://www.notion.so/Multi-Cloud-Tagging-Policy-707c41b86da04e78b982fa4b1365521b",
      "title": "Multi-Cloud Tagging Policy",
      "description": "Define and enforce a consistent tagging of cloud tenants and resource across multiple cloud platforms.  ",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d",
          "344b75a4-595b-4ba5-8851-ddfb6d4acf7c"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "73cfa3f4-16ed-40cf-9c75-0611aad78d0b",
          "7547a774-2b9f-45fc-9123-fbb2e48ccd09"
        ],
        "name": "Multi-Cloud Tagging Policy"
      }
    }
  },
  {
    "frontmatter": {
      "id": "70cb4156-d6fa-41ae-a295-8bf1fdf50f6b",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-70cb4156d6fa41aea2958bf1fdf50f6b",
      "title": "Cloud to Cloud interconnects",
      "description": "Network Documentation only mentions that Cloud Interconnects should be done similar to the HA VPN setup.\nSo it seems like the basis is there, but no specific support for setting up a concrete inter-connect.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/blob/9b6262de4111a961ab7962cae9e6e5f807807bd6/fast/stages/02-networking-vpn/README.md#external-connectivity",
        "name": "Cloud to Cloud interconnects"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-devops-toolchain.md",
    "frontmatter": {
      "id": "71143f29-2fe9-452b-8398-fc40f270a2b6",
      "url": "https://www.notion.so/Managed-DevOps-Toolchain-71143f292fe9452b8398fc40f270a2b6",
      "title": "Managed DevOps Toolchain",
      "description": "Application teams can use DevOps tools that are integrated with the cloud tenants used by the team. Any required service account or automation user credentials are automatically maintained and rotated.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "3c377c14-3fbf-4766-a47a-e30bd070ed7f",
          "04470deb-8ef1-4c49-bcec-7243426790b5",
          "d5d598cc-3250-4f60-833e-2033694d3a59"
        ],
        "name": "Managed DevOps Toolchain"
      }
    }
  },
  {
    "frontmatter": {
      "id": "71c1b0fb-2eea-4492-bbb8-05a83098544c",
      "url": "https://www.notion.so/meshStack-Tenant-Tagging-71c1b0fb2eea4492bbb805a83098544c",
      "title": "meshStack Tenant Tagging",
      "description": "meshStack ensures up-to-date tags at least once a day for all cloud tenants based on metadata entered by cloud tenant owners and/or platform operators. ",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.metadata-tags.html#tags-in-cloud-tenants",
        "name": "meshStack Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "73cfa3f4-16ed-40cf-9c75-0611aad78d0b",
      "url": "https://www.notion.so/Central-Management-of-Tenant-tags-and-metadata-73cfa3f416ed40cf9c750611aad78d0b",
      "title": "Central Management of Tenant tags and metadata",
      "description": "meshStack makes metadata an integral part of the tenant provisioning process and allows cloud foundation teams to create a full customizable list of tags that should be filled in by cloud tenant owners.",
      "properties": {
        "block": [
          "707c41b8-6da0-4e78-b982-fa4b1365521b"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.metadata-tags.html",
        "name": "Central Management of Tenant tags and metadata"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/soc-integration.md",
    "frontmatter": {
      "id": "74295ae4-dcd5-449b-8825-f12c5267e89b",
      "url": "https://www.notion.so/SOC-Integration-74295ae4dcd5449b8825f12c5267e89b",
      "title": "SOC Integration",
      "description": "Virtual machines are integrated into a central Security Operations Center (SOC) solution like tenable.io or Qualys. The cloud inventory of existing machines is reconciled against the SOC to ensure completeness.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "recommended": [
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "344b75a4-595b-4ba5-8851-ddfb6d4acf7c",
          "74295ae4-dcd5-449b-8825-f12c5267e89b"
        ],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "SOC Integration"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-data-lake-access.md",
    "frontmatter": {
      "id": "74bf9fe5-6bd5-4940-9714-aad2b25e03c4",
      "url": "https://www.notion.so/Managed-Data-Lake-access-74bf9fe56bd549409714aad2b25e03c4",
      "title": "Managed Data Lake access",
      "description": "Application teams can get managed access to central data warehouses and data lakes to combine this data with processing and infrastructure in their own cloud tenants.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Managed Data Lake access"
      }
    }
  },
  {
    "frontmatter": {
      "id": "7547a774-2b9f-45fc-9123-fbb2e48ccd09",
      "url": "https://www.notion.so/collie-analyze-tags-7547a7742b9f45fc9123fbb2e48ccd09",
      "title": "collie analyze tags",
      "description": "Get a quick overview of cloud tenant tags with open-source Collie CLI across AWS, Azure & GCP.",
      "properties": {
        "block": [
          "707c41b8-6da0-4e78-b982-fa4b1365521b",
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": "https://github.com/meshcloud/collie-cli/wiki#identifying-inconsistencies-in-the-use-of-tags",
        "name": "collie analyze tags"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/multi-cloud-tenant-database-integrated-with-lifecycle-management.md",
    "frontmatter": {
      "id": "77942f5f-e395-49c6-8927-e5fa3ef28aef",
      "url": "https://www.notion.so/Multi-cloud-tenant-database-integrated-with-lifecycle-management-77942f5fe39549c68927e5fa3ef28aef",
      "title": "Multi-cloud tenant database integrated with lifecycle management",
      "description": "A central database of all multi-cloud tenants initiates tenant provisioning and deprovisioning processes. The database acts as an authoritative source of tenants and ensures tenant metadata is always up to date.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "cf487857-542f-4d74-8fe9-885b7be8ccf3"
        ],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9",
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "5154be86-47d3-4453-888d-102be5b07786"
        ],
        "name": "Multi-cloud tenant database integrated with lifecycle management"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/in-house-paas-service-integration.md",
    "frontmatter": {
      "id": "78586f52-5868-4ff6-b59b-5b71e66affd5",
      "url": "https://www.notion.so/In-house-PaaS-Service-Integration-78586f5258684ff6b59b5b71e66affd5",
      "title": "In-house PaaS Service Integration",
      "description": "In-house teams provide PaaS services for commonly needed infrastructure services like DBaaS, observability platforms or analytics. Teams can manage service-lifecycle and IAM in self-service and are transparently charged for all consumption cost incurred.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "In-house PaaS Service Integration"
      }
    }
  },
  {
    "frontmatter": {
      "id": "785eec49-493b-46a6-8540-2237135f0fba",
      "url": "https://www.notion.so/Virtual-Network-Service-785eec49493b46a685402237135f0fba",
      "title": "Virtual Network Service",
      "description": "CT creates a default VPC with 3 subnets in the management account per availability zone. You can edit VPC configurations for new provisioned accounts with the account factory. For example, you can allow internet access for created subnets, which will lead to the creation of a NAT Gateway. When provisioning a new account, CT automatically deletes the default VPC and creates a new VPC configured by CT.",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "93b26c66-49b3-4ad5-ab78-9810a6334dc5"
        ],
        "link": "https://docs.aws.amazon.com/controltower/latest/userguide/networking.html",
        "name": "Virtual Network Service"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "7beb3669-9658-4b4d-a87a-a136d9556f32",
      "url": "https://www.notion.so/Resource-Configuration-Policies-7beb366996584b4da87aa136d9556f32",
      "title": "Resource Configuration Policies",
      "description": "Reasonable defaults are set and additional helpful policies are proposed via code comments in the terraform files. They can be enabled on demand.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/01-resman#organization-policies",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "7c317222-5658-447c-9ade-44f90e9aee96",
      "url": "https://www.notion.so/Resource-Configuration-Policies-7c3172225658447c9ade44f90e9aee96",
      "title": "Resource Configuration Policies",
      "description": "Reasonable guardrails are applied to the default domains Infrastructure, Security and Quarantine. It is easy to also define additional guardrails or to define them for additional, custom OUs.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/tree/main/reference/sample-configurations/aws-best-practices/service-control-policies",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "7e7bdd75-b6f7-4717-b7d6-c083cb1a71f8",
      "url": "https://www.notion.so/Virtual-Networks-7e7bdd75b6f74717b7d6c083cb1a71f8",
      "title": "Virtual Networks",
      "description": "Offers sophisticated virtual network setups based on the “hub and spoke” design. One can choose the type of connectivity between the hub and spokes, which are: VPC Peering, Network Virtual Appliances (NVA), or VPN",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages#shared-resources-02",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "tools/tool-support.md",
    "frontmatter": {
      "id": "7eab5fc5-d5e2-41d5-b762-8d80fc98b2d4",
      "url": "https://www.notion.so/Tool-Support-7eab5fc5d5e241d5b7628d80fc98b2d4",
      "title": "Tool Support",
      "category": "Tools",
      "order": 11
    }
  },
  {
    "frontmatter": {
      "id": "7f68e769-70d6-4c41-bdc2-de273d61bd23",
      "url": "https://www.notion.so/Cloud-Carbon-Footprint-reporting-7f68e76970d64c41bdc2de273d61bd23",
      "title": "Cloud Carbon Footprint reporting",
      "description": "Cloud Carbon Footprint takes your cloud provider cost report data and uses a community-developed emissions model to estimate carbon emission data.",
      "properties": {
        "block": [
          "ce20312c-aa7a-453f-82f2-f186469dd973"
        ],
        "tool": [
          "5cbf2012-1384-4f19-b6f1-d515fff4dcc6"
        ],
        "link": "https://www.cloudcarbonfootprint.org",
        "name": "Cloud Carbon Footprint reporting"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "7fb43cbd-ad3c-4f3a-93d7-76f45c88e4f0",
      "url": "https://www.notion.so/Tenant-Provisioning-Deprovisioning-7fb43cbdad3c4f3a93d776f45c88e4f0",
      "title": "Tenant Provisioning/Deprovisioning",
      "description": "Workload Accounts can be defined in the accounts-config.yaml. Only the very basic account information can be entered here. Tags, Service Accounts, etc cannot be defined for workload accounts.",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/blob/main/reference/sample-configurations/aws-best-practices/accounts-config.yaml",
        "name": "Tenant Provisioning/Deprovisioning"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/incident-management-process.md",
    "frontmatter": {
      "id": "802fdd8d-7fc0-4749-937f-e9e0ccb3f273",
      "url": "https://www.notion.so/Incident-Management-Process-802fdd8d7fc04749937fe9e0ccb3f273",
      "title": "Incident Management Process",
      "description": "There's a clear owner for every cloud tenant responsible for incident management. Incidents are automatically routed to these owners. ",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c7081e5-c451-40b6-806d-a8d21b130612"
        ],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b"
        ],
        "recommended": [
          "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d"
        ],
        "scope": "🏢 Core",
        "tool-implementations": [],
        "name": "Incident Management Process"
      }
    }
  },
  {
    "frontmatter": {
      "id": "84cf2301-844f-4e77-8f86-ed3d9244d623",
      "url": "https://www.notion.so/Stakeholder-Map-84cf2301844f4e778f86ed3d9244d623",
      "title": "Stakeholder Map",
      "properties": {
        "category": "Downloads"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "87441a90-61d1-46f3-a3e0-50902ca974fd",
      "url": "https://www.notion.so/Tenant-Provisioning-Tenant-Deprovisioning-87441a9061d146f3a3e050902ca974fd",
      "title": "Tenant Provisioning / Tenant Deprovisioning",
      "description": "There is a mechanism called subscription vending machine to create subscriptions for EA and MCA. But since it wasn’t documented we haven’t tried it.",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/templates/asvm/orion",
        "name": "Tenant Provisioning / Tenant Deprovisioning"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8a4e5f69-742c-43ef-948b-ed39fc21b3d8",
      "url": "https://www.notion.so/Resource-Configuration-Policies-8a4e5f69742c43ef948bed39fc21b3d8",
      "title": "Resource Configuration Policies",
      "description": "AWS Control Tower sets up 20 preventive guardrails (implemented by SCPs) and 3 detective guardrails (implemented by AWS Config). Those are the “Mandatory” guardrails enabled by default that we see are reasonable, such as disallowing deletion of the log archive bucket, disallowing changes to AWS IAM roles set up by CT and CloudFormation, etc. There are also more guardrails available that are not enabled by default, which are “Elective” and “Strongly Recommended” guardrails. Newly provisioned accounts with Account Factory inherit guardrails from their parent OU.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "93b26c66-49b3-4ad5-ab78-9810a6334dc5"
        ],
        "link": "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8b36655b-1387-4bf2-b8ef-29826a349bb9",
      "url": "https://www.notion.so/On-Premise-Network-Connection-8b36655b13874bf2b8ef29826a349bb9",
      "title": "On-Premise Network Connection",
      "description": "You can connect to your on-premise networks by choosing the matching option and configurations. You have the option of using Virtual WAN and then you are able to make the connection between your on-premises via VPN or Express route.\nIf you deploy the terraform module using Collie's KitBundle functionality, on-premise network functionality will not be deployed automatically.",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/docs/wiki/%5BUser-Guide%5D-Connectivity-Resources.md",
        "name": "On-Premise Network Connection"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8b560d01-09b5-499d-b5f7-34fdc79c722d",
      "url": "https://www.notion.so/AWS-Control-Tower-with-AFT-8b560d0109b5499db5f734fdc79c722d",
      "title": "AWS Control Tower with AFT",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "8b5e9c3f-82b4-429c-ad60-49176671d537",
      "url": "https://www.notion.so/Playground-Sandbox-Environments-8b5e9c3f82b4429cad6049176671d537",
      "title": "Playground / Sandbox Environments",
      "description": "Through the use of meshStack’s landing zones, platform operators can create a dedicated path for cloud tenant owners to quickly spin up a new playground / sandbox environment.",
      "properties": {
        "block": [
          "155c0ead-cbd0-4e0c-9387-cc57946f80e9"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.landing-zones.html",
        "name": "Playground / Sandbox Environments"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8bf8d22f-4612-4050-9e7f-4b0a51b2a839",
      "url": "https://www.notion.so/Resource-Hierarchy-8bf8d22f461240509e7f4b0a51b2a839",
      "title": "Resource Hierarchy",
      "description": "The FCT Example Foundation rolls out a best-practice resource hierarchy for a Cloud Landing Zone.\nIt only rolls out one specific resource hierarchy, which is separated by environment (dev, non-prod, prod). Using custom hierarchies must be implemented on your own.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8c890795-9f3d-4d37-8868-66a46e5cf83b",
      "url": "https://www.notion.so/Service-Account-Management-8c8907959f3d4d37886866a46e5cf83b",
      "title": "Service Account Management",
      "description": "One service account seems to be created per project. This SA can then be impersonated by the Cloud Build SA to perform CI/CD tasks within the project. By default, iam.disableServiceAccountKeyCreation organization policy is enforced on organization-level. This is a best practice that makes use of Workload Identity Federation (WIF) as an alternative to key creation.",
      "properties": {
        "block": [
          "18256d4f-e096-4281-809a-f77c5dd20ef0"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/blob/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0/4-projects/modules/single_project/variables.tf#L135",
        "name": "Service Account Management"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "8cea8fb4-02f7-4257-a0bd-24d6d1fd9225",
      "url": "https://www.notion.so/meshStack-building-blocks-Azure-8cea8fb402f74257a0bd24d6d1fd9225",
      "title": "meshStack building blocks - Azure",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "8dea89f0-ab7e-4043-9e71-ad7a0232e64b",
      "url": "https://www.notion.so/On-Premise-Network-Connection-8dea89f0ab7e40439e71ad7a0232e64b",
      "title": "On-Premise Network Connection",
      "description": "You can connect to your on-premise networks by choosing the matching option and configurations. You have the option of using Virtual WAN and then you are able to make the connection between your on-premises via VPN or Express route",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/templates/platform/level2/connectivity",
        "name": "On-Premise Network Connection"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/modular-landing-zones.md",
    "frontmatter": {
      "id": "913a8ad1-7ad4-4ade-9e88-801a7afa4b40",
      "url": "https://www.notion.so/Modular-Landing-Zones-913a8ad17ad44ade9e88801a7afa4b40",
      "title": "Modular Landing Zones",
      "description": "Landing Zones are extendable with with optional services. These services have their own lifecycle and can be reconfigured during the lifespan of a tenant. The modular design allows combining services like LEGO® blocks. ",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "3892bc95-4464-417c-aab2-247da7a3015a"
        ],
        "recommended": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "ccba2e9a-1bc0-4b53-8d5e-4773680d9e14",
          "b8f373f0-b200-4d2b-badb-d3bc8ad145b5"
        ],
        "name": "Modular Landing Zones"
      }
    }
  },
  {
    "frontmatter": {
      "id": "93b26c66-49b3-4ad5-ab78-9810a6334dc5",
      "url": "https://www.notion.so/AWS-Control-Tower-with-Account-Factory-93b26c6649b34ad5ab789810a6334dc5",
      "title": "AWS Control Tower with Account Factory",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "9b244e63-eb03-454a-a33b-ebb9d90e8137",
      "url": "https://www.notion.so/Virtual-Network-Service-9b244e63eb03454aa33bebb9d90e8137",
      "title": "Virtual Network Service",
      "description": "It provides a reasonable default network setup in the network-config.yaml. Additionally the default config contains a lot of additional options as commented code. You just have to active them and adapt to your needs.",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/blob/main/reference/sample-configurations/aws-best-practices/network-config.yaml",
        "name": "Virtual Network Service"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "9b740724-686e-45f2-8924-9000279b806b",
      "url": "https://www.notion.so/Tenant-Inventory-Reconciliation-9b740724686e45f289249000279b806b",
      "title": "Tenant Inventory Reconciliation",
      "description": "meshStack gives an overview of unmanaged tenants. These are tenants that are not yet under management of the cloud foundation team and they can be easily imported into the governance model.",
      "properties": {
        "block": [
          "64284b14-faab-461c-80bb-5e8efbae4dcc"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/administration.unmanaged-tenants.html",
        "name": "Tenant Inventory Reconciliation"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "9c0cb471-dfd4-4c0f-98c8-7434d0193577",
      "url": "https://www.notion.so/Resource-Hierarchy-9c0cb471dfd44c0f98c87434d0193577",
      "title": "Resource Hierarchy",
      "description": "By default it creates 2 OUs, Infrastructure and Security. You can easily define more OUs in the config. Another great feature it provides is the option to use a Quarantine OU where almost everything is forbidden. It is used for newly created accounts that are still under construction by the accelerator. That way unintended access or changes during creation can be avoided.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://aws.amazon.com/solutions/implementations/landing-zone-accelerator-on-aws/",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "9cae193b-0656-4bac-bdd8-34cff905b947",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-9cae193b06564bacbdd834cff905b947",
      "title": "Privileged Access Management (PAM)",
      "description": "Leverages the use of groups instead of directly assigning roles to users. The principle of least privileged is applied by assigning necessary roles for each group. Furthermore, service accounts are created for automation that can be impersonated by selected groups.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "410b6ce3-69b4-4ad9-bf16-d65e8bd512b7"
        ],
        "link": "https://cloud.google.com/docs/enterprise/setup-checklist#checklist-section-2",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "9cd1dd44-526e-4b3f-9969-8f9a94c187cb",
      "url": "https://www.notion.so/On-Premise-Network-Connection-9cd1dd44526e4b3f99698f9a94c187cb",
      "title": "On-Premise Network Connection",
      "description": "On-Prem connectivity is provided in 3 different ways for all network setups mentioned above.",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/tree/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0/3-networks-dual-svpc",
        "name": "On-Premise Network Connection"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/readme.md",
    "frontmatter": {
      "id": "9ee0a54d-9b9e-47dd-9fc0-9d81213ce76c",
      "url": "https://www.notion.so/IAM-9ee0a54d9b9e47dd9fc09d81213ce76c",
      "title": "🔐 IAM",
      "description": "Provide Identity and Access management capabilities for all available cloud platforms and services.",
      "category": "Pillar",
      "pageType": "CFMMPillar",
      "properties": {
        "short-name": "IAM"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/cloud-to-cloud-interconnects.md",
    "frontmatter": {
      "id": "a31e4077-4e84-4129-a46c-1070a8591181",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-a31e40774e844129a46c1070a8591181",
      "title": "Cloud to Cloud interconnects",
      "description": "Provides managed connectivity between cloud tenants on different cloud platforms via centrally managed transit networks. ",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "70cb4156-d6fa-41ae-a295-8bf1fdf50f6b",
          "5a63a102-aa8d-45ef-9cdc-3fb8491fa790",
          "d2086bf8-8389-457e-9b70-e41aa03f1046",
          "ce19ba64-358a-4ea5-8520-d9d57296aac7",
          "b5b13a2c-0a93-46d0-87f5-4d4a368739dc",
          "59e899aa-6007-4fe4-af79-64747b19984a"
        ],
        "name": "Cloud to Cloud interconnects"
      }
    }
  },
  {
    "file": "understanding-cloud-foundation/approaches-to-building-a-cloud-foundation.md",
    "frontmatter": {
      "id": "a544bc7c-979f-427a-8335-2011cdcb6247",
      "url": "https://www.notion.so/Approaches-to-building-a-Cloud-Foundation-a544bc7c979f427a83352011cdcb6247",
      "title": "Approaches to building a Cloud Foundation",
      "category": "Understanding Cloud Foundation",
      "order": 20
    }
  },
  {
    "frontmatter": {
      "id": "aade65c8-e80c-46e8-b993-23a50076f62d",
      "url": "https://www.notion.so/Privileged-Access-Management-PAM-aade65c8e80c46e8b99323a50076f62d",
      "title": "Privileged Access Management (PAM)",
      "description": "Leverages the use of groups instead of directly assigning roles to users. The principle of least privileged is applied by assigning only necessary roles for each group. Furthermore, service accounts are created for automation that can be impersonated by selected groups.",
      "properties": {
        "block": [
          "1afea746-da65-4164-9029-5e0bfa9432b1"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/00-bootstrap#user-groups",
        "name": "Privileged Access Management (PAM)"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/self-service-multi-cloud-tenant-database.md",
    "frontmatter": {
      "id": "ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9",
      "url": "https://www.notion.so/Self-Service-Multi-Cloud-Tenant-Database-ab10bed170d547cfb3cd4a4448bdb9a9",
      "title": "Self-Service Multi-Cloud Tenant Database",
      "description": "Application teams can register, update and remove tenant metadata in a central multi-cloud tenant database in self service.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "e2123339-0641-4d44-b774-32ce23fd634d",
          "334eb216-fa16-4946-9fe5-8f66bb7fc3fa"
        ],
        "name": "Self-Service Multi-Cloud Tenant Database"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/resource-hierarchy.md",
    "frontmatter": {
      "id": "ac8a21c3-f692-4d23-a9bb-796fd311c39f",
      "url": "https://www.notion.so/Resource-Hierarchy-ac8a21c3f6924d23a9bb796fd311c39f",
      "title": "Resource Hierarchy",
      "description": "Define a cloud resource hierarchy structure that facilitates tenant isolation and policy enforcement. Maintain the integrity of this hierarchy to ensure capabilities built atop of it remain effective.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "11f50039-a1d6-49de-9fbd-247a1955b474",
          "616451c2-8afc-4626-acae-7a0fc24384e1",
          "8bf8d22f-4612-4050-9e7f-4b0a51b2a839",
          "3d96d0aa-90b8-433e-8463-5be26014e70b",
          "3da9cf6c-972f-4152-9c85-9505fa6a8d2a",
          "e018667f-0198-4fa2-b82f-967b960390a7",
          "43ba3b98-c6a2-4d2a-b4e2-93bc6841f3b7",
          "1c2e8bb1-5a32-4435-b319-bac181f57481",
          "f02d3382-32e0-4d45-912e-a1c914d1afa5",
          "9c0cb471-dfd4-4c0f-98c8-7434d0193577"
        ],
        "name": "Resource Hierarchy"
      }
    }
  },
  {
    "frontmatter": {
      "id": "acf452d3-8425-41e2-ba8b-ee212a6fb189",
      "url": "https://www.notion.so/meshcloud-Cloud-Foundation-CLI-tool-acf452d3842541e2ba8bee212a6fb189",
      "title": "meshcloud Cloud Foundation CLI tool",
      "description": "With Collie CLI you can find out within minutes what your current cloud tagging strategy looks like; across AWS, Azure, and GCP.",
      "properties": {
        "block": [
          "344b75a4-595b-4ba5-8851-ddfb6d4acf7c"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": "https://github.com/meshcloud/collie-cli/wiki#identifying-inconsistencies-in-the-use-of-tags",
        "name": "meshcloud Cloud Foundation CLI tool"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/resource-configuration-policies.md",
    "frontmatter": {
      "id": "af14b5df-77b4-4def-b761-8fadabd241ca",
      "url": "https://www.notion.so/Resource-Configuration-Policies-af14b5df77b44defb7618fadabd241ca",
      "title": "Resource Configuration Policies",
      "description": "Policies control the configuration of resources to enforce security and compliance standards like preventing public access to object storage buckets.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f",
          "74295ae4-dcd5-449b-8825-f12c5267e89b",
          "b0a04ae8-c9b3-4060-abfd-e760723995d8"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "7beb3669-9658-4b4d-a87a-a136d9556f32",
          "483a6e1f-f717-44f0-bab1-7aa1049ef367",
          "694f24b9-1588-499b-9406-2f5f747747ba",
          "c7020f93-4d65-4609-ae64-5ea3e76add60",
          "24f0be77-129c-4802-80fd-2c58c6374300",
          "8a4e5f69-742c-43ef-948b-ed39fc21b3d8",
          "4a2514ab-25e3-4d9c-aca7-9ef3f2b4a094",
          "7c317222-5658-447c-9ade-44f90e9aee96",
          "b153c072-1a43-46fb-90fa-60263f6d4705"
        ],
        "name": "Resource Configuration Policies"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/centralized-workload-and-infrastructure-logs.md",
    "frontmatter": {
      "id": "b0a04ae8-c9b3-4060-abfd-e760723995d8",
      "url": "https://www.notion.so/Centralized-workload-and-infrastructure-logs-b0a04ae8c9b34060abfde760723995d8",
      "title": "Centralized workload and infrastructure logs",
      "description": "Audit logs from cloud workloads and infrastructure (e.g. network flow logs) are centrally collected and stored. ",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "012dc29a-5b79-4eeb-8154-9ef0f2ae0f02"
        ],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Centralized workload and infrastructure logs"
      }
    }
  },
  {
    "frontmatter": {
      "id": "b153c072-1a43-46fb-90fa-60263f6d4705",
      "url": "https://www.notion.so/Resource-Configuration-Policies-via-collie-b153c0721a4346fb90fa60263f6d4705",
      "title": "Resource Configuration Policies via collie",
      "description": "Deploy any policy via the terraform-based Landing Zone Construction Kit framework. Collie provides a workflow for documenting compliance controls and compliance statements that lay out what policies are in effect in your landing zone and how they help implement compliance controls.",
      "properties": {
        "block": [
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "d1904912-b420-4a10-a62c-aa578fb847ff"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": "https://landingzone.meshcloud.io",
        "name": "Resource Configuration Policies via collie"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "b3f089d6-6f90-4741-88a7-69b59974d1dd",
      "url": "https://www.notion.so/Service-Account-Management-b3f089d66f90474188a769b59974d1dd",
      "title": "Service Account Management",
      "description": "With the project factory, project configuration can also include service accounts provisioning alongside their permissions. By default, iam.disableServiceAccountKeyCreation organization policy is enforced on organization-level. This is a best practice that makes use of Workload Identity Federation (WIF) as an alternative to key creation.",
      "properties": {
        "block": [
          "18256d4f-e096-4281-809a-f77c5dd20ef0"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/blob/master/fast/stages/03-project-factory/dev/data/projects/project.yaml.sample#L63",
        "name": "Service Account Management"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cloud-foundation-pillars.md",
    "frontmatter": {
      "id": "b3f64e6c-3799-457d-96ee-413d3acae899",
      "url": "https://www.notion.so/Cloud-Foundation-Pillars-b3f64e6c3799457d96ee413d3acae899",
      "title": "Cloud Foundation Pillars",
      "category": "Maturity Model",
      "order": -1
    }
  },
  {
    "frontmatter": {
      "id": "b441ec40-c21b-4c49-a57a-b4f5146789cd",
      "url": "https://www.notion.so/Shared-Container-Registry-with-Quay-b441ec40c21b4c49a57ab4f5146789cd",
      "title": "Shared Container Registry with Quay",
      "description": "Quay is a container image registry that enables you to build, organize, distribute, and deploy containers. Quay gives you security over your repositories with image vulnerability scanning and robust access controls. Project Quay provides a scalable open source platform to host container images across any size organization.",
      "properties": {
        "block": [
          "1a1cdeb0-de7e-4ea9-a963-e409b9abed54"
        ],
        "tool": [
          "e8884286-1070-4de8-acc2-64523e237186"
        ],
        "link": "https://www.projectquay.io",
        "name": "Shared Container Registry with Quay"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/iam/federated-identity-and-authentication.md",
    "frontmatter": {
      "id": "b4678790-ab53-4219-83e7-fbde18383d05",
      "url": "https://www.notion.so/Federated-Identity-and-Authentication-b4678790ab53421983e7fbde18383d05",
      "title": "Federated Identity and Authentication",
      "description": "Integration Cloud Platform IAM systems with Enterprise IAM landscape incl. federated authentication. ",
      "category": "🔐 IAM",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "456f15f2-299e-4a8b-a8c9-cb0580a887d2",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "f271478b-3921-494f-ab2c-de97808d3bb7"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "37862f9f-3d8a-4e25-8e90-e487dc455b0c"
        ],
        "recommended": [
          "456f15f2-299e-4a8b-a8c9-cb0580a887d2"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Federated Identity and Authentication"
      }
    }
  },
  {
    "frontmatter": {
      "id": "b5b13a2c-0a93-46d0-87f5-4d4a368739dc",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-b5b13a2c0a9346d087f54d4a368739dc",
      "title": "Cloud to Cloud interconnects",
      "description": "You can connect to your connection between clouds by choosing the matching option and configurations. You have the option of using Virtual WAN and then you are able to make the connection between your on-premises via VPN or Express route.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/templates/platform/level2/connectivity",
        "name": "Cloud to Cloud interconnects"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "b6a3508f-701f-4ce4-99b0-778f25c6c8a4",
      "url": "https://www.notion.so/Virtual-Network-Service-b6a3508f701f4ce499b0778f25c6c8a4",
      "title": "Virtual Network Service",
      "description": "Similar to normal account factory, with addition to AFT customization framework that allows you to include additional terraform resources.",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Virtual Network Service"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/global-cost-optimization-via-reservations.md",
    "frontmatter": {
      "id": "b6b24f70-3fba-4f67-a375-2b0d26a16324",
      "url": "https://www.notion.so/Global-Cost-Optimization-via-Reservations-b6b24f703fba4f67a3752b0d26a16324",
      "title": "Global Cost Optimization via Reservations",
      "description": "Cloud providers offer different programs offering lower pay-per-use rates in exchange for making spend or resource reservation commitments (e.g. reserved instances). Centrally plan resource demand to take advantage of cost optimization opportunities offered by cloud providers. ",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Global Cost Optimization via Reservations"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/cloud-tenant-database.md",
    "frontmatter": {
      "id": "b875ac41-2b38-4ce4-ab8b-76ddd876d789",
      "url": "https://www.notion.so/Cloud-Tenant-Database-b875ac412b384ce4ab8b76ddd876d789",
      "title": "Cloud Tenant Database",
      "description": "A central database provides information about cloud tenants using a unified schema. The database records essential metadata like the responsible owner of the tenant and a cost center for chargeback.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d",
          "ab10bed1-70d5-47cf-b3cd-4a4448bdb9a9",
          "64284b14-faab-461c-80bb-5e8efbae4dcc",
          "77942f5f-e395-49c6-8927-e5fa3ef28aef"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "3481641d-0686-420d-8487-794acd4f5e04",
          "e2123339-0641-4d44-b774-32ce23fd634d"
        ],
        "name": "Cloud Tenant Database"
      }
    }
  },
  {
    "frontmatter": {
      "id": "b8f373f0-b200-4d2b-badb-d3bc8ad145b5",
      "url": "https://www.notion.so/Modular-Landing-Zone-b8f373f0b2004d2bbadbd3bc8ad145b5",
      "title": "Modular Landing Zone",
      "description": "With UniPipe you can develop any Service Broker you need for your modular Landing Zone in a GitOps approach. End-users can easily book those services via marketplaces like the one in meshStack.\nWith the UniPipe Terraform Runner all you need to implement for such a service is a Terraform Module. All the rest around how to provide it as a service is taken over by UniPipe Terraform Runner.",
      "properties": {
        "block": [
          "913a8ad1-7ad4-4ade-9e88-801a7afa4b40"
        ],
        "tool": [
          "56e4f66c-47e3-4849-9315-347694db82a1",
          "8cea8fb4-02f7-4257-a0bd-24d6d1fd9225"
        ],
        "link": "https://github.com/meshcloud/unipipe-service-broker",
        "name": "Modular Landing Zone"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "bac2d6a9-0bab-4d58-b89e-9b3315f86b79",
      "url": "https://www.notion.so/Tenant-Provisioning-Tenant-Deprovisioning-bac2d6a90bab4d58b89e9b3315f86b79",
      "title": "Tenant Provisioning / Tenant Deprovisioning",
      "description": "With the project factory, GitOps-based tenant provisioning can be applied. As the project configs should better be reviewed by a cloud foundation member, it is not full self-service for the end users. When removing the project definition again, the tenant will be deprovisioned by terraform.",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/03-project-factory",
        "name": "Tenant Provisioning / Tenant Deprovisioning"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "baf114e2-c764-4145-8302-85d3bfe62901",
      "url": "https://www.notion.so/Centralized-Audit-Logs-baf114e2c7644145830285d3bfe62901",
      "title": "Centralized Audit Logs",
      "description": "Deploys log analytics workspace that enables centralized audit logging as part of the “Management Resources\n” module",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "ef594ed7-461f-45ff-9928-9c258c6b14e5"
        ],
        "link": "https://github.com/Azure/caf-terraform-landingzones/tree/main/caf_launchpad/scenario/200",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "bb4aee68-0b2a-4746-98bf-18d200e58b9b",
      "url": "https://www.notion.so/Virtual-Networks-bb4aee680b2a474698bf18d200e58b9b",
      "title": "Virtual Networks",
      "description": "Separate networks per environment are created and some basic firewall rules are applied. That way you can have the connectivity within one environment (e.g. all production services can talk to each other securely via a VPC). Advanced options like configuring peering or VPN approaches are not provided.",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "410b6ce3-69b4-4ad9-bf16-d65e8bd512b7"
        ],
        "link": "https://cloud.google.com/docs/enterprise/setup-checklist#checklist-heading-7",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/readme.md",
    "frontmatter": {
      "id": "bd309e8a-9ecd-4a0d-a3c3-b464f734ca54",
      "url": "https://www.notion.so/Tenant-Management-bd309e8a9ecd4a0da3c3b464f734ca54",
      "title": "🗂 Tenant Management",
      "description": "Manage provisioning, configuration and lifecycle of cloud environments (e.g. AWS Accounts).",
      "category": "Pillar",
      "pageType": "CFMMPillar",
      "properties": {
        "short-name": "Tenant Mgmt."
      }
    }
  },
  {
    "frontmatter": {
      "id": "be8db890-235d-4a90-9f78-2bfb81bdf1a5",
      "url": "https://www.notion.so/GCP-Fabric-FAST-be8db890235d4a909f782bfb81bdf1a5",
      "title": "GCP Fabric FAST",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "beba1d31-43fe-4663-b3f5-cd32d6a5cf54",
      "url": "https://www.notion.so/Centralized-Audit-Logs-beba1d3143fe4663b3f5cd32d6a5cf54",
      "title": "Centralized Audit Logs",
      "description": "Centralized Audit Logs are applied and you can configure exports to BigQuery, pub/sub systems, and more.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/blob/master/1-org/envs/shared/log_sinks.tf",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "bfc77006-225b-4425-afd0-ee8f897367ba",
      "url": "https://www.notion.so/Container-Platform-Landing-Zone-bfc77006225b4425afd0ee8f897367ba",
      "title": "Container Platform Landing Zone",
      "description": "meshStack has built-in support for building and operating OpenShift, AKS and other Kubernetes based Landing Zones including IAM, quota management and consumption metering.",
      "properties": {
        "block": [
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": null,
        "name": "Container Platform Landing Zone"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c1415cc8-082a-4ad8-8629-2b0e4a57ee45",
      "url": "https://www.notion.so/Tenant-Provisioning-Deprovisioning-c1415cc8082a4ad886292b0e4a57ee45",
      "title": "Tenant Provisioning/Deprovisioning",
      "description": "AFT’s main functionality is automation around tenant provisioning. Deprovisioning is not supported. Removing the aft-account-request terraform for a specific account only removes it from AFT management.",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Tenant Provisioning/Deprovisioning"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c3af4eea-6d9a-4c64-a117-ec018524979a",
      "url": "https://www.notion.so/Offer-internal-services-on-meshStack-marketplace-c3af4eea6d9a4c64a117ec018524979a",
      "title": "Offer internal services on meshStack marketplace",
      "description": "Every Cloud Foundation customer can offer services on the meshStack marketplace to other teams in your enterprise.",
      "properties": {
        "block": [
          "f077cfd1-d8f4-4c30-a1bd-4f252b840e4f",
          "58c92b8f-f836-4c69-aa6a-d11f0c8a9a44"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/marketplace.index.html",
        "name": "Offer internal services on meshStack marketplace"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c5757e31-5c6c-487a-81b2-96ba50dda3af",
      "url": "https://www.notion.so/meshStack-c5757e315c6c487a81b296ba50dda3af",
      "title": "meshStack",
      "properties": {
        "category": "Governance Platform"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "c596a5f1-dc63-46b6-8d1f-25dcf12ff484",
      "url": "https://www.notion.so/meshcloud-Cloud-Foundation-Stakeholder-Map-c596a5f1dc6346b68d1f25dcf12ff484",
      "title": "meshcloud Cloud Foundation Stakeholder Map",
      "description": "A good place to get started with a shared responsibility model is getting a clear picture of the involved parties. \n\nA Stakeholder Map lists Stakeholder and is a useful starting point for a Shared Responsibility Model.",
      "properties": {
        "block": [
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "tool": [
          "84cf2301-844f-4e77-8f86-ed3d9244d623"
        ],
        "link": "https://www.meshcloud.io/cloud-foundation-stakeholder-map",
        "name": "meshcloud Cloud Foundation Stakeholder Map"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c688eecf-0335-4505-bdcb-bc6f6da28c63",
      "url": "https://www.notion.so/On-Premise-Network-Connection-c688eecf03354505bdcbbc6f6da28c63",
      "title": "On-Premise Network Connection",
      "description": "On-prem VPN is offered with all 3 setups of the networking stages.",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/02-networking-vpn#external-connectivity",
        "name": "On-Premise Network Connection"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c7020f93-4d65-4609-ae64-5ea3e76add60",
      "url": "https://www.notion.so/Resource-Configuration-Policies-c7020f934d654609ae645ea3e76add60",
      "title": "Resource Configuration Policies",
      "description": "Reasonable defaults are set and additional helpful policies are proposed via code comments in the terraform files. They can be enabled on demand.",
      "properties": {
        "block": [
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "af14b5df-77b4-4def-b761-8fadabd241ca"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/resources.policy_definitions.tf",
        "name": "Resource Configuration Policies"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c7b3902e-6708-4b0e-9e43-776f863baa3e",
      "url": "https://www.notion.so/Private-Cloud-Metering-with-meshStack-c7b3902e67084b0e9e43776f863baa3e",
      "title": "Private Cloud Metering with meshStack",
      "description": "meshStack supports out of the box private cloud metering for:\n- OpenStack\n- Cloud Foundry\n- OpenShift\n- Kubernetes",
      "properties": {
        "block": [
          "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.billing.html#private-cloud-billing-with-meshcloud",
        "name": "Private Cloud Metering with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "c88e6212-2a64-431f-a404-b39742574404",
      "url": "https://www.notion.so/Consumption-based-pay-per-use-for-internal-services-c88e62122a64431fa404b39742574404",
      "title": "Consumption based pay-per-use for internal services",
      "description": "meshStack offers a marketplace where the cloud foundation team (or other teams) can offer internal services. This also support the use of customizable pay-per-use metering, e.g. pay $0.001 per API request or $1 per GB stored.",
      "properties": {
        "block": [
          "d2cb8a5e-3e28-448b-8944-14ff38fad792"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/marketplace.index.html",
        "name": "Consumption based pay-per-use for internal services"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/pay-per-use-for-internal-services.md",
    "frontmatter": {
      "id": "c9728af5-49fe-4948-8701-2d6485bfbe93",
      "url": "https://www.notion.so/Pay-per-Use-for-internal-Services-c9728af549fe494887012d6485bfbe93",
      "title": "Pay-per-Use for internal Services",
      "description": "Enable usage based chargeback for internal, managed IT services offered via the cloud foundation (see Landing Zone building Blocks). Application teams can book services from a single marketplace and get a single \"invoice\" for chargeback. ",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "d2cb8a5e-3e28-448b-8944-14ff38fad792"
        ],
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "3892bc95-4464-417c-aab2-247da7a3015a"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "0db736c5-6801-4619-92a6-97c3842c907c"
        ],
        "name": "Pay-per-Use for internal Services"
      }
    }
  },
  {
    "frontmatter": {
      "id": "c9c553ab-812b-4b46-a985-8c01fda8985b",
      "url": "https://www.notion.so/Centralized-Audit-Logs-c9c553ab812b4b46a9858c01fda8985b",
      "title": "Centralized Audit Logs",
      "description": "Basic centralized logging is configured by default.\nYou have to follow manual steps to push logs to BigQuery, SIEM, etc.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "410b6ce3-69b4-4ad9-bf16-d65e8bd512b7"
        ],
        "link": "https://cloud.google.com/docs/enterprise/setup-checklist#checklist-section-8",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "ccba2e9a-1bc0-4b53-8d5e-4773680d9e14",
      "url": "https://www.notion.so/Modular-Landing-Zones-with-meshStack-ccba2e9a1bc04b538d5e4773680d9e14",
      "title": "Modular Landing Zones with meshStack",
      "description": "meshStack enables the use of modular landing zones by building marketplace services on top of landing zones.",
      "properties": {
        "block": [
          "913a8ad1-7ad4-4ade-9e88-801a7afa4b40"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/marketplace.index.html",
        "name": "Modular Landing Zones with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "cce0a290-fdb4-412d-bfc7-da0ae83a53a6",
      "url": "https://www.notion.so/Guided-Cloud-Onboarding-with-meshStack-cce0a290fdb4412dbfc7da0ae83a53a6",
      "title": "Guided Cloud Onboarding with meshStack",
      "description": "Implement simple onboarding workflows based on capturing organizational information as tags and setting tag-based policies. Model approval workflows using restricted tags that require an administrative permission to set.\n\nCloud Foundations can automate advanced scenarios by connecting the meshStack API to an external onboarding portal to configure customer and project tags.",
      "properties": {
        "block": [
          "cf487857-542f-4d74-8fe9-885b7be8ccf3"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.onboarding.html#customer-registration",
        "name": "Guided Cloud Onboarding with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/monthly-cloud-tenant-billing-report.md",
    "frontmatter": {
      "id": "cd162600-e742-4a80-b022-989da423ca43",
      "url": "https://www.notion.so/Monthly-cloud-tenant-billing-report-cd162600e7424a80b022989da423ca43",
      "title": "Monthly cloud tenant billing report",
      "description": "Application teams can view a monthly cloud tenant billing report listing all incurred charges for cloud resource consumption.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "28740e92-5559-4931-ab04-17cfb026edd5",
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "635ebffa-17e9-4231-9d38-b59625be9b03",
          "2896046e-fd61-4fa7-b381-67bb4f8893b2"
        ],
        "name": "Monthly cloud tenant billing report"
      }
    }
  },
  {
    "frontmatter": {
      "id": "ce19ba64-358a-4ea5-8520-d9d57296aac7",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-ce19ba64358a4ea58520d9d57296aac7",
      "title": "Cloud to Cloud interconnects",
      "description": "You can connect to your connection between clouds by choosing the matching option and configurations. You have the option of using Virtual WAN and then you are able to make the connection between your on-premises via VPN or Express route.\nIf you deploy the terraform modules using Collie's KitBundle functionality, cloud-to-cloud interconnectivity will not be deployed automatically.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/docs/wiki/%5BUser-Guide%5D-Connectivity-Resources.md",
        "name": "Cloud to Cloud interconnects"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/monthly-cloud-project-carbon-footprint-report.md",
    "frontmatter": {
      "id": "ce20312c-aa7a-453f-82f2-f186469dd973",
      "url": "https://www.notion.so/Monthly-Cloud-Project-Carbon-Footprint-Report-ce20312caa7a453f82f2f186469dd973",
      "title": "Monthly Cloud Project Carbon Footprint Report",
      "description": "Application teams can view a monthly report listing the consumption-based carbon footprint caused by their cloud usage. This enables sustainability reporting and gives teams feedback towards achieving sustainability goals.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "28740e92-5559-4931-ab04-17cfb026edd5"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "7f68e769-70d6-4c41-bdc2-de273d61bd23",
          "ffab4f09-a975-4997-8213-15b7fa6ab10c"
        ],
        "name": "Monthly Cloud Project Carbon Footprint Report"
      }
    }
  },
  {
    "file": "maturity-model/service-ecosystem/api-gateway-to-on-premises-apis.md",
    "frontmatter": {
      "id": "cf125421-fd90-4bff-a4c6-f7c994a14591",
      "url": "https://www.notion.so/API-Gateway-to-on-premises-APIs-cf125421fd904bffa4c6f7c994a14591",
      "title": "API Gateway to on-premises APIs",
      "description": "Provide managed API (L7) connectivity to APIs running in on-premise environments.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "API Gateway to on-premises APIs"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/guided-cloud-onboarding.md",
    "frontmatter": {
      "id": "cf487857-542f-4d74-8fe9-885b7be8ccf3",
      "url": "https://www.notion.so/Guided-Cloud-Onboarding-cf487857542f4d748fe9885b7be8ccf3",
      "title": "Guided Cloud Onboarding",
      "description": "Application teams are guided through the organizational (e.g. budget) and regulatory (e.g. compliance) cloud onboarding duties.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef",
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "cce0a290-fdb4-412d-bfc7-da0ae83a53a6",
          "f17524c8-81e0-43ed-94f2-c0cfa3bf2026"
        ],
        "name": "Guided Cloud Onboarding"
      }
    }
  },
  {
    "file": "maturity-model/security-and-compliance/service-and-location-restrictions.md",
    "frontmatter": {
      "id": "d1904912-b420-4a10-a62c-aa578fb847ff",
      "url": "https://www.notion.so/Service-and-Location-Restrictions-d1904912b4204a10a62caa578fb847ff",
      "title": "Service and Location Restrictions",
      "description": "Basic policies on cloud resources restrict access to incompliant cloud services and cloud regions (geographic locations).",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "f271478b-3921-494f-ab2c-de97808d3bb7"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f",
          "57c521ba-73a4-4187-a507-bbd5eaa80212"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "7beb3669-9658-4b4d-a87a-a136d9556f32",
          "483a6e1f-f717-44f0-bab1-7aa1049ef367",
          "694f24b9-1588-499b-9406-2f5f747747ba",
          "c7020f93-4d65-4609-ae64-5ea3e76add60",
          "24f0be77-129c-4802-80fd-2c58c6374300",
          "8a4e5f69-742c-43ef-948b-ed39fc21b3d8",
          "4a2514ab-25e3-4d9c-aca7-9ef3f2b4a094",
          "7c317222-5658-447c-9ade-44f90e9aee96",
          "b153c072-1a43-46fb-90fa-60263f6d4705"
        ],
        "name": "Service and Location Restrictions"
      }
    }
  },
  {
    "frontmatter": {
      "id": "d2086bf8-8389-457e-9b70-e41aa03f1046",
      "url": "https://www.notion.so/Cloud-to-Cloud-interconnects-d2086bf88389457e9b70e41aa03f1046",
      "title": "Cloud to Cloud interconnects",
      "description": "You can choose to deploy the connection between clouds using the Virtual WAN or Azure Hub and Spoke. Here we can define a subscription specific to this connectivity appliance.",
      "properties": {
        "block": [
          "a31e4077-4e84-4129-a46c-1070a8591181"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/docs/Deploy/deploy-lz-vnet.md",
        "name": "Cloud to Cloud interconnects"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "d24b4c3a-1f97-4426-8999-f82a97bf1e75",
      "url": "https://www.notion.so/Tenant-provisioning-with-meshStack-d24b4c3a1f9744268999f82a97bf1e75",
      "title": "Tenant provisioning with meshStack",
      "description": "meshStack automatically provisions and reconciles cloud tenants based on the desired state. This includes metadata (tags) as well as authorization (role assignments, groups).",
      "properties": {
        "block": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.tenant.html",
        "name": "Tenant provisioning with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/chargeback-at-full-cost-allocation.md",
    "frontmatter": {
      "id": "d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1",
      "url": "https://www.notion.so/Chargeback-at-full-cost-allocation-d2a35b4e7e9e4b1ca09769d0e8ce02f1",
      "title": "Chargeback at full cost allocation",
      "description": "Application teams are transparently charged for resource consumption in their cloud tenant as well as for any shared overhead cost incurred by the cloud foundation team for providing its services.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "0217c4da-6542-41d6-84c7-12af887e7d15"
        ],
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "e129bdf8-7c01-47a7-a524-f764149c2a97"
        ],
        "name": "Chargeback at full cost allocation"
      }
    }
  },
  {
    "file": "maturity-model/cost-management/consumption-based-pay-per-use-for-internal-services.md",
    "frontmatter": {
      "id": "d2cb8a5e-3e28-448b-8944-14ff38fad792",
      "url": "https://www.notion.so/Consumption-based-pay-per-use-for-internal-Services-d2cb8a5e3e28448b894414ff38fad792",
      "title": "Consumption based pay-per-use for internal Services",
      "description": "Enable fine-grained pay-per-use options for managed services offered on the cloud foundation, e.g. pay per API request, per GB/h stored etc.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "c9728af5-49fe-4948-8701-2d6485bfbe93",
          "f077cfd1-d8f4-4c30-a1bd-4f252b840e4f"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "c88e6212-2a64-431f-a404-b39742574404"
        ],
        "name": "Consumption based pay-per-use for internal Services"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/lift-and-shift-landing-zone.md",
    "frontmatter": {
      "id": "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
      "url": "https://www.notion.so/Lift-Shift-Landing-Zone-d5c797b463004c58aa9876bbfc49fcc8",
      "title": "Lift & Shift Landing Zone",
      "description": "A dedicated landing zone optimized for lift & shift workloads enables quick onboarding and efficient operations.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd",
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "recommended": [
          "74295ae4-dcd5-449b-8825-f12c5267e89b",
          "4f9ee73a-23a9-4aa3-b956-0df22e6156d0",
          "5f9c0f7d-860a-488b-bbf8-897618e5c76f",
          "6c9827e9-73b2-49f5-bfb5-3fe23fd5b9e9",
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161",
          "cf487857-542f-4d74-8fe9-885b7be8ccf3",
          "b0a04ae8-c9b3-4060-abfd-e760723995d8",
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "b6b24f70-3fba-4f67-a375-2b0d26a16324"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Lift & Shift Landing Zone"
      }
    }
  },
  {
    "frontmatter": {
      "id": "d5d598cc-3250-4f60-833e-2033694d3a59",
      "url": "https://www.notion.so/Managed-DevOps-Toolchain-d5d598cc32504f60833e2033694d3a59",
      "title": "Managed DevOps Toolchain",
      "description": "with Azure DevOps or Github actions, and specifying security principal",
      "properties": {
        "block": [
          "71143f29-2fe9-452b-8398-fc40f270a2b6"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/docs/wiki/Deploying-ALZ-Platform-DevOps.md",
        "name": "Managed DevOps Toolchain"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "d68a65a0-19c2-47ac-92ef-5e8e6e549947",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-d68a65a019c247ac92ef5e8e6e549947",
      "title": "Cloud Tenant Tagging",
      "description": "By default provisioned accounts are not tagged. It is possible to tag those accounts through a terraform variable account_tags.",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Cloud Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "d77dc8b6-b1ce-4c6a-a208-dcaf5e485743",
      "url": "https://www.notion.so/Virtual-Networks-d77dc8b6b1ce4c6aa208dcaf5e485743",
      "title": "Virtual Networks",
      "description": "Can deploy Hub and spoke with Azure Firewall, Hub and spoke with your own third-party NVA, Virtual WAN (Microsoft managed)",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "e7fd910f-0ad8-446b-bb8b-d8f5956eceda",
          "8cea8fb4-02f7-4257-a0bd-24d6d1fd9225"
        ],
        "link": "https://github.com/Azure/Enterprise-Scale/blob/main/docs/Deploy/deploy-lz-vnet.md",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-cloud-provider-support-contracts.md",
    "frontmatter": {
      "id": "d871cfba-a86d-4ec1-a23d-42c9b3d73352",
      "url": "https://www.notion.so/Managed-Cloud-Provider-Support-Contracts-d871cfbaa86d4ec1a23d42c9b3d73352",
      "title": "Managed Cloud Provider Support Contracts",
      "description": "Application teams can enroll their tenants in support contracts and/or enterprise support agreements from cloud providers. Teams can access support in self-service and are transparently charged for support fees incurred.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Managed Cloud Provider Support Contracts"
      }
    }
  },
  {
    "frontmatter": {
      "id": "d95e25dc-2643-4c17-9f78-76dc053d7d71",
      "url": "https://www.notion.so/Managed-Key-Vault-d95e25dc26434c179f7876dc053d7d71",
      "title": "Managed Key Vault",
      "description": "A Cloud KMS is rolled out to every environment so e.g. all production services have a way to reliably and securely share secret keys.",
      "properties": {
        "block": [
          "137ac22d-b96c-4d49-aa83-da5779e3d59c"
        ],
        "tool": [
          "be8db890-235d-4a90-9f78-2bfb81bdf1a5"
        ],
        "link": "https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/fast/stages/02-security#cloud-kms",
        "name": "Managed Key Vault"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/shared-vm-image-repository.md",
    "frontmatter": {
      "id": "d9c211e3-647c-4fd7-bf3b-3c806baeea7f",
      "url": "https://www.notion.so/Shared-VM-Image-Repository-d9c211e3647c4fd7bf3b3c806baeea7f",
      "title": "Shared VM Image Repository",
      "description": "A central repository provides hardened virtual machine images.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "0dd09c75-2acd-4e87-9721-6b5f563da035"
        ],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Shared VM Image Repository"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/tenant-provisioning.md",
    "frontmatter": {
      "id": "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
      "url": "https://www.notion.so/Tenant-Provisioning-deb9d28ee5924c3cb7da020b7ba6bb0d",
      "title": "Tenant Provisioning",
      "description": "On-demand provisioning of primitive cloud tenants (e.g. AWS Accounts, Azure Subscriptions etc.).",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef",
          "913a8ad1-7ad4-4ade-9e88-801a7afa4b40",
          "d5c797b4-6300-4c58-aa98-76bbfc49fcc8",
          "119bfca5-dda6-408c-b35d-c59d0f209fcf",
          "59fc4d46-739d-4d49-8bd7-d7b4882709ba",
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "f271478b-3921-494f-ab2c-de97808d3bb7",
          "155c0ead-cbd0-4e0c-9387-cc57946f80e9"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "recommended": [
          "77942f5f-e395-49c6-8927-e5fa3ef28aef"
        ],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [
          "d24b4c3a-1f97-4426-8999-f82a97bf1e75",
          "bac2d6a9-0bab-4d58-b89e-9b3315f86b79",
          "244b3e52-37bd-4669-a8d4-c208eb2fe529",
          "87441a90-61d1-46f3-a3e0-50902ca974fd",
          "c1415cc8-082a-4ad8-8629-2b0e4a57ee45",
          "7fb43cbd-ad3c-4f3a-93d7-76f45c88e4f0"
        ],
        "name": "Tenant Provisioning"
      }
    }
  },
  {
    "frontmatter": {
      "id": "decefdc2-0883-4adb-8fc0-13b451bb8c2f",
      "url": "https://www.notion.so/GitLab-decefdc208834adb8fc013b451bb8c2f",
      "title": "GitLab",
      "properties": {
        "category": "DevOps"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "file": "maturity-model/tenant-management/cloud-native-landing-zone.md",
    "frontmatter": {
      "id": "dff7d733-d987-4145-aa1a-e340b5bcff81",
      "url": "https://www.notion.so/Cloud-native-Landing-Zone-dff7d733d9874145aa1ae340b5bcff81",
      "title": "Cloud-native Landing Zone",
      "description": "A dedicated landing zone optimized for cloud-native workloads enables quick onboarding and efficient operations.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "af14b5df-77b4-4def-b761-8fadabd241ca",
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f",
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161",
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "b4678790-ab53-4219-83e7-fbde18383d05"
        ],
        "recommended": [
          "09e744c5-e12a-49e8-8b6f-b7e3c44ba63b",
          "f90c7375-88b9-42dc-8e98-a65c006b927a",
          "137ac22d-b96c-4d49-aa83-da5779e3d59c",
          "71143f29-2fe9-452b-8398-fc40f270a2b6",
          "2468d240-6cca-4680-b9c4-6f237defa511",
          "cf487857-542f-4d74-8fe9-885b7be8ccf3",
          "802fdd8d-7fc0-4749-937f-e9e0ccb3f273",
          "b0a04ae8-c9b3-4060-abfd-e760723995d8"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "4c50144f-1637-4136-8f78-3dfaa005d031",
          "171e6824-30db-4f64-9d19-a4d87ba56ed9",
          "597617fd-06c3-4cab-bf0e-c19b84439a92"
        ],
        "name": "Cloud-native Landing Zone"
      }
    }
  },
  {
    "frontmatter": {
      "id": "e018667f-0198-4fa2-b82f-967b960390a7",
      "url": "https://www.notion.so/Resource-Hierarchy-e018667f01984fa2b82f967b960390a7",
      "title": "Resource Hierarchy",
      "description": "The resource hierarchy it creates is based on the Azure landing zone conceptual architecture\n as part of the “Core Resources\n”. The hierarchy is meant to be customized under the Landing zones level.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/resources.management_groups.tf",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/cost-management/chargeback-via-consumption-cost-allocation.md",
    "frontmatter": {
      "id": "e063e4d2-81f4-4bb8-ac7a-7424ba882161",
      "url": "https://www.notion.so/Chargeback-via-consumption-cost-allocation-e063e4d281f44bb8ac7a7424ba882161",
      "title": "Chargeback via consumption cost allocation",
      "description": "Application teams are transparently charged for the resource consumption as it is charged from the cloud provider.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "02e4de2c-7e1e-4dd9-aa76-b58a88f04ff6",
          "d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1",
          "dff7d733-d987-4145-aa1a-e340b5bcff81",
          "f96feedc-d969-48f8-adb4-93031cc0a24d",
          "f271478b-3921-494f-ab2c-de97808d3bb7"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️",
        "depends-on": [
          "cd162600-e742-4a80-b022-989da423ca43"
        ],
        "recommended": [],
        "scope": "☁️ Platform",
        "tool-implementations": [
          "13bd4bac-36f7-466e-a2b8-7f5c9f77c480"
        ],
        "name": "Chargeback via consumption cost allocation"
      }
    }
  },
  {
    "frontmatter": {
      "id": "e129bdf8-7c01-47a7-a524-f764149c2a97",
      "url": "https://www.notion.so/Chargeback-at-full-cost-allocation-e129bdf87c0147a7a524f764149c2a97",
      "title": "Chargeback at full cost allocation",
      "description": "meshStack sends out so-called chargeback statements every month to cloud tenant owners. These statements contain detailed information on consumed resources. meshStack also support custom internal fees, e.g. charge 10% on top of resource consumption or a fixed amount, e.g. $50 per month. This helps the cloud foundation team become a profit center instead of a cost center.",
      "properties": {
        "block": [
          "d2a35b4e-7e9e-4b1c-a097-69d0e8ce02f1"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.billing-configuration.html#chargeback",
        "name": "Chargeback at full cost allocation"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "e2123339-0641-4d44-b774-32ce23fd634d",
      "url": "https://www.notion.so/Collie-Cloud-Tenant-Database-e212333906414d44b77432ce23fd634d",
      "title": "Collie Cloud Tenant Database",
      "description": "Open-source Collie CLI can give you a list of all active tenants in your organization across AWS, Azure & GCP in minutes. This includes metadata and costs per month.",
      "properties": {
        "block": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789"
        ],
        "tool": [
          "5c2013b6-4c56-4813-8be7-ad86757014af"
        ],
        "link": "https://github.com/meshcloud/collie-cli/wiki#listing-tenants",
        "name": "Collie Cloud Tenant Database"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "understanding-cloud-foundation/changelog.md",
    "frontmatter": {
      "id": "e234e308-c739-4af4-9610-e81915f973d2",
      "url": "https://www.notion.so/Changelog-e234e308c7394af49610e81915f973d2",
      "title": "Changelog",
      "category": "Understanding Cloud Foundation",
      "order": 40
    }
  },
  {
    "frontmatter": {
      "id": "e4b2c4ff-b42c-4a77-bac7-5f1a2ca24c29",
      "url": "https://www.notion.so/Link-Cloud-Tenants-to-CMDB-EAM-e4b2c4ffb42c4a77bac75f1a2ca24c29",
      "title": "Link Cloud Tenants to CMDB/EAM",
      "description": "meshStack allows defining custom metadata tags that are applied on the actual cloud tenants in AWS, Azure & GCP. These tags can be used for maintaining connections to CMDB or EAM systems.",
      "properties": {
        "block": [
          "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshstack.metadata-tags.html#how-to-view-and-define-available-tags",
        "name": "Link Cloud Tenants to CMDB/EAM"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "e5ff3f30-d1b0-4bea-a0a0-cb3a3f1cd6f5",
      "url": "https://www.notion.so/Virtual-Networks-e5ff3f30d1b04beaa0a0cb3a3f1cd6f5",
      "title": "Virtual Networks",
      "description": "Offers sophisticated virtual network setups. One can choose the type of connectivity between Dual SVPC or Hub & Spoke. ",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/tree/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0#3-networks-dual-svpc",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/security-and-compliance/control-access-to-landing-zones.md",
    "frontmatter": {
      "id": "e649c5ac-ae9d-49f7-a9f0-1850bc1710c2",
      "url": "https://www.notion.so/Control-Access-to-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2",
      "title": "Control Access to Landing Zones",
      "description": "Implement automated policies to steer application teams to appropriate cloud platforms and landing zones based on metadata about the application team.",
      "category": "🔖 Security & Compliance",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c7081e5-c451-40b6-806d-a8d21b130612"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "707c41b8-6da0-4e78-b982-fa4b1365521b",
          "57c521ba-73a4-4187-a507-bbd5eaa80212",
          "cf487857-542f-4d74-8fe9-885b7be8ccf3"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "d24b4c3a-1f97-4426-8999-f82a97bf1e75"
        ],
        "name": "Control Access to Landing Zones"
      }
    }
  },
  {
    "file": "maturity-model/tenant-management/link-cloud-tenants-to-cmdbeam.md",
    "frontmatter": {
      "id": "e7d63253-2e39-4bbf-9dd6-da11bb3edd0d",
      "url": "https://www.notion.so/Link-Cloud-Tenants-to-CMDB-EAM-e7d632532e394bbf9dd6da11bb3edd0d",
      "title": "Link Cloud Tenants to CMDB/EAM",
      "description": "Maintain a link between cloud tenants and a central CMDB/EAM repository (e.g. IT System identifier, Application Id). Linking cloud tenants to CMDB/EAM systems is a foundational capability that enables use cases like basic chargeback, systematic risk assessment and change management. ",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️",
        "depends-on": [
          "b875ac41-2b38-4ce4-ab8b-76ddd876d789",
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "e4b2c4ff-b42c-4a77-bac7-5f1a2ca24c29"
        ],
        "name": "Link Cloud Tenants to CMDB/EAM"
      }
    }
  },
  {
    "frontmatter": {
      "id": "e7fd910f-0ad8-446b-bb8b-d8f5956eceda",
      "url": "https://www.notion.so/Azure-LZ-accelerator-ES-e7fd910f0ad8446bbb8bd8f5956eceda",
      "title": "Azure LZ accelerator - ES",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "e8884286-1070-4de8-acc2-64523e237186",
      "url": "https://www.notion.so/Quay-e888428610704de8acc264523e237186",
      "title": "Quay",
      "properties": {},
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "edf7468a-c867-4038-9e93-7b64f4a4ffcc",
      "url": "https://www.notion.so/Virtual-Networks-edf7468ac86740389e937b64f4a4ffcc",
      "title": "Virtual Networks",
      "description": "By adding deploy_connectivity_resources = true to the module’s input parameters, the module sets up a hub network with a firewall and gateway subnets. These can be further customized by tweaking some networking settings",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "53cb45d7-bcd9-4eb9-bfd5-dad6eca0b88c"
        ],
        "link": "https://github.com/Azure/terraform-azurerm-caf-enterprise-scale/blob/main/docs/wiki/%5BUser-Guide%5D-Connectivity-Resources.md",
        "name": "Virtual Networks"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "ef594ed7-461f-45ff-9928-9c258c6b14e5",
      "url": "https://www.notion.so/Azure-CAF-Terraform-Modules-ef594ed7461f45ff99289c258c6b14e5",
      "title": "Azure CAF Terraform Modules",
      "properties": {
        "category": "Landing Zone Implementation"
      },
      "pageType": "CFMMTool"
    }
  },
  {
    "frontmatter": {
      "id": "f02d3382-32e0-4d45-912e-a1c914d1afa5",
      "url": "https://www.notion.so/Resource-Hierarchy-f02d338232e04d45912ea1c914d1afa5",
      "title": "Resource Hierarchy",
      "description": "Additional to what CT provides, AFT offers a GitOps approach to provision accounts under specified OUs through an automated workflow.",
      "properties": {
        "block": [
          "ac8a21c3-f692-4d23-a9bb-796fd311c39f"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Resource Hierarchy"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/internal-service-marketplace.md",
    "frontmatter": {
      "id": "f077cfd1-d8f4-4c30-a1bd-4f252b840e4f",
      "url": "https://www.notion.so/Internal-Service-Marketplace-f077cfd1d8f44c30a1bd4f252b840e4f",
      "title": "Internal Service Marketplace",
      "description": "Teams offer services to other teams and make them accessible on a marketplace that is integrated with 💵 Cost Management  and 🔐 IAM .",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "d2cb8a5e-3e28-448b-8944-14ff38fad792",
          "58c92b8f-f836-4c69-aa6a-d11f0c8a9a44"
        ],
        "redaction-state": "mvp1",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "c3af4eea-6d9a-4c64-a117-ec018524979a"
        ],
        "name": "Internal Service Marketplace"
      }
    }
  },
  {
    "frontmatter": {
      "id": "f096be8c-0f83-4d92-a1e3-b095f1dc6270",
      "url": "https://www.notion.so/On-Prem-Connect-f096be8c0f834d92a1e3b095f1dc6270",
      "title": "On-Prem Connect",
      "description": "It provides a TransitGateway in the network config to connect easily to a hub that makes the on-prem connect. As also directConnectGateways can be defined in the network config, everything that is needed to establish an on-prem connection is available.",
      "properties": {
        "block": [
          "2468d240-6cca-4680-b9c4-6f237defa511"
        ],
        "tool": [
          "557e72c2-227d-40bd-92b4-4c0707a3c2f5"
        ],
        "link": "https://github.com/awslabs/landing-zone-accelerator-on-aws/blob/main/reference/sample-configurations/aws-best-practices/network-config.yaml",
        "name": "On-Prem Connect"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "f17524c8-81e0-43ed-94f2-c0cfa3bf2026",
      "url": "https://www.notion.so/CloudGate-f17524c881e043ed94f2c0cfa3bf2026",
      "title": "CloudGate",
      "description": "CloudGate is a SaaS solution for the onboarding of cloud use cases as well as compliance and risk management. It provides an overview in the central cloud register at any time and is also audit-proof. CloudGate makes the onboarding faster and more orderly. All stakeholders can work collaboratively and worflow-oriented on the review and release of cloud use cases. CloudGate offers numerous standard checklists and allows you to adapt to the individual requirements of the company.",
      "properties": {
        "block": [
          "cf487857-542f-4d74-8fe9-885b7be8ccf3"
        ],
        "tool": [
          "24caa5e5-9302-44fc-9820-f75529573090"
        ],
        "link": "https://www.microfin.de/produkte/tools/cloudgate/",
        "name": "CloudGate"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "f1b54bf1-5f65-4c7d-85e7-d0085f8c2b2b",
      "url": "https://www.notion.so/Approving-budgets-with-meshStack-f1b54bf15f654c7d85e7d0085f8c2b2b",
      "title": "Approving budgets with meshStack",
      "description": "meshStack can be set up to allow the creation of so-called payment methods (i.e. budgets) by financial administrators only. This ensures that no pre-approved cloud charges can occur.",
      "properties": {
        "block": [
          "f96feedc-d969-48f8-adb4-93031cc0a24d"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": "https://docs.meshcloud.io/docs/meshcloud.payment-methods.html",
        "name": "Approving budgets with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/tenant-management/data-science-landing-zone.md",
    "frontmatter": {
      "id": "f271478b-3921-494f-ab2c-de97808d3bb7",
      "url": "https://www.notion.so/Data-Science-Landing-Zone-f271478b3921494fab2cde97808d3bb7",
      "title": "Data Science Landing Zone",
      "description": "A landing zone optimized for data science workloads like AI/ML models and self-service data analysis.",
      "category": "🗂 Tenant Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "deb9d28e-e592-4c3c-b7da-020b7ba6bb0d",
          "d1904912-b420-4a10-a62c-aa578fb847ff",
          "0dd09c75-2acd-4e87-9721-6b5f563da035",
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161",
          "b4678790-ab53-4219-83e7-fbde18383d05"
        ],
        "recommended": [
          "74bf9fe5-6bd5-4940-9714-aad2b25e03c4"
        ],
        "scope": "☁️ Platform",
        "tool-implementations": [],
        "name": "Data Science Landing Zone"
      }
    }
  },
  {
    "frontmatter": {
      "id": "f34c8753-fb41-4341-9d91-351836126962",
      "url": "https://www.notion.so/Virtual-Network-Service-f34c8753fb4143419d91351836126962",
      "title": "Virtual Network Service",
      "description": "This building block can create a virtual network in azure. For more information please refer to building-blocks github repository",
      "properties": {
        "block": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "tool": [
          "8cea8fb4-02f7-4257-a0bd-24d6d1fd9225"
        ],
        "link": "https://github.com/meshcloud/building-blocks/tree/main/azure/terraform/networking",
        "name": "Virtual Network Service"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/managed-internet-egress.md",
    "frontmatter": {
      "id": "f90c7375-88b9-42dc-8e98-a65c006b927a",
      "url": "https://www.notion.so/Managed-Internet-Egress-f90c737588b942dc8e98a65c006b927a",
      "title": "Managed Internet Egress",
      "description": "Application teams can connect cloud tenants to internet egress using managed infrastructure that ensures compliance and cost efficiency (network separation, proxies etc.).",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "journey-stage": "⭐️⭐️⭐️⭐️",
        "depends-on": [
          "2be4d7d1-4109-406b-a4f7-da6c566123fd"
        ],
        "recommended": [],
        "scope": "🛬 Landing Zone",
        "tool-implementations": [],
        "name": "Managed Internet Egress"
      }
    }
  },
  {
    "file": "maturity-model/cost-management/budget-approval-process.md",
    "frontmatter": {
      "id": "f96feedc-d969-48f8-adb4-93031cc0a24d",
      "url": "https://www.notion.so/Budget-Approval-Process-f96feedcd96948f8adb493031cc0a24d",
      "title": "Budget Approval Process",
      "description": "Budgets are approved by controllers / people with budget responsibility",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [
          "3c65a957-cb62-40fe-978e-709e3450f7fe"
        ],
        "journey-stage": "⭐️⭐️⭐️",
        "depends-on": [
          "e063e4d2-81f4-4bb8-ac7a-7424ba882161"
        ],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "f1b54bf1-5f65-4c7d-85e7-d0085f8c2b2b"
        ],
        "name": "Budget Approval Process"
      }
    }
  },
  {
    "frontmatter": {
      "id": "fa06b5f1-05ae-4b99-bf1e-941597fd796b",
      "url": "https://www.notion.so/Centralized-Audit-Logs-fa06b5f105ae4b99bf1e941597fd796b",
      "title": "Centralized Audit Logs",
      "description": "With AFT, you can also enable CloudTrail data events. Data events are events performed on or within a resource. These are disabled by default as they often incur high costs. This is done when deploying AFT by setting aft_feature_cloudtrail_data_events to true.",
      "properties": {
        "block": [
          "2c7cfeb1-2481-43b8-b31c-82cb5ba3375f"
        ],
        "tool": [
          "8b560d01-09b5-499d-b5f7-34fdc79c722d"
        ],
        "link": "https://github.com/aws-ia/terraform-aws-control_tower_account_factory",
        "name": "Centralized Audit Logs"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "file": "maturity-model/service-ecosystem/individual-service-provisioning.md",
    "frontmatter": {
      "id": "fd11f3c0-cf7a-4717-940f-505ef796e2c5",
      "url": "https://www.notion.so/Individual-Service-Provisioning-fd11f3c0cf7a4717940f505ef796e2c5",
      "title": "Individual Service Provisioning",
      "description": "Cloud foundation teams can offer individual services and customizations through a standardized process.",
      "category": "🛠 Service Ecosystem",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [],
        "name": "Individual Service Provisioning"
      }
    }
  },
  {
    "file": "maturity-model/cost-management/quota-management.md",
    "frontmatter": {
      "id": "fdd09e3d-c1f8-47be-8e1f-ece8449bf237",
      "url": "https://www.notion.so/Quota-Management-fdd09e3dc1f847be8e1fece8449bf237",
      "title": "Quota Management",
      "description": "Quotas are a simple mechanism for protecting cloud foundations and application teams against unforeseen spikes in usage/spend.",
      "category": "💵 Cost Management",
      "pageType": "CFMMBlock",
      "properties": {
        "enables": [],
        "redaction-state": "Draft",
        "journey-stage": "⭐️⭐️",
        "depends-on": [],
        "recommended": [],
        "scope": "🏢 Core",
        "tool-implementations": [
          "6d20b1f0-3c57-4b37-9f11-c25e5d2d1704"
        ],
        "name": "Quota Management"
      }
    }
  },
  {
    "file": "understanding-cloud-foundation/why-build-a-cloud-foundation.md",
    "frontmatter": {
      "id": "fe4fd51c-8f57-46f1-afa1-2fc3402063b8",
      "url": "https://www.notion.so/Why-Build-a-Cloud-Foundation-fe4fd51c8f5746f1afa12fc3402063b8",
      "title": "Why Build a Cloud Foundation",
      "category": "Understanding Cloud Foundation",
      "order": 10
    }
  },
  {
    "frontmatter": {
      "id": "ff879e0b-ee5d-4b43-8bd9-6878b2c2223b",
      "url": "https://www.notion.so/Cloud-Tenant-Tagging-ff879e0bee5d4b438bd96878b2c2223b",
      "title": "Cloud Tenant Tagging",
      "description": "It sets some default labels like environment, security contact, etc for all projects. But adding any custom tags requires modification of the terraform files.",
      "properties": {
        "block": [
          "52d1e517-9d07-4acc-8c59-17526fa3af9d"
        ],
        "tool": [
          "1a70d150-d6eb-4b2f-8d57-ddcf78631474"
        ],
        "link": "https://github.com/terraform-google-modules/terraform-example-foundation/blob/b2e8bfc0f1ce846ebf9ae9fcfd9993447f3f9fe0/4-projects/modules/single_project/main.tf#L38",
        "name": "Cloud Tenant Tagging"
      },
      "pageType": "CFMMTool2Block"
    }
  },
  {
    "frontmatter": {
      "id": "ffab4f09-a975-4997-8213-15b7fa6ab10c",
      "url": "https://www.notion.so/Monthly-Cloud-Project-Footprint-Report-with-meshStack-ffab4f09a9754997821315b7fa6ab10c",
      "title": "Monthly Cloud Project Footprint Report with meshStack",
      "description": "meshStack supports first-party emissions reports from GCP to produce environmental reports. These are included in chargeback statements with CO2e as a currency.",
      "properties": {
        "block": [
          "ce20312c-aa7a-453f-82f2-f186469dd973"
        ],
        "tool": [
          "c5757e31-5c6c-487a-81b2-96ba50dda3af"
        ],
        "link": null,
        "name": "Monthly Cloud Project Footprint Report with meshStack"
      },
      "pageType": "CFMMTool2Block"
    }
  }
];