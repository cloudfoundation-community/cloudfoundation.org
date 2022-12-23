---
id: e649c5ac-ae9d-49f7-a9f0-1850bc1710c2
url: >-
  https://www.notion.so/Control-Access-to-Landing-Zones-e649c5acae9d49f7a9f01850bc1710c2
title: Control Access to Landing Zones
description: >-
  Implement automated policies to steer application teams to appropriate cloud
  platforms and landing zones based on metadata about the application team.
category: 🔖 Security & Compliance
pageType: CFMMBlock
properties:
  enables:
    - 3c7081e5-c451-40b6-806d-a8d21b130612
  redaction-state: mvp1
  journey-stage: ⭐️⭐️⭐️⭐️
  depends-on:
    - 707c41b8-6da0-4e78-b982-fa4b1365521b
    - 57c521ba-73a4-4187-a507-bbd5eaa80212
    - cf487857-542f-4d74-8fe9-885b7be8ccf3
  recommended: []
  scope: 🏢 Core
  tool-implementations:
    - d24b4c3a-1f97-4426-8999-f82a97bf1e75
  name: Control Access to Landing Zones
---

Cloud Foundation teams strive to help application teams move to the cloud smoothly without neglecting compliance and security. To meet organizational compliance demands, Application teams usually have to meet a set of requirements before accessing the cloud.

When it comes to controlling access to something, one needs to ask “who” gets access and to “what”. Application teams (“who”) need to work within Landing Zones like [Lift & Shift Landing Zone](../tenant-management/lift-and-shift-landing-zone.md) or [Container Platform Landing Zone](../tenant-management/container-platform-landing-zone.md) when building their application. Landing Zones are therefore a natural fit for the “what” in controlling access.

#### Example

Workload processing data subject to EU Data Privacy regulations needs to be handled differently in likvid bank. Furthermore, the connectivity needs of an application has consequences on the Landing Zone an application can be placed in. 

Likvid Bank application team are following a [Guided Cloud Onboarding](./guided-cloud-onboarding.md) that helps to decide on a Landing Zone and leads through necessary regulatory steps.

```mermaid
graph LR
		R[Falls under EU Data Privacy regulations?]

		R --Yes<br>Fill out data privacy declaration--> EU[Is on-prem <br> connectivity needed?]
			EU --No--> EUI(EU Island Landing Zone)
	    EU --Yes--> EUL[On which layer?]
				EUL --L3: networking like on-premise--> EU3(EU Legacy Landing Zone)
				EUL --L7: APIs--> EU7[EU Connected Landing Zone]
		
		R --No--> NEU
		NEU[Is on-prem <br> connectivity needed? <br> note: only available via API]
	    NEU --No--> NEUI(Island Landing Zone)
	    NEU --Yes--> NEU7[Connected Landing Zone]
```

Application teams can only start consuming EU Landing Zones after the data privacy declaration has been filled out and archived. 

## Best Practices When Implementing Access Controls to Landing Zones

To arrive at a simple model for controlling access, classify application team use-cases along common requirements as described in [Guided Cloud Onboarding](./guided-cloud-onboarding.md).

