<template>
  <div class="app-main-layout">
    <Navbar @open="isOpen = !isOpen" />
    <Sidebar :value="isOpen" />
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/app/Sidebar";
import Navbar from "@/components/app/Navbar";
export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar,
    Sidebar,
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
};
</script>
