var calcFinished;

function insert(num) {

    var a = document.form.textview;
    clearOld();
    a.value += num;
}

function opt(amd) {
    var view = document.form.textview;
    calcFinished = false;
    if (view.value != "") {
        view.value += amd;
    }
}

function zero() {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += '0';
    }
}

function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.form.textview;
    var exp = a.value;
    calcFinished = true;
    if (exp) {
        try { a.value = eval(exp); } catch (e) {
            console.log("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();

        }

    }
    if (a.value == 0) {
        a.value = "";
    }
    if (a.value == 'Infinity') {
        document.form.textview.value = "Can't divide by Zero!";

        console.log('Can\'t divide by Zero!')
        none();
    }

}

function clearOld() {
    if (calcFinished) {
        document.form.textview.value = '';
        calcFinished = false;
    }
}

function none() {
    console.log('Press the Clear button!');
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function power2() {
    document.form.textview.value = Math.pow(document.form.textview.value, 2);
    calcFinished = true;
}

function power3() {
    document.form.textview.value = Math.pow(document.form.textview.value, 3);
    calcFinished = true;
}

function sin() {
    document.form.textview.value = Math.sin(document.form.textview.value * Math.PI / 180).toFixed(1);
    calcFinished = true;
}

function tan() {
    document.form.textview.value = Math.tan(document.form.textview.value * Math.PI / 180).toFixed(1);
    calcFinished = true;
}

function cos() {
    document.form.textview.value = Math.cos(document.form.textview.value * Math.PI / 180).toFixed(1);
    calcFinished = true;
}

function log() {
    document.form.textview.value = Math.log(document.form.textview.value).toFixed(3);
    calcFinished = true;
}
navigator.getBattery().then(function(battery) {
    var level = battery.level;

    console.log(level);
    var percentage = (level * 100).toFixed(0);
    document.querySelector('.percent').innerHTML = percentage + "%";
    if (percentage < 20) {
        alert("Battery level is low");

    }
})