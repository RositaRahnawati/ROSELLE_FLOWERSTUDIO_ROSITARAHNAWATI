/* =========================================
   JAVASCRIPT WEBSITE ROSELLE
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const rosita_menu_toggle = document.querySelector(
    ".rosita_menu_toggle"
);

const rosita_navbar = document.querySelector(
    ".rosita_navbar"
);


if (rosita_menu_toggle && rosita_navbar) {

    rosita_menu_toggle.addEventListener("click", function () {

        rosita_navbar.classList.toggle("rosita_menu_open");

        const rosita_menu_status =
            rosita_navbar.classList.contains("rosita_menu_open");

        rosita_menu_toggle.setAttribute(
            "aria-expanded",
            rosita_menu_status
        );

        rosita_menu_toggle.innerHTML =
            rosita_menu_status ? "✕" : "☰";

    });

}


/* =========================================
   2. CLOSE MENU AFTER CLICK
========================================= */

const rosita_nav_links = document.querySelectorAll(
    ".rosita_nav_list a"
);

rosita_nav_links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (rosita_navbar) {

            rosita_navbar.classList.remove(
                "rosita_menu_open"
            );

        }

        if (rosita_menu_toggle) {

            rosita_menu_toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            rosita_menu_toggle.innerHTML = "☰";

        }

    });

});


/* =========================================
   3. CLOSE MENU WHEN SCREEN IS RESIZED
========================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        if (rosita_navbar) {

            rosita_navbar.classList.remove(
                "rosita_menu_open"
            );

        }

        if (rosita_menu_toggle) {

            rosita_menu_toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            rosita_menu_toggle.innerHTML = "☰";

        }

    }

});

/* =========================================
   CONTACT FORM TO WHATSAPP
========================================= */

const rosita_contact_form = document.querySelector(
    ".rosita_contact_form"
);

if (rosita_contact_form) {

    rosita_contact_form.addEventListener("submit", function(event) {

        event.preventDefault();

        const rosita_name = document.getElementById("rosita_name").value;
        const rosita_email = document.getElementById("rosita_email").value;
        const rosita_subject = document.getElementById("rosita_subject").value;
        const rosita_message = document.getElementById("rosita_message").value;

        const rosita_whatsapp_number = "6281298905264";

        const rosita_whatsapp_message =
            "Hello ROSELLE Flower Studio!\n\n" +
            "Name: " + rosita_name + "\n" +
            "Email: " + rosita_email + "\n" +
            "Subject: " + rosita_subject + "\n\n" +
            "Message:\n" + rosita_message;

        const rosita_whatsapp_url =
            "https://wa.me/" + rosita_whatsapp_number +
            "?text=" + encodeURIComponent(rosita_whatsapp_message);

        window.open(rosita_whatsapp_url, "_blank");
        rosita_contact_form.reset();
    });

}
