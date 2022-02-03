<h1>Cloud Foundation Website</h1>

This is the official repository for our cloud foundation website, which you can
find at [cloudfoundation.meshcloud.io](https://cloudfoundation.meshcloud.io).

The website is based on a library called VuePress and uses some internal magic to
render markdown files based on Notion documents.

## Apps Script Deployment

The website contains a feedback form. This is a manually built form that
uses Google Apps Script to push feedback responses into a Google Sheet.

The script is hosted in a Google Cloud Project. You can find this GCP project 
in meshcloud-prod by going to the CFMM meshCustomer & the apps-script meshProject.

The script & its deployment itself can be found under `/feedback/` in this repository.

You can edit the script (`index.ts`) and run (in the `/feedback/` folder) `yarn deploy:feedback` to 
upload a new version of the script. The URL will stay the same (as configured in `netlify.toml`).
This process is **not** a part of the CI/CD workflow so make sure you always do it manually.
Deploying a new script means it always directly alters the production version of it.