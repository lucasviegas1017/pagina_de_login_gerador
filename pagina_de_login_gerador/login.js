function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login =="admin" && senha == "vr!$TlYAUCWn&#X!cx#9"){
        alert('login feito de forma exemplar');
        location.href = "gerador.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}