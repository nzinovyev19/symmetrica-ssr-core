<template>
  <ul class="categories">
    <li
      v-for="category in categories.filter(c => !c.parent_id)"
      :key="category.category_id"
      class="categories__child"
    >
      <CategoriesLink
        :category="category"
      />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import CategoriesLink from './CategoriesLink.vue';

export default {
  components: {
    CategoriesLink,
  },
  computed: mapState(['categories']),
};
</script>

<style lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px;
  border: 1px solid #bebebe;
  border-radius: 5px;
  list-style: none;
  text-align: left;
  &__child {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
}
</style>
