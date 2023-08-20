<template>
    <Book  :key="book.id" v-for="book in books" :book="book" @toggle-reminder="$emit('toggle-reminder',book.id)" 
    @delete-book="$emit('delete-book',book.id)" 
    
    />
</template>

<script>
import Book from './Book.vue'

export default{
    name:'Books',
    props:{
       books:Array, 
    },
    components:{
        Book,
        
    },
    emits: ['delete-book' , 'toggle-reminder'],
}
</script>
