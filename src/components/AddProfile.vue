<template>
  <div id="addProfile">
    <h1>This view is AddProfile</h1>
    <input
      type="button"
      id="goBackButton"
      v-on:click="$emit('go-home')"
      value="Go Back"
    />
    <div id="insertInfoBox">
      <br><br>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="nameInput" name="name"><br><br>
        <label for="age">Age range:</label>
        <input type="text" id="ageInput" name="age"><br><br>
        <label for="occupation">Occupation:</label>
        <input type="text" id="occupationInput" name="occupation"><br><br>
        <label for="interests">Interests:</label>
        <input type="text" id="interestsinput" name="interests"><br><br>
        <label for="description">Description:</label>
        <input type="text" id="descriptionInput" name="description"><br><br>
        <input type="submit" value="Create New Friend" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProfile",
};
</script>

<style>
</style>