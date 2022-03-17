const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--posts1-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/posts1.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--posts2-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/posts2.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--foo-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/Foo.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/contact.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/About.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hsk/train-lagou/lagou-e-task/part3/fed-e-task-03-04/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/posts1/",
    component: c3
  },
  {
    path: "/posts2/",
    component: c4
  },
  {
    path: "/foo/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
