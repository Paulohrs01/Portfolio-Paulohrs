// Efeito: -titulo para textos:

const observerTitulos = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-titulo')    
        } else {
            entry.target.classList.remove('show-titulo')
        }
    })
})

const elementsTitulos = document.querySelectorAll('.hidden-titulo')

elementsTitulos.forEach((elementsTitulos) => observerTitulos.observe(elementsTitulos))

// Efeito de elementos vindo da esquerda:

const observerEsquerda = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-esquerda')    
        } else {
            entry.target.classList.remove('show-esquerda')
        }
    })
})

const elementsEsquerda = document.querySelectorAll('.hidden-esquerda')

elementsEsquerda.forEach((elementsEsquerda) => observerEsquerda.observe(elementsEsquerda))

// Efeito de elementos vindo da direita:

const observerDireita = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-direita')    
        } else {
            entry.target.classList.remove('show-direita')
        }
    })
})

const elementsDireita = document.querySelectorAll('.hidden-direita')

elementsDireita.forEach((elementsDireita) => observerDireita.observe(elementsDireita))

/*  Efeito para img mobile/desktop do home, efeito vindo da direita com opacidade 0.5 para funcionar o hover com opacidade 1.0 */

const observerOpacity = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-opacity')    
        } else {
            entry.target.classList.remove('show-opacity')
        }
    })
})

const elementsOpacity = document.querySelectorAll('.hidden-opacity')

elementsOpacity.forEach((elementsOpacity) => observerOpacity.observe(elementsOpacity))
