<template>
  <span>{{ categoryName }}</span>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['categories']),
    categoryName() {
      console.log(this.$route.params.url);
      return this.$route.params.url;
    },
  },
  // async fetch({ store }) {
  //   const { data: { items } } = await axios.get('http://api.holypony.ru/catalog/categories');
  //   console.log(items);
  //   store.commit('setCategories', items);
  // },
  // validate({ params }) {
  //   if (!this.categories) return false;
  //   return this.categories.find(c => c.url === params.id)
  // },
};
</script>
