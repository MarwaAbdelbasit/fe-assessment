<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" :disabled="disablePrev" @click="goToPrevQuestion">Previous</a>
                </li>

                <li class="nav-item">
                    <span class="q-count" href="#"><font-awesome-icon icon="fa-solid fa-circle-exclamation" /> 1 / 10 </span>
                </li>

                <li class="nav-item">
                    <a class="nav-link" :disabled="disableNext" @click="goToNextQuestion">Next</a>
                </li>

                <li class="nav-item" v-if="this.$route.params.id>=10">
                    <a class="nav-link" href="/results">Results</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            disablePrev: true,
            disableNext: false
        }
    },

    methods: {
        goToNextQuestion() {
            if(this.$route.params.id<=9) {
                this.$route.params.id = Number(this.$route.params.id) + 1
                this.$router.push({ name: 'question', params: { id: `${this.$route.params.id}` } })
            } else if(this.$route.params.id<=10) {
                this.disableNext = true;
                this.$router.push({ name: 'results' })
            }
        },

        goToPrevQuestion() {
            if(this.$route.params.id>1) {
                this.disablePrev = false
                this.$route.params.id = Number(this.$route.params.id) - 1
                this.$router.push({ name: 'question', params: { id: `${this.$route.params.id}` } })
            } else {
                this.disablePrev = true
            }
        }
    },
}
</script>

<style scoped>
.q-count {
    display: block;
    padding: .5rem 1rem;
    color: #fff;
}

.nav-link {
    cursor: pointer;
}
</style>