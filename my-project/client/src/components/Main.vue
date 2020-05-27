<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="top">
        <div class="image">
          <v-img src="https://www.wpclipart.com/food/vegetables/beans_fresh/lima_beans.png"></v-img>
        </div>
        <div class="text">
          <span class="intro">A diverse service to test yourself, or your students</span>
          <span
            class="description"
          >CurlySuccotash is online web service, not only for students, but also for teachers, who want to test their learners. We offer you ability to create tests and pass them. It is absolutely free, with no need of payments.</span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>


<style scoped>
.image {
  margin: 50px;
  padding: 0 500px;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro {
  margin: 20px;
  font-size: 50px;
  color: #2c3e50;
}
.description {
  margin: 20px;
  padding: 0 70px;
  font-size: 25px;
}
</style>