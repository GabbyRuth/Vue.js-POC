<script setup>
import { GoogleAuthProvider, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const user = useCurrentUser()
const auth = useFirebaseAuth()
const provider = new GoogleAuthProvider();

async function logout() {
    const provider = new GoogleAuthProvider()
    try {
        const result = await signOut(auth)
    } catch {
        alert("error")
    }
}
</script>

<template>
    <button @click="logout()"> logout</button>
</template>