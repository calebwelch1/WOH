<template>
<div class="container">
    <div class="col-span-12 flex-col h-20" style="background-color: slategrey;width: 100%; height: 100%;">
      <div class="flex-row">
        <div class="h-31 w-44 character" style="background-color:black; margin: 10px;" @click="$emit('characterselect') && $emit('advanceGame')">
        </div>
        <div class="flex-col">
          <div class="h-20 w-20" style="background-color:red; margin: 10px;">
          </div>
          <button class="h-10 w-20" style="border: 4px solid green; margin: 10px;">
          Start
          </button>
        </div>
      </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'Scissors0',
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
.character:hover{
  border: 4px solid white;
}
</style>
