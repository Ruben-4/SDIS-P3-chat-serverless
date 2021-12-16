<template>
  <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="green"
      dark
    >
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-toolbar-title justify="center">Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <!--<v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-toolbar>

    <v-list three-line>
      <ul>
      <template li v-for="(item, index) of items">
        <v-list-item
          :key="index"
        >
            <v-list-item-content>
              <v-list-item-title> {{item.nick}}</v-list-item-title>
              <v-list-item-subtitle> {{item.msg}}</v-list-item-subtitle>
              <v-list-item-subtitle> {{item.date}}</v-list-item-subtitle>
            </v-list-item-content>    
        </v-list-item>
      </template>
      </ul>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    props: {items:{type: Array, default: ()=>[]} }
    
  }
</script>