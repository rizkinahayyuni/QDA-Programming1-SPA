<template>
  <div id="app" class="container">
    <nav-bar-component/>
    <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
