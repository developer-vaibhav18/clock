function fn() {
    let obj = new Date();
    let hrs = obj.getHours();
    let min = obj.getMinutes();
    let sec = obj.getSeconds();
    let hrsClass = document.getElementsByClassName("hour");
    let minClass = document.getElementsByClassName("minute");
    let secClass = document.getElementsByClassName("second");
    let rt_hrs = 90 + ((hrs % 12) * 30) + (min * 0.5) + (((sec % 60) * 0.5) / 60);
    let rt_min = ((min % 60) * 6) + ((sec % 60) * 0.1) + 90;
    let rt_sec = ((sec % 60) * 6) + 90;
    hrsClass[0].style.transform = 'rotate(' + rt_hrs + 'deg)';
    minClass[0].style.transform = 'rotate(' + rt_min + 'deg)';
    secClass[0].style.transform = 'rotate(' + rt_sec + 'deg)';
}
setInterval(fn, 1000);