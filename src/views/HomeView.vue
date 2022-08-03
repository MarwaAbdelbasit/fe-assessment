<template>
  <div class="home">
    <div class="card text-center">
      <div class="card-header">
        Welcome to Quiz App
      </div>
      <div class="card-body">
        <h5 class="card-title">Start Quiz</h5>
        <a href="#" class="btn btn-dark" @click.prevent="firstQuestio">Go to questions</a>
      </div>
      <div class="card-footer text-muted">
        	&copy; 2022, by: Marwa Abdelbasit Ismail
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
    ...mapActions(['get_questions_action']),

    firstQuestio() {
      this.$router.push({ name: 'question', params: { id: '1' } })
    }
  },

  created() {
    this.get_questions_action()
  }
}
</script>

<style scoped>
.home {
  margin: 2rem;
}
</style>
