<template>
    <panel title="Tests">
        <v-btn
        slot="action"
        :to="{
          name: 'tests-create'
        }"
        class="button"
        medium
        absolute
        right
        middle
        fab>
        <v-icon>add</v-icon>
        </v-btn>
    <div
        v-for="test in tests"
        class="test"
        :key="test.id">

        <v-layout>
        <v-flex xs6>

            <div class="test-topic">
            {{test.topic}}
            </div>

            <div class="test-subject">
            {{test.subject}}
            </div>

            <div class="test-teacher">
            {{test.teacher}}
            </div>
            <br>
            <v-btn
            class="button"
            :to="{
                name: 'test',
                params: {
                testId: test.id
                }
            }">
            View
            </v-btn>
        </v-flex>
        </v-layout>
    </div>
    </panel>
</template>

<script>
import TestsService from '@/services/TestsService'
export default {
  data () {
    return {
      tests: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.tests = (await TestsService.index(value)).data
      }
    }
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
