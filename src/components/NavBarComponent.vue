<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"> 
    BPKB
  </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 1 }">
          <router-link class="nav-link" :to="{ name: 'HomePage' }" v-on:click.native="changeTabIndex(1)">Home</router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 2 }">
          <router-link class="nav-link" :to="{ name: 'AboutPage' }"  v-on:click.native="changeTabIndex(2)"> About </router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 3 }">
          <router-link class="nav-link" :to="{ name: 'ActionPage' }" v-on:click.native="changeTabIndex(3)"> Action </router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 4 }">
          <router-link class="nav-link" :to="{ name: 'ArticlePage' }" v-on:click.native="changeTabIndex(4)"> Article </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
    props: {
      showSearchbar: {
        requried: false,
        default: true,
        type: Boolean
      }
    },
    data() {
        return {
          selectedTabIndex : 1
        }
    },
    methods: {
      changeTabIndex(index) {
        const vm = this;

        vm.selectedTabIndex = index;
      }
    }
}
</script>

<style>
  nav {
    font-size: 16px;
    font-weight: bold;
  }
</style>