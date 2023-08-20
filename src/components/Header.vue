<template>
    <header>

        <h1>{{title}}</h1>
        <Button v-show="homePage"
         @toggle-add-book="$emit('toggle-add-book')" :text="showAddBook? 'close' :'add book' " :color="!showAddBook? 'cornflowerblue':'red'"/>
         <AddButton v-show="UserPage"
         @toggle-add-user="$emit('toggle-add-user')" :text="showAddUser? 'close' :'add user' " :color="!showAddUser? 'cornflowerblue':'red'"/>
        
    </header>
</template>
<script>
import Button from './Button.vue'
import AddButton from './AddButton.vue'

export default {
    name:'Header',
    props:{
        title: String,
        showAddBook:Boolean,
        showAddUser:Boolean


    },
    components:{
        Button,
        AddButton,
    },
    computed:{
        homePage(){
            if(this.$route.path==='/'){
                return true
            }
            else{
                return false
            }
        },
        UserPage(){
            if(this.$route.path==='/UsersHome'){
                return true
            }
            else{
                return false
            }
        }
        
    }

    
}

</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
}
</style>