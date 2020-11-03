<template>
  <div id="addProfile">
    <h1>This view is AddProfile</h1>
    <input
      type="button"
      id="goBackButton"
      v-on:click="
        $emit('go-home');
        resetAddProfile();
      "
      value="Go Back"
    />
    <div id="insertInfoBox">
      <br /><br />
      <div v-if="!submitted">
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            v-model="profile.name"
          />
        </div>
        <div>
          <label for="age">Age range:</label>
          <input type="text" id="ageInput" name="age" />
        </div>
        <div>
          <label for="occupation">Occupation:</label>
          <input type="text" id="occupationInput" name="occupation" />
        </div>
        <div>
          <label for="interests">Interests:</label>
          <input type="text" id="interestsinput" name="interests" />
        </div>
        <div>
          <label for="description">Description:</label>
          <input type="text" id="descriptionInput" name="description" />
        </div>
        <button v-on:click="saveProfile">Create New Friend</button>
      </div>

      <div v-else>
        <h4>Created a new friend!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "AddProfile",
  data() {
    return {
      profile: {
        id: 0,
        name: "",
        age: "",
        occupation: "",
        interests: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProfile() {
      if (this.name === "") {
        alert("Name input is required!");
        preventDefault();
      } else {
        const data = {
          name: this.profile.name,
          age: this.profile.age,
          occupation: this.profile.occupation,
          interests: this.profile.interests,
          description: this.profile.description,
        };

        http
          .post("/profile", data)
          .then((response) => {
            this.profile.id = response.data.id;
            console.log(response.data);
          })
          .catch((err) => {
            console.log(e);
          });
        this.submitted = true;
      }
    },
    resetAddProfile() {
      this.submitted = false;
      this.profile = {};
    },
  },
};
</script>

<style>
</style>