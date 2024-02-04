const showPwd = document.querySelectorAll('.show-pwd');
const inputPwd = document.querySelectorAll('input[type=password]');
// console.log(inputPwd,showPwd);
showPwd.forEach((show,index)=>{
    show.addEventListener('click',()=>{
        if(inputPwd[index].getAttribute('type') == 'password')
        {
            inputPwd[index].setAttribute('type','text');
            show.innerHTML= '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
        
        }
        else
        {
            inputPwd[index].setAttribute('type','password');
            show.innerHTML= '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
        
        }
    })
});