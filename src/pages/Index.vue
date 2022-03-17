<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{backgroundImage: `url(http://localhost:1337${general.cover[0].url})`}">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
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
          <div v-for="page in $page.posts.edges" :key="page.id">
            <div class="post-preview">
              <g-link :to="'/post/' + page.node.id">
                <h2 class="post-title">{{ page.node.title }}</h2>
                <h3 class="post-subtitle">{{ page.node.content }}</h3>
              </g-link>
              <p class="post-meta">
                Posted by
                <a href="#!">{{ page.node.user }}</a>
                on {{ page.node.created_at }}
              </p>
              <p class="post-meta">
                Tags:
                <g-link v-for="tag in page.node.tags" :key="tag.id" :to="'/tag/' + tag.id"> #{{ tag.title }}；</g-link>
              </p>
            </div>
            <!-- Divider-->
            <hr class="my-4" />
          </div>

          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        is_publish
        user
        tags {
          id
          title
        }
        cover {
          url
        }
        created_at
      }
    }
  }

  allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'HomePage'
  },
  components: {
    Pager
  },
  computed: {
    general() {
      return this.$page.allStrapiGeneral.edges[0].node
    }
  }
}
</script>

<style></style>
