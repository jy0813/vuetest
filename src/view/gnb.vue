<template>
  <div>
    <nav>
      <div class="logo_box">
          <img src="@/assets/img/logo.png">
      </div>
      <ul class="nav_gnb">
        <li class="nav_gnb_depth1" v-for="(item, i) in list" :key="'list' + i" :class="{is_active : i === activeIndex}" @click="() => activeIndex = i">
          <button>{{item.li}}</button>
          <span></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "gnb",
  data() {
    return {
      activeIndex:0,
      is_active: false,
      list: [
        {
          li:'정보보안 설비'
        },
        {
          li:'개인정보제공'
        },
        {
          li:'비식별조치검증'
        },
      ]
    }
  },
}
</script>

<style scoped>

nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: #33476D;
}

.logo_box {
  margin:28px 0 22px;
  text-align: center;
}

img {
  width: 243px;
  height: 30px;
}

.nav_gnb_depth1 {
  position: relative;
  padding-left:30px;
}

.nav_gnb_depth1 button {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color:#D0DDF2;
  height: 53px;
  line-height: 53px;
}

.nav_gnb_depth1.is_active button {
  background-color: #fff;
  border-radius: 10px 0 0 10px;
  font-weight: 700;
  color:#000000;
}

.nav_gnb_depth1.is_active::before {
  position: absolute;
  content: '';
  top: -25px;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #fff;
}

.nav_gnb_depth1.is_active::after {
  position: absolute;
  content: '';
  top: -25px;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #334779;
  border-radius: 0 25px 0 0;
  transform: rotate(90deg);
}

.nav_gnb_depth1.is_active + .nav_gnb_depth1::before {
  position: absolute;
  content: '';
  top:0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #fff;
}

.nav_gnb_depth1.is_active + .nav_gnb_depth1::after {
  position: absolute;
  content: '';
  top:0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #334779;
  border-radius: 0 25px 0 0;
}




</style>