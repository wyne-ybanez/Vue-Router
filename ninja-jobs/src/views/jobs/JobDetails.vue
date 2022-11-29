<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], // this accepts the prop that's being passed

    // OTHERWISE:
    // data() {
    //     return {
    //         id: this.$route.params.id // the ID of this component
    //     }
    // }

  // This is happening first - hence why conditional data display is required
  data() {
    return {
      job: null,
    }
  },
  // This is happening second
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then(res => res.json()) // array of objects
      .then(data => this.job = data) // attach array of objects to data variable
      .catch(err => console.log(err.message))
  }
}
</script>