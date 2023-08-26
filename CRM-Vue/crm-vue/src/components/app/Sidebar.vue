<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <li v-for="link of links" :key="link.url">
      <router-link
        :exect="link.exect"
        active-class="active"
        class="waves-effect waves-orange pointer"
        :to="link.url"
      >
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { name: "Счет", url: "/", exect: true },
      { name: "История", url: "/history" },
      { name: "Планирование", url: "/planning" },
      { name: "Новая запись", url: "/record" },
      { name: "Категории", url: "/categories" },
    ],
  }),
};
</script>
