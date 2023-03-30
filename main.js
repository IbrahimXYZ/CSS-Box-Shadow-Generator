const offsetX = document.getElementById('offsetX');
const offsetY = document.getElementById('offsetY');
const blurRadius = document.getElementById('blurRadius');
const blurSpread = document.getElementById('blurSpread');
const opacity = document.getElementById('opacity');
const color = document.getElementById('color');
const textBox = document.getElementById('textbox');
const button = document.getElementById('copy');
const box = document.querySelector('.box')

const update = () =>{
    const val = `${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${blurSpread.value}px ${color.value}`
    textBox.value = val;
    box.style.boxShadow = val;
}

const copy = () =>{
    const copyText = document.getElementById('textbox')
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value)
}

[offsetX,offsetY,blurRadius,blurSpread,color].forEach(elemnt=>{
   elemnt.oninput = update; 
})

update();