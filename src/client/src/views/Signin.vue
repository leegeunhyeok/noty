<template>
  <div class="sign-in">
    <div class="sign-in__title">Noty</div>
    <div class="sign-in__form">
      <div class="sign-in__form__control">
        <input type="text" spellcheck="false" placeholder="ID">
      </div>
      <div class="sign-in__form__control">
        <input type="password" spellcheck="false" placeholder="Password">
      </div>
      <div class="sign-in__form__control">
        <button>Login</button>
      </div>
    </div>
    <div class="sign-in__signup">
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign-in'
}
</script>

<style lang="scss">
@import '@/styles/common';

.sign-in {
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
