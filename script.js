const nextbtn1 = document.querySelector(".next-btn1");
const nextbtn2 = document.querySelector(".next-btn2");
const nextbtn3 = document.querySelector(".next-btn3");
const nextbtn4 = document.querySelector(".next-btn4");

const backbtn2 = document.querySelector(".back-btn2");
const backbtn3 = document.querySelector(".back-btn3");
const backbtn4 = document.querySelector(".back-btn4");

const form1 = document.querySelector(".wrapper-body-item");
const form2 = document.querySelector(".wrapper-body-item-2-container");
const form3 = document.querySelector(".wrapper-body-item-3-container");
const form4 = document.querySelector(".wrapper-body-item-4-container");

const menuitem1 = document.querySelector(".wrapper-menu-item1");
const menuitem2 = document.querySelector(".wrapper-menu-item2");
const menuitem3 = document.querySelector(".wrapper-menu-item3");
const menuitem4 = document.querySelector(".wrapper-menu-item4");

const menuitem1number = document.querySelector(".wrapper-menu-item1-number");
const menuitem2number = document.querySelector(".wrapper-menu-item2-number");
const menuitem3number = document.querySelector(".wrapper-menu-item3-number");
const menuitem4number = document.querySelector(".wrapper-menu-item4-number");

const staffContent = document.querySelector('.wrapper-body-item-4-message-content-item-content.staff');
const serviceContent = document.querySelector('.wrapper-body-item-4-message-content-item-content.service');
const dateContent = document.querySelector('.wrapper-body-item-4-message-content-item-content.date');
const priceContent = document.querySelector('.wrapper-body-item-4-message-content-item-content.price');

const nameInput = document.querySelector('.name-input');
const lastnameInput = document.querySelector('.lastname-input');
const emailInput = document.querySelector('.email-input');
const phoneInput = document.querySelector('.phone-input');

const customer = {};

const confirmAppointmentButton = document.querySelector(".confirm-appointment");
const cancelAppointmentButton = document.querySelector(".cancel-appointment");
const confirmationPopup = document.querySelector(".confirmation-popup");

const selectedItems = {
    staff: {},
    service: {},
    time: {}
};

const staff = [
    {
        "id": 1,
        "name": "Alex Rosetta",
        "email": "alexyrosetta@egmail.com",
        "image": "./assert/img/doctor.jpg",
    },

    {
        "id": 2,
        "name": "Maria July",
        "email": "mariajuly@egmail.com",
        "image": "./assert/img/doctor2.jpg",
    }
];

const staffContainer = document.querySelector('.wrapper-body-item-1-card-wrapper');

const staffHTML = staff.map(person => `
     <div class="wrapper-body-item-1-card">
         <div class="wrapper-body-item-1-card-img">
             <img src="${person.image}" alt="">
         </div>
         <div class="wrapper-body-item-1-card-content">
             <p>${person.name}</p>
             <span>${person.email}</span>
         </div>
     </div>
 `).join('');

staffContainer.innerHTML = staffHTML;

const staffCard = document.querySelectorAll(".wrapper-body-item-1-card");

let isStaffCardSelected = false;

staffCard.forEach(card => {
    card.addEventListener("click", function () {
        staffCard.forEach(otherCard => {
            otherCard.style.border = "none";
        });

        card.style.border = "2px solid #53d56c";
        isStaffCardSelected = true;

        const selectedStaff = staff.find(person => person.name === card.querySelector("p").textContent);
        selectedItems.staff = selectedStaff;
    });
});

const services = [
    {
        "id": 1,
        "name": "Oral hygiene",
        "image": "services1.jpg",
        "duration": "1 hour",
        "price": 50.00,
    },
    {
        "id": 2,
        "name": "Implants",
        "image": "services2.jpg",
        "duration": "1 hour 30 minutes",
        "price": 120.00,
    },
    {
        "id": 3,
        "name": "Check up",
        "image": "services3.jpg",
        "duration": "1 hour 30 minutes",
        "price": 140.00,
    },
];

const servicesContainer = document.querySelector('.wrapper-body-item-2-card-wrapper');

