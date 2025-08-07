<template>
  <v-app>
    <Navbar />
    <v-main class="main-content">
      <!-- Place router-view or main content here if needed -->
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 128px); /* Adjust based on actual navbar/footer height */
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>
