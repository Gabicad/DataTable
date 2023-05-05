/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import ActionButtons from "./components/DataTable/ActionButtons.vue";
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

app.component("ActionButtons", ActionButtons);
registerPlugins(app);

app.mount("#app");
