function fakeApi() {
  fetch("./usuarios.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => fazAcesso(res));
  //  .then((res) => console.log(res));
}

// function fazAcesso(user) {
//   const campoEmail = document.querySelector("#inputEmail").value;
//   const campoSenha = document.querySelector("#inputSenha").value;
//   const teste = user.email;
//   console.log(user);
//   console.log(teste);
//   console.log(campoEmail);
//   if (campoEmail !== teste) {
//     return window.alert("deu certo!!!");
//   }
// }
