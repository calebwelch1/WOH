<template>
<div>
<div class="container">
  <div class="col-span-12 h-full">
    <el-tabs v-model="currentTab" @tab-click="handleClick">
      <el-tab-pane label="woh" name="first">
         <div class="grid-col-12 w-full">
         <div class="col-span-8" style="background-color:white; height: 90vh; border: 4px solid blue;">
          <component @advanceGame="gameStep++" v-bind:is="currentGameScreen" @characterselect="p1 = Tyler"/>
          </div>
          <div class="col-span-4 flex-col" style="background-color:white; height: 90vh;border: 4px solid red;">
            <div id="item-box" class="flex-col" style="background-color:white; height: 50%;border: 4px solid green;">
            </div>
            <div id="character-box" class="flex-col" style="background-color:white; height: 50%;border: 4px solid pink;">
            <p style="color: black;">
            {{p1}}
            </p>
            </div>
          </div>
        </div>
      </el-tab-pane>
  </el-tabs>
   </div>
   </div>
  </div>
</template>
<script>
import { Tabs } from 'element-ui'
import blogtest from './blogtest.jpg';
import Start from './screens/Start.vue';
import CharacterSelect from './screens/CharacterSelect.vue';
import StoryTitle from './screens/StoryTitle.vue';
import {Character, Tyler } from './characters.js';

export default {
  name: 'HomeRouter',
  components:{
    elTabs:Tabs,
    Start,
    CharacterSelect,
    StoryTitle,
  },
  props: {
    msg: String
  },
 data() {
  return {
    blogtest,
    currentTab: 'first',
    Character,
    Tyler,
    p1:{},
    gameStep: 0,
    screens:[Start, CharacterSelect, StoryTitle],
  }
 },
 computed: {
   currentGameScreen(){
     return this.screens[this.gameStep];
   }
 },
   methods:{
    routeBlog(type){
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
