export * from "./src/index";
import * as components from "./src/index";
import { App } from "vue";
import { Plugin } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      let _c = c as keyof typeof components;
      app.use(components[_c] as unknown as Plugin);
    }
  },
};
