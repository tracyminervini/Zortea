<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>

    <div id="menu-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/">Institucional</router-link>
      <router-link to="/">Portifólio</router-link>
      <router-link to="/">Fábrica</router-link>
      <router-link to="/">Novas Energias</router-link>
      <router-link to="/">Equipamentos à Venda</router-link>
      <router-link to="/">Contato</router-link>
      <router-link to="/login">Fornecedor</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"]
};
</script>

<style scoped>
#nav {
  background-color: #ffffff;
  border-bottom: 4px solid #007cc2;
  padding: 6px 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#nav a {
  color: #333;
  text-decoration: none;
  margin: 10px;
  border-color: #ccc;
  transition: 0.5s;
}
#nav a:hover {
  color: rgb(105, 102, 102);
}
</style>
