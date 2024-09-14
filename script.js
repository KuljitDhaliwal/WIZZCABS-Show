document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 0)
    })
    //Path Name
    // let currentPath = window.location.pathname;
    // let allPaths = [
    //     '/',
    //     '/index.html',
    //     '/about.html',
    //     '/contact.html',
    //     '/services.html',
    //     '/booking.html',
    //     '/airport-transfer.html',
    //     '/baby-capsules.html',
    //     '/corporate-transfer.html',
    //     '/fifo-transfer.html',
    //     '/parcel-delivery.html',
    //     '/perth-taxi-van.html',
    //     '/social-events.html',
    //     '/special-occasion.html',
    //     '/tour.html',
    //     '/wheelchair-transfer.html',
    //     '/not-found.html',
    // ];
    // if (!allPaths.includes(currentPath)) {
    //     window.location.href = '/index.html';
    // }



    // Fetching Header
    fetch("header.html").then(res => res.text()).then(res => {
        document.getElementById("header").innerHTML = res;
        navLinkActive(currentPath);
    });
    // fetching Footer
    fetch("footer.html").then(res => res.text()).then(res => {
        document.getElementById("footer-main").innerHTML = res;
    })


    const booking = document.getElementById("booking");
    if (booking) {        
        booking.addEventListener("submit", function (e) {
            const submitBtn = document.getElementById("submitBtn");
            const loadingGif = document.getElementById("loadingGif");
            const btnText = document.getElementById("btnText");
        
            submitBtn.disabled = true;
            btnText.style.display = "none";
            loadingGif.style.display = "inline";
        
        });
    }
    
    const contatForm = document.getElementById("contact-data");
    if (contatForm) {
        contatForm.addEventListener("submit", function (e) {
            const contactBtn = document.getElementById("contactbtn");
            const loadingGif = document.getElementById("loadingGif");
            const contactTxt = document.getElementById("contactTxt");
            
            contactBtn.disabled = true;
            contactTxt.style.display = "none";
            loadingGif.style.display = "inline";
        });
    }
});





window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success') || 'false';
    const notifyCard = document.querySelector(".notify-card");
    const booking = document.getElementById("booking");

    // Sanitize and validate
    const sanitizedSuccess = sanitize(success);

    if (sanitizedSuccess === 'true') {
        notifyCard.style.display = "flex";
        booking.style.display = "none";
    } else if (sanitizedSuccess === 'false') {
        // alert("There was an issue submitting the form. Please try again.");
    } else {
        console.log("Unexpected success parameter value.");
    }
};

function sanitize(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}









  



function navLinkActive(linkpath) {
    let navLink = document.querySelectorAll('.nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-item');
    let pathName = linkpath.split('/').pop();
    console.log(pathName);
    navLink.forEach((item) => {
        let currentItem = item.getAttribute('href').split('/').pop();
        console.log('currentItem', currentItem)
        if (currentItem === pathName) {
            navLink.forEach(element => {
                element.classList.remove('active');
            });
            item.classList.add('active');
        }
    });
    dropdownLinks.forEach(link => {
        let currentItem = link.getAttribute('href').split('/').pop();
        if (currentItem === pathName) {
            navLink.forEach(element => {
                element.classList.remove('active');
            })
            link.closest('.nav-item.dropdown').querySelector('.nav-link').classList.add('active');
        }
    });

}





function toggleDateInput(show) {
    const dateInput = document.querySelector('.date-input');
    const nowInput = document.querySelector('.now-input');
    const bookNow = document.getElementById('book-now');
    const dateField = document.getElementById('booking-date');
    const timeField = document.getElementById('booking-time');

    dateInput.style.display = show ? 'block' : 'none';
    nowInput.style.display = show ? 'none' : 'block';
    if (show) {
        dateField.required = true;
        timeField.required = true;
        bookNow.value = '';  // Reset "now" if the user selects "later"
    } else {
        dateField.required = false;
        timeField.required = false;
        bookNow.value = 'now'; // Set value back to "now" if "now" is selected
    }
}










const faqList = document.querySelectorAll('.faq-list ul li');
faqList.forEach((service) => {
    service.addEventListener('click', function () {
        var childDiv = service.querySelector("div");
        faqList.forEach((item) => {
            if (item.id !== childDiv.id) {
                item.classList.remove('show')
            }
        })
        if (service.id === childDiv.id) {
            service.classList.toggle('show')
        }
    })
})















