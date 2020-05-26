<template>
  <v-layout>
    <v-flex xs6>
      <test-metadata :test="test" />
    </v-flex>

    <v-flex xs6>
      <assignment :test="test" />
    </v-flex>
  </v-layout>
</template>

<script>
import TestMetadata from './TestMetadata'
import Assignment from './Assignment'
import TestsService from '@/services/TestsService'

export default {
  data () {
    return {
      test: {}
    }
  },
  async mounted () {
    const testId = this.$store.state.route.params.testId
    this.test = (await TestsService.show(testId)).data
  },
  components: {
    TestMetadata,
    Assignment
  }
}
</script>

<style scoped>
  .test-topic {
    margin-top: 5%;
  }
  textarea {
    width:100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
