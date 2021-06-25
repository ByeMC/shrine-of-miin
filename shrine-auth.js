function checkTime() {
    let currentDate = new Date();
    let time = currentDate.getHours()
    document.getElementById(isOpen).innerHTML = '<P>The <a href="#">Shrine of Miin</a> is not open.';
}
