<template>
  <div>
    <pre>{{ category }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['categories']),
    category() {
      return this.categories.find(c => c.url.includes(`${this.$route.query.parent}/${this.$route.params.url}`));
    },
  },
};
</script>
