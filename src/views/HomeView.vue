<script>
import Darkmodetoggle from '@/components/Darkmodetoggle.vue';
import { RouterLink } from 'vue-router';

  export default {
    components: {
      Darkmodetoggle,
    },
  }
</script>

<template>
  <div class="home d-flex justify-center align-center flex-column">
    <h1 class="home__logo">ToDo</h1>
    <p>Keep your tasks in one place</p>
    <RouterLink to="/tasks">
      <v-btn
        color="blue-grey"
      >
        <v-icon class="icon">mdi-check-all</v-icon>
        Start
      </v-btn>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.icon {
  margin-right: .3em;
}
  .home {
    transform: translateY(-5rem);

    &__logo {
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
      font-weight: 200;
    }

  }
</style>