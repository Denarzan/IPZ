<template>
  <panel
    title="Test Metadata"
    v-if="test">
    <v-btn
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
    <div>
      {{isUserLoggedIn}}
      <br/>
      {{bookmark}}
    </div>
      <v-btn
        v-if="isUserLoggedIn && !bookmark"
        class="button"
        @click="setAsBookmark">
        Set as Bookmark
      </v-btn>
        <v-btn
        v-if="isUserLoggedIn && bookmark"
        class="button"
        @click="unsetAsBookmark">
        Unset as Bookmark
      </v-btn>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'test'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.usUserLoggedIn) {
        return
      }

      try {
        this.bookmark = (await BookmarksService.index({
          testId: this.test.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          testId: this.test.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
