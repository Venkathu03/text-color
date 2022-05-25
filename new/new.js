var element = document.getElementById('input')

element.addEventListener('keydown',color)

function color() {
  var bgclr=element.value
  element.style.color=bgclr
  console.log(bgclr)
}

// var element=document.getElementById('input')
// var button= document.getElementById('btn')
// button.addEventListener('click',color)
// function color() {
//   var text=element.value
//   element.style.color=text
// }