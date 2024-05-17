const input = document.getElementById('text')
const box = document.querySelectorAll('div')

const view = document.createElement('input')
view.type = 'text'
view.name = 'view'
view.id = 'view'
view.style.display = 'block'
view.style.widht = '100%'
view.style.outline = 'none'
view.style.padding = '10px 12px'

box.appendChild(view)

function readCharacteres() {
    const set = input.value != 0

    if (set) {
        view.value = ''
    }
}