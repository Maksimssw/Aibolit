import GET from '../server/server';

function choice(){
    const choiceWrapper = document.querySelector('.choice__wrapper');

    GET('./choice.json')
        .then(data => setChoice(data.choice));

    function setChoice(data){
        data.map(el => {
            const {img, title, subtitle} = el;

            const div = document.createElement('div');
            div.classList.add('.choice__item');

            div.innerHTML = `
            <h2 class="choice__item-title title_section">${title}</h2>
            <div class="choice__item-block">
                <div class="choice__item-photo">
                    <img src='${img}' alt="icon">
                </div>
                <p class="choice__item-subtitle text">${subtitle}</p>
            </div>
            `;

            choiceWrapper.appendChild(div);
        })
    }
}

export default choice;