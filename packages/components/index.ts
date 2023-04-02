export * from "./src/index";
import * as components from "./src/index";
import { App } from "vue";
import { Plugin } from "vue";

export default {
  install: (app: App) => {
    for (const c in components) {
      const _c = c as keyof typeof components;
      app.use(components[_c] as unknown as Plugin);
    }
  },
};
