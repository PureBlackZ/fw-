<template>
  <div>
    <span>组件1</span>
    <p v-for="item in msg" :key="item.age">{{ item.name }}</p>
    <input type="text" style="width: 200px" v-model="query" @keyup.enter="search" />
	<div v-for="(item,index) in searchList" :key="index">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      msg: [
        {
          name: "Candy",
          age: "20",
          addr: "深圳",
        },
        {
          name: "Ada",
          age: "22",
          addr: "福建",
        },
        {
          name: "Daisy",
          age: "25",
          addr: "江苏",
        },
        {
          name: "Ben",
          age: "19",
          addr: "安徽",
        },
      ],
	searchList:[]
    };
  },
  methods: {
    search() {
		this.searchList = []
		this.msg.forEach((item)=>{
			if(item.name.indexOf(this.query) != -1){
				console.log(item.name.indexOf(this.query));
				this.searchList.push(item)
			}
		})
	},
  },
};
</script>
<style lang=""></style>
