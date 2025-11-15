<script setup>
import { ref } from 'vue'
import EditableSpan from '../components/EditableSpan.vue'
import CounterButton from '../components/CounterButton.vue'
import FlippableCard from '../components/FlippableCard.vue'

import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '../firebase_conf'

const tests = useCollection(collection(db, 'tests'))

const name = ref('Gabby')
const whichFlipped = ref(-1)
</script>

<template>
  <main class="testing-container">
    <ul>
    <li v-for="test in tests" :key="test.id">
      <span>{{ test.text }}</span>
    </li>
  </ul>
    <h3>Editable Span:</h3>
    <EditableSpan :value="name" @input="(val) => (name = val)" />
    <h3>Counter Button:</h3>
    <CounterButton/>
    <h3>"Flippable" Card:</h3>
    <FlippableCard :isFlipped = "whichFlipped == 0" @flip="whichFlipped = 0" @unflip="whichFlipped = -1"/>
    <FlippableCard :isFlipped = "whichFlipped == 1" @flip="whichFlipped = 1" @unflip="whichFlipped = -1"/>
    <FlippableCard :isFlipped = "whichFlipped == 2" @flip="whichFlipped = 2" @unflip="whichFlipped = -1"/>
    <FlippableCard :isFlipped = "whichFlipped == 3" @flip="whichFlipped = 3" @unflip="whichFlipped = -1"/>
  </main>
</template>

<style>
.testing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>