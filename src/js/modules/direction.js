import GET from "../server/server";

function direction(){
    const directionWrapper = document.querySelector('.direction__wrapper');

    GET('http://localhost:3000/direction.json')
        .then(data => setDirection(data.direction));

    function setDirection(data){
        data.map(el => {
            const {title, services, img} = el;

            const a = document.createElement('a');
            a.classList.add('direction__list');
            a.setAttribute('href', '#');

            a.innerHTML = `
            <h3 class="direction__title text_section">${title}</h3>
            <p class="direction__services text">${services} услуг</p>
            <div class="direction__photo">
                <img src='${img}' alt="ico">
            </div>
            `;

            directionWrapper.appendChild(a);
            
        })
    }

    console.log(direction);
}

export default direction;