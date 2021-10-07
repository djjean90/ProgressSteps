
const progress = document.querySelector('#progress'),
      prev = document.querySelector('#prev'),
      next = document.querySelector('#next'),
      circles = document.querySelectorAll('.circle');

let currentActive = 1;

function update() {
        circles.forEach((circle, index) => {
            if(index < currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
        const actives = document.querySelectorAll('.active'); 

        //Procent calculating

        progress.style.width = ((actives.length -1 )/ (circles.length -1)) * 100 +'%';

        if(currentActive === 4) {
            next.disabled = true; 
        } else if (currentActive === 1) {
            prev.disabled = true;
        } 
        else {
            next.disabled = false;
            prev.disabled = false;  
        }
    }

next.addEventListener('click', ()=> {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', ()=> {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});