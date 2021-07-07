<template>
  <nav>
    <ul>
      <li><router-link to="/projects">projects</router-link></li>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/contact">contact</router-link></li>
      
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNav"
};
</script>

<style lang="scss">
nav {
  // background: rgba(9, 9, 49, 0.8);
  background: rgba(9, 9, 49, 1);
  position: fixed;
  // border-bottom-left-radius: 5rem;
  // top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;

  ul {
    display: flex;
    justify-content: space-between;
    // padding: 1rem 1.6rem 1rem 2.4rem;
    // padding: 1rem 1.6rem;
    padding: 1rem;
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
  }

  a {
    color: #fff;
    padding: 1rem;
    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 60ms;

    &:hover {
      text-decoration: line-through;
    }

    &:active {
      color: $red;
    }

    &.router-link-exact-active {
      color: $red;
    }
  }
}

@media screen and (min-width: 769px) {
  nav {
    background: rgba(9, 9, 49, 0.8);
    border-bottom-left-radius: 3rem;
    top: 0;
    right: 0;
    left: unset;
    bottom: unset;
  }
}
</style>
