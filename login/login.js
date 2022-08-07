function fakeApi() {
  fetch("./usuarios.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => fazAcesso(res));
}

function fazAcesso(user) {
  const campoEmail = document.querySelector("#inputEmail").value;
  const campoSenha = document.querySelector("#inputSenha").value;
}
