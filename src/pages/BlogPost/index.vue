<template>
<div>
<div class="container">
  <div class="col-span-12">
         <div class="col-span-12 w-full flex-col">
            <div id="myDocument" class="w-full h-40 " style="background-color:green;position:relative;">
            </div>
            <div class="w-full h-40 " style="background-color:blue;position:relative;">
            </div>
        </div>
   </div>
   </div>
  </div>
</template>
<script>

export default {
  name: 'BlogPost',
  components:{
  },
  props: {
    msg: String
  },
 data() {
  return {
    currentTab: 'first',
    none: false,
  }
 },
   methods:{
    routeArt(type){
      this.$router.push({ path: 'BlogPost', params: { artType: type } })
    },
  },
}
</script>

<style lang="scss" scoped>

/deep/ body {
  margin: 0 !important;
}

.container{
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
height: 100%;
width:100%;
margin:0;
justify-items: center;
overflow: auto;
}
/deep/.el-tabs__header{
  margin: 0;
}
/deep/.el-tabs__nav {
  float:none;
}
/deep/.el-tabs__active-bar{
  visibility: hidden;
}

/deep/.el-tabs__nav-wrap {
  color:white;
  background-color: black;
  justify-items:center;
}

/deep/.el-tabs__item.is-active {
  position: relative;
  color: white;
}

// /deep/.el-tabs__item.is-active::after {
//   position: absolute;
//   content: '';
//   width: 4rem;
//   height: 0.1rem;
//   top:2rem;
//   right:0.8rem;
//   background-color: white;
//   transition: all .3s;
// }

/deep/.el-tabs__item {
  color: #b7b7b7;
}
</style>
