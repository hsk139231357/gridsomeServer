<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.tag.title }}</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- 文章列表 -->
          <div v-for="post in $page.tag.posts" :key="post.id">
            <div class="post-preview">
              <g-link :to="'/post/' + post.id">
                <h2 class="post-title">{{ post.title }}</h2>
                <h3 class="post-subtitle">{{ post.content }}</h3>
              </g-link>
              <p class="post-meta">
                Posted by
                <a href="#!">{{ post.user }}</a>
                on {{ post.created_at }}
              </p>
              <!--<p class="post-meta">-->
              <!--  Tags:-->
              <!--  <g-link v-for="tag in post.tags" :key="tag.id" :to="'/tag/' + tag.id"> #{{ tag.title }}；</g-link>-->
              <!--</p>-->
            </div>
            <!-- Divider-->
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tag: strapiTag(id: $id) {
    id
    title
    posts {
      id
      title
      content
      user
      created_at
    }
  }
}
</page-query>

<script>
export default {
  name: 'TagPage'
}
</script>

<style>

</style>