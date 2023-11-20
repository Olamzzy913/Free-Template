const desktop = document.getElementById('desktop');
const tab = document.getElementById('tab');
const mobile = document.getElementById('mobile');
const screenPort = document.getElementById('screenPort');

console.log('hey');

desktop.addEventListener('click', chngWidth1);
tab.addEventListener('click', chngWidth2);
mobile.addEventListener('click', chngWidth3);

function chngWidth1(evrt) {
    evrt.preventDefault();
    screenPort.style.width = '100%';
};

function chngWidth2(evrt) {
    evrt.preventDefault();
    screenPort.style.width = '768px';
};

function chngWidth3(evrt) {
    evrt.preventDefault();
    screenPort.style.width = '480px';
};