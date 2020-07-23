<template>
  <main class="main">
    <section class="container">
      <div>
        <h1 class="title">
          symmetrica-ssr-core
        </h1>
        <h3 class="subtitle">
          Каталог
        </h3>
        <div class="catalog">
          <div class="catalog__categories">
            <Categories />
          </div>
          <div class="catalog__info">
            <nuxt-child />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import Categories from '../components/Categories.vue';

export default {
  components: {
    Categories
  },
};
</script>

<style lang="scss">
.main {
  padding: 50px 0;
}

.container {
  width: 1120px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 25px;
  color: #526488;
  word-spacing: 5px;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
  &__categories {
    grid-column: 1 / 4;
  }
  &__info {
    grid-column: 4 / 11;
    justify-self: flex-start;
  }
}
</style>

