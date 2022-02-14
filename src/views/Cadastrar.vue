<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-6 mt-5">
        <img src="../assets/create.svg" class="img-create" />
      </div>

      <div class="col">
        <h1 class="text-center mt-5 ms-5">Faça o seu cadastro</h1>
        <div class="col-md-6 offset-md-3 col-sm-5 mt-4">
          <form-input
            labelClass="label pb-1"
            inputClass="form-control"
            label="Nome / Razão Social"
            placeholder="Digite o Nome / Razao Social"
            v-model="form.nomeRazaoSocial"
          />
          <div v-if="v$.form.nomeRazaoSocial.$error">Nome/Razao Social Invalido</div>
        </div>
        <div class="col-md-6 offset-md-3 col-sm-5 mt-3">
          <form-input
            labelClass="label pb-1"
            inputClass="form-control"
            label="CPF / CNPJ"
            placeholder="CPF / CNPJ"
            v-model="form.cpfCnpj"
          />
          <div v-if="v$.form.cpfCnpj.$error">CPF/CNPJ Invalido</div>
        </div>
        <div class="col-md-6 offset-md-3 col-sm-5 mt-3">
          <form-input
            labelClass="label pb-1"
            inputClass="form-control"
            label="Email"
            placeholder="Email"
            v-model="form.email"
          />
          <div v-if="v$.form.email.$error">Email Invalido</div>
        </div>
        <div class="col-md-6 offset-md-3 col-sm-5 mt-3">
          <form-input
            labelClass="label pb-1"
            inputClass="form-control"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            v-model="form.email"
          />
          <div v-if="v$.form.password.$error">Password Invalido</div>

          <button type="button" class="btn btn-primary mt-5" style="min-width: 300px" @click="cadastrar">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

import FormInput from "../components/FormInput.vue";

export default {
  components: {
    FormInput
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      form: {
        nomeRazaoSocial: "",
        cpfCnpj: "",
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        nomeRazaoSocial: {
          required,
        },
        cpfCnpj: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(6),
        },
      },
    }
  },
  methods: {
    async cadastrar() {
      // valida o formulario com as regras do validations
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        return
      }

      // limpa os erros
      this.v$.$reset()

      // tenta encontrar um cadastro na localStorage pelo email digitado
      // se encontrar significa que o cadastro ja existe
      const item = window.localStorage.getItem(this.form.email)
      if (item !== "") {
        window.alert("email ja cadastrado")
        return
      }

      // adiciona o formulario na local storage para depois a gente usar ele
      window.localStorage.setItem(this.form.email, JSON.stringify(this.form));

      // Estando tudo certo vai para a pagina de cadastro completo passando o email como parametro
      this.$router.push({ path: '/cadastrocompleto', params: { email: this.form.email } });
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #f2f2f2;
}
h1 {
  font-size: 32px;
}

label {
  font-size: 16px;
}
.img-create {
  width: 700px;
  height: 500px;
}
</style>
