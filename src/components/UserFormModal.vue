<template>
    <q-dialog v-model="show" persistent transition-show="scale" transition-hide="scale">
      <q-card>
        <q-card-section class="row items-center">
          <user-form ref="form" @submit="doSubmit" @cancel="close" />
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import UserForm from './UserForm'

export default defineComponent({
  name: 'UserFormModal',

  components: {
    UserForm
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    doSubmit (data, edit) {
      this.$emit('submit', { data, edit })
    },
    open (row) {
      this.show = true
      setTimeout(() => this.$refs.form.setData(row), 100)
    },
    close () {
      this.show = false
    }
  }
})
</script>
