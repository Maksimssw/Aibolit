function closeModal(modal){
    modal.classList.add('close');
    modal.classList.remove('active');
}

function openModal(modal) {
    modal.classList.add('active');
    modal.classList.remove('close');
    modal.classList.remove('blocker');
};

export {closeModal};
export {openModal}