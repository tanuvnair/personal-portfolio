const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links');
console.log('sections length', sections.length);
console.log('section 0', sections[0]);
console.log('section 1', sections[1]);
console.log('section 2', sections[2]);
console.log('section 3', sections[3]);


window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;        

        if(scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    }); 

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.pageYOffset > 600) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
});