<template>
    <q-dialog v-model="show" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="dangerous" color="primary" text-color="red" />
          <span class="q-ml-sm">Tem certeza que deseja deletar '{{row.user}}' ?.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Deixa pra lá" color="primary" v-close-popup />
          <q-btn flat label="Deletar agora" color="red" @click="doDelete" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserDeleteConfirm',

  data () {
    return {
      row: { user: 'unknown' },
      show: false
    }
  },

  methods: {
    doDelete () {
      this.$emit('delete', this.row)
    },
    open (row) {
      this.row = row
      this.show = true
    },
    close () {
      this.show = false
    }
  }
})
</script>
