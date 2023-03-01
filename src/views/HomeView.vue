<script>

</script>

<template>
  <nav v-if="!this.$route.meta.isHidden">
    <a href="">GitHub</a>
  </nav>
  <div class="home d-flex justify-center align-center flex-column">
    <h1 class="home__logo">ToDo</h1>
    <p>Keep your tasks in one place</p>
    <v-btn
      color="blue-grey"
    >
      Start
    </v-btn>
  </div>
</template>


<style scoped lang="scss">
  nav {
    position: fixed;
  }
  .home {
    transform: translateY(-5rem);

    &__logo, p {
      font-family: 'Patrick Hand';
    }

    &__logo {
      font-size: 128px;
      font-weight: 800;
      letter-spacing: .05em;
    }

    p {
      margin: .8rem 0;
      font-size: 24px;
      letter-spacing: .05em;
    }

  }
</style>