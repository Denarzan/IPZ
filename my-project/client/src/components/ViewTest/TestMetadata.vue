<template>
  <panel title="Test Metadata">
    <div class="test-topic">
        {{test.topic}}
    </div>

    <div class="test-subject">
        {{test.subject}}
    </div>

    <div class="test-teacher">
        {{test.teacher}}
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'test'
  ],
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
</style>
