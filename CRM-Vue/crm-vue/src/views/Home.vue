<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <HomeBill />
      <HomeCurrency />
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/app/HomeBill.vue";
import HomeCurrency from "@/components/app/HomeCurrency.vue";
export default {
  name: "home",
  components: { HomeBill, HomeCurrency },
  data: () => ({
    loading: true,
    currency: null,
  }),
};
</script>
