// import { AzureFunction, Context, HttpRequest } from "@azure/functions";
// import { Octokit } from "@octokit/rest";
// import { EventPayloads } from "@octokit/webhooks";
// import Twitter from "twitter";


const httpTrigger = async function (context, req) {
  const webhook = req.body

  context.res = {
    status: 200,
    body: JSON.stringify(webhook),
  };
};

export default httpTrigger;
