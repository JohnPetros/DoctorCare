// String (textos)
// Number (número)
// Boolean (true | false)

window.addEventListener('scroll', onScroll)


function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuCurrentSection(home)
    activateMenuCurrentSection(services)
    activateMenuCurrentSection(about)
    activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar?

    // o topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

    // informações dos dados e da lógica
    console.log (
        'O topo da seção chegou ou passou da linha?',
        sectionTopReachedOrPassedTargetLine
        )

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?
    console.log(sectionHeight)

    // a seção termina onde?
    const sectionEndAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine =  sectionEndAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    // limites da seção
    const sectionBoundaries = sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    if (sectionBoundaries) {
        menuElement.classList.add('active')
    } else {
        menuElement.classList.remove('active')
    }
}

function showNavOnScroll() {
    const navigation = document.querySelector('nav')
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    // console.log(scrollY)
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
   document.body.classList.add('menu-expanded') 
}

function closeMenu() {
    document.body.classList.remove('menu-expanded') 
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duratiion: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content`)