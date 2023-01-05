
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var tasks = [];
var text = [];




function onDataReceived(text) {


  text = text.replace("\n", "");
  let y = text.split(" ")[0];
  var x = text.split(" ")[1];
  var z =text.slice(3);







  if (text === 'quit') {
    quit();
  }
  else if (text === 'exit') {
    quit();
  }
  else if (text === 'help') {
    help();
  }
  else if (y === "hello") {

    if (text.split(" ")[1] === undefined) {
      hello1()

    } else {

      hello(x)

    }

  }
  else if (text === 'list') {
    list()
  }
  else if (y === 'add') {
    if (x === undefined) {
      console.log("error");
    }
    else {
      add(z);
    }

  }
  else if (y ==='remove'){
    if (x === undefined){
      remove()
    }
    else if(x === "1"){
      remove1()
    }
    else if(x === "2"){
      remove2()
    }
    else{
      console.log("you enter a number that does not exist")
    }

  }
  else if (y === 'edit'){
    if (x === undefined){
    console.log("error")
    }
    else if (x === "new"){
     new1()
    }
    else {
      new2()
    }


  }
  

  else {
    unknownCommand(text);
  }
}





/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
//  *
 * @returns {void}
 */
function hello1() {
  console.log('hello!')
}



function hello(x) {
  console.log('hello' + " " + x + "!")
}




/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}


var tasks = [];
tasks.push('buy bread\n');
tasks.push('do the exercises\n');
tasks.push('clean the house\n');

function list() {

  for (let i = 0; i < tasks.length; i++) {
    console.log("task:" + (i + 1) + "-" + " " + tasks[i] + '\n');
  }
}


/*  Gives the list of  the commands*/

function help() {
  console.log('..........\n' + 'list of commands:\n' + 'hello\n' + 'hello ..(name)..\n' + 'quit\n' + 'exit\n' + 'help\n' + 'add ...\n' +'remove\n' +'remove 1\n'+'remove 2\n' + '..........')
}

/*  Add command to  the list of the commands*/
function add(z) {
  
  tasks.push(z);
  console.log(`add ${z} to the tasks list`)


}
function remove(){

  console.log(tasks.slice(-3, -1))
  
}

function remove1(){

  console.log(tasks.slice(-2))
  
}

function remove2(){
  

  console.log(tasks.slice(1,1))
  
}

function new1() {

  tasks[2]="new text"
  console.log(tasks)
}

function new2(){
  tasks[0]="new text"
  console.log(tasks)

}


// The following line starts the application
startApp("Amira")
