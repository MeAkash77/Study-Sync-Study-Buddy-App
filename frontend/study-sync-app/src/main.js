// Import Vue core
import { createApp } from "vue";

// Import the main App component
import App from "./App.vue";

// Import Vue Router
import router from "./router";

// Import Vuex store
import store from "./store";

// Import Vuetify (Material Design UI framework)
import vuetify from "./plugins/vuetify";

// Import web font loader
import { loadFonts } from "./plugins/webfontloader";

// Import Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

// Load fonts (Roboto, Material Icons)
loadFonts();

// Create Vue app instance
const app = createApp(App);

// Apply global plugins
app.use(router);
app.use(store);
app.use(vuetify);

// Mount the app to the #app div in public/index.html
app.mount("#app");
