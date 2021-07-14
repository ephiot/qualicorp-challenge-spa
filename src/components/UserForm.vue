<template>
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="row.name"
        label="Nome"
        hint="Nome do usuário"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o nome do usuário']"
      />

      <q-input
        filled
        v-model="row.email"
        label="Email"
        hint="Email do usuário"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o email do usuário']"
      />

      <q-input
        filled
        v-model="row.phone"
        label="Telefone"
        hint="Telefone do usuário"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o telefone do usuário']"
      />

      <q-input
        filled
        v-model="row.cpf"
        label="CPF"
        hint="CPF do usuário"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o CPF do usuário']"
      />

      <div>
        <q-btn label="Salvar" type="button" color="primary" @click="doSubmit" />
        <q-btn label="Cancelar" type="button" color="red" flat class="q-ml-sm" @click="doCancel" />
      </div>
    </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserForm',

  data () {
    return {
      edit: false,
      row: {
        name: '',
        email: '',
        phone: '',
        cpf: ''
      },
      show: false
    }
  },

  methods: {
    setEdit (edit) {
      this.edit = edit || false
    },
    setData (data) {
      this.row = Object.assign({}, data)
    },
    doSubmit (e) {
      e.preventDefault()
      this.$emit('submit', { edit: this.edit, data: Object.assign({}, this.row) })
    },
    doCancel () {
      this.$emit('cancel')
    }
  }
})
</script>
