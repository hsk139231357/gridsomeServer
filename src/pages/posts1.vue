<template>
  <Layout>
    <div>
      <h1>Posts1</h1>
      <ul>
        <li v-for="item in posts">
          <g-link to="/">{{ item.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
const axios = require('axios')

export default {
  name: 'posts1Page',
  data() {
    return {
      posts: []
    }
  },
  async created () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data
  }
}
</script>

<style>

</style>