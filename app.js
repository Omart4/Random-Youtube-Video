const mainScreen = document.getElementsByClassName('main-screen')
const loadingScreen = document.getElementsByClassName('loading-screen')
const linkScreen = document.getElementsByClassName('link-screen')
const generateButton = document.getElementById("generate")

const generateLink = () =>{
    loadingScreen[0].style.display = "none"
    linkScreen[0].style.display = "flex"
}
const showLoading = () =>{
    mainScreen[0].style.display = "none"
    loadingScreen[0].style.display = "flex"
}
generateButton.addEventListener('click',()=>{
    showLoading()
    setTimeout(()=>{
        generateLink()
    },3000)
})
