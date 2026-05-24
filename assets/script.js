gsap.registerPlugin(SplitText);

const smallCans = document.querySelectorAll(".cans img:nth-child(2)");
const activeSliders = document.querySelectorAll(".slide");
let cont = 0;

smallCans.forEach(smallCan => {
    smallCan.onclick = () => {
        const activeSlide = document.querySelector(".slide.active");
        activeSlide.classList.remove("active");
        if(cont == 3) {
            cont = 0;
        } else {
            cont = cont + 1;
        }
        activeSliders[cont].classList.add("active");
    }
});

const split = SplitText.create(".content h2", {
  type: "chars",
  mask: "chars"
});

gsap.from(split.chars, {
  y: 80,
  stagger: .1
});