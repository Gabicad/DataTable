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
import {VAutocomplete,VChip} from "vuetify/components"
import {VDataTable} from "vuetify/labs/VDataTable"
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

app.component("ActionButtons", ActionButtons);
app.component("VDataTable", VDataTable);
app.component("VChip",VChip)
app.component("VAutocomplete",VAutocomplete)
registerPlugins(app);

app.mount("#app");
