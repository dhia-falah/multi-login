
<template>
<div>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col">
        <h1>Silahkan Registrasi</h1><br><br>
        <label for="">username:</label><br>
        <input v-model="username" style="border-radius: 20px; width: 8cm;" type="email" placeholder="Email"><br><br>
        <label for="">password:</label><br>
        <input v-model="password" style="border-radius: 20px; width: 8cm;" type="password" placeholder="Password"><br><br>
        <input style="border-radius: 20px; width: 8cm; background-color: white;" type="submit" value="register" @click="login">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        password: this.password,
        role: "siswa",
      };
      const register = await axios.post("http://localhost:3000/useres", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
};
</script>
 
<!--<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      useres: {},
    };
  },
  methods: {
    async log() {
      const user = await axios.post("http://localhost:3000/users");
      this.useres = user.data;
    },
    login() {
      const login = this.useres.find(
        (data) =>
          data.username === this.username && data.password === this.password
      );
      if (login === undefined) {
        alert("Username Or Password Not Found");
      } else {
          var convertToString = JSON.stringify(login);
          sessionStorage.setItem("USER_DATA", convertToString);
          this.$router.push("/");
          window.location.reload();
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>-->