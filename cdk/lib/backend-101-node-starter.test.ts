import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Backend101NodeStarter } from "./backend-101-node-starter";

describe("The Backend101NodeStarter stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new Backend101NodeStarter(app, "Backend101NodeStarter", { stack: "playground", stage: "TEST" });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
