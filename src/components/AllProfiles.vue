<template>
  <div class="allProfiles">
      <h1>This view is AllProfiles</h1>
      <input type="button" id="addProfileButton" v-on:click="$emit('add')"
      value="Add New Profile" />

      <div id="test">
        <h4>This is a test for single profile</h4>
      </div>
  </div>
</template>

<script>

export default {
    name: 'AllProfiles',
    
}
</script>

<style>

</style>