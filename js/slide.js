// xử lí đếm ngày hết sale
var countDownDate = new Date("Dec 30, 2021 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "ngày " + hours + "giờ "
  + minutes + "phút " + seconds + "giây ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// xử  lí nút back top
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
  document.getElementById("btn_top").style.display = "block";
  } else {
  document.getElementById("btn_top").style.display = "none";
  }
  }
  
  document.getElementById('btn_top').addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  });
  // KHai bào hàm hiển thị slide
var slideIndex;
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide__item");
    var dots = document.getElementsByClassName("item_slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 4s
    setTimeout(showSlides, 5000);
  }
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}