<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Tests">
          <v-btn
            slot="action"
            @click="navigateTo({name: 'tests-create'})"
            class="cyan accent-2"
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
                class="view"
                @click="navigateTo({
                  name: 'test',
                  params: {
                    testId: test.id
                  }
                })">
                View
              </v-btn>
            </v-flex>
          </v-layout>
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
  .view:hover {
    color: #E9E;
  }
</style>
