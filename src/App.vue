<template>
  <header>
    <div class="wrapper">
      <nav class="navBar">
        <RouterLink to="/" class="navBarEl">Home</RouterLink>
        <RouterLink to="/bookList" class="navBarEl">Books</RouterLink>
        <RouterLink to="/donate" class="navBarEl">Donate</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>