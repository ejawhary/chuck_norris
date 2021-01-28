//  Event Listners
document.getElementById("go").addEventListener("click", getJokes);

async function getJokes(e) {
    e.preventDefault();
    const number = document.getElementById("jokesNum").value;
    console.log(number);

    const response = await fetch(`https://api.icndb.com/jokes/random/${number}`)
    const data = await response.json();
    console.log(data)
    displayJokes(data);
};

const displayJokes = (jokes) => {
    // console.log(jokes)
    jokes.value.forEach(joke => {
        const li = document.createElement("li");
        li.classList.add("listItem");
        li.innerHTML = joke.joke;
        document.getElementById("jokesList").appendChild(li);
    });
}