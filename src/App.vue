<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'
import EditableSpan from './components/EditableSpan.vue'
import CounterButton from './components/CounterButton.vue'
import FlippableCard from './components/FlippableCard.vue'

const name = ref('Gabby')

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <main class="main-container">
    <h3>Editable Span:</h3>
    <EditableSpan :value="name" @input="(val) => (name = val)" />
    <h3>Counter Button:</h3>
    <CounterButton/>
    <h3>"Flippable" Card:</h3>
    <FlippableCard front="Moikka" back="Hello"/>
</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
