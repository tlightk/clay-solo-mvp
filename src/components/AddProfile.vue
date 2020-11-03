<template>
  <div class="addProfile">
      <h1>This view is AddProfile</h1>
      <input type="button" id="goBackButton" v-on:click="$emit('go-home')"
      value="Go Back" />
  </div>
</template>

<script>

export default {
    name: 'AddProfile',
}
</script>

<style>

</style>