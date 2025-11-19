<script setup> 
import { computed, ref, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { useRoute, useRouter } from 'vue-router'
import { collection, doc } from 'firebase/firestore'
import { db } from '../firebase_conf'

const router = useRouter()
const route = useRoute()
const tests = useCollection(collection(db, 'tests'))

const test_source = computed(() =>
  doc(db, 'tests', route.params.id)
)

const test = useDocument(test_source)

watch(test, (new_data, old_data)=>{
  if (! new_data) {
    router.push("/")
  }
})
</script>

<template>
    <div v-for="test in tests" :key="test.id">
        <RouterLink :to="{ name: 'testid', params: { id: test.id } }">{{test.text}}</RouterLink>
    </div>
</template>

<style>
.text-id {
    font-size: 4rem;
}
</style>