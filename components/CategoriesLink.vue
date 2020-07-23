<template>
  <nuxt-link
    v-if="!childrenCategories.length"
    :to="{ name: 'katalog-kategoriya-url', params: { url: categoryUrl } }"
    class="categories-link"
  >
    {{ category.name }}
  </nuxt-link>
  <div class="categories-link categories-link_nogutter" v-else>
    <button
      class="categories-link__button"
      :class="{ 'categories-link__button_active': categoriesIsVisible }"
      @click="categoriesIsVisible = !categoriesIsVisible"
    >
      {{ category.name }}
    </button>
    <ul v-if="categoriesIsVisible" class="categories-link__list">
      <li
        v-for="category in childrenCategories"
        :key="category.category_id"
        class="categories-link__child"
      >
        <CategoriesLink :category="category" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CategoriesLink',
  props: {
    category: {
      type: Object,
      required: true,
    },
    parentUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      categoriesIsVisible: false,
    };
  },
  computed: {
    ...mapState(['categories']),
    childrenCategories() {
      return this.categories.filter(c => c.parent_id === this.category.category_id);
    },
    categoryUrl() {
      if (this.category.url.lastIndexOf('/') === -1) return this.category.url;
      return `${this.category.url.slice(
        this.category.url.lastIndexOf('/') + 1, this.category.url.length
      )}`;
    },
  }
};
</script>

<style lang="scss">
.categories-link {
  display: block;
  color: #000;
  text-decoration: none;
  &_nogutter {
    padding: 0;
  }
  &__button {
    position: relative;
    width: 100%;
    border: 0;
    padding: 0;
    padding-right: 15px;
    font-size: 16px;
    text-align: left;
    background: transparent;
    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      content: '⌃';
      transform: translateY(-50%) rotate(180deg);
      transition: 0.3s;
    }
    &_active {
      &:after {
        transform: translateY(-50%) rotate(90deg);
      }
    }
  }
  &__list {
    margin: 15px 0;
    padding-left: 15px;
    list-style: none;
  }
  &__child {
    margin-top: 15px;
  }
}
</style>
