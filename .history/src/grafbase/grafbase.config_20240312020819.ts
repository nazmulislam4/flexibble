import { g, config, auth } from "@grafbase/sdk";
// @ts-ignore

const User = g.inputRef("User", {
  name: g.string().length({ min: 2, max: 20 }),
});

export default config({
  schema: g,
});
