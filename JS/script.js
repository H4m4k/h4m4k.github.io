// *_Nav constants are the nav menu links
const about_Nav = document.querySelector('.nav-About');
const resume_Nav = document.querySelector('.nav-Resume')
const portfolio_Nav = document.querySelector('.nav-Portfolio')

// *_Path constants are the shapes that show up when nav menu link is hovered
const about_Path = document.querySelector('.about_Path')
const resume_Path = document.querySelector('.resume_Path')
const portfolio_Path = document.querySelector('.portfolio_Path')

// *_Window constants are the content windows showing up when nav menu link is clicked
const about_Window = document.querySelector('.about')
const resume_Window = document.querySelector('.resume')
//const portfolio_Window = 

// Below are constants that represent the animated text when hovering over nav link ( Hello I am Paweł FrontEnd Developer)
const welcome = document.querySelector('.welcome__div')
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




// * about_Nav show about_Window on click by removing the off class
// * about_Nav (resume_Window, portfolio_Window) on click disable other active windows by adding the off class
// * shapeManager is a function to control the SVG shapes (cricle, triangle, square) and add on_Top class
// * spread is a function to control the spread of the welcome text (Hello I am Paweł FrontEnd Developer)
// * clickCheck is to control display of SVG shapes and welcome text if user clicks any nav link


about_Nav.addEventListener('click', function() {
        event.preventDefault()
        shapeManager('about_circle-off')
        spread('about_anim-off')
        clickCheck('about_Window')
        about_Window.classList.toggle('off')
        portfolio_Window.classList.add('off')
        resume_Window.classList.add('off')
})
about_Nav.onmouseover = function() {
        if(click !== "yes") {
                shapeManager('about_circle')
                spread('about_anim')
        } else {
                shapeManager('about_circle-off')
                spread('about_anim-off')
        }
}
about_Nav.onmouseout =  function() {
        shapeManager('about_circle-off')
        spread('about_anim-off')       
}




resume_Nav.addEventListener('click', function() {
        event.preventDefault()
        shapeManager('resume_off')
        spread('triangle_anim-off')
        resume_Window.classList.toggle('off')
        about_Window.classList.add('off')
        portfolio_Window.classList.add('off')
        clickCheck('resume_Window')
})
resume_Nav.onmouseover = function() {
        if(click !== "yes") {
                shapeManager('resume')
                spread('triangle_anim')
        } else {
                shapeManager('resume_off')
                spread('triangle_anim-off')
        }
}
resume_Nav.onmouseout = function() {
        shapeManager('resume_off')
        spread('triangle_anim-off')
}


portfolio_Nav.addEventListener('click', function() {
        event.preventDefault()
        portfolio_Window.classList.toggle('off')
        about_Window.classList.add('off')
        resume_Window.classList.add('off')
        shapeManager('resume_off')
        spread('triangle_anim-off')
        clickCheck('resume_Window')
})

portfolio_Nav.onmouseover = function() {
        shapeManager('portfolio')
        spread('square_on')
}
portfolio_Nav.onmouseout = function() {
        shapeManager('portfolio_off')
        spread('square_off')
}


function clickCheck(parameter) {
        if( manager[parameter].classList.value.includes('off')) {
                return click = 'no'
        } else {
                return click = 'yes'
        }
}



function shapeManager(param) {
        switch(param) {

                case 'about_circle':
                        manager['about'].style.stroke = '#6683A3'
                        manager['about'].parentElement.classList.add('on_Top')
                        manager['about'].parentElement.classList.remove('off')
                        break;

                case 'resume':
                        manager['resume'].style.stroke = '#782323'
                        manager['resume'].parentElement.classList.add('on_Top')
                        resume_Window.classList.add('on_Top')
                        manager['resume'].parentElement.classList.remove('off')
                        break;

                case 'portfolio':
                        manager['portfolio'].style.stroke = '#97CC04'
                        manager['portfolio'].parentElement.classList.add('on_Top')
                        manager['portfolio'].parentElement.classList.remove('off')
                        break;

                case 'about_circle-off':
                        manager['about'].style.stroke = '#333745'
                        manager['about'].parentElement.classList.add('off')
                        manager['about'].parentElement.classList.remove('on_Top')
                        break;

                case 'resume_off':
                        manager['resume'].style.stroke = '#333745'
                        manager['resume'].parentElement.classList.add('off')
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
                case 'about_anim':
                        text_Color('#f1a403')
                        hello.style.transform = 'translate(-50%,-3em)'
                        iam.style.transform = 'translateX(-3em)'
                        name.style.transform = 'translateX(3em)'
                        front.style.transform = 'translate(-2em,6.5em)'
                        dev.style.transform = 'translate(2em,6.5em)'
                        break;

                case 'about_anim-off':
                        text_Color('#142142')
                        hello.style.transform = 'translate(-50%,0)'
                        iam.style.transform = 'translateX(50%)'
                        name.style.transform = 'translateX(0)'
                        front.style.transform = 'translate(0,0)'
                        dev.style.transform = 'translate(0,0)'
                        break;

                case 'triangle_anim':
                        text_Color('#f1a403')
                        iam.style.transform = 'translate(50%,-3em)'
                        front.style.transform = 'translate(-.5em,7em)'
                        dev.style.transform = 'translate(.5em,7em)'
                        hello.classList.add('off')
                        name.classList.add('off')
                        break;

                case 'triangle_anim-off':
                        text_Color('#142142')
                        iam.style.transform = 'translate(50%,0)'
                        front.style.transform = 'translate(0,0)'
                        dev.style.transform = 'translate(0,0)'
                        hello.classList.remove('off')
                        name.classList.remove('off')      
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
                                
                }
        return 0;

}

function text_Color (param) {
        const all = document.querySelectorAll('.welcome__div > p')
        all.forEach(element => element.style.color = `${param}`)
        return 0;
}


// create a manager to turn off the windows when one is clicked ??