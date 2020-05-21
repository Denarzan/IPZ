<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Tests">
        <div
          v-for="test in tests"
          :key="test.id">
          {{test.subject}}<br>
          {{test.teacher}}<br>
          {{test.topic}}<br><br>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import TestsService from '@/services/TestsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      tests: null
    }
  },
  async mounted () {
    this.tests = (await TestsService.index()).data
  }
}
</script>

<style scoped>
</style>
