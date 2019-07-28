const rootNode = document.getElementById('root');

const todoItems = [
    // { isDone: false, id: 1, description: 'Todo 1' }
];

let setItemToStorage = (array, localStorageKey) => {
    localStorage.setItem(localStorageKey, JSON.stringify(array));
}

let localKeyToDo = 'Todo List',
    localKeyDone = 'Done list',
    getToDoKey = localStorage.getItem(localKeyToDo),
    getDoneKey = localStorage.getItem(localKeyDone);

const mainHash = '';
const addHash = '#add';
const modifyHash = '#modify';

let addNewElement = (e) => {
    let value = e.target.parentNode.childNodes[1].value;
    value = { isDone: false, id: todoItems.length + 1, description: value }
    todoItems.push(value);
    location.hash = mainHash;
}

let removeThis = (e) => {
    let ul = e.target.parentNode.parentNode;
    let li = e.target.parentNode;
    let id = parseInt(li.id);
    let uncheckedId = todoItems.findIndex(item => item.id === id);
    if (uncheckedId === -1) {
        return;
    }
    todoItems.splice(uncheckedId, 1);
    ul.removeChild(li);
    homePage();
}

let doneThis = (e) => {
    e.target.setAttribute('src', 'assets/img/done-s.png');
    let ul = e.target.parentNode.parentNode;
    let li = e.target.parentNode;
    ul.appendChild(li);

    let id = parseInt(li.id);
    let uncheckedId = todoItems.findIndex(item => item.id === id);

    if (uncheckedId === -1) {
        return;
    }
    todoItems[uncheckedId].isDone = true;
}

let homePage = () => {
    rootNode.innerHTML = '';
    let title = document.createElement('h1');
    title.innerText = 'Simple TODO application';

    let addButton = document.createElement('button');
    addButton.className = 'btn';
    addButton.innerText = 'Add new task'
    rootNode.appendChild(title);
    rootNode.appendChild(addButton);
    let listItem = todoItems.filter(item => {
        return item.isDone === false;
    })
        .concat(todoItems.filter(item => {
            return item.isDone === true;
        }));
    if (!listItem.length) {
        let isEmptyText = document.createElement('p');
        isEmptyText.innerText = 'No items';
        rootNode.appendChild(isEmptyText);
    }

    let ul = document.createElement('ul');
    rootNode.appendChild(ul);

    for (let i = 0; i < listItem.length; i++) {
        let li = document.createElement('li');
        let checkImage = '';
        let deleteImage = '<img src="assets/img/remove-s.jpg" class="list-icon" />'
        if (listItem[i].isDone) {
            checkImage = '<img src="assets/img/done-s.png" class="list-icon" />'
        } else {
            checkImage = '<img src="assets/img/todo-s.png" class="list-icon" />'
        }

        li.className = 'list-item';
        li.setAttribute('id', listItem[i].id);
        li.innerHTML = checkImage + '<p>'
            + `<a href="#modify/${li.id}">`
            + listItem[i].description + '</a></p>'
            + deleteImage;
        ul.appendChild(li);

        li.childNodes[0].addEventListener('click', doneThis, {
            once: true
        });
        li.childNodes[2].addEventListener('click', removeThis, {
            once: true
        });
    }

    addButton.addEventListener('click', () => {
        location.hash = addHash;
    });
}

let addPage = () => {
    rootNode.innerHTML = '';
    let title = document.createElement('h1');
    title.innerText = 'Add Task';

    let input = document.createElement('input');
    let br = document.createElement('br');

    let cancelButton = document.createElement('button');
    cancelButton.className = 'btn';
    cancelButton.innerText = 'Cancel';

    let addButton = document.createElement('button');
    addButton.className = 'btn';
    addButton.innerText = 'Add new task';

    rootNode.appendChild(title);
    rootNode.appendChild(input);
    rootNode.appendChild(br);
    rootNode.appendChild(cancelButton);
    rootNode.appendChild(addButton);
    cancelButton.addEventListener('click', () => {
        location.hash = mainHash;
    });
    addButton.addEventListener('click', addNewElement);
}

let modifyPage = () => {
    rootNode.innerHTML = '';
    let title = document.createElement('h1');
    title.innerText = 'Edit Task';

    let input = document.createElement('input');
    let br = document.createElement('br');

    let cancelButton = document.createElement('button');
    cancelButton.className = 'btn';
    cancelButton.innerText = 'Cancel';

    let addButton = document.createElement('button');
    addButton.className = 'btn';
    addButton.innerText = 'Save task';

    rootNode.appendChild(title);
    rootNode.appendChild(input);
    rootNode.appendChild(br);
    rootNode.appendChild(cancelButton);
    rootNode.appendChild(addButton);
    cancelButton.addEventListener('click', () => {
        location.hash = mainHash;
    });
    addButton.addEventListener('click', () => {
        let id = parseInt(location.hash.split('/').pop());
        let itemId = todoItems.find(item => item.id === id);
        if (!itemId) {
            window.location.hash = mainHash;
            return;
        }
        itemId.description = input.value;
        location.hash = mainHash;
    });

}

let checkCurrentHash = () => {
    if (location.hash === mainHash) {
        homePage();
    }

    if (location.hash === addHash) {
        addPage();
    }

    if (location.hash.includes(modifyHash)) {
        modifyPage();
    }
}

window.addEventListener('load', checkCurrentHash);
window.addEventListener('hashchange', checkCurrentHash);