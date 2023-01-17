const onClickMenu = () => {
  console.log('clicked')
  const navMenu = document.querySelector('#nav-menu')
  const navToggle = document.querySelector('#nav-toggle')

  navMenu.classList.toggle('toggle')

  if (navMenu.classList.contains('toggle')) {
    navToggle.innerHTML = '<i class="fa fa-times"></i>'
  } else {
    navToggle.innerHTML = '<i class="fa fa-bars"></i>'
  }
}
