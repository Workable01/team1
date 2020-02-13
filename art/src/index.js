import { CountUp } from 'countup.js';

const container = document.getElementById('scroll-element');
const from = document.getElementById('from');
const to = document.getElementById('to');

const countUpOptions = {
    useGrouping: false
}

window.onload = () => {
    container.addEventListener('scroll', () => {
        console.log("Scrollin'");
    });
    const countUpFrom = new CountUp('from', 1913, countUpOptions);
    const countUpTo = new CountUp('to', 1935, countUpOptions);
    countUpFrom.start();
    countUpTo.start();
}
