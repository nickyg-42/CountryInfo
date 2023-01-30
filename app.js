const searchInput = document.querySelector('.search');
const input = document.getElementById('input');
const url = "https://restcountries.com/v3.1/name/";

searchInput.addEventListener("click", () => {
    let val = input.value;

    if (val && val.trim().length > 0) {
        val = val
            .trim()
            .toLowerCase()
            .concat("?fields=name,currencies,flags,capital,region,population,languages");

        fetch(url.concat(val), {
                method: 'GET'
            })
            .then((response) => response.json())
            .then(data => {
                console.log(data.name);
                localStorage.stuff = JSON.stringify(data);
                window.location.href = "country.html";
                
            })
            .catch((error) => {
                console.log(error);
                // bad request, display to user with error code and ask to try again
        });
        
    } else {
        // invalid input. stay on page and give error message
    }
})

input.addEventListener('keydown', (e) => {
    var regex = new RegExp('[a-zA-Z]');

    if(e.ctrlKey || e.altKey || typeof e.key !== 'string' || e.key.length !== 1) return;

    if (!regex.test(e.key)) {
        e.preventDefault();
    }
}, false);

// name         flag
// capital language currency region population