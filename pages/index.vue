<template>
  <main class="main">
    <section class="home">
      <div class="container">
        <div>
          <h1 class="title">
            symmetrica-ssr-core
          </h1>
          <h3 class="subtitle">{{ title }}</h3>
          <p>Перейти на страницу: <nuxt-link :to="{ name: 'katalog' }">Каталог</nuxt-link></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Главная'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'Home', name: 'Home', content: 'It is home page' }
      ]
    };
  },
}
</script>
