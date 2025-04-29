<script setup>
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
    <RouterLink to="/databindinginputnumber">5.3.3.2 Data Binding Input Number</RouterLink> |
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
    <RouterLink to="/databindingclass">5.3.5 Data Binding Class</RouterLink> | 
    <RouterLink to="/databindingstyle">5.3.6 Data Binding Inline Style</RouterLink>
    <br />
    <RouterLink to="/databindinglist">5.4 List Rendering(v-for)</RouterLink>
    <br />
    <RouterLink to="/databindingvif">5.5 Rendering Grammar(v-if, v-show)</RouterLink>
    <br />
    <RouterLink to="/databindingeventclick">5.6.1 Click Event</RouterLink> | 
    <RouterLink to="/databindingeventchange">5.6.2 Change Event</RouterLink>
    <br />
    <RouterLink to="/databindingnested">8.1.1~2 Nested Components</RouterLink> | 
    <RouterLink to="/eventbyparent">8.1.3~5 Child Event by Parent Components</RouterLink> |
    <br />
    <RouterLink to="/eventbychildemit">8.1.6~7 Parent Emit by Child Components</RouterLink>
    <br />
    <RouterLink to="/slotpagetitle">8.2 Slot</RouterLink>
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
