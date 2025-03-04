
class Slider{
    
    constructor(){
        this.curIndex = 0;
        this.numOfSlides = 5;
        this.slider = document.querySelector('.slider');    
        this.toggles = document.querySelectorAll('.toggle');
        this.delay = 2500; 
        this.init();
        this.interval = this.autoMove();
    }

    init()
    {
        document.getElementById("next").addEventListener('click', () => {this.moveNext()});
        document.getElementById("prev").addEventListener('click', () => {this.movePrev()});

        this.toggles.forEach((tog, idx) => 
            {tog.addEventListener('click', () => {this.changeImg(idx)})});

    }

    changeImg(idx){
        // this.interval;
        this.toggles.forEach((tog) => {tog.classList.remove('current')});
        this.curIndex = idx;
        this.toggles[this.curIndex].classList.add('current')
        this.slider.style.transform = `translateX(${-this.curIndex*20}%)`;
    }

    autoMove(){
        return setInterval(() => {this.curIndex = (this.curIndex+1)%this.numOfSlides;
                            this.changeImg(this.curIndex)},
                            this.delay);
    }

    moveNext(){
        clearInterval(this.interval);
        if(this.curIndex == 4) return;
        this.curIndex++;
        this.changeImg(this.curIndex);

        this.interval = this.autoMove();
    }

    movePrev(){
        clearInterval(this.interval);
        
        if(this.curIndex == 0) return;
        this.curIndex--;
        this.changeImg(this.curIndex);

        this.interval = this.autoMove();
    }

}

new Slider();

