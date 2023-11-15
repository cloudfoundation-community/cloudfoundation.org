# Contributing

## Why contribute to cloudfoundation.org?

By contributing to [cloudfoundation.org](https://cloudfoundation.org) you will have an impact on Cloud Foundations across the globe by improving the most comprehensive guidance on building successful Cloud Foundations.

## Contributing to the Maturity Model

The best way to contribute to the model is to provide feedback via GitHub Issues or write and improve pages describing 
individual capabilities.

For any contribution, please also provide a short mention for our [changelog](./docs/understanding-cloud-foundation/changelog.md).

At the moment it's not easily possible to contribute new capabilities or related tools mentions directly via the repo. We recommend simply opening an issue instead and we will gladly help you open the correct PR.

## How to describe a Capability

The standard structure of a capability is as follows

```md
Explain why *x* is important. Do not put in a heading (the page itself already has one).

**h1 (optional): Add subheadings as you need them**

**h1: Proven patterns when implementing *x***

**h2: Do a**

Explain why one should do a

**h2: Do b**
...

```

### Do’s

- **Link other Capabilities.** Especially others in the same pillar are likely to be related. Have a look at the [overview](https://cloudfoundation.org/maturity-model/#what-is-the-cloud-foundation-maturity-model) if you need a refresh on what other capabalities are in the same pillar.
- **Use pictures and diagrams.** Tip: [Mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams will look especially good, because of a matching style.
- **Use Call-to-Actions to point to immediate-value resources.**
- **Use a spell checker and grammar checker.** 

### Don’t

- **Mention confidential information that you are not allowed to share publicly.** This is especially important when describing particular implementation patterns
- **Promote specific tools and products within the text.** Those can be added to the “Related Tools” sections underneath each block. It's fine to describe and link first-party tools offered by cloud providers as they are considered subject
matter for the CFMM.

### Tone of voice

**Follow CFMM specific guidelines**

1. Write with an authoritative voice.
    
    The Cloud Foundation Maturity Model aims to be an authoritative, trustworthy resource on everything Cloud. That means no jokes, sarcasm or rants.
    
2. Write with Cloud Foundation teams as your audience in mind.
    
    Enterprises are made of people. We write for **Platform Engineers**, **Enterprise Architects** and decision makers. Introduce concepts that your audience might not be familiar with.
    
3. Use **application teams** - not DevOps Teams, internal cloud customers or something else to describe 

### Formatting

Metadata is filled out as YAML frontmatter when a new capabality has been identified. If you are contributing to an existing capabality, you can skip this part. Review [capabality metadata](https://cloudfoundation.org/understanding-cloud-foundation/what-is-a-building-block.html) for a full reference.

### Related Tools section

Related tools should link to [How to Guides](https://documentation.divio.com/how-to-guides/) that show how to implement the specific capabality. This matches well with the explanation provided by a capabality page, taking the reader from an understanding-oriented, theoretical domain into practical, problem-oriented domain (”from teaching to doing”).

**Name:** <Provide the name of your tool>

**Description:** <Describe how your Tool supports the implementation of this capability>

**Link:** <Provide a link to a Landing page that describes these specific capabilities. We prefer technical links here (e.g. Docs), rather than Marketing Content.>