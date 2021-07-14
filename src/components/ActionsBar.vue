<template>
  <q-card class="fit q-mb-md">
    <q-card-section>
      <q-btn color="blue" title="Cadastrar" icon-right="add" @click="register" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ActionsBar',

  data () {
    return {
    }
  },

  methods: {
    register () {
      this.$emit('register')
    }
  }
})
</script>
