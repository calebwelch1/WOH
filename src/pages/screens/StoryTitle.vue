<template>
<div class="container">
    <div class="col-span-12 flex-col h-20" style="background-color: slategrey;width: 100%; height: 100%;">
      <div class="flex-row">
        <div class="h-31 w-32 character flex-col" style="background-color:black; margin: 10px;">
          <p style="color:white; font-weight:700; font-size: 1.6rem; margin-y: auto;">
          SPINE CHILLING STORY OF SCHOOL SCISSORS<br>
          ---------------------------------------<br>
          Another boy from your school <br>
          has disappeared. Rumor has it, <br>
          a terrible woman has returned <br>
          from the grave, A woman with <br>
          the widest smile...<br>
          <br>
          and the sharpest scisssors.<br>
          </p>
        </div>
        <div class="flex-col">
          <div class="h-20 w-30" style="background-color:red; margin: 10px;">
          </div>
          <button class="h-10 w-30" style="border: 4px solid green; margin: 10px;" @click="$emit('advanceGame')">
          Start
          </button>
        </div>
      </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'StoryTitle',
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
.character{
  border: 4px solid white;
}
</style>
