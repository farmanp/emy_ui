<template>
  <div>
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" />
    <label for="middleName">Middle Name (Optional)</label>
    <input type="text" name="middleName" />
    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" />
    <label for="birthday">Birthday</label>
    <input type="date" id="birthday" name="birthday" />
    <label for="gender">Gender</label>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label><br />
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label><br />
    <input type="radio" id="other" name="gender" value="other" />
    <label for="other">Other</label>
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
};
</script>

<style></style>
