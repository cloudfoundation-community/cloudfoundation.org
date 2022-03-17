<template>
  <div class="feedback-container d-flex flex-column align-items-center pb-4">
    <h5>Did this page help you?</h5>

    <div v-if="!submitted" v-bind:class="{'w-100': !!shortAnswer }">
      <div v-if="!shortAnswer">
        <button class="btn btn-outline-primary" v-on:click="sendAnswer('Yes')">Yes, thanks!</button>
        <button class="ml-2 btn btn-outline-primary" v-on:click="sendAnswer('No')">No, not really</button>
      </div>

      <div class="d-flex align-items-center flex-column" v-else>
        <div class="w-100 d-flex align-items-center flex-column">
          <textarea class="p-2" v-model="longAnswer" v-bind:placeholder="placeholder"></textarea>
        </div>

        <button class="btn btn-outline-primary mt-4"
                v-on:click="sendAnswer(shortAnswer, longAnswer)"
                v-bind:disabled="!longAnswer">Submit feedback</button>
      </div>
    </div>

    <div v-else>
      Thanks for sharing your feedback!
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    sendAnswer
  },
  computed: {
    placeholder() {
      return this.shortAnswer === 'Yes' ?
          'What did you like about this building block?' :
          'What could we improve about this building block?';
    }
  },
  data() {
    return {
      shortAnswer: null,
      longAnswer: null,
      submitted: false
    }
  },
  props: {
    page: String
  }
}

async function sendAnswer(answer: string, longAnswer?: string) {
  this.shortAnswer = answer;

  const url = '/api/feedback';
  const page = this.page;

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      page,
      answer,
      longAnswer
    })
  });

  // Normally we would have proper error handling.
  // But given the impact & likelihood of this crashing, let's just pretend
  // that the request always worked.
  this.submitted = this.shortAnswer && this.longAnswer;
}
</script>

<style scoped lang="scss">
.feedback-container {
  border-top: 1px solid var(--c-border);

  h5 {
    text-align: center;
  }

  textarea {
    min-width: 150px;
    min-height: 100px;
    width: 60%;
    height: 150px;
    max-width: 100%;
    border-color: #ddd;
    border-radius: 0.5rem;
    font-family: var(--font-family);
    font-size: 14px;
  }
}
</style>