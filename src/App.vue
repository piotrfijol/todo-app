<script>
import { RouterView } from 'vue-router';
import DarkmodeToggle from './components/DarkmodeToggle.vue';
import GithubCorner from './components/GithubCorner.vue';

export default {
  components: {
    DarkmodeToggle,
    GithubCorner
},
data() {
  return {
    isDarkmode: false
  }
},
mounted () {
  let darkmodeValue = localStorage.getItem('darkmode');
  this.isDarkmode = darkmodeValue === 'true';
},
methods: {
  handleDarkmode(isDarkmode) {
    this.isDarkmode = isDarkmode;
    localStorage.setItem('darkmode', isDarkmode);
  }
},
}
</script>

<template>
  <nav v-if="!this.$route.meta.isHidden">
    <DarkmodeToggle :isDarkmode="isDarkmode" @toggle:darkmode="handleDarkmode"/>
    <GithubCorner 
      :isDarkmode="isDarkmode"
      href="https://github.com/piotrfijol"
    />
  </nav>
  <RouterView />
</template>

<style scoped>
 nav {
    width: 100%;
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    left: 0;
    margin: 0;
    padding: 1.8em 1em;
  }

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a {
  margin-left: 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
