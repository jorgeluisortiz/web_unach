const registrarFor = document.querySelector("#formulario_registro");
registrarFor.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;  
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // clear the form
      swal({
        title: "Registrado!",
        text: "Corectamente",
        icon: "success",
        button: "Ok!",
      });
      console.log("Registrado correctamente");
      document.forms[0].reset();
      
      // close the modal
    });
});