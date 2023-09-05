let btn = document.querySelector('#btn').addEventListener('click', get)
let Company = document.getElementById("Company")
let inputYC = document.querySelector('#inputYC')
let inputCC = document.querySelector('#inputCC')
let modal = document.querySelector('#modal')
let modalShop = document.querySelector('#modalShop')
let back = document.querySelector('#back').addEventListener('click', backe)
let h2InModal = document.querySelector('#modal h2')


function get() {
    let test = new Submit(Company.value, inputYC.value, inputCC.value)

    if (inputCC.value > 3800) {
        inputCC.style.border = '0.5vh solid red'
    } else if (inputCC.value == '') {
        inputCC.style.border = '0.5vh solid red'
    } else if (inputCC.value < 800) {
        inputCC.style.border = '0.5vh solid red'
    } else {
        modalShop.style.display = 'none'
        modal.style.display = 'flex'
        h2InModal.innerHTML = `${test.manufacturer() + test.yearConstruction() + test.CC()}`
    }
}

class Submit {
    constructor(x, y, z) {
        this.Company = x,
            this.inputYC = y,
            this.inputCC = z
    }

    manufacturer() {
        let x;
        if (this.Company == 'سایپا') {
            x = 150000000
        } else if (this.Company == 'ایران خودرو') {
            x = 120000000
        } else if (this.Company == 'آمیکو') {
            x = 50000000
        } else if (this.Company == 'تالبوت') {
            x = 20000000
        }
        return x
    }

    yearConstruction() {
        let x;
        if (this.inputYC == 1402) {
            x = 90000000
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

    CC() {
        let x;
        if (this.inputCC >= 3000) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 100000000
        } else if (this.inputCC >= 2500) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 80000000
        } else if (this.inputCC >= 2000) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 50000000
        } else if (this.inputCC >= 1500) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 40000000
        } else if (this.inputCC >= 1200) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 30000000
        } else if (this.inputCC >= 800) {
            inputCC.style.borderBottom = '3px solid #00ff00'
            x = 20000000
        }
        return x
    }
}

function backe() {
    modalShop.style.display = 'flex'
    modal.style.display = 'none'
    inputCC.value = ' '
    inputCC.style.border = 'none'
    inputYC.value = 1402
    Company.value = 'سایپا'
}