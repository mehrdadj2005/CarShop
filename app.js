let btn = document.querySelector('#btn').addEventListener('click', get)
let Company = document.getElementById("Company")
let inputYC = document.querySelector('#inputYC')
let CarOperation = document.querySelector('#CarOperation')
let modal = document.querySelector('#modal')
let modalShop = document.querySelector('#modalShop')
let back = document.querySelector('#back').addEventListener('click', backe)
let h2InModal = document.querySelector('#modal h2')

// دستور محاسبه قیمت خودرو
function get() {
    let test = new Submit(Company.value, inputYC.value, CarOperation.value)

    if (CarOperation.value == '') {
        CarOperation.style.border = '0.5vh solid red'
    } else {
        modalShop.style.display = 'none'
        modal.style.display = 'flex'
        h2InModal.innerHTML = `${test.manufacturer() + test.yearConstruction() - test.Function()}`
    }
}

// تعین قیمت خودرو نسبت به شرکت سازنده ، سال ساخت و کارکرد 
class Submit {
    constructor(x, y, z) {
        this.Company = x,
            this.inputYC = y,
            this.CarOperation = z
    }

    // تعیین قیمت نسبت به شرکت سازنده ماشین
    manufacturer() {
        let x;
        if (this.Company == 'سایپا') {
            x = 300000000
        } else if (this.Company == 'ایران خودرو') {
            x = 250000000
        } else if (this.Company == 'آمیکو') {
            x = 180000000
        } else if (this.Company == 'تالبوت') {
            x = 150000000
        }
        return x
    }

    // تعیین قیمت نسبت به سال ساخت ماشین
    yearConstruction() {
        let x;
        if (this.inputYC == 1402) {
            x = 100000000
        } else if (this.inputYC == 1401) {
            x = 80000000
        } else if (this.inputYC == 1400) {
            x = 70000000
        } else if (this.inputYC == 1399) {
            x = 65000000
        } else if (this.inputYC == 1398) {
            x = 60000000
        } else if (this.inputYC == 1397) {
            x = 55000000
        } else if (this.inputYC == 1396) {
            x = 50000000
        } else if (this.inputYC == 1395) {
            x = 45000000
        } else if (this.inputYC == 1394) {
            x = 40000000
        } else if (this.inputYC == 1393) {
            x = 35000000
        } else if (this.inputYC == 1392) {
            x = 30000000
        } else if (this.inputYC == 1391) {
            x = 25000000
        } else if (this.inputYC == 1390) {
            x = 20000000
        }
        return x
    }

    // کاهش قیمت نسبت به کارکرد ماشین
    Function() {
        let x;
        if (this.CarOperation >= 500000) {
            x = 200000000
        } else if (this.CarOperation >= 450000) {
            x = 150000000
        } else if (this.CarOperation >= 400000) {
            x = 100000000
        } else if (this.CarOperation >= 350000) {
            x = 80000000
        } else if (this.CarOperation >= 300000) {
            x = 70000000
        } else if (this.CarOperation >= 250000) {
            x = 60000000
        } else if (this.CarOperation >= 200000) {
            x = 50000000
        } else if (this.CarOperation >= 150000) {
            x = 30000000
        } else if (this.CarOperation >= 100000) {
            x = 2500000
        } else if (this.CarOperation >= 50000) {
            x = 2000000
        } else if (this.CarOperation >= 20000) {
            x = 15000000
        } else if (this.CarOperation >= 10000) {
            x = 10000000
        } else if (this.CarOperation >= 0) {
            x = 0
        }
        return x
    }
}

// با کلیک بر دکمه برگشت همه محتوا به حالت اول برگردند
function backe() {
    modalShop.style.display = 'flex'
    modal.style.display = 'none'
    CarOperation.value = ' '
    CarOperation.style.border = 'none'
    inputYC.value = 1402
    Company.value = 'سایپا'
}