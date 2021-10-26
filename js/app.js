const container = document.querySelector(".container");
const coffees = [{
        name: "Perspiciatis",
        Image: "images/coffee1.jpg"
    },
    {
        name: "Voluptatem",
        Image: "images/coffee2.jpg"
    },
    {
        name: "Explicabo",
        Image: "images/coffee3.jpg"
    },
    {
        name: "Rchitecto",
        Image: "images/coffee4.jpg"
    },
    {
        name: "Beatae",
        Image: "images/coffee5.jpg"
    },
    {
        name: "Vitae",
        Image: "images/coffee6.jpg"
    },
    {
        name: "Inventore",
        Image: "images/coffee7.jpg"
    },
    {
        name: "Veritatis",
        Image: "images/coffee8.jpg"
    },
    {
        name: "Accusantium",
        Image: "images/coffee9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Taste</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}