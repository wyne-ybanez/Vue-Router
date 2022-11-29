<template>
  <!-- Nav -->
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <!-- Direction buttons (Browser History) -->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <!-- This is where the views will be rendered -->
  <router-view/>

  <!-- Optional: footer -->
</template>

<script>
  export default {
    methods: {
      // Based on page histories, parameter is steps to take
      redirect(){
        this.$router.push({ name: 'Home' })
      },
      back(){
        this.$router.go(-1)
      },
      forward(){
        this.$router.go(1)
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
  }

  nav a.router-link-exact-active {
    color: #fff;
    background: turquoise;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
  }

  button a {
    color: #fff;
    text-decoration: none;
  }
</style>
