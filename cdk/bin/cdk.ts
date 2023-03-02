import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { Backend101NodeStarter } from "../lib/backend-101-node-starter";

const app = new App();
new Backend101NodeStarter(app, "Backend101NodeStarter-PROD", { stack: "playground", stage: "PROD" });
