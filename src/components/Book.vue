<template>
<div @dblclick="$emit('toggle-reminder',book.id)" :class="[book.reminder?'reminder':'' ,'book']">
     <h3>
        {{book.text}}
     <i @click="$emit('delete-book',book.id)" class="fa-solid fa-circle-xmark"></i> 
      </h3>
     <p>{{book.type}}</p>
</div>
   
</template>

<script>
export default{
    name:'Book',
    props:{
        book:Object, 
    },
    methods:{
    }

}
</script>
<style scope>
.fa-solid {
  color: red;
}

.book {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

}

.book.reminder {
  border-left: 5px solid cornflowerblue;
}

.book h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>