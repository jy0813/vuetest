<template>
  <div>
    <div class="wrap">
    <h2 id="color">
      <span class="one" v-for="(item, index) in company" :key="item + `company`" @click="colorRandom($event)" @mouseover="colorRandom2($event, index)">{{ item }}</span>
    </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "animation",
  data() {
    return {
      company: 'spadeCompany',
    }
  },
  methods: {
    colorRandom(e) {
      const colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
      const idx = e.target.parentNode.childNodes.length;
      for (let i = 0; i < idx; i++) {
        e.target.parentNode.childNodes[i].style.color = colorCode;
      }
    },
    colorRandom2(e) {
      const colorCode2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
      e.currentTarget.style.color = colorCode2;
    }
  },
}
</script>

<style scoped>

.wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2  {
  display: block;
  font-size: 100px;
  color:#000000;
  cursor: pointer;
  user-select: none;
}

h2 span {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0% {
    transform:translateY(0px)
  }
  50% {
    transform:translateY(-30px);
  }
  100% {
    transform:translateY(0px)
  }
}

h2 span:nth-child(1) {
  animation-delay:0s;
}
h2 span:nth-child(2) {
  animation-delay:.1s;
}
h2 span:nth-child(3) {
  animation-delay:.2s;
}
h2 span:nth-child(4) {
  animation-delay:.3s;
}
h2 span:nth-child(5) {
  animation-delay:.4s;
}
h2 span:nth-child(6) {
  animation-delay:.5s;
}
h2 span:nth-child(7) {
  animation-delay:.6s;
}
h2 span:nth-child(8) {
  animation-delay:.7s;
}
h2 span:nth-child(9) {
  animation-delay:.8s;
}
h2 span:nth-child(10) {
  animation-delay:.9s;
}
h2 span:nth-child(11) {
  animation-delay:1s;
}
h2 span:nth-child(12) {
  animation-delay:1.1s;
}



</style>