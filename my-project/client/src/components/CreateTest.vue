<template>
  <v-layout>
    <v-flex xs5>
      <panel title="Test Metadata">

        <v-text-field
          label="Subject"
          required
          :rules="[required]"
          v-model ="test.subject"
        ></v-text-field>

        <v-text-field
          label="Teacher"
          required
          :rules="[required]"
          v-model ="test.teacher"
        ></v-text-field>

          <v-text-field
          label="Topic"
          required
          :rules="[required]"
          v-model ="test.topic"
        ></v-text-field>

        <v-text-field
          label="Number of questions"
          required
          :rules="[required]"
          v-model ="test.numofquestions"
        ></v-text-field>

      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Test Structure">

        <v-textarea
          label="Author"
          required
          :rules="[required]"
          v-model ="test.author"
        ></v-textarea>

        <v-textarea
          label="Tasks"
          required
          :rules="[required]"
          v-model ="test.tasks"
        ></v-textarea>
      </panel>

      <div class="danger-allert" v-if="error">
        {{error}}
      </div>
      <v-btn
        class="create"
        @click="create">
          Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import TestsService from '@/services/TestsService'
export default {
  data () {
    return {
      test: {
        subject: null,
        teacher: null,
        author: null,
        topic: null,
        numofquestions: null,
        tasks: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.test)
        .every(key => !!this.test[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await TestsService.post(this.test)
        this.$router.push({
          name: 'tests'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  .create:hover {
    color: #E9E;
  }
</style>
