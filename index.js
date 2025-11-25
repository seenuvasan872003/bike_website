
var position = 0;
var cardWidth = 280;
var slider = document.getElementById("slider");

// Smooth animation
slider.style.transition = "transform 0.6s ease-in-out";

// Duplicate items → infinite scroll
slider.innerHTML = slider.innerHTML + slider.innerHTML;

var totalCards = slider.children.length;
var half = totalCards / 2;  // original count

function slide(direction) {

  if (direction === "right") {
    position = position - cardWidth;
  } else if (direction === "left") {
    position = position + cardWidth;
  }

  slider.style.transition = "transform 0.6s ease-in-out";
  slider.style.transform = "translateX(" + position + "px)";
}


// IMPORTANT: No arrow function here
slider.addEventListener("transitionend", function () {

  // Loop Right
  if (Math.abs(position) >= cardWidth * half) {
    slider.style.transition = "none";
    position = 0;
    slider.style.transform = "translateX(" + position + "px)";
  }

  // Loop Left
  if (position > 0) {
    slider.style.transition = "none";
    position = -cardWidth * (half - 1);
    slider.style.transform = "translateX(" + position + "px)";
  }

});



// TESTIMONIAL SECTION



 const testimonials = [
            {
                name: "VIJAY",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                text: "The Classic ago delivers smooth power with excellent low-end torque, making it perfect for both city rides and long cruising. Riders appreciate its stable handling and relaxed riding posture."
            },
            {
                name: "SARAH",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                text: "Absolutely fantastic experience! The bike's performance exceeded my expectations. It's smooth, reliable, and incredibly fun to ride. Highly recommended for anyone looking for quality."
            },
            {
                name: "RAJESH",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
                text: "Outstanding build quality and excellent customer service. The bike handles perfectly on any terrain. I've been using it for two years and it's still running like new."
            },
            {
                name: "PRIYA",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                text: "Best investment ever! The comfort level is unmatched. Fuel efficiency is great and the design is sleek. I get compliments everywhere I go with this beauty."
            }
        ];

        let currentIndex = 0;
        const mainCard = document.getElementById("mainCard");
        const profileImg = document.getElementById("profileImg");
        const nameText = document.getElementById("nameText");
        const testimonialText = document.getElementById("testimonialText");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        function updateTestimonial(index) {
            mainCard.classList.remove("card-enter");
            mainCard.classList.add("card-exit");

            setTimeout(() => {
                profileImg.src = testimonials[index].image;
                nameText.textContent = testimonials[index].name;
                testimonialText.textContent = testimonials[index].text;

                mainCard.classList.remove("card-exit");
                mainCard.classList.add("card-enter");
            }, 300);
        }

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        });