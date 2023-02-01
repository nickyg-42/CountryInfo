const backButton = document.getElementById('backButton');

window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.results);

    document.getElementById('head').innerHTML = data[0].name.common;
    document.getElementById('flag').src = data[0].flags.png;
    document.getElementById('population').innerHTML = data[0].population;
    //document.getElementById('capital').innerHTML = data[0].capital[0];
    //document.getElementById('currencies').innerHTML = data[0].currencies[0].name;
    //document.getElementById('region').innerHTML = data[0].region;

    var langs = "";
    for (const lg in data[0].languages) {
        langs += data[0].languages[lg] + ", ";
    }

    document.getElementById('language').innerHTML = langs.slice(0, -2);
});

backButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "../index.html";
});