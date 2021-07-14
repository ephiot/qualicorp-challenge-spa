<template>
  <q-card class="fit q-mb-md">
    <q-card-section>
      <q-input filled v-model="terms" type="text" prefix="Busca:" @keydown.enter="search">
        <template v-slot:append>
          <q-btn color="blue" title="Pesquisar" icon-right="search" @click="search" />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',

  data () {
    return {
      terms: ''
    }
  },

  methods: {
    search () {
      this.$emit('search', this.terms)
    }
  }
})
</script>
