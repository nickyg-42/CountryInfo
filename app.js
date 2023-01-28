const searchInput = document.querySelector('.search');
const url = "https://restcountries.com/v3.1/name/";

searchInput.addEventListener("click", () => {
    let val = document.getElementById("input").value;

    if (val && val.trim().length > 0) {
        val = val.trim().toLowerCase();

        fetch(url.concat(val), {
                method: 'GET'
            })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
        });

        const page = window.location.href = "country.html";
        
    } else {
        // invalid. stay on page and give error message
    }
})