<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['front', 'back'])
const flipped = ref(false)

</script>

<template>
    <div class="card" @click="flipped = !flipped">
        <div class="front" v-if="!flipped">
            {{  props.front }}
        </div>
        <div class="back" v-else>
            {{ props.back }}
        </div>
    </div>
</template>

<style scoped>

.card {
    width: 200px;
    height: 150px;
    background-color: white;
    color: black;
}

</style>