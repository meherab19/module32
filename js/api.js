function userButton(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => userData(users))
}
 
function userData(users){
    const ul = document.getElementById("usersList");
    for(const user of users ){
        const li=document.createElement('li');
        li.innerText=`name:-${user.name}`;
        ul.appendChild(li);
    }
    
}