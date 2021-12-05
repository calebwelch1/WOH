<template>
<div class="container">
<div class="col-span-12 flex-col h-20" style="background-color: slategrey;width: 100%; height: 100%;">
      <div class="flex-row">
        <div class="h-31 w-32 character flex-col" style="background-color:black; margin: 10px;">
          <p style="color:white; font-weight:700; font-size: 1.6rem; margin-y: auto;">
          Your friend left you a notebook detailing the ritual<br>
          necessary to manifest this woman's spirit in our world<br>
          <br>
          It says that for the ritual you will need to draw a sigil<br>
          and light some holy candles at midnight<br>
          You can only hope your friend left them somewhere around school<br>
          <br>
          You should also check your friends notes<br>
          To make sure you know the correct steps for the ritual<br>
          </p>
        </div>
        <div class="flex-col">
          <div class="h-31 w-30" style="background-color:red; margin: 10px;">
          </div>
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
