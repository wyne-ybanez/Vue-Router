<template>
  <h1>Job Details</h1>
  <p>The job id is {{ id }}</p>
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
}
</script>