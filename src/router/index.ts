import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/firestore";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signIn",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "@/views/SignIn.vue"),
    meta: {
      noAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const noAuth = to.matched.every(record => record.meta.noAuth);
  firebase.auth().onAuthStateChanged(async user => {
    console.log("login account:", user?.email);
    if (user) {
      if (to.path === "/signIn") {
        next("/");
        return;
      }
      next();
    } else {
      if (!noAuth) {
        next({
          path: "/signIn",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    }
  });
});

export default router;
