<template>
<div class="container">
    <div class="col-span-12 w-full flex-row h-20" :style="`background-color:white;background-repeat:no-repeat;justify-content: space-evenly;`">
        <div class="flex-row" style="justify-content: space-evenly; border: 1px solid black; width: 66%; margin: 1rem;">
            <div class="flex-col" style="justify-content: space-evenly; margin:auto;">
                <div class="h-16 w-20" :style="`background: url(${img});marginBottom:0rem;background-size: contain; background-repeat: repeat; cursor: pointer;`"/>
            </div>
            <div class="flex-col" style="justify-content: space-evenly; margin:auto;">
                <p style="color:black;">
                {{description}}
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'BlogItem',
  props: {
    img: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
  },
 data() {
  return {
    currentTab: 'first',
    none: false,
  }
 },
 methods: {
   handleClick(tab, event) {
     console.log(tab, event);
   }
 }
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
