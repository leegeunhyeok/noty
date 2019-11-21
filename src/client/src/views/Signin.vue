<template>
  <div class="sign-in">
    <div class="sign-in__title">Noty</div>
    <div class="sign-in__form">
      <div class="sign-in__form__control">
        <input type="text" spellcheck="false" placeholder="ID"
          @keypress.enter="login"
          v-model="id"
        >
      </div>
      <div class="sign-in__form__control">
        <input type="password" spellcheck="false" placeholder="Password"
          @keypress.enter="login"
          v-model="password"
        >
      </div>
      <div class="sign-in__form__control">
        <button @click="login">Login</button>
      </div>
    </div>
    <div class="sign-in__signup">
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'sign-in',
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const id = this.id
      const password = this.password

      if (!(id && password)) {
        return
      }

      const { data } = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($userId: String!, $password: String!) {
          login(userId: $userId, password: $password) {
            token,
            user {
              id
            }
          }
        }`,
        // Parameters
        variables: {
          userId: id,
          password
        }
      })

      /*
        type LoginResponse {
          token: String!
          user: User!
        }
       */
      if (data.login) {
        this.$store.commit('LOGIN', {
          token: data.login.token,
          userId: data.login.user.id
        })
        this.$router.push({ path: '/note' })
      } else {
        alert('Check your account')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.sign-in {
  @include page;
  @extend .wh-100;
  text-align: center;

  &__title {
    display: inline-block;
    margin-top: 100px;
    color: $tint;
    font-size: 5rem;
    border-bottom: 8px solid $bgTertiary;
  }

  &__form {
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-top: 180px;

    &__control {
      width: 100%;
      margin: 15px 0;

      input {
        outline: none;
        padding: 10px 20px;
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: $bgTertiary;
        font-size: 1.4rem;

        &::placeholder {
          color: $placeholder;
        }
      }

      button {
        cursor: pointer;
        outline: none;
        padding: 10px 20px;
        width: 100%;
        border: none;
        border-radius: 5px;
        color: $onTint;
        background-color: $tint;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }

  &__signup {

    a {
      color: $bgPrimary;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
