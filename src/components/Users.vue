<template>
    <User  :key="user.id" v-for="user in users" :user="user" @toggle-reminder="$emit('toggle-reminder',user.id)" 
    @delete-user="$emit('delete-user',user.id)" 
    />
</template>

<script>
import User from './User.vue'

export default{
    name:'User',
    props:{
       users:Array, 
    },
    components:{
        User,
        
    },
    emits: ['delete-user' , 'toggle-reminder'],
}
</script>
