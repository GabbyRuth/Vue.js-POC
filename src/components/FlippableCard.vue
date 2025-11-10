<script setup>
import { ref } from 'vue'
const props = defineProps({ isFlipped: Boolean })
const emit = defineEmits(['flip', 'unflip'])
</script>

<template>
    <div class="card" v-if="isFlipped" @click="$emit('unflip')">front</div>
    <div class="card" v-else  @click="$emit('flip')">back</div>
</template>

<style scoped>

.card {
    width: 200px;
    height: 150px;
    background-color: white;
    color: black;
}

</style>