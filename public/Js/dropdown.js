

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
