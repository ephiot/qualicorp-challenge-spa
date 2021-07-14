<template>
  <q-page class="flex content-start q-pa-xl">
    <!-- Form dialog -->
    <user-form-modal ref="formModal" />

    <!-- Delete dialog -->
    <user-delete-confirm ref="deleteDialog" @delete="doDelete" />

    <!-- Search -->
    <search-bar @search="search" />

    <!-- Table -->
    <users-table :rows="users" @callEdit="callEdit" @callDelete="callDelete" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import SearchBar from '../components/SearchBar'
import UsersTable from '../components/UsersTable'
import UserDeleteConfirm from '../components/UserDeleteConfirm'
import UserFormModal from '../components/UserFormModal'

export default defineComponent({
  name: 'PageIndex',

  components: {
    SearchBar,
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
    ...mapActions('users', ['getUsers', 'deleteUser']),

    search (terms) {
      if (terms.length < 1) {
        return this.getUsers()
      }
      this.searchUsers(terms)
    },

    callDelete (row) {
      this.$refs.deleteDialog.open(row)
    },

    callEdit (row) {
      this.$refs.formModal.open(row)
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
