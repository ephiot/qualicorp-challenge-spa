<template>
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="row.user"
        label="Usuário"
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
        <q-btn label="Salvar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="button" color="red" flat class="q-ml-sm" @click="doCancel" />
      </div>
    </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VehicleForm',

  data () {
    return {
      edit: false,
      row: {
        user: '',
        email: '',
        phone: '',
        cpf: ''
      },
      show: false
    }
  },

  methods: {
    setData (data) {
      this.row = Object.assign({}, data)
    },
    doSubmit () {
      this.$emit('submit', { edit: this.edit, data: this.row })
    },
    doCancel () {
      this.$emit('cancel')
    }
  }
})
</script>
