<template>
<div class="container-fluid">
  <h2 class="text-center mt-2 pt-2 pb-2">Cadastro de Fornecedores</h2>

  <div class="col-6">
    <div class="form-group-radios">
      <p>
        <label class="radio-inline col-sm-4 ms-4 ps-1">
          <input
            type="radio"
            name="optradio"
            value="juridica"
            v-model="tipoPessoa"
          />Pessoa Jurídica
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

    <div id="fisica" v-if="tipoPessoa === 'fisica'">
      <div class="form-group mt-3">
        <label for="name">Nome Completo</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label for="name">CPF</label>
        <input
          class="form-control mb-3"
          type="text"
          v-model="cpf"
          v-mask="'###.###.###-##'"
        />
      </div>
      <div clas="form-group">
        <label for="name">Endereço</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label for="name">Bairro</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label for="name">Cidade</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label class="control-country mb-3" for="inputEstado">Estado</label>
        <div class="select-country mb-3">
          <select id="inputEstado" class="form-control">
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

    <!-- PJ -->
    <div id="juridica" v-if="tipoPessoa === 'juridica'">
      <div clas="form-group">
        <label for="name">Razão Social</label>
        <input class="form-control mb-3" type="text" />
      </div>

      <div clas="form-group ">
        <label>CNPJ</label>
        <input
          class="form-control mb-3"
          type="text"
          v-model="cnpj"
          v-mask="'##.###.###/####-##'"
        />
      </div>
      <div clas="form-group">
        <label>I.E</label>
        <input
          class="form-control mb-3"
          type="text"
          v-model="ie"
          v-mask="'##.###.###-#'"
        />
      </div>

      <div clas="form-group">
        <label for="name">Endereço</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label for="name">Bairro</label>
        <input class="form-control mb-3" type="text" />
      </div>
      <div clas="form-group">
        <label for="name">Cidade</label>
        <input class="form-control mb-3" type="text" />
      </div>

      <div clas="form-group">
        <label class="control-country mb-3" for="inputEstado">Estado</label>
        <div class="select-country mb-3">
          <select id="inputEstado" class="form-control">
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
  </div>
  <form>
    <div class="row">
      <center>
        <button
          type="submit"
          class="btn btn-outline-primary"
          @click="cadastrar"
        >
          Cadastrar
        </button>

        <button 
        type="reset" 
        class="btn btn-outline-danger" 
        @click="Limpar()">
          Limpar
        </button>
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
        email: "",
        password: "",
        cnpj: "",
        ie: "",
        cpf: "",
      },
    };
  },
  updated() {
    console.log(this.tipoPessoa);
  },
  mounted() {
    if (!this.$route.params.email) {
      this.$route.push("/");
      return;
    }

    const item = window.localStorage.getItem(this.$route.params.email);
    if (item == "") {
      this.$route.push("/");
      return;
    }

    this.form = JSON.parse(item);
  },
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
