---
title: "Tags"
---

<script setup>
import { ref, computed } from 'vue'

const docs = __DOCS_WITH_TAGS__
const query = ref('')

// Todos los tags únicos
const allTags = [...new Set(docs.flatMap(d => (Array.isArray(d.tags) ? d.tags : [])))]

// Filtrado por query
const filteredDocs = computed(() =>
  docs.filter(d => {
    if (!query.value) return true
    const q = query.value.toLowerCase()
    const matchTitle = d.title?.toLowerCase().includes(q)
    const matchTag = Array.isArray(d.tags) && d.tags.some(t => t.toLowerCase().includes(q))
    return matchTitle || matchTag
  })
)

// Agrupar docs por tag
const docsByTag = computed(() =>
  allTags.map(tag => ({
    tag,
    docs: filteredDocs.value.filter(d => Array.isArray(d.tags) && d.tags.includes(tag))
  })).filter(group => group.docs.length > 0) // solo mostrar tags con docs
)
</script>

# Buscar por tags o título

<input
  v-model="query"
  placeholder="Buscar por título o tag..."
  class="p-2 w-full border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<div v-for="group in docsByTag" :key="group.tag" class="mb-6">
  <h3 class="text-lg font-bold mb-2">{{ group.tag }}</h3>
  <ul class="list-disc pl-6">
    <li v-for="doc in group.docs" :key="doc.file">
      <a :href="`/${doc.file.replace(/\.md$/, '')}`">{{ doc.title }}</a>
    </li>
  </ul>
</div>
