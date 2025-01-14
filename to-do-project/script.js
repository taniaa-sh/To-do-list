let list = document.querySelector('#to-do-list')
let addInput = document.querySelector('#add-form  input')
let searchInput = document.querySelector('#search-form input')
let addBtn = document.querySelector('#add-form button')

list.addEventListener('click', (e) => {
    if (e.target.nodeName == 'SPAN' && e.target.className == 'delete-btn') {
        e.target.parentNode.remove()
        if (list.children.length == 0) {
            let listEmpty = document.createElement('div');
            listEmpty.style.textAlign = 'center'
            listEmpty.style.color = '#333'
            listEmpty.innerText = 'your list is empty'
            listEmpty.id = 'emptyMsg'
            list.appendChild(listEmpty)
        }
    }
})
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!addInput.value) {
        return
    }
    if (document.querySelector('#emptyMsg')) {
        document.querySelector('#emptyMsg').remove()
    }
    list.append(creatListItem(addInput.value))
    addInput.value = ''
})
function creatListItem(itemvalue) {
    let item = document.createElement('li')
    let title = document.createElement('span')
    let btn = document.createElement('span')
    item.className = 'to-do-item'
    title.className = 'title'
    title.innerText = itemvalue
    btn.className = 'delete-btn'
    btn.innerText = 'delete'
    item.appendChild(title)
    item.appendChild(btn)
    return item;
}
searchInput.addEventListener('input', (e) => {
    Array.from(list.children).forEach(element => {
        if (document.querySelector('#emptyMsg')) {
            return
        }
        if (element.querySelector('.title').innerText.tolowerCase().includes(e.target.value.tolowerCase)) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    })
})