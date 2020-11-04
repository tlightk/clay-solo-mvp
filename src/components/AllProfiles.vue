<template>
  <div class="allProfiles">
    <h1>This view is AllProfiles</h1>
    <input
      type="button"
      id="addProfileButton"
      v-on:click="$emit('add')"
      value="Add New Profile"
    />

    <div id="profileCards" v-if="profilesList">
      <div v-for="(profile, index) in profilesList" :key="index">
       <span>{{ profile.name }}</span>
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
</style>