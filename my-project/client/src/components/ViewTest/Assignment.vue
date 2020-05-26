<template>
  <panel title="Tasks">
    {{test.numofquestions}}
    <br>
    <v-textarea
      auto-grow
      label="Tasks"
      v-model ="test.tasks"
    ></v-textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'test',
    'assignment'
  ]
}
</script>

<style scoped>
</style>
