<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="post in posts"
        :key="post.title"
        class="post-item"
      >
        <v-expansion-panel-header class="mb-10">
          <div id="title">
            {{post.title}}
          </div>         

          <div v-if="post.score > 70">
          <div id="score" style="color: green">          
            {{post.score}}
          </div>  
          </div>

          <div v-else>
          <div id="score">          
            {{post.score}}
          </div>   
          </div>
                  
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
  #score {
    color: red;
  }
</style>