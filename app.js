// jan load hoga
// dhyan dena ki click hua ki nahi ? --> event Listening 
// programming language

function doTheMagic(tag,link){
    document.getElementById(tag).classList.replace('hidden',"show");
    document.getElementById(tag).setAttribute('src',link);

}
document
.getElementById('button1')
.addEventListener('click',
()=>{

    doTheMagic('img','./assets/happy.png');
}
)
document
.getElementById('button2')
.addEventListener('click',
()=>{
    doTheMagic('img','./assets/happy.png');

}
)