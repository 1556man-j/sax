var savedTask = JSON.parse(localStorage.getItem('tasks'));
var  tasks = [];


if (savedTask) {
    tasks = savedTask;
    tasks.map(text =>{
        var li = document.createElement('li');
        var space = document.createElement('span');
        space.innerText = text;
        li.appendChild(space);
        document.getElementById('list').appendChild(li)
    })
}

var list = document.getElementsByTagName('li');
var i;
for (i = 0; i < list.length; i++){
    var span = document.createElement('button');
    var close = document.createTextNode('\u00D7');
    span.className = 'close';

    span.appendChild(close);
    list[i].appendChild(span);
}

var hide = document.getElementsByClassName('close');
        var i;
        for(i = 0; i < hide.length; i++){
        hide[i].onclick = function() {
            var div = this.parentElement;
            div.style.display ="none"
            var deleteTask = div.querySelector('span').innerText;
            var filteredTasks = tasks.filter(task =>{ return txt !== deleteTask })
            tasks = filteredTasks;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }}
//to add list when user press ADD
function enterBtn() {
    var text = document.getElementById('text').value;
    var li = document.createElement('li');
    let space = document.createElement('span')
    if(text.trim() == ""){
        alert("You must Write something!");
        return;
    }
    if (tasks.includes(text)){
        alert("Todo Already exists!")
    }
    else {
        space.innerHTML = text;
        li.appendChild(space);
        document.getElementById('list').appendChild(li);
        }
        tasks.push(text);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        document.getElementById('text').value = ""



        //to add close button
        var button = document.createElement('button');
        var close = document.createTextNode('\u00D7');
        button.appendChild(close);
        list[i].appendChild(button);
        button.className = "close"

        //make the close button closes the list
        for(i = 0; i < hide.length; i++){
        hide[i].onclick = function() {
            var div = this.parentElement;
            div.style.display ="none"
            var deleteTask = div.querySelector('span').innerText;
            var filteredTask = tasks.filter(task =>{ return text != deleteTask})
            tasks = filteredTask;
            localStorage.setItem('tasks', JSON.stringify(tasks));




            var dateInput = document.getElementById('date');
    var dateValue = dateInput.value;
    var dateMilliseconds = Date.parse(dateValue);
    var currentTime = new Date().getTime();
    var timeRemaining = dateMilliseconds - currentTime;
    list[i].appendChild(dateValue)
    var timer = setTimeout(function(){
        alert('Time is up');
    }, timeRemaining);

    var timerList = document.getElementById('list');
    list.textContent = "timer added for" + dateValue;
    timerList.appendChild(list)
        }}

         
}





function clearAll(){
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    var clear = document.getElementById('list').innerHTML= "<li style = 'display: none'></li>"
    console.log(tasks);
}