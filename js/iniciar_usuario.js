

const iniciarForm = document.querySelector("#formulario_Iniciar_secion");

iniciarForm.addEventListener ("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#inicia-email").value;
  const password = document.querySelector("#inicia-password").value;
  console.log(email,password);
  auth
    .signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
      // clear the form
      console.log("ususario existe");
      window.location =("home.html");
      // close the modal
    });

})
