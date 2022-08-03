<template>
    <div class="position-relative">
        <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div v-else class="card">
            <div class="card-header">
                {{question.question}}
            </div>
            <div class="card-body">
                <ul class="list-group">

                    <li class="list-group-item">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="exampleRadios" 
                                id="exampleRadios1" 
                                :value="question.correct_answer" checked
                                @click="correct($event)"
                            >
                            <label class="form-check-label" for="exampleRadios1">
                                {{question.correct_answer}}
                            </label>    
                        </div>
                    </li>

                    <li class="list-group-item" v-for="ans in question.incorrect_answers" :key="ans">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="exampleRadios" 
                                id="exampleRadios1" 
                                :value="ans"
                                @click="incorrect($event)"
                            >
                            <label class="form-check-label" for="exampleRadios1">
                                {{ans}}
                            </label>    
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card-footer text-muted">
                <button type="button" class="btn btn-secondary mr-2">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    Previous
                </button>

                <button type="button" class="btn btn-dark">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Question',
    data() {
        return {
            question: {}
        }
    },
    computed: {
        ...mapGetters(['questions', 'loading']),
    },
    methods: {
        ...mapActions(['add_to_results']),

        correct(event) {
            this.add_to_results({
                question: this.question.question,
                correct_answer: event.target.value,
                status: true,
                answer: event.target.value,
                point: 1
            })
        },

        incorrect(event) {
            this.add_to_results({
                question: this.question.question,
                correct_answer: event.target.value,
                status: false,
                answer: event.target.value,
                point: 0
            })
        }
    },
    created() {
        if(!this.loading) {
            this.question = this.questions.results[this.$route.params.id]
        }
    }
}
</script>

<style scoped>
.card {
    margin: 2rem;
}

.spinner-border {
    position: absolute;
    left: 50%;
    margin-top: 20%;
}
</style>