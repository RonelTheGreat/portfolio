<template>
  <div id="show">
    <section id="top">
      <div class="show-filler-bg"></div>

      <div class="content">
        <div class="left">
          <h1 class="project-title">{{ currentProject.title }}</h1>
          <div class="links">
            <a class="demo" v-bind:href="currentProject.linkToDemo"
              >live demo</a
            >
            <a class="code" v-bind:href="currentProject.linkToCode">Code</a>
          </div>
        </div>

        <div class="right">
          <img
            v-bind:src="require(`../assets/images/${currentProject.snapshot}`)"
            alt="snapshot"
          />
        </div>
      </div>
    </section>

    <section id="details">
      <div class="summary">
        <h1>Summary</h1>
        <p>{{ currentProject.summary }}</p>
      </div>

      <div class="features">
        <h1>Features</h1>
        <ul>
          <li v-for="feature in currentProject.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="techs">
        <h1>Technologies Used</h1>
        <ul>
          <li v-for="tech in currentProject.techs" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import projectList from "../assets/projects.js";

export default {
  name: "Show",
  data: function() {
    return {
      currentProject: {},

      projects: projectList.projects
    };
  },

  created() {
    const projectID = Number(this.$route.params.id);

    this.projects.map((project) => {
      if (project.id === projectID) {
        return (this.currentProject = project);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#show {
  margin-bottom: 5rem;
}

#top {
  position: relative;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      289.69deg,
      rgba(238, 74, 104, 0.7) 1.51%,
      rgba(66, 0, 255, 0.7) 100%
    );
    z-index: 1;
  }

  .show-filler-bg {
    background: url(../assets/images/about-filler-bg.svg);
    // background-position: bottom;
    background-position: bottom left;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    // display: grid;
    // width: 80vw;
    margin: 0 auto;
    // grid-template-columns: repeat(2, 1fr);
    // padding-top: 5rem;

    // .left,
    // .right {
    //   padding: 1rem;
    // }

    .left {
      display: flex;
      flex-direction: column;

      .project-title {
        width: 100%;
        // outline: 2px dashed red;
        text-transform: capitalize;
        // font-size: $font-larger;
        font-size: $font-large;
        font-weight: 500;
        color: #fff;
        // margin-bottom: 2rem;
        margin-bottom: 5vh;
        line-height: 1.4;
      }

      .demo,
      .code {
        box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25);
        font-size: $font-medium;
        // padding: 0.7rem 2rem;
        padding: 0.7rem 1.4rem;
        border-radius: 5px;
        text-transform: capitalize;
      }

      .demo {
        background: #eb3556;
        color: #fff;
        margin-right: 1rem;
      }

      .code {
        background: #fff;
        color: $blue;
      }
    }

    .right {
      margin-top: 5vh;
      img {
        max-width: 100%;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

#details {
  padding: 1rem;

  h1 {
    color: $blue;
    font-weight: 500;
    font-size: $font-large;
    padding: 1rem 0;
    margin-top: 2rem;
  }

  .summary p {
    color: $font-primary;
  }

  ul {
    list-style-type: disc;
    padding-left: 1rem;
    li {
      color: $font-primary;
      padding-top: 0.5rem;
    }
  }
}

@media screen and (min-width: 769px) {
  #top {
    height: 60vh;
    padding: 0;

    .content {
      display: grid;
      width: 85vw;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      transform: translateY(14vh);
      column-gap: 1rem;

      .left {
        display: flex;
        flex-direction: column;

        .project-title {
          font-size: $font-larger;
          margin-bottom: 2rem;
        }

        .demo,
        .code {
          padding: 0.7rem 2rem;
        }
      }

      .right {
        margin-top: 0;
        max-width: 50vw;
      }
    }
  }

  #details {
    width: 85vw;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
