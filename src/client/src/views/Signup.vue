<template>
  <div class="sign-up">
    <div class="sign-up__title">Noty</div>
    <div class="sign-up__form">
      <div class="sign-up__form__control">
        <input type="text" spellcheck="false" placeholder="ID"
          v-model="id"
        >
      </div>
      <div class="sign-up__form__control">
        <input type="password" spellcheck="false" placeholder="Password"
          v-model="password"
        >
      </div>
      <div class="sign-up__form__control">
        <input type="password" spellcheck="false" placeholder="Password"
          v-model="password_"
        >
      </div>
      <div class="sign-up__form__control">
        <input type="text" spellcheck="false" placeholder="Name"
          v-model="name"
        >
      </div>
      <div class="sign-up__form__control">
        <button @click="register">Submit</button>
      </div>
    </div>
    <div class="sign-up__signup">
      <router-link to="/signin">Back to main</router-link>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'sign-up',
  data () {
    return {
      id: '',
      password: '',
      password_: '',
      name: ''
    }
  },
  methods: {
    async register () {
      const id = this.id
      const password = this.password
      const name = this.name

      if (!(id && password && name)) {
        return
      }

      if (password !== this.password_) {
        console.error('비밀번호를 확인해주세요')
        return
      }

      const result = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($userId: String!, $name: String!,
          $password: String!) {
          register(userId: $userId, name: $name, password: $password)
        }`,
        // Parameters
        variables: {
          userId: id,
          name,
          password
        }
      })

      console.log(result)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.sign-up {
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
