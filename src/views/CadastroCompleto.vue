<template>
  <div class="container-fluid">
    <h2 class="text-center mt-2 pt-2 pb-2">Cadastro de Fornecedores</h2>

    <div class="col-6">
      <div class="form-group-radios">
        <p>
          <label class="radio-inline col-sm-4 ms-4 ps-1">
            <input type="radio" name="optradio" value="juridica" v-model="tipoPessoa" />Pessoa Jurídica
          </label>
          <label class="radio-inline col-sm-4 pt-4">
            <input
              class="radio-line-check"
              type="radio"
              name="optradio"
              value="fisica"
              v-model="tipoPessoa"
            />Pessoa Física
          </label>
        </p>
      </div>

      <div class="form-group mt-3">
        <form-input
          inputClass="form-control mb-3"
          label="Nome Completo / Razao Social"
          v-model="form.nomeRazaoSocial"
        />
      </div>
      <div clas="form-group">
        <form-input
          inputClass="form-control mb-3"
          label="CPF / CNPJ"
          v-model="form.cpfCnpj"
          v-mask="'###.###.###-##'"
        />
      </div>

      <div clas="form-group" v-if="tipoPessoa === 'juridica'">
        <form-input inputClass="form-control mb-3" label="I.E" v-model="form.ie" />
      </div>

      <div clas="form-group">
        <form-input inputClass="form-control mb-3" label="Endereço" v-model="form.endereco" />
      </div>
      <div clas="form-group">
        <form-input inputClass="form-control mb-3" label="Bairro" v-model="form.bairro" />
      </div>
      <div clas="form-group">
        <form-input inputClass="form-control mb-3" label="Cidade" v-model="form.cidade" />
      </div>
      <div clas="form-group">
        <label class="control-country mb-3" for="inputEstado">Estado</label>
        <div class="select-country mb-3">
          <select id="inputEstado" class="form-control" v-model="form.estado">
            <option select>Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
      </div>
    </div>
    <form>
      <div class="row">
        <center>
        <button type="submit" class="btn btn-outline-primary" @click="cadastrar">Cadastrar</button>   
        </center>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from "../components/FormInput.vue";

export default {
  components: {
    FormInput,
  },
  data() {
    return {
      tipoPessoa: "fisica",
      form: {
        nomeRazaoSocial: "",
        cpfCnpj: "",
        ie: "",
        email: "",
      },
    };
  },
  mounted() {
    if (!this.$route.params.email) {
      this.$router.push("/");
      return;
    }

    const item = window.localStorage.getItem(this.$route.params.email);
    if (item == null) {
      this.$router.push("/");
      return;
    }

    this.form = JSON.parse(item);
  },
  methods: {
    cadastrar() {
      window.localStorage.removeItem(this.form.email)
      window.localStorage.setItem(this.form.email, JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
* {
  margin: 0 auto;
}
h2 {
  background-color: #2c3e50;
  color: #ffffff;
  font-size: 30px;
  font-weight: 800;
}
.container-fluid {
  background-color: #f2f2f2;
}

#juridica {
  padding-top: 23px;
  padding-left: 25px;
}
#fisica {
  padding-top: 5px;
  padding-left: 25px;
}
.btn-outline-primary {
  width: 150px;
  margin-right: 35px;
  margin-left: 55px;
}
.btn-outline-danger {
  width: 150px;
  margin-right: 35px;
}
</style>
