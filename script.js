function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("show");

}


// Tutup menu selepas pilih menu

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector("nav")
            .classList.remove("show");

    });

});
