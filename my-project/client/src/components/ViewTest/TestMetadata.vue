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
      :to="{
        name: 'test-edit',
        params () {
          return {
            testId: test.id
          }
        }
      }">
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
        v-if="isUserLoggedIn && !isSaved"
        dark
        class="button"
        @click="savetest">
        Save the test
      </v-btn>
        <v-btn
        v-if="isUserLoggedIn && isSaved"
        dark
        class="button"
        @click="deletetest">
        Delete the test
      </v-btn>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SaveTestsService from '@/services/SaveTestsService'
export default {
  props: [
    'test'
  ],
  data () {
    return {
      isSaved: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    console.log('id', this.test.id)
    const savedtest = (await SaveTestsService.index({
      testId: this.test.id,
      userId: this.$store.state.user.id
    })).data
    this.isSaved = !!savedtest
    console.log('savedtest', this.isSaved)
  },
  methods: {
    savetest () {
      console.log('savetest')
    },
    deletetest () {
      console.log('deletetest')
    }
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
