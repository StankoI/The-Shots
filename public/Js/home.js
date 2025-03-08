

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

class DropDown {

    constructor() {
        this.active = true;
        this.btn = document.getElementById("drop");
        this.daysOfWeek = document.querySelectorAll('.date');
        this.workTimeDays = document.querySelectorAll('.dayTime');
        this.toDayWorkTime = document.getElementById('show');
        this.workTimeTable = document.getElementById('table');
        this.init();
        this.setData();
    }

    init() {
        this.btn.addEventListener('click', () => { this.showWorkTimeTable() });
    }

    setData() {
        this.daysOfWeek.forEach((day) => { day.classList.remove("currentDate") });
        let todayDate = new Date();

        let today = todayDate.getDay();

        if (today === 0) {
            today = 6;
        }
        else {
            today--;
        }
        this.daysOfWeek[today].classList.add("currentDate");

        this.workTimeDays.forEach((day) => { day.classList.remove("cur") });
        this.workTimeDays[today].classList.add("cur");
    }

    showWorkTimeTable() {
        if (this.active) {
            this.workTimeTable.style.transform = "scaleY(1)";
            this.btn.style.transform = "rotateX(180deg)";
            this.active = false;
        }
        else {
            this.workTimeTable.style.transform = "scaleY(0)";
            this.btn.style.transform = "rotateX(0deg)";
            this.active = true;
        }
    }
}

new DropDown();
