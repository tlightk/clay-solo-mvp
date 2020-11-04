<template>
  <div id="addProfile">
    <h1>Made a new friend?</h1>
    <h4>Add their details below!</h4>
    <input
      type="button"
      id="goBackButton"
      v-on:click="
        $emit('go-home');
        $emit('refresh');
        resetAddProfile();
      "
      value="Go Back"
    />
    <br />
    <div class="insertInfoBox">
      <br /><br />
      <div v-if="!submitted">
        <div>
          <label for="name">Name: </label>
          <input
            type="text"
            class="nameInput"
            name="name"
            v-model="profile.name"
          />
        </div>
        <br />
        <br />
        <div>
          <label for="ageRange">Age range: </label>
          <input
            type="text"
            class="ageRangeInput"
            name="ageRange"
            v-model="profile.ageRange"
          />
        </div>
        <br />
        <br />
        <div>
          <label for="occupation">Occupation: </label>
          <input
            type="text"
            class="occupationInput"
            name="occupation"
            v-model="profile.occupation"
          />
        </div>
        <br />
        <br />
        <div>
          <label for="interests">Interests: </label>
          <input
            type="text"
            class="interestsInput"
            name="interests"
            v-model="profile.interests"
          />
        </div>
        <br />
        <br />
        <div>
          <label for="description">Description: </label>
          <input
            type="text"
            class="descriptionInput"
            name="description"
            v-model="profile.description"
          />
        </div>
        <br />
        <br />
        <button v-on:click="saveProfile">Create New Profile</button>
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
        name: "",
        ageRange: "",
        occupation: "",
        interests: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProfile() {
      if (this.name === null) {
        alert("Name input is required!");
      } else {
        const data = {
          name: this.profile.name,
          ageRange: this.profile.ageRange,
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
            console.log(err);
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
.insertInfoBox{
  display: inline-block;
  width: 400px;
  height: 400px;
  margin: 20px 20px 20px 20px;
  background: skyblue;
  border: 2px solid black;
}
.nameInput{
  width: 200px;
}
.ageRangeInput{
  width: 200px;
}
.occupationInput{
  width: 200px;
}
.interestsInput{
  width: 200px;
}
.descriptionInput{
  width: 200px;
}
</style>