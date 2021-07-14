<template>
  <q-table
    class='full-width'
    :rows="rows"
    :columns="columns"
    row-key="name"
    color="amber"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.label }}
        </q-th>
        <q-th class='text-center'>
          Ações
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props" :key="`m_${props.row.index}`">
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.value }}
        </q-td>
        <q-td class='text-center'>
          <q-btn-group outline>
            <q-btn outline color="blue" title="Editar" icon-right="edit" @click="callEdit(props.row)" />
            <q-btn outline color="red" title="Excluir" icon-right="delete" @click="callDelete(props.row)" />
          </q-btn-group>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nome',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'email',
    required: true,
    label: 'Email',
    align: 'left',
    field: row => row.email,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'phone',
    required: true,
    label: 'Telefone',
    align: 'left',
    field: row => row.phone,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'cpf',
    required: true,
    label: 'CPF',
    align: 'left',
    field: row => row.cpf,
    format: val => `${val}`,
    sortable: true
  }
]

export default defineComponent({
  name: 'UsersTable',

  props: {
    rows: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      columns
    }
  },

  methods: {
    search () {
      this.$emit('search', this.terms)
    },

    callEdit (row) {
      this.$emit('callEdit', row)
    },

    callDelete (row) {
      this.$emit('callDelete', row)
    }
  }
})
</script>
