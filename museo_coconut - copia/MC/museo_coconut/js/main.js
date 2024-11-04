const d = document;

function onLoad() {

    slider();
    autoSlider()

    function autoSlider(){
        const $nextBtn = d.querySelector(".slider-btns .next");
        let control = false;
       

        function rotate(){
            const $slides = d.getElementById("slider")            
            let slider;
            $slides.addEventListener("mouseenter", (e)=> {
                control = true
                clearInterval(slider)  
                console.log(control);              
            })
            $slides.addEventListener("mouseleave", (e)=> {
                control = false     
                console.log(control);                                
            })

            if(!control) $nextBtn.click()
            
        }

        if(!control) slider = setInterval(rotate, 3000)
    
    }
    function slider() {     

        const $nextBtn = d.querySelector(".slider-btns .next");
        const $prevBtn = d.querySelector(".slider-btns .prev");
        const $slides = d.querySelectorAll(".slider-slide");
      
        let i = 0;
        
        d.addEventListener("click", (e) => {
          if (e.target === $prevBtn) {
            console.log(e.target);
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
      
            if (i < 0) {
              i = $slides.length - 1;
            }
      
            $slides[i].classList.add("active");
          }
      
          if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
      
            if (i > $slides.length - 1) {
              i = 0;
            }
      
            $slides[i].classList.add("active");
          }
        });
      }
}

function handleForm(e){
    
    console.log(e);
}