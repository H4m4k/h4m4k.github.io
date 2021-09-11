const about_Nav = document.querySelector('.nav-About');
const resume_Nav = document.querySelector('.nav-Resume')
const portfolio_Nav = document.querySelector('.nav-Portfolio')

const about_Path = document.querySelector('.about_Path')
const resume_Path = document.querySelector('.resume_Path')
const portfolio_Path = document.querySelector('.portfolio_Path')

const about_Window = document.querySelector('.about')
const resume_Window = document.querySelector('.resume')

const welcome = document.querySelector('.welcome')
const hello = document.querySelector('.hello')
const iam = document.querySelector('.iam')
const name = document.querySelector('.name')
const front = document.querySelector('.front')
const dev = document.querySelector('.dev')


const manager = {
        about: about_Path,
        resume: resume_Path,
        portfolio: portfolio_Path,
        about_Window: about_Window,
        resume_Window: resume_Window
}

let click = 'no'





about_Nav.addEventListener('click', function() {
        event.preventDefault()
        about_Window.classList.toggle('off')
        shapeManager('about_off')
        spread('circle_off')
        clickCheck('about_Window')
})
about_Nav.onmouseover = function() {
        if(click !== "yes") {
                shapeManager('about')
                spread('circle_on')
        } else {
                shapeManager('about_off')
                spread('vanish')
        }
}
about_Nav.onmouseout =  function() {
        shapeManager('about_off')
        spread('circle_off')       
}




resume_Nav.addEventListener('click', function() {
        event.preventDefault()
        resume_Window.classList.toggle('off')
        shapeManager('resume_off')
        spread('triangle_off')
        clickCheck('resume_Window')
})
resume_Nav.onmouseover = function() {
        if(click !== "yes") {
                shapeManager('resume')
                spread('triangle_on')
        } else {
                shapeManager('resume_off')
                spread('vanish')
        }
}
resume_Nav.onmouseout = function() {
        shapeManager('resume_off')
        spread('triangle_off')
}


portfolio_Nav.onmouseover = function() {
        shapeManager('portfolio')
        spread('square_on')
}
portfolio_Nav.onmouseout = function() {
        shapeManager('portfolio_off')
        spread('square_off')
}




function shapeManager(param) {
        switch(param) {

                case 'about':
                        manager['about'].style.stroke = '#6683A3'
                        manager['about'].parentElement.classList.add('on_Top')
                        manager['about'].parentElement.classList.remove('off')
                        break;

                case 'resume':
                        manager['resume'].style.stroke = '#782323'
                        manager['resume'].parentElement.classList.add('on_Top')
                        manager['resume'].parentElement.classList.remove('off')
                        break;

                case 'portfolio':
                        manager['portfolio'].style.stroke = '#97CC04'
                        manager['portfolio'].parentElement.classList.add('on_Top')
                        manager['portfolio'].parentElement.classList.remove('off')
                        break;

                case 'about_off':
                        manager['about'].style.stroke = '#333745'
                        manager['about'].parentElement.classList.add('off')
                        manager['about'].parentElement.classList.remove('on_Top')
                        break;

                case 'resume_off':
                        manager['resume'].style.stroke = '#333745'
                        manager['resume'].parentElement.classList.add('off')
                        manager['resume'].parentElement.classList.remove('on_Top')
                        break;
                
                case 'portfolio_off':
                        manager['portfolio'].style.stroke = '#333745'
                        manager['portfolio'].parentElement.classList.add('off')
                        manager['portfolio'].parentElement.classList.remove('on_Top')
                        
        }
  return 0;
}

function spread(param) {
        switch(param) {
                case 'circle_on':
                        hello.classList.add('welcome__greet--circle--top')
                        iam.classList.add('welcome__greet--circle--left')
                        name.classList.add('welcome__greet--circle--right')
                        front.classList.add('welcome__greet--circle--bottom--left')
                        dev.classList.add('welcome__greet--circle--bottom--right')
                        break;

                case 'circle_off':
                        hello.classList.remove('welcome__greet--circle--top')
                        iam.classList.remove('welcome__greet--circle--left')
                        name.classList.remove('welcome__greet--circle--right')
                        front.classList.remove('welcome__greet--circle--bottom--left')
                        dev.classList.remove('welcome__greet--circle--bottom--right')
                        break;

                case 'triangle_on':
                        hello.classList.add('welcome__greet--triangle--left')
                        iam.classList.add('welcome__greet--triangle--right')
                        front.classList.add('welcome__greet--triangle--bottom')
                        dev.classList.add('welcome__greet--triangle--bottom')
                        break;

                case 'triangle_off':
                        hello.classList.remove('welcome__greet--triangle--left')
                        iam.classList.remove('welcome__greet--triangle--right')
                        front.classList.remove('welcome__greet--triangle--bottom')
                        dev.classList.remove('welcome__greet--triangle--bottom')
                        break;

                case 'square_on':
                        name.classList.add('welcome__greet--square--top')
                        front.classList.add('welcome__greet--square--bottom')
                        dev.classList.add('welcome__greet--square--bottom')
                        break;

                case 'square_off':
                        hello.classList.remove('welcome__greet--triangle--visible--none')
                        iam.classList.remove('welcome__greet--triangle--visible--none')
                        name.classList.remove('welcome__greet--square--top')
                        front.classList.remove('welcome__greet--square--bottom')
                        dev.classList.remove('welcome__greet--square--bottom')
                        break;

                case 'vanish':
                        welcome.classList.toggle('off')
                                
                }
        return 0;

}


function clickCheck(parameter) {
        if( manager[parameter].classList.value.includes('off')) {
                return click = 'no'
        } else {
                return click = 'yes'
        }
}


