var swiper = new Swiper('.blog-slider',{
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invent:false,
    }, 
    pagination:{
        el:'.blog-slider__pagination',
        clickable: true
    },
    autoplay: {
        delay: 5000,
    },
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000, 
    },
  });
var typeEffect = new Typed(".multiText",{
    strings:[" como uma garota 🦾"],
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

//slides
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}