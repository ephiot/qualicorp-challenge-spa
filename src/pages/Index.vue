<template>
  <q-page class="flex content-start q-pa-xl">
    <!-- Form dialog -->
    <user-form-modal ref="formModal" @submit="formAction" />

    <!-- Delete dialog -->
    <user-delete-confirm ref="deleteDialog" @delete="doDelete" />

    <!-- Actions -->
    <actions-bar @register="register" />

    <!-- Table -->
    <users-table :rows="users" @callEdit="callEdit" @callDelete="callDelete" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import ActionsBar from '../components/ActionsBar'
import UsersTable from '../components/UsersTable'
import UserDeleteConfirm from '../components/UserDeleteConfirm'
import UserFormModal from '../components/UserFormModal'

export default defineComponent({
  name: 'PageIndex',

  components: {
    ActionsBar,
    UsersTable,
    UserDeleteConfirm,
    UserFormModal
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  },

  methods: {
    ...mapActions('users', ['getUsers', 'storeUser', 'updateUser', 'deleteUser']),

    search (terms) {
      if (terms.length < 1) {
        return this.getUsers()
      }
      this.searchUsers(terms)
    },

    register () {
      this.$refs.formModal.open(null)
    },

    callDelete (row) {
      this.$refs.deleteDialog.open(row)
    },

    callEdit (row) {
      this.$refs.formModal.open(row)
    },

    formAction ({ data, edit }) {
      if (edit) {
        this.updateUser(data)
      } else {
        this.storeUser(data)
      }
      this.$refs.formModal.close()
    },

    doDelete (row) {
      this.deleteUser(row.id)
    }
  },

  mounted () {
    this.getUsers()
  }
})
</script>
