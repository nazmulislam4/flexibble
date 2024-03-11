import { g, config, auth } from "@grafbase/sdk";
// @ts-ignore

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(),
});

export default config({
  schema: g,
});
