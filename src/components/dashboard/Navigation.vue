<template>
  <div>
      <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-1">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <v-list-item link to="/home">
            <v-list-item-icon>
              <v-icon>file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>      
          </v-list-item>
          <v-list-item link to="/report">
            <v-list-item-icon>
              <v-icon>file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Financial Report</v-list-item-title>            
          </v-list-item>
          <v-list-item link to="/action_items">
            <v-list-item-icon>
              <v-icon>format-list-checks</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Action Items</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>