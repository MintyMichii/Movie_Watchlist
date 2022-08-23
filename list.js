


//Save new Watch-List
function saveProgram(e){

let what = document.getElementById('program').value;
console.log ("words", what); 
let when = document = document.getElementById('when').value;


let program = {
    what,
    when
};

if(localStorage.getItem('programs') === null){
let = programs = [];
programs.push(programs);
localStorage.setItem('programs', JSON.stringify(programs));
} else {
    let programs = JSON.parse(localStorage.getItem)('programs');
    programs.push(program);
    localStorage.setItem('programs', JSON.stringify(programs))
} 
getPrograms();
// Reset form-Program
document.getElementById('form-Program').requestFullscreen();
e.preventDefault();
}
function addNewClass(){  


    console.log("in inside the addnewclass function")

    //Declares variable that get the value of the id of "what"
let what = document.getElementById('what').value;
console.log ("This returns the text from the what variable:", what); 

//Declares variable that gets the value of the id of "when"
let when = document = document.getElementById('when').value;
console.log("This returns the text from the when variable:", when);

//Need method to push the "what" and "when varibles to list"
// Use apend child method to push the text 

function






}
// Delete Watch-list

function deleteProgram(what) {
    let programs = JSON.parse(localStorage.getItem('what'));
for (let i = 0; i < programs.length; i++){
    if(programs[i].what == what) {
        programs.splice(i, 1);
    }
}
localStorage.setItem('programs', JSON.stringify(programs));
}

// Show Watch-list
function getPrograms() {
    
    
                         let programs = JSON.parse(localStorage.getItem('programs'));
                        let programView = document.getElementById('programs');
                        programView.innerHTML = ''

                        for(let i = 0; i < programs.length; i++){
                        let what = programs[i].what;
                        let when = programs[i].when;

                        programsView.innerHTML += 
                        `<div class = 'card mb-3'>
                        <div class = 'card-body'>
                        <div class = "row">
                         <div class = "col-sm-3 text-left">
                         <p>${what}</p>
                         </div>
             <div class = "col-sm-7 text-left">
             <p>${when}</p>
            </div>
            <div class = "col-sm-2 text-left">
               <a href = "#" onclick = "deleteProgram('${what}')" class = "btn btn-danger ml-5"></a>
            </div>
            </div>
        </div>`;
        
        
        
        
    }


    

}

getPrograms(); 