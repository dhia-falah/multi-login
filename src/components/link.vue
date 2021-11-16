<template>
    <div id="ppa">
        <center>
        <button v-if="userRole === 'siswa'">Siswa</button>
        <button v-if="userRole === 'guru'">Guru</button>
        <button v-if="userRole === 'admin'">Admin</button>
        </center>
    </div>
</template>

<script>
export default {
    name: "llink",
    computed: {
        userRole() {
            return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
        }
    }
}
</script>

<style scoped>
#ppa {
    padding-top: 25px;
}
</style>