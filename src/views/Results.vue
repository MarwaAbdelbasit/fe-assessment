<template>
    <div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">the question</th>
                    <th scope="col">correct answer</th>
                    <th scope="col">your answer</th>
                    <th scope="col">points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="item in results">
                    <td>{{item.question}}</td>
                    <td>{{item.correct_answer}}</td>
                    <td>{{item.answer}}</td>
                    <td>{{item.point}}</td>
                </tr>

            </tbody>

            <thead class="thead-light">
                <tr>
                    <th scope="col" colspan="3">total</th>
                    <th scope="col">{{total}}</th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Results',
    computed: {
        ...mapGetters(['results']),

        total() {
            var count = 0;
            this.results.forEach(element => {
                count += element.point
            });
            return count
        }
    }
}
</script>

<style scoped>

</style>