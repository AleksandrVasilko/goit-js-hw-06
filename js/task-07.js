const textFontSize = document.querySelector('#text')

const textFontInput = document.querySelector('#font-size-control')



textFontInput.addEventListener('input', onInputChange)

function onInputChange(event) {
    textFontSize.style.fontSize = event.currentTarget.value + 'px'
    console.log(event.currentTarget.value)
}