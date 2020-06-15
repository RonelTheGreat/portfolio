import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects";
import About from "../views/About";
import Show from "../views/Show";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/show/:id",
    name: "Show",
    component: Show
  },
  {
    path: "*",
    name: "Fallback",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
