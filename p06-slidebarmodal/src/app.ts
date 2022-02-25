const toggleButton = document.getElementById('toggle')! as HTMLButtonElement;
const modalContainer = document.getElementById('modal')! as HTMLDivElement;
const openButton = document.getElementById('open')! as HTMLButtonElement;
const closeButton = document.getElementById('close')! as HTMLButtonElement;

function toggleNavbar() {
  document.body.classList.toggle('show-nav');
}

function showModal() {
  modalContainer.classList.add('show-modal');
}

function closeModal() {
  modalContainer.classList.remove('show-modal');
}

toggleButton.addEventListener('click', toggleNavbar);
openButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
modalContainer.addEventListener('click', e => {
  if(e.target === modalContainer) closeModal();
});
