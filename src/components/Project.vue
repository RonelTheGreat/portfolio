<template>
  <div id="project">
    <router-link
      v-bind:to="`/show/${project.id}`"
      v-bind:class="['snapshot', project.projectClass]"
    ></router-link>
    <p class="project-title">
      <router-link v-bind:to="`/show/${project.id}`">{{
        project.title
      }}</router-link>
    </p>
    <p class="summary">
      {{ project.summary }}
    </p>

    <div class="links">
      <a class="demo" v-bind:href="project.linkToDemo" target="blank">
        view live demo
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path
            id="demo-caret"
            d="M1 1L6 5.5L1 10"
            stroke="#EE4A68"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a class="code" v-bind:href="project.linkToCode" target="blank">
        view source code
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path
            id="code-caret"
            d="M1 1L6 5.5L1 10"
            stroke="#4200FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"]
};
</script>

<style lang="scss" scoped>
#project {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 1rem;

  @mixin background-shared {
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }

  .snapshot {
    min-height: 30vh;
  }

  .snapshot:hover {
    cursor: pointer;
  }

  .car-parking {
    background: url(../assets/images/car-parking.png);
    @include background-shared;
  }

  .library {
    background: url(../assets/images/lib.png);

    @include background-shared;
  }

  .typing {
    background: url(../assets/images/typing-game.png);
    @include background-shared;
  }

  .covid {
    background: url(../assets/images/covid.png);
    @include background-shared;
  }

  .project-title {
    padding: 0.5rem;
    font-weight: 500;
    font-size: $font-medium;
    text-transform: capitalize;
    grid-row: 1;
    grid-column: 2;

    a {
      color: $font-primary;
    }
  }

  .summary {
    padding: 0.5rem;
    color: $font-secondary;
    grid-row: 2;
    grid-column: 2;
  }

  .links {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-transform: capitalize;
    font-size: 1rem;

    a {
      &:hover svg {
        transform: translateX(0.4rem);
      }
      &:hover {
        text-decoration: underline;
      }
    }

    .demo {
      color: $red;
    }

    .code {
      color: $blue;
    }
  }
}

@media screen and (min-width: 769px) {
  #project {
    min-height: 40vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;

    padding: 0;
    column-gap: 1rem;
    width: calc(100vw - 10rem);

    .summary {
      padding: 0.5rem;
      color: $font-secondary;
      grid-row: 2;
      grid-column: 2;
    }

    .snapshot {
      min-height: 50vh;
      background-position: top center;
    }
    .car-parking,
    .library,
    .typing,
    .covid {
      grid-row: 1 / 4;
      grid-column: 1;
    }

    .links {
      padding: 1rem 0.5rem;
      grid-row: 3;
      grid-column: 2;
      align-self: flex-end;
    }
  }
}
</style>
