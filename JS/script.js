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


about.onmouseover = function(event) {
        changeColor(about)
        welcome.classList.add('welcome__greeting--top')
        iam.classList.add('welcome__greeting--left')
        name.classList.add('welcome__greeting--right')
        front.classList.add('welcome__greeting--bottom--left')
        dev.classList.add('welcome__greeting--bottom--right')
}
about.onmouseout =  function(event) {
        about_Path.style.stroke = '#333745'
        about_Path.parentElement.classList.add('off')
        about_Path.parentElement.classList.remove('on_Top')

        welcome.classList.remove('welcome__greeting--top')
        iam.classList.remove('welcome__greeting--left')
        name.classList.remove('welcome__greeting--right')
        front.classList.remove('welcome__greeting--bottom--left')
        dev.classList.remove('welcome__greeting--bottom--right')
}


resume.onmouseover = function() {
        changeColor(resume)
}
resume.onmouseout = function() {
        resume_Path.style.stroke = '#333745'
        resume_Path.parentElement.classList.add('off')
        resume_Path.parentElement.classList.remove('on_Top')
}


portfolio.onmouseover = function() {
        changeColor(portfolio)
}
portfolio.onmouseout = function() {
        portfolio_Path.style.stroke = '#333745'
        portfolio_Path.parentElement.classList.add('off')
        portfolio_Path.parentElement.classList.remove('on_Top')
}




function changeColor(param) {
        switch(param) {

                case about:
                        about_Path.style.stroke = '#9BC035'
                        about_Path.parentElement.classList.add('on_Top')
                        about_Path.parentElement.classList.remove('off')
                        break;

                case resume:
                        resume_Path.style.stroke = '#A3143A'
                        resume_Path.parentElement.classList.add('on_Top')
                        resume_Path.parentElement.classList.remove('off')
                        break;

                case portfolio:
                        portfolio_Path.style.stroke = '#4FCF68'
                        portfolio_Path.parentElement.classList.add('on_Top')
                        portfolio_Path.parentElement.classList.remove('off')
                        break;
        }

        return 0;
}



