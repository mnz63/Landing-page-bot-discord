var tema = false;
let a = document.getElementById('a')
let add =  document.getElementById('add')
let cmd =  document.getElementById('cmd')

function clicarBotao() {
   if (!tema) {
        a.style.background = 'url(https://raw.githubusercontent.com/mnz63/SITE-AKITABOT/main/1.png)' // imagem dark

    tema = true;
  } else {
    a.style.background = 'url(https://raw.githubusercontent.com/mnz63/SITE-AKITABOT/main/2.png)' // imagem padrao
    tema = false;
    }
}


function mudarcor() {
  cmd.style.background = '#a1a1a1'
}

function mudarcor2() {
  cmd.style.background = '#ffffff'
}