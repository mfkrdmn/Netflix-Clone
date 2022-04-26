const faqs = document.querySelectorAll(".faq");

faqs.forEach(function(fq){

    fq.addEventListener("click",function(){
        fq.classList.toggle("test");
    })

})   
