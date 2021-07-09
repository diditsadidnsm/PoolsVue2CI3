<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    const currentPath = this.$router.history.current.path;

    if (window.localStorage.getItem("authenticated") === "false") {
      this.$router.push("/login");
    }

    if (currentPath === "/" || currentPath === "/app") {
      this.$router.push("/login");
    }
  },
};

// Socket Connection

// var mysql      = require(mysql);
// var connection = mysql.createConnection({
//   host     : '188.166.181.108:81',
//   user     : 'vino',
//   password : 'Zevito_134046'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();
</script>

<style src="./styles/theme.scss" lang="scss" />
