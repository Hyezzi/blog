<template>
    <p> {{index}} | {{content}}</p>
</template>

<script>
export default {
  name: 'Comment',
  props: ['index', 'content']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
