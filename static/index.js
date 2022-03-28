const submit = document.querySelectorAll(".btn")[0];

function change(){
    document.location.href = "/";
}
submit.addEventListener('click',()=>{
    document.querySelectorAll(".tag")[0].innerHTML = 'Thank you for taking the Assessment. we will reach out to you soon!';
    setTimeout(change,2000);
})