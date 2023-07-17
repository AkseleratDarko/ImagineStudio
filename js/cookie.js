
  import Cookies from 'js-cookie'
  import './main.css'
  
  /**
   * Lib: Cookies js
   * https://github.com/js-cookie/js-cookie
   */
  
  
  
  document.addEventListener('DOMContentLoaded', cookieNotify)
  
  const COOKIES_NAME = 'visit'
  const expires = new Date(new Date().getTime() + 2 * 60 * 1000) // Устанавиливаем время жизни Cookies - в данном случае время жизни 2 мин.
  
  function cookieNotify() {
    if (!Cookies.get(COOKIES_NAME)) {
      document.querySelector('body').insertAdjacentHTML('beforeend', getHtml())
      const cookiesAlert = document.querySelector('.cookies-alert--js')
      const cookiesBtn = document.querySelector('.cookies-alert__btn--js')
  
      // Add class in cookies-alert block
      setTimeout(() => {
        cookiesAlert.classList.add('is-show')
      }, 1000)
  
      // Click on btn and set cookies
      cookiesBtn.addEventListener('click', setCookies)
  
      function setCookies() {
        cookiesAlert.classList.remove('is-show')
        setTimeout(() => {
          cookiesAlert.remove()
        }, 1000)
  
        Cookies.set(COOKIES_NAME, true, {
          expires
        })
      }
    }
  }