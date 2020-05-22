<template>
  <panel title="Test Metadata">
    <v-btn
      dark
      slot="action"
      class="button"
      medium
      absolute
      right
      middle
      fab
      @click="navigateTo({
        name: 'test-edit',
        params: {
          testId: test.id
        }
        })">
      <v-icon>edit</v-icon>
    </v-btn>
    <div class="test-topic">
      {{test.topic}}
    </div>

    <div class="test-subject">
      {{test.subject}}
    </div>

    <div class="test-teacher">
      {{test.teacher}}
    </div>

    <div class="test-author">
      {{test.author}}
    </div>
      <v-btn
        dark
        class="button">
        Pass the test
      </v-btn>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'test'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
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
    color: #E9E
  }
</style>
