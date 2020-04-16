<template>
  <div class="container">
    <SvgImage
      class="logo"
      height="110px"
      width="110px"
      :view-box.camel="'0 0 36 36'"
      name="logo/logo"
    />
    <div class="text">これをマスターすれば天才エンジニア？高沼カリキュラム</div>
    <div class="title">ログイン</div>
    <TextField v-model="email" class="field" type="email" placeholder="email" />
    <TextField v-model="password" class="field" type="password" placeholder="password" />
    <div class="button-wrapper">
      <Button class="button" variant="lime" @click="login">Login</Button>
      <Button class="button" to="/register"><span class="register">Register</span></Button>
    </div>
  </div>
</template>

<script>
import SvgImage from '~/components/SvgImage';
import TextField from '~/components/Inputs/TextField';
import Button from '~/components/Buttons/Button';

export default {
  components: {
    SvgImage,
    TextField,
    Button,
  },
  data() {
    return {
      email: 'k_usui@gmail.com',
      password: '123456',
    };
  },
  methods: {
    login() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient($color-image-overlay, $color-image-overlay),
    url('/img/back_image.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.logo {
  margin-bottom: 24px;
}

.text {
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: $color-paper;
  margin-bottom: 24px;
}

.title {
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: $color-paper;
  margin-bottom: 48px;
}

.field {
  height: 58px;
  width: 374px;
  background-color: $color-paper;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.05em;
  margin-bottom: 32px;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
}

.button {
  height: 48px;
  width: 182px;
  margin-left: 16px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
}

.register {
  color: $color-paper;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 25%;
    width: 50%;
    height: 2px;
    border-bottom: solid 1px $color-paper;
  }
}
</style>
