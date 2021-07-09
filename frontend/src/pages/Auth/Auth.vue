<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        <b-img class="img-rounded" src="https://upload.wikimedia.org/wikipedia/en/e/ef/Toei_Animation_logo.svg"></b-img>
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <center>
        <h1>Jangan Nakal Yaah</h1>\
      </center>
    </b-container>
    <footer class="auth-footer">
      2021 &copy; Pools App - Made by <a href="https://pools.com/">Zevitsoft</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  data() {
    return {
      errorMessage: null,
    };
  },
};
</script>
