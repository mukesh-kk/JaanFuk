// jan load hoga
// dhyan dena ki click hua ki nahi ? --> event Listening 
// programming language

document
.getElementById('button1')
.addEventListener('click',
()=>{

document.getElementById('img').classList.replace('hidden',"show");
document.getElementById('img').setAttribute('src','./assets/happy.png');

}
)
document
.getElementById('button2')
.addEventListener('click',
()=>{
    
document.getElementById('img').classList.replace('hidden',"show");
document.getElementById('img').setAttribute('src','./assets/angry.png');

}
)