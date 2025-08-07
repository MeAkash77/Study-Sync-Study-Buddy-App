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

// Load custom fonts
loadFonts();

// Create and mount the Vue app
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
