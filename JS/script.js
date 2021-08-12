const about = document.querySelector('#about');
const resume = document.querySelector('#resume')
const portfolio = document.querySelector('#portfolio')

const about_Path = document.querySelector('#about_Path')
const resume_Path = document.querySelector('#resume_Path')
const portfolio_Path = document.querySelector('#portfolio_Path')


about.onmouseover = function() {
        changeColor(about)
}
about.onmouseout =  function(event) {
        about_Path.style.fill = '#FE5F55'
        reset(event)
}


resume.onmouseover = function() {
        changeColor(resume)
}
resume.onmouseout = function() {
        resume_Path.style.fill = '#FE5F55'
}


portfolio.onmouseover = function() {
        changeColor(portfolio)
}
portfolio.onmouseout = function() {
        portfolio_Path.style.fill = '#FE5F55'
}




function changeColor(param) {
        switch(param) {

                case about:
                        about_Path.style.fill = '#d2e59f'
                        break;

                case resume:
                        resume_Path.style.fill = '#e42558'
                        break;

                case portfolio:
                        portfolio_Path.style.fill = '#80db92'
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