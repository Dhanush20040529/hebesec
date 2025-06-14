document.addEventListener("readystatechange",(evevt)=>{
     if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
})

const initApp = ()=>{
    const menuIcon = document.querySelector(".drop-down-btn")
    const listItems = document.querySelector(".drop-down-navbar")
    const closeBtn = document.querySelector('.close-btn')
    const header = document.querySelector(".header")
    
    

    menuIcon.addEventListener("click", ()=>{
        listItems.style.right = "0px"
        menuIcon.style.display = "none"
        closeBtn.style.display = "block"

    })
    closeBtn.addEventListener("click", ()=>{
        listItems.style.right = "-5000px"
        menuIcon.style.display = "block"
        closeBtn.style.display = "none"

    })
}