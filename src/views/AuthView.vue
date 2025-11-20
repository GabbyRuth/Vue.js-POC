<script setup>
import { useCurrentUser } from 'vuefire'
import SignInButton from '../components/SignInButton.vue';
import SignOutButton from '../components/SignOutButton.vue';

const user = useCurrentUser()

</script>

<template>
    <div v-if="!user">
        <div>You're not logged in</div>
        <SignInButton/>
    </div>
    <div v-else>
        <h1> Welcome back, {{user.displayName}}!</h1>
        <SignOutButton/>
    </div>
</template> 