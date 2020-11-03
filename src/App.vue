<template>
  <div id="app">
    <h1 id="appTitle">namaewa</h1>
    <template v-if="currentView === 'allProfiles'">
      <AllProfiles @add="switchToAddProfile"/>
    </template>
    <template v-if="currentView === 'addProfile'">
      <AddProfile @go-home="switchToAllProfiles"/>
    </template>
    <template v-if="currentView === 'singleProfile'">
      <SingleProfile @go-home="switchToSingleProfiles"/>
    </template>
  </div>
</template>

<script>
import AllProfiles from "./components/AllProfiles.vue";
import AddProfile from "./components/AddProfile.vue";
import SingleProfile from "./components/SingleProfile.vue";

export default {
  name: "App",
  components: {
    AllProfiles: AllProfiles,
    AddProfile: AddProfile,
    SingleProfile: SingleProfile,
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
    switchToSingleProfile() {
      this.currentView = "singleProfile";
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
