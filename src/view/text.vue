<template>
  <div>
    <h2 data-title="당신의 삶을 더 품격 있게 만드는">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "text",
  data() {
    return {
      title:'당신의 삶을 더 품격 있게 만드는\n' + 'Z:IN의 맞춤제안'
    }
  },
}
</script>

<style scoped>

h2 {
  position: relative;
  font-size: 48px;
  line-height: 1.6;
  color:#a27855;
  white-space: pre-wrap;
}

h2::before {
  position: absolute;
  content: attr(data-title);
  color:#000;
}

</style>