<template>
  <div id="home">
    <div class="filler"></div>
    <div class="content">
      <div class="photo">
        <img src="../assets/images/profile-pic.jpg" alt="my face" />
      </div>
      <h1 class="greetings">hi, i'm ronel carlo berino</h1>
      <h2 class="tagline">a passionate self-taught web developer</h2>
      <p class="location">
        <img src="../assets/icons/location-icon.svg" alt="location icon" />
        <span class="text">philippines</span>
      </p>

      <router-link to="/projects" class="projects-link"
        >see my projects</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  height: 100vh;
  background: url(../assets/images/home-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  color: #fff;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      289.69deg,
      rgba(238, 74, 104, 0.55) 1.51%,
      rgba(66, 0, 255, 0.7) 100%
    );
    z-index: -1;
  }

  .filler {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(../assets/images/filler-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
}

#home .content {
  margin: 0 auto;
  padding: 0.8rem;
  text-align: center;
  transform: translateY(2vh);

  .photo {
    height: 7rem;
    width: 7rem;
    margin: 0 auto;
    img {
      max-width: 100%;
      border-radius: 50%;
      border: 5px solid #fff;
    }
  }

  .greetings {
    margin: 0 auto;
    text-align: center;
    margin-top: 1rem;
    font-size: $font-larger;
    font-weight: 500;
    text-transform: capitalize;
  }

  .tagline {
    text-align: center;
    padding-top: 1rem;
    font-size: $font-medium;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: $font-reg;
    padding: 1rem 0;

    .text {
      padding-left: 0.4rem;
    }
  }

  .projects-link {
    margin: 1rem auto;
    display: inline-block;
    color: #fff;
    font-size: $font-medium;
    font-weight: 500;
    text-transform: uppercase;
    background: #ff0b6e;
    border-radius: 5px;
    padding: 1rem 2rem;
    box-shadow: 6px 12px 20px rgba(0, 0, 0, 0.15);

    &:hover {
      background: darken($color: #ff0b6e, $amount: 10%);
    }

    &:active {
      box-shadow: none;
    }
  }
}

@media screen and (min-width: 769px) {
  #home .content {
    width: 50vw;
    margin: 0;
    padding: 0;
    text-align: unset;
    transform: translate(40%, 20%);

    .photo {
      width: 10rem;
      height: 10rem;
      margin: 0;
    }

    .greetings {
      margin: 0;
      text-align: left;
    }

    .tagline {
      text-align: left;
      padding-top: 0.4rem;
    }

    .location {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-transform: capitalize;
      font-size: $font-reg;
      padding: 0.8rem 0;

      .text {
        padding-left: 0.4rem;
      }
    }
  }
}
</style>
