fetch("/employees")
    .then((response) => response.json())
    .then((data) =>{
    console.log(data);
    data.forEach(e => {
        const cardTemplate = document.querySelector('template')
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector('h1').textContent = e.name;
        card.querySelector('p').textContent = e.title;
        document.body.appendChild(card);
    });
})
