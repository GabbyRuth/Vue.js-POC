<script setup> 
import { defineProps } from 'vue'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>

<template>
    <p class="text-id"> {{ props.id }}</p>
</template>

<style>
.text-id {
    font-size: 4rem;
}
</style>