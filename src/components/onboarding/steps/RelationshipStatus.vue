<template>
    <div>
      <label for="gender">Relationship</label>
      <input type="radio" id="single" name="relationship" value="single">
      <label for="single">Single</label><br>
      <input type="radio" id="married" name="relationship" value="married">
      <label for="married">Married</label><br>

      <input type="radio" id="complicated" name="complicated" value="complicated">
      <label for="complicated">Complicated</label><br>
    </div>
</template>

<script>
    export default {
        name: 'RelationshipStatus'        
        
    }
</script>

<style>

</style>