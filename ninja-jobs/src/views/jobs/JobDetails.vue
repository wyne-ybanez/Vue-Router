<template>
  <h1>{{ job.title }}</h1>
  <p>The job id is {{ id }}</p>
  <p>{{ job.details }}</p>
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

  // This is happening second - causing an error
  data() {
    return {
      job: null,
    }
  },
  // This is happening first
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then(res => res.json()) // array of objects
      .then(data => this.job = data) // attach array of objects to data variable
      .catch(err => console.log(err.message))
  }
}
</script>