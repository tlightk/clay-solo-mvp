<template>
  <div class="allProfiles">
    <h1>This view is AllProfiles</h1>
    <input
      type="button"
      id="addProfileButton"
      v-on:click="$emit('add')"
      value="Add New Profile"
    />

    <div class="profileCardContainer" v-if="profilesList">
      <div v-for="(profile, index) in profilesList" :key="index">
        <div class="profileCard" v-on:click="$emit('select-profile', [index])">
         <span class="displayName">{{ profile.name }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AllProfiles",
  data() {
    return {
      profile: [
        {
          name: "",
          ageRange: "",
          occupation: "",
          interests: "",
          description: "",
        },
      ],
    };
  },
  props: ["profilesList"],
};
</script>

<style>
.profileCardContainer{
  overflow: hidden;
  padding: 20px;
}
.profileCard{
  /* display: inline-block; */
  cursor: pointer;
  float: left;
  width: 150px;
  height: 150px;
  margin: 20px 20px 20px 20px;
  background: skyblue
}
.displayName{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>