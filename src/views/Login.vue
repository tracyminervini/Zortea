<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <h1 class="d-flex justify-content-center mb-5 mt-5 ps- title-login">
          Login
        </h1>
        <div class="form-group d-flex justify-content-start">
          <div class="col-md-6 offset-md-3">
            <form-input
              labelClass="label pb-1 ps-2 "
              inputClass="form-control mb-3"
              label="Email"
              placeholder="Digite seu email"
              type="email"
              v-model="form.email"
            />
            <div v-if="v$.form.email.$error">Email invalido</div>
          </div>
        </div>
        <div class="form-group d-flex justify-content-start">
          <div class="col-md-6 offset-md-3">
            <form-input
              labelClass="label pb-1 ps-2"
              inputClass="form-control"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              v-model="form.password"
            />
            <div v-if="v$.form.password.$error">Senha invalida</div>
          </div>
        </div>

        <div class="form-group form-check d-flex justify-content-start">
          <div class="col-md-6 offset-md-2 mb-3 ps-5">
            <input
              type="checkbox"
              class="form-check-input ms-1 mt-2"
              id="check"
            />
            <label
              class="label ms-1 pt-1 pb-1 ps-1"
              id="form-check-label"
              for="check"
              >Mantenha-me conectado</label
            >
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <a class="forgot-password" href="#">Esqueci a senha</a>
        </div>

        <div class="d-flex justify-content-center">
          <button class="btn0 btn btn-dark" style="min-width: 320px" @click="login">
            Login
          </button>
        </div>
        <hr />

        <div class="text-center">
          <p>Ainda não possui conta?</p>
          <button
            class="btn1 btn btn-primary"
            style="min-width: 320px"
            @click="cadastrar"
          >
            Cadastrar
          </button>
        </div>
      </div>

      <div class="col-6">
        <img src="../assets/login.svg" class="img-login" />
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

import FormInput from "../components/FormInput.vue";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: {
    FormInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(6),
        },
      },
    };
  },
  methods: {
    async login() {
      // valida o formulario com as regras do validations
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

      // limpa os erros
      this.v$.$reset();

      // tenta encontrar um cadastro na localStorage pelo email digitado
      const item = window.localStorage.getItem(this.form.email);
      if (!item) {
        window.alert("email nao cadastrado");
        return;
      }

      // Caso encontrado, verifica se a senha esta igual a digitada
      const obj = JSON.parse(item);
      if (obj.password !== this.form.password) {
        window.alert("email ou senha invalidos");
        return;
      }

      // Estando tudo certo vai para a pagina de cadastro completo passando o email como parametro
      this.$router.push({
        path: "/cadastrocompleto",
        params: { email: this.form.email },
      });
    },
    cadastrar() {
      this.$router.push("/cadastrar");
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
* {
  font-family: "Oxygen", sans-serif;
}

.row-login {
  margin-left: 0;
}

.container-fluid {
  background-color: #f2f2f2;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 800px;
  height: 600px;
}

a {
  margin-right: 170px;
  margin-bottom: 25px;
}

.btn0 {
  box-shadow: 0 0 40px 40px #141414 inset, 0 0 0 0 #141414;
-webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  
}
.btn0:hover {
  box-shadow: 0 0 5px 0 #f3f6f8 inset, 0 0 5px 4px #2f2f30;
}

.btn1 {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.btn1:hover {
  box-shadow: 0 0 5px 0 #3498db inset, 0 0 5px 4px #3498db;
}
</style>
