const about = document.querySelector('#about');
const resume = document.querySelector('#resume')
const portfolio = document.querySelector('#portfolio')

const about_Path = document.querySelector('.about_Path')
const resume_Path = document.querySelector('.resume_Path')
const portfolio_Path = document.querySelector('.portfolio_Path')


const TEST = {
        about: about_Path,
        resume: resume_Path,
        portfolio: portfolio_Path
}


about.onmouseover = function() {
        changeColor(about)
}
about.onmouseout =  function(event) {
        about_Path.style.stroke = '#333745'
        about_Path.parentElement.classList.add('off')
        about_Path.parentElement.classList.remove('on_Top')
        reset(event)
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
}




function changeColor(param) {
        switch(param) {

                case about:
                        about_Path.style.stroke = '#d2e59f'
                        about_Path.parentElement.classList.add('on_Top')
                        about_Path.parentElement.classList.remove('off')
                        break;

                case resume:
                        resume_Path.style.stroke = '#e42558'
                        resume_Path.parentElement.classList.add('on_Top')
                        resume_Path.parentElement.classList.remove('off')
                        break;

                case portfolio:
                        portfolio_Path.style.stroke = '#80db92'
                        break;
        }

        return 0;
}



function reset(event) {
        switch(event.target.getAttribute('id')) {
                case about:

        }
      console.log(typeof test) 
        return 0;
}