const servicesHTML = services.map(service => `
    <div class="wrapper-body-item-2-card">
        <div class="wrapper-body-item-2-card-title">
            <div class="wrapper-body-item-2-card-title-img">
                <img src="./assert/img/${service.image}" alt="">
            </div>
            <div class="wrapper-body-item-2-card-title-content">
                <p>${service.name}</p>
                <span>${service.duration}</span>
            </div>
        </div>
        <div class="wrapper-body-item-2-card-price">
            <h1>${service.price.toFixed(2)}$</h1>
        </div>
    </div>
`).join('');

servicesContainer.innerHTML = servicesHTML;

const servicessCard = document.querySelectorAll(".wrapper-body-item-2-card");

let isServiceCardSelected = false;

servicessCard.forEach(card => {
    card.addEventListener("click", function () {
        servicessCard.forEach(otherCard => {
            otherCard.style.border = "none";
        });

        card.style.border = "2px solid #53d56c";
        isServiceCardSelected = true;

        const selectedService = services.find(service => service.name === card.querySelector("p").textContent);
        selectedItems.service = selectedService;
    });
});

const time = [
    {
        "start_time": "09:00",
        "end_time": "09:30"
    },
    {
        "start_time": "09:30",
        "end_time": "10:00"
    },
    {
        "start_time": "10:00",
        "end_time": "10:30"
    }
];

const timeList = document.querySelector(".wrapper-body-item-2-card-wrapper-time-card-content");

const timeSlotsHTML = time.map(timeSlot => `
    <div class="wrapper-body-item-2-card-wrapper-time-card-content-item">
        <p>${timeSlot.start_time}</p>
        <p>${timeSlot.end_time}</p>
    </div>
`).join("");

timeList.innerHTML = timeSlotsHTML;

const timeCard = document.querySelectorAll(".wrapper-body-item-2-card-wrapper-time-card-content-item");

let isTimeCardSelected = false;

timeCard.forEach(card => {
    card.addEventListener("click", function () {
        timeCard.forEach(otherCard => {
            otherCard.style.border = "none";
        });

        card.style.border = "2px solid #53d56c";
        isTimeCardSelected = true;

        const selectedTime = time.find(timeSlot => {
            const timeText = card.textContent.trim();
            return timeText.includes(timeSlot.start_time) && timeText.includes(timeSlot.end_time);
        });
        selectedItems.time = selectedTime;
    });
});

