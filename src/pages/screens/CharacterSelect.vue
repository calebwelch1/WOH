<template>
<div class="container">
    <div class="col-span-12 flex-col h-20" style="background-color: slategrey;width: 100%; height: 100%;">
      <div class="flex-row">
        <div class="h-30 w-20 character" style="background-color:black; margin: 10px;" @click="$emit('characterselect') && $emit('advanceGame')">
        </div>
      </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'CharacterSelect',
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
