// function timer() {
//     var start = new Date(2013, 12, 1); // 2015.7.2
//     var t = new Date() - start;
//     var h = ~~(t / 1000 / 60 / 60 % 24);
//     if (h < 10) {
//         h = "0" + h;
//     }
//     var m = ~~(t / 1000 / 60 % 60);
//     if (m < 10) {
//         m = "0" + m;
//     }
//     var s = ~~(t / 1000 % 60);
//     if (s < 10) {
//         s = "0" + s;
//     }
//     document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
//     document.getElementById('h').innerHTML = h;
//     document.getElementById('m').innerHTML = m;
//     document.getElementById('s').innerHTML = s;
// }
// timer();
// setInterval(timer, 1000);
// function timer(start) {
//     // var start = new Date(2019, 2, 1); // 2013.12.1
//     var now = new Date(); // 当前时间
//     var t = now - start;
//
//     var d = Math.floor(t / (1000 * 60 * 60 * 24)); // 天数
//     var h = Math.floor((t / (1000 * 60 * 60)) % 24); // 小时
//     var m = Math.floor((t / (1000 * 60)) % 60); // 分钟
//     var s = Math.floor((t / 1000) % 60); // 秒钟
//
//     if (h < 10) {
//         h = "0" + h;
//     }
//
//     if (m < 10) {
//         m = "0" + m;
//     }
//
//     if (s < 10) {
//         s = "0" + s;
//     }
//
//     document.getElementById('d').innerHTML = d;
//     document.getElementById('h').innerHTML = h;
//     document.getElementById('m').innerHTML = m;
//     document.getElementById('s').innerHTML = s;
// }
//
// timer();
// setInterval(timer, 1000);



function timer(start) {
    // var start = new Date(2019, 1, 1); // 将月份减1
    var now = new Date(); // 当前时间
    var t = now.getTime() - start.getTime(); // 获取时间差的毫秒数
    var d = calculateDays(start, now); // 天数
    console.log(d)
    var h = Math.floor((t / (1000 * 60 * 60)) % 24); // 小时
    var m = Math.floor((t / (1000 * 60)) % 60); // 分钟
    var s = Math.floor((t / 1000) % 60); // 秒钟

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById('d').innerHTML = d;
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}

function timer2(start) {
    // var start = new Date(2019, 1, 1); // 将月份减1
    var now = new Date(); // 当前时间
    var t = now.getTime() - start.getTime(); // 获取时间差的毫秒数
    var d = calculateDays(start, now); // 天数
    console.log(d)
    var h = Math.floor((t / (1000 * 60 * 60)) % 24); // 小时
    var m = Math.floor((t / (1000 * 60)) % 60); // 分钟
    var s = Math.floor((t / 1000) % 60); // 秒钟

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById('d-1').innerHTML = d;
    document.getElementById('h-1').innerHTML = h;
    document.getElementById('m-1').innerHTML = m;
    document.getElementById('s-1').innerHTML = s;
}

function calculateDays(start, now) {
    var startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    var endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var timeDiff = endDate.getTime() - startDate.getTime();
    // var dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 使用 Math.ceil 进行向上取整


    // 考虑闰年的影响
    var leapYears = countLeapYears(start.getFullYear(), now.getFullYear());
    dayDiff += leapYears;

    return dayDiff;
}

function countLeapYears(startYear, endYear) {
    var count = 0;

    for (var year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            count++;
        }
    }

    return count;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

timer();
setInterval(timer, 1000);

timer2();
setInterval(timer2, 1000);




