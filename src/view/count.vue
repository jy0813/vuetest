<template>
  <div>
    <button @click="two()">출력</button>
  </div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      animals:["고양이", "재규어", "호랑이", "표범", "강아지", "원숭이", "사자", "고슴도치", "강아지", "원숭이", "호랑이",
        "표범","고슴도치", "사자", "호랑이", "고양이", "호랑이","원숭이", "사자", "늑대", "고양이", "강아지","고양이", "고슴도치", "호랑이", "재규어",
        "늑대", "호랑이", "고슴도치", "재규어", "원숭이", "고슴도치", "사자", "표범", "늑대", "고양이", "늑대", "고양이", "원숭이", "사자", "표범",
        "고양이", "재규어", "강아지", "고양이", "늑대", "표범", "고슴도치","원숭이", "강아지", "호랑이", "재규어", "고슴도치", "사자", "재규어", "고양이",
        "표범", "늑대", "고슴도치", "사자", "고양이", "호랑이", "표범", "호랑이", "재규어", "늑대", "강아지", "늑대", "고양이", "고양이", "사자",
        "강아지", "늑대","고슴도치", "늑대", "표범", "고양이", "재규어"],
    }
  },
  methods: {

    count() {
      console.log(this.animals.filter(element => '고양이' === element).length, '고양이');
      console.log(this.animals.filter(element => '재규어' === element).length, '재규어');
      console.log(this.animals.filter(element => '호랑이' === element).length, '호랑이');
      console.log(this.animals.filter(element => '표범' === element).length, '표범');
      console.log(this.animals.filter(element => '강아지' === element).length, '강아지');
      console.log(this.animals.filter(element => '원숭이' === element).length, '원숭이');
      console.log(this.animals.filter(element => '사자' === element).length, '사자');
      console.log(this.animals.filter(element => '고슴도치' === element).length, '고슴도치');
      console.log(this.animals.filter(element => '늑대' === element).length, '늑대');
    },
    print(){
      const animals = this.animals;
      const count = ['고양이', '재규어', '호랑이', '표범', '강아지','원숭이','사자','고슴도치','늑대']
      animals.forEach(function(element){
        if(!animals.includes(element)) {
          animals.push(element);
        }
      });
      console.log(count.push());
    },
    two() {
      // const animalObj = this.animals.map((item) => item.toString());
      // console.log(animalObj);


      const result = this.animals.filter((item) => item.toString() === '')
      console.log(result);

      const result2 = Object.assign({}, this.animals);
      console.log(result2);
      console.log(Object.keys(this.animals));
      console.log(Object.values(this.animals));

      function toObject(animals) {
        let arr = {};
        for (let i = 0; i < animals.length; ++i)
          arr[i] = animals[i];
        return arr;
      }
      toObject();

    }
  }
}
</script>

<style scoped>

</style>