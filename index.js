function printDogs(dogs) {
    const allDogs = prepareDogs(dogs);
    $('.js-display-dogs').html(allDogs);
}

function prepareDogs(dogs) {
    let html = ``;
    for(let i = 0; i < dogs.message.length; i++) {
        html += `<img class="dog-image" src="${dogs.message[i]}"> `;
    }
    return html;
}

function getDogs(amount) {
    const url = `https://dog.ceo/api/breeds/image/random/${amount}`;

    fetch(url)
    .then(dog => dog.json())
    .then(dogJson => {
        console.log(dogJson.message);
        printDogs(dogJson);
    });
}


function handleForm() {
    $('.js-form').on('submit', function (event) {
        event.preventDefault();
        const num = $('input').val();
        getDogs(num);
    });
}

function main() {
    handleForm();
}

$(main);