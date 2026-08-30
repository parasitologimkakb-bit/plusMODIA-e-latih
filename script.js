function toggleMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("show");

}


/* Tutup menu apabila link ditekan */

const links = document.querySelectorAll("#mainNav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("mainNav")
            .classList.remove("show");

    });

});
