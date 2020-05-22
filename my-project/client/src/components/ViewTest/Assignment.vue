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
import Panel from '@/components/Panel'
export default {
  props: [
    'test',
    'assignment'
  ],
  components: {
    Panel
  }

}
</script>

<style scoped>
</style>