const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    timeTitle = document.querySelector(".wrapper-body-item-2-card-wrapper-time-card-title"),
    prevNextIcon = document.querySelectorAll(".icons span"),
    timeCardContentItems = document.querySelectorAll('.wrapper-body-item-2-card-wrapper-time-card-content-item');

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {

    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    const today = new Date();
    for (let i = 1; i <= lastDateofMonth; i++) {
        if (new Date(currYear, currMonth, i) >= today) {
            liTag += `<li>${i}</li>`;
        } else {
            liTag += `<li class="inactive">${i}</li>`;
        }
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    const dayElements = document.querySelectorAll('ul.days li');
    dayElements.forEach(dayElement => {
        dayElement.addEventListener('click', () => {
            if (!dayElement.classList.contains('inactive')) {
                dayElements.forEach(element => {
                    element.classList.remove('active');
                });

                dayElement.classList.add('active');

                const selectedDate = new Date(currYear, currMonth, parseInt(dayElement.textContent));
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                timeTitle.textContent = selectedDate.toLocaleDateString(undefined, options);

                timeCardContentItems.forEach(item => {
                    item.style.display = 'flex';
                });
            }
        });
    });
}

timeCardContentItems.forEach(item => {
    item.style.display = 'none';
});

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

nextbtn1.addEventListener("click", function () {
    if (isStaffCardSelected) {
        form1.style.display = "none";
        form2.style.display = "flex";
        menuitem1.classList.remove("active");
        menuitem1.classList.add("done");
        menuitem2.classList.add("active");
        menuitem1number.innerHTML = '<i class="fas fa-check"></i>';
    } else {
        const popup = document.querySelector(".popup");
        popup.style.display = "flex";
        setTimeout(function () {
            popup.style.display = "none";
        }
            , 2000);
    }
});


backbtn2.addEventListener("click", function () {
    form1.style.display = "flex";
    form2.style.display = "none";
    menuitem1.classList.add("active");
    menuitem1.classList.remove("done");
    menuitem2.classList.remove("active");
    menuitem1number.innerHTML = '1';
});

nextbtn2.addEventListener("click", function () {
    if (isServiceCardSelected) {
        form2.style.display = "none";
        form3.style.display = "flex";
        menuitem2.classList.remove("active");
        menuitem2.classList.add("done");
        menuitem3.classList.add("active");
        menuitem2number.innerHTML = '<i class="fas fa-check"></i>';
    } else {
        const servicesPopup = document.querySelector(".services-popup");
        servicesPopup.style.display = "flex";
        setTimeout(function () {
            servicesPopup.style.display = "none";
        }, 2000);
    }
});

backbtn3.addEventListener("click", function () {
    form2.style.display = "flex";
    form3.style.display = "none";
    menuitem2.classList.add("active");
    menuitem2.classList.remove("done");
    menuitem3.classList.remove("active");
    menuitem2number.innerHTML = '2';
});

nextbtn3.addEventListener("click", function () {
    if (isTimeCardSelected) {
        form3.style.display = "none";
        form4.style.display = "flex";
        menuitem3.classList.remove("active");
        menuitem3.classList.add("done");
        menuitem4.classList.add("active");
        menuitem3number.innerHTML = '<i class="fas fa-check"></i>';

        staffContent.textContent = selectedItems.staff.name;
        serviceContent.textContent = selectedItems.service.name;
        dateContent.textContent = selectedItems.time.start_time + " - " + selectedItems.time.end_time;
        priceContent.textContent = "$" + selectedItems.service.price.toFixed(2);
    } else {
        const timePopup = document.querySelector(".time-popup");
        timePopup.style.display = "flex";
        setTimeout(function () {
            timePopup.style.display = "none";
        }, 2000);
    }
});

backbtn4.addEventListener("click", function () {
    form3.style.display = "flex";
    form4.style.display = "none";
    menuitem3.classList.add("active");
    menuitem3.classList.remove("done");
    menuitem4.classList.remove("active");
    menuitem3number.innerHTML = '3';
});

let valid = true;

nextbtn4.addEventListener('click', function (event) {
    nameInput.classList.remove('error');
    lastnameInput.classList.remove('error');
    emailInput.classList.remove('error');
    phoneInput.classList.remove('error');

    if (nameInput.value.trim() === '') {
        valid = false;
        nameInput.classList.add('error');
    }

    if (lastnameInput.value.trim() === '') {
        valid = false;
        lastnameInput.classList.add('error');
    }

    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        valid = false;
        emailInput.classList.add('error');
    }

    if (phoneInput.value.trim() === '' || !/^\d+$/.test(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add('error');
    }

    if (!valid) {
        event.preventDefault();
    }


    customer.name = nameInput.value;
    customer.lastname = lastnameInput.value;
    customer.email = emailInput.value;
    customer.phone = phoneInput.value;
    selectedItems.customer = {
        name: customer.name,
        lastname: customer.lastname,
        email: customer.email,
        phone: customer.phone
    };
    if (isTimeCardSelected) {
        confirmationPopup.style.display = "block";
    } else {
        const timePopup = document.querySelector(".time-popup");
        timePopup.style.display = "flex";
        setTimeout(function () {
            timePopup.style.display = "none";
        }, 2000);
    }
});

if (valid) {
    confirmAppointmentButton.addEventListener("click", function () {
        form4.style.display = "none";
        form1.style.display = "flex";

        menuitem1.classList.add("active");
        menuitem1.classList.remove("done");

        menuitem2.classList.remove("active");
        menuitem2.classList.remove("done");

        menuitem3.classList.remove("active");
        menuitem3.classList.remove("done");

        menuitem4.classList.remove("active");
        menuitem4.classList.remove("done");

        menuitem1number.innerHTML = '1';
        menuitem2number.innerHTML = '2';
        menuitem3number.innerHTML = '3';
        menuitem4number.innerHTML = '4';

        console.log(selectedItems);

        confirmationPopup.style.display = "none";
        timeCard.forEach(card => {
            card.style.border = "none";
        });
        isTimeCardSelected = false;
        isStaffCardSelected = false;
        isServiceCardSelected = false;
        staffCard.forEach(card => {
            card.style.border = "none";
        });
        servicessCard.forEach(card => {
            card.style.border = "none";
        });
    });

    cancelAppointmentButton.addEventListener("click", function () {
        confirmationPopup.style.display = "none";
    });
}





