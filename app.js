const reviews = [{
        id: 1,
        name: "Yusuf Avcilar",
        job: "Jr.Front-end Developer",
        img: "./assets/profile-pic.png",
        text: "I'm striving to progress as a Junior Front-end. I will be a programmer one day."
    },

    {
        id: 2,
        name: "Baris Tunar",
        job: "Front-end Developer",
        img: "./assets/baristunar.jpeg",
        text: "It is my 2nd year in the sector and I continue to improve every day. I recommend it to everyone."
    },

    {
        id: 3,
        name: "Selcuk Artan",
        job: "Ship Engineer",
        img: "./assets/selcukartan.jpeg",
        text: "I have served in the maritime industry for many years and now I am serving in shipbuilding."
    },

    {
        id: 4,
        name: "Kaan Karahan",
        job: "Journalist",
        img: "./assets/kaankarahan.jpeg",
        text: "Journalism takes effort. I have been doing this job for many years in the field of football and I continue to pass on my knowledge as a teacher."
    },

    {
        id: 5,
        name: "Sinan Yüksel",
        job: "Barista",
        img: "./assets/sinanyüksel.jpeg",
        text: "Making coffee is art and i love making this art."
    },

    {
        id: 6,
        name: "Muhammed Ali Teker",
        job: "Sports Science",
        img: "./assets/muhammedaliteker.jpeg",
        text: "Sport is a way of life for me. I recommend this to everyone."
    },
];


const profilePhoto = document.querySelector(".profile-photo")
const profileName = document.querySelector(".profile-name")
const profileJob = document.querySelector(".job")
const profileInfo = document.querySelector(".info")

const btnNext = document.querySelector(".btn-next")
const btnPrev = document.querySelector(".btn-prev")
const btnSuprise = document.querySelector(".btn-suprise")


let newReviews = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
})

function showPerson() {
    const item = reviews[newReviews]
    profilePhoto.src = item.img
    profileName.textContent = item.name
    profileJob.textContent = item.job
    profileInfo.textContent = item.text
}

// button next

btnNext.addEventListener("click", function () {
    newReviews++;
    if (newReviews > reviews.length - 1) {
        newReviews = 0;
    }
    showPerson()
})

// button prev

btnPrev.addEventListener("click", function () {
    newReviews--;
    if (newReviews < 0) {
        newReviews = reviews.length - 1;
    }
    showPerson()
})

// button Suprise

btnSuprise.addEventListener("click", function () {
    newReviews = Math.floor(Math.random() * reviews.length);
    showPerson()
})
