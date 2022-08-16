
class list {
    constructor(name, When) {
        this.name = name;
        this.When = When;

    }
}

//The program class is a class that represents a program. It has an id, a name, lists, and  methods to add and delete lists.
class program {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.lists = [];
    }

    addlist(list) {
        this.lists.push(list);
    }

    deletelist(list) {
        let index = this.lists.indexOf(list);
        this.lists.splice(index, 1);
    }
}

let programs = [];
let programId = 0;

//Adding EVENT LISTENER to element with id "New-program."" When the element is clicked, it'll push a new program to the array and activate the drawDOM function

onClick('new-program', () => {
    programs.push(new program(programId++, getValue('new-program-name')))
    drawDOM();
});


function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;  //@returns The element that was clicked.
}

/**
  //It returns the value of the element with the id that is passed to it
 @param id //The id of the element you want to get the value of.
 @returns //The value of the element with the id that is passed in.
 */
function getValue(id) {
    return document.getElementById(id).value; 
}

//Creating a table for the programs
function drawDOM() {
    let programDiv = document.getElementById('programs');
    clearElement(programDiv);
    for (program of programs) {
        let table = createprogramTable(program);
        let title = document.createElement('h2');
        title.innerHTML = program.name;
        title.appendChild(createDeleteprogramButton(program));
        programDiv.appendChild(title);
        programDiv.appendChild(table);
        for (list of program.lists) {
            createlistRow(program, table, list);
        }
    }
}

/**
  @param program //the program object
  @param table //element
  @param list //object
 */
function createlistRow(program, table, list) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = list.name;
    row.insertCell(1).innerHTML = list.When;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(program, list));
}

/**
 //It creates a button element and returns the button element.
 //The onClick event handler is a function that removes the list from the program's lists array 
 //The drawDOM function is called because the DOM needs to be updated to reflect the change in the data.
 @param program - The program object that the list belongs to.
 @param list - the list object
 @returns A button element.
 */
function createDeleteRowButton(program, list) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = program.lists.indexOf(list);
        program.lists.splice(index, 1);
        drawDOM();
    };
    return btn;
}

/**
 @param program //the program object
 @returns //A button element.
 */
function createDeleteprogramButton(program) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Media';
    btn.onclick = () => {
        let index = programs.indexOf(program);
        programs.splice(index, 1);
        drawDOM();
    }
    return btn;
}

/**
@param program  //The program object that the list is being added to
@returns //A button element with the class name of btn btn-primary
 */
function createNewlistButton(program) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        program.lists.push(new list(getValue(`name-input-${program.id}`), getValue(`When-input-${program.id}`)));
        drawDOM();
    }
    return btn;
}

/**
 @param program //It creates a table with a header row and a form row.
 @returns //A table with a header row and a form row.
 */
function createprogramTable(program) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-light table-shadow');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let WhenColumn = document.createElement('th')
    nameColumn.innerHTML = 'Where can I watch this?';
    WhenColumn.innerHTML = 'When are you going to watch?';
    row.appendChild(nameColumn);
    row.appendChild(WhenColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let WhenTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${program.id}`);
    nameInput.setAttribute('type', 'type');
    nameInput.setAttribute('Class', 'form-control');
    let WhenInput = document.createElement('input');
    WhenInput.setAttribute('id', `When-input-${program.id}`);
    WhenInput.setAttribute('type', 'type');
    WhenInput.setAttribute('Class', 'form-control');
    let newlistButton = createNewlistButton(program);
    nameTh.appendChild(nameInput);
    WhenTh.appendChild(WhenInput);
    createTh.appendChild(newlistButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(WhenTh);
    formRow.appendChild(createTh);
    return table;
}

/**
@param element //The element to clear.
 */
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}