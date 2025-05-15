
  // const menuBtn = document.getElementById("menu-btn");
  // const mobileMenu = document.getElementById("mobile-menu");

  // menuBtn.addEventListener("click", () => {
  //   mobileMenu.classList.toggle("hidden");
  // });

//console.log ('teste');

const btnWhatsppContact = document.getElementById("whatsappContact");
const btnEmailContact = document.getElementById("emailContact");

//console.log(btnWhatsppContact);

//Solicitar contato via Whatsapp
btnWhatsppContact.addEventListener("click", () => {

const messageWhatsaspp = encodeURIComponent("Olá tudo bem? Gostaria de mais informações sobre os serviços da Wolf.");
const phoneWhatsaspp = '19994780673';
window.open(`https://wa.me/${phoneWhatsaspp}?text=${messageWhatsaspp}`,'_blank');
});

//Solicitar contato via Whatsapp
btnEmailContact.addEventListener("click", () => {

const bodyEmail = encodeURIComponent("Olá tudo bem? Gostaria de mais informações sobre os serviços da Wolf.");
const email = 'diretoria.wolfseg@gmail.com';

window.location.href = `mailto:${email}?subject=Contato&body=${bodyEmail}`;
});
