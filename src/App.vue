<template>
  <div id="app">
    <h1 id="appTitle">namaewa</h1>
    <template v-if="currentView === 'allProfiles'">
      <AllProfiles />
    </template>
    <template v-if="currentView === 'addProfile'">
      <AddProfile />
    </template>
    <button id="addProfileButton" v-on:click="switchToAddProfile">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import AllProfiles from "./components/AllProfiles.vue";
import AddProfile from "./components/AddProfile.vue";

export default {
  name: "App",
  components: {
    AllProfiles: AllProfiles,
    AddProfile: AddProfile,
  },
  data: () => ({
    currentView: "allProfiles",
    buttonText: "Add Profile",
  }),
  methods: {
    switchToAllProfiles() {
      this.currentView = "allProfiles";
    },
    switchToAddProfile() {
      this.currentView = "addProfile";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
