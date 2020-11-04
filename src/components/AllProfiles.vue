<template>
  <div class="allProfiles">
      <h1>This view is AllProfiles</h1>
      <input type="button" id="addProfileButton" v-on:click="$emit('add')"
      value="Add New Profile" />
  </div>
</template>

<script>

export default {
    name: 'AllProfiles',
    
}
</script>

<style>

</style>