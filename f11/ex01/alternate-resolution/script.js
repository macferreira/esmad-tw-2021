let styleButton = document.getElementById('jsstyle');
styleButton.addEventListener('click', js_style);

function js_style() {
    let textElement = document.getElementById('text')

    textElement.style.fontSize = '14pt'
    textElement.style.fontFamily = 'Comic Sans MS'
    textElement.style.color = 'green'
}
