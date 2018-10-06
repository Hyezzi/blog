<template>
    <b-alert show variant="warning" class = "mt-4 card-shadow">
        <h3 class = "mb-3">{{title}}</h3>
        <p>{{body}}</p>
        <p class = "text-right">{{createdAt}}</p>
        <hr/>
        <div>
            <p><strong>Comments</strong></p>
            <comment v-for = "(comment, i) in comments" :key = "comment.id" :index = "i+1" :content = "comment.body"></comment>    
        </div>
    </b-alert>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: 'PostCard',
  props: [
      'title',
      'body',
      'createdAt',
      'comments'
  ],
  components: {
    Comment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-shadow{
    box-shadow: 5px 5px 10px 4px rgba(0,0,0,0.1);
}
</style>
