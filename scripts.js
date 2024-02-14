const text = document.querySelector("#text-js");
const texto = "I'm a Front-end Developer";
const interval = 300;

function showText(text, texto, interval) {

    const char = texto.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        text.innerHTML += next;

    }, interval);

    return typer;

};

showText(text, texto, interval);

