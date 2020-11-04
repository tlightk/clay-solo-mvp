<template>
  <div class="allProfiles">
    <h1>Here are {{ selectedProfile.name }}'s details!</h1>
    <input
      type="button"
      id="goBackButton"
      v-on:click="$emit('go-home')"
      value="Go Back"
    />

    <div class="singleProfileBox">
      <h4>Name</h4>
      <span>{{ selectedProfile.name }}</span><br /><br />
      <h4>Age Range</h4>
      <span>{{ selectedProfile.ageRange }}</span><br /><br />
      <h4>Occupation</h4>
      <span>{{ selectedProfile.occupation }}</span><br /><br />
      <h4>Interests</h4>
      <span>{{ selectedProfile.interests }}</span><br /><br />
      <h4>Description</h4>
      <span>{{ selectedProfile.description }}</span><br /><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProfile",
  props: ['selectedProfile'],
};
</script>

<style>
</style>