var typeEffect = new Typed(".multiText",{
    strings:["coder","developer","engineer"],
    loop: true,
    typeSpeed:100,
    backDelay:1500
})
const modal = document.querySelector(".modal");
const botaoTrailer = document.querySelector(".btn");
const botaoFecharModal = document.querySelector(".fechar-modal");
//link salvo na variavel
const video = document.getElementById("video");
const linkDoVideo = video.src;

    function alternarModal(){
    
    modal.classList.toggle("aberto");
}

    botaoTrailer.addEventListener("click", () => {
        alternarModal();//mudar modal no html
        video.setAttribute("src",linkDoVideo);
});

    botaoFecharModal.addEventListener("click", () =>{
        alternarModal();
        video.setAttribute("src","");
    });
