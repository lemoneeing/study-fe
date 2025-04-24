<script setup>
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
  </header>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  <br />
  <div id="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <br />
    <RouterLink to="/databinding">5.3.1 Data Binding</RouterLink> |
    <RouterLink to="/databindinghtml">5.3.2 Data Binding Html</RouterLink>
    <br />
    <RouterLink to="/databindinginputtext">5.3.3.1 Data Binding Input Text</RouterLink> | 
    <RouterLink to="/databindinginputnumer">5.3.3.2 Data Binding Input Number</RouterLink> |
    <br />
    <RouterLink to="/databindingtextarea">5.3.3.3 Data Binding Textarea</RouterLink> |
    <RouterLink to="/databindingselect">5.3.3.4 Data Binding Select</RouterLink> |
    <br />
    <RouterLink to="/databindingcheckbox">5.3.3.5 Data Binding Checkbox</RouterLink> |
    <RouterLink to="/databindingradio">5.3.3.6 Data Binding Radio</RouterLink>
    <br />
    <RouterLink to="/databindingattribute">5.3.4.1 Data Binding Attribute</RouterLink> |
    <RouterLink to="/databindingbutton">5.3.4.2 Data Binding Button</RouterLink>
    <br />
    <RouterLink to="databindingclass">5.3.5 Data Binding Class</RouterLink>
    <br />
    <RouterLink to="databindingstyle">5.3.6 Data Binding Inline Style</RouterLink>
  </div>
  <br />

  <RouterView></RouterView>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
