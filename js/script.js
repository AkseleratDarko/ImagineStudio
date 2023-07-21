

if (document.documentElement.clientWidth > 1400) {
          const elem = document.querySelector('.gallery-item');
    const iso = new Isotope( elem, {
  
  itemSelector: '.gallery-img',
  })
}




 
    

 



let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};

var swiper = new Swiper(".mySwiper", {
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    
    keyboard: true,
    slidesPerView: 4,
  });

$(".modal_txt").on("submit", function(){
	$.ajax({
		url: '/mail.php',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			$('#modal-thanks').css('display','block');
		}
	});
});
