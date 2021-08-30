const about = document.querySelector('#about');
const resume = document.querySelector('#resume')
const portfolio = document.querySelector('#portfolio')

const about_Path = document.querySelector('.about_Path')
const resume_Path = document.querySelector('.resume_Path')
const portfolio_Path = document.querySelector('.portfolio_Path')

const welcome = document.querySelector('.hello')
const iam = document.querySelector('.iam')
const name = document.querySelector('.name')
const front = document.querySelector('.front')
const dev = document.querySelector('.dev')

const paragraph = document.querySelectorAll('p')

const manager = {
        about: about_Path,
        resume: resume_Path,
        portfolio: portfolio_Path
}



about.onmouseover = function() {
        shapeManager('about')
        spread('circle_on')
}
about.onmouseout =  function() {
        shapeManager('about_off')
        spread('circle_off')
        
}


resume.onmouseover = function() {
        shapeManager('resume')
        spread('triangle_on')
}
resume.onmouseout = function() {
        shapeManager('resume_off')
        spread('triangle_off')
}


portfolio.onmouseover = function() {
        shapeManager('portfolio')
        spread('square_on')
}
portfolio.onmouseout = function() {
        shapeManager('portfolio_off')
        spread('square_off')
}




function shapeManager(param) {
        switch(param) {

                case 'about':
                        manager['about'].style.stroke = '#99ACC2'
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
                        welcome.classList.add('welcome__greet--circle--top')
                        iam.classList.add('welcome__greet--circle--left')
                        name.classList.add('welcome__greet--circle--right')
                        front.classList.add('welcome__greet--circle--bottom--left')
                        dev.classList.add('welcome__greet--circle--bottom--right')
                        break;

                case 'circle_off':
                        welcome.classList.remove('welcome__greet--circle--top')
                        iam.classList.remove('welcome__greet--circle--left')
                        name.classList.remove('welcome__greet--circle--right')
                        front.classList.remove('welcome__greet--circle--bottom--left')
                        dev.classList.remove('welcome__greet--circle--bottom--right')
                        break;

                case 'triangle_on':
                        welcome.classList.add('welcome__greet--triangle--left')
                        iam.classList.add('welcome__greet--triangle--right')
                        name.classList.add('welcome__greet--triangle--visible--none')
                        front.classList.add('welcome__greet--triangle--bottom')
                        dev.classList.add('welcome__greet--triangle--bottom')
                        break;

                case 'triangle_off':
                        name.classList.remove('welcome__greet--triangle--visible--none')
                        welcome.classList.remove('welcome__greet--triangle--left')
                        iam.classList.remove('welcome__greet--triangle--right')
                        front.classList.remove('welcome__greet--triangle--bottom')
                        dev.classList.remove('welcome__greet--triangle--bottom')
                        break;

                case 'square_on':
                        welcome.classList.add('welcome__greet--triangle--visible--none')
                        iam.classList.add('welcome__greet--triangle--visible--none')
                        name.classList.add('welcome__greet--square--top')
                        front.classList.add('welcome__greet--square--bottom')
                        dev.classList.add('welcome__greet--square--bottom')
                        break;

                case 'square_off':
                        welcome.classList.remove('welcome__greet--triangle--visible--none')
                        iam.classList.remove('welcome__greet--triangle--visible--none')
                        name.classList.remove('welcome__greet--square--top')
                        front.classList.remove('welcome__greet--square--bottom')
                        dev.classList.remove('welcome__greet--square--bottom')
                        break;
                }
        return 0;

}



