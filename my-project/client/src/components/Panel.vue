<template>
  <div class="white elevation-2">
        <v-toolbar text dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action" />
          </v-toolbar>
        <div>
          <slot>
            No slot content defined
          </slot>
        </div>
      </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
  .cyan {
    margin-top: 5%;
  }
</style>
