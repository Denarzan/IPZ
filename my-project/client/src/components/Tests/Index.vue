<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <tests-search-panel />
      <tests-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import TestsPanel from './TestsPanel'
import TestsSearchPanel from './TestsSearchPanel'
import TestsService from '@/services/TestsService'
export default {
  components: {
    TestsPanel,
    TestsSearchPanel
  },
  data () {
    return {
      tests: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.tests = (await TestsService.index()).data
  }
}
</script>

<style scoped>
  .test {
    padding: 20px;
    height: 200px;
    overflow: hidden;
  }
  .test-subject {
    font-size: 24px;
  }
  .test-teacher {
    font-size: 18px;
  }
  .test-topic {
    font-size: 30px;
  }
  .button {
    color: #E9E;
  }
</style>
