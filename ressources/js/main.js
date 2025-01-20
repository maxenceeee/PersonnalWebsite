let spanDate = document.getElementById("date-span");
const dateCreateDomain = new Date("2024-03-30T11:02:00")

function changeDate() {
    let actualDate = new Date()

    const diff = actualDate - dateCreateDomain;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}

function changeTime() {
    spanDate.innerText = changeDate();
}

setInterval(changeTime, 1000)