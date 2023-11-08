class Modal{
    constructor(){
        this.modal = document.querySelector(".modal-box");
    }
    open(){
        this.modal.style.display = "initial";
    }
    close(){
        this.modal.style.display = "none";
    }
    accept(){
        this.modal.style.display = "none";
    }
}
const modal = new Modal();
const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const acceptbtn = document.querySelector(".accept-btn");

openbtn.addEventListener("click",function(event){
    modal.open();
})
closebtn.addEventListener("click",function(event){
    modal.close();
})
acceptbtn.addEventListener("click",function(event){
    modal.accept();
})