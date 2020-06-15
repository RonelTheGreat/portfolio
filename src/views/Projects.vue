<template>
  <div id="projects">
    <h1 class="heading">projects i've made</h1>
    <project
      v-for="project in projects"
      :key="project.id"
      v-bind:project="project"
    />
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import projectList from "../assets/projects.js";

export default {
  name: "Projects",
  components: {
    Project
  },
  data() {
    return {
      projects: projectList.projects
    };
  }
};
</script>

<style lang="scss" scoped>
#projects {
  position: relative;
  margin-bottom: 8rem;

  .heading {
    font-weight: 500;
    font-size: $font-large;
    margin-top: 2vh;
    padding-top: 1rem;
    padding-left: 1rem;
    color: $blue;
    text-transform: capitalize;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      height: 0.3rem;
      width: 10rem;
      border-radius: 0.5rem;
      background: linear-gradient(
        90deg,
        #ee4a68 41.39%,
        rgba(66, 0, 255, 0.9) 100%
      );
    }
  }
}

@media screen and (min-width: 769px) {
  #projects {
    position: relative;
    margin-bottom: 8rem;

    .heading {
      font-size: $font-larger;
      margin-top: 5rem;
      padding-top: 2rem;
      padding-left: 5rem;

      &::before {
        height: 0.5rem;
      }
    }
  }
}
</style>
