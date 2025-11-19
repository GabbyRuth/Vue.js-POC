<script setup>
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const user = useCurrentUser()
const auth = useFirebaseAuth()
const provider = new GoogleAuthProvider();

async function login() {
    try {
        const result = await signInWithPopup(auth, provider)
    } catch {
        alert("error")
    }
}
</script>

<template>
     <button @click="login()"> login</button>
</template>