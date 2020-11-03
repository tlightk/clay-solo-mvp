<template>
  <div class="allProfiles">
      <h1>This view is AllProfiles</h1>
      <input
      type="button"
      id="goBackButton"
      v-on:click="
        $emit('go-home');
      "
      value="Go Back"
    />
  </div>
</template>

<script>

export default {
    name: 'SingleProfile',
    
}
</script>

<style>

</style>