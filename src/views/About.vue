<template>
  <div id="about">
    <section id="about-top">
      <div class="about-filler-bg"></div>
      <h1 class="heading">about me</h1>
    </section>

    <section id="personal">
      <div class="profile-card">
        <img src="../assets/images/profile-pic.jpg" alt="profile pic" />
        <p class="name">ronel carlo berino</p>
        <div class="location">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70402 5.79331C9.69836 5.29739 9.53498 4.81411 9.23445 4.40432C8.93393 3.99452 8.50969 3.67654 8.01514 3.49039C7.5206 3.30425 6.97786 3.25826 6.45526 3.35823C5.93266 3.4582 5.45356 3.69965 5.07828 4.05218C4.703 4.40472 4.44831 4.85258 4.34628 5.33937C4.24426 5.82617 4.29945 6.33014 4.50492 6.78784C4.71039 7.24554 5.05694 7.63651 5.50095 7.91152C5.94496 8.18652 6.46658 8.33328 7.00013 8.33331C7.35737 8.33244 7.71089 8.26595 8.0404 8.13767C8.3699 8.00939 8.66888 7.82184 8.92014 7.5858C9.17141 7.34976 9.37002 7.06989 9.50454 6.76227C9.63907 6.45466 9.70686 6.12536 9.70402 5.79331ZM5.01345 5.79331C5.0191 5.42925 5.14041 5.07488 5.36212 4.77472C5.58383 4.47457 5.89605 4.24203 6.25953 4.10634C6.62301 3.97065 7.02153 3.93786 7.405 4.0121C7.78847 4.08634 8.13977 4.26429 8.41475 4.52358C8.68973 4.78287 8.87612 5.11193 8.95048 5.4694C9.02484 5.82687 8.98385 6.1968 8.83268 6.53269C8.68151 6.86857 8.42689 7.15542 8.10083 7.35718C7.77477 7.55894 7.39183 7.6666 7.00013 7.66664C6.73708 7.66578 6.47681 7.61654 6.23432 7.52176C5.99183 7.42698 5.77192 7.28853 5.58725 7.1144C5.40258 6.94026 5.25681 6.73388 5.15833 6.50715C5.05985 6.28042 5.01061 6.03781 5.01345 5.79331Z"
              fill="#535c70"
            />
            <path
              d="M9.8043 12.62C11.4252 10.3933 13.2326 7.53333 13.2326 5.79333C13.2326 4.25685 12.5759 2.78329 11.4071 1.69683C10.2383 0.610367 8.65298 0 7 0C5.34702 0 3.76173 0.610367 2.5929 1.69683C1.42406 2.78329 0.767418 4.25685 0.767418 5.79333C0.767418 7.53333 2.5748 10.3933 4.1957 12.62C1.62807 13.0533 0 14.04 0 15.2C0 16.7933 3.0123 18 7 18C10.9877 18 14 16.7933 14 15.2C14 14.04 12.3719 13.0533 9.8043 12.62ZM7 0.666667C8.46218 0.668431 9.86394 1.20913 10.8979 2.17018C11.9318 3.13124 12.5135 4.4342 12.5154 5.79333C12.5154 8.28667 8.16189 13.6867 7 15.0733C5.83811 13.6667 1.48463 8.28667 1.48463 5.79333C1.48653 4.4342 2.06822 3.13124 3.10214 2.17018C4.13606 1.20913 5.53782 0.668431 7 0.666667ZM7 17.3333C3.29918 17.3333 0.717213 16.2067 0.717213 15.2C0.717213 14.3733 2.35963 13.56 4.64754 13.2C5.72336 14.6333 6.62705 15.6867 6.72029 15.8C6.75462 15.8379 6.79744 15.8683 6.84576 15.8892C6.89408 15.9101 6.94672 15.9209 7 15.9209C7.05328 15.9209 7.10593 15.9101 7.15424 15.8892C7.20256 15.8683 7.24538 15.8379 7.27971 15.8C7.37295 15.6867 8.27664 14.6333 9.35246 13.2C11.6404 13.5333 13.2828 14.3467 13.2828 15.2C13.2828 16.2067 10.7008 17.3333 7 17.3333Z"
              fill="#535c70"
            />
          </svg>

          <p>philippines</p>
        </div>
      </div>

      <h2 class="tagline-complete">
        I'm a <span class="passionate">passionate</span> and
        <span class="creative">creative</span> self-taught web developer who
        loves to build things.
      </h2>
    </section>

    <section id="skillset">
      <h1 class="heading">skill set</h1>

      <div class="skills">
        <div class="skill-group" v-for="skills in skillset" :key="skills.label">
          <h3 class="label">
            {{ skills.label }}
          </h3>
          <ul>
            <li v-for="skill in skills.skills" :key="skill.id">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skillset: [
        {
          id: 1,
          label: "strong grasp of",
          skills: ["HTML", "CSS", "Javascript"]
        },
        {
          id: 2,
          label: "knowledgeable with",
          skills: ["Node JS", "MongoDB"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#about-top {
  position: relative;
  height: 25vh;
  overflow: hidden;

  .about-filler-bg {
    background: url(../assets/images/about-filler-bg.svg);
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

  .heading {
    text-align: center;
    transform: translateY(2vh);
    position: relative;
    z-index: 2;
    font-weight: 500;
    color: #fff;
    font-size: $font-larger;
    text-transform: capitalize;
  }
}

#personal {
  .profile-card {
    justify-self: center;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 14rem;
    padding: 0.8rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transform: translateY(-4.5rem);
    margin: 0 auto;

    .name {
      align-self: center;
      text-transform: capitalize;
      font-weight: 500;
      font-size: $font-medium;
      padding-top: 1rem;
      color: $font-primary;
    }

    .location {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-transform: capitalize;

      p {
        color: $font-secondary;
        padding-left: 0.5rem;
      }
    }

    img {
      justify-self: center;
      max-width: 100%;
    }
  }

  .tagline-complete {
    text-align: center;
    font-weight: 500;
    font-size: $font-large;
    color: $font-primary;
    transform: translateY(-5vh);

    .passionate {
      color: $red;
    }

    .creative {
      color: $blue;
    }
  }
}

#skillset {
  background: #f9f9ff;
  padding: 3rem 1rem;

  .heading {
    font-weight: 500;
    font-size: $font-larger;

    padding-top: 2rem;
    color: $blue;
    text-transform: capitalize;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0.5rem;
      width: 6rem;
      border-radius: 0.5rem;
      background: linear-gradient(
        90deg,
        #ee4a68 41.39%,
        rgba(66, 0, 255, 0.9) 100%
      );
    }
  }

  .skills {
    display: flex;
    flex-direction: column;

    div {
      margin-top: 5vh;
      margin-bottom: 5vh;
    }

    li {
      font-size: $font-large;
      color: $font-primary;
      padding-top: 1rem;
    }
    .label {
      font-weight: 500;
      font-size: $font-medium;
      color: $red;
      padding-bottom: 1rem;
    }
  }
}

@media screen and (min-width: 769px) {
  #about-top {
    position: relative;
    height: 40vh;
    overflow: hidden;

    .heading {
      text-align: center;
      transform: translateY(15vh);
      font-size: 3.8rem;
    }
  }

  #personal {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .profile-card {
      margin-left: 5rem;
    }

    .tagline-complete {
      text-align: left;
      transform: translateY(2vh);
      padding: 2rem 3rem 0;
    }
  }

  #skillset {
    padding-top: 3rem;
    padding-bottom: 3rem;

    .heading {
      padding-left: 4rem;

      &::before {
        left: 4rem;
        width: 5rem;
      }
    }

    .skills {
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 4rem;
      padding-right: 4rem;
      justify-content: space-between;

      .skill-group {
        margin-top: 3rem;
      }
    }
  }
}
</style>
