<script setup>
import { useCurrentUser } from 'vuefire'
import SignInButton from '../components/SignInButton.vue';
import SignOutButton from '../components/SignOutButton.vue';

const user = useCurrentUser()

</script>

<template>
    <div v-if="!user">
        <SignInButton/>
    </div>
    <div v-else>
        <div> user is:{{user}}</div>
        <SignOutButton/>
    </div>
</template> 