<template>
  <div id="app">
    <div>
      <h1 id="appTitle">namaewa</h1>
    </div>
    <div id="componentsView">
      <template v-if="currentView === 'allProfiles'">
        <AllProfiles
          @add="switchToAddProfile"
          v-bind:profilesList="profilesList"
        />
      </template>
      <template v-if="currentView === 'addProfile'">
        <AddProfile @go-home="switchToAllProfiles" @refresh="refreshProfiles"/>
      </template>
      <template v-if="currentView === 'singleProfile'">
        <SingleProfile @go-home="switchToAllProfiles" />
      </template>
    </div>
  </div>
</template>

<script>
import AllProfiles from "./components/AllProfiles.vue";
import AddProfile from "./components/AddProfile.vue";
import SingleProfile from "./components/SingleProfile.vue";
import http from "./http-common";

export default {
  name: "App",
  components: {
    AllProfiles: AllProfiles,
    AddProfile: AddProfile,
    SingleProfile: SingleProfile,
  },
  data: () => ({
    currentView: "allProfiles",
    profilesList: null,
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
    retrieveProfiles() {
      http
        .get("/profiles")
        .then((response) => {
          this.profilesList = response.data;
          console.log(this.profilesList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    refreshProfiles() {
      this.retrieveProfiles();
    },
  },
  mounted() {
    this.retrieveProfiles();
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
