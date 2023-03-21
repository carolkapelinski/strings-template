const nomeUsuario = prompt("Nome:")
 const emailUsuario = prompt("E-mail:")
 const frase = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}! A quantidade de caracteres no nome ${nomeUsuario.length}`


  console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}! A quantidade de caracteres no nome ${nomeUsuario.length}`)
  
  const novaFrase = frase.replaceAll("r" , "x")
   
  console.log(novaFrase)
 
  console.log("O e-mail do usuário possui @?" , emailUsuario.includes("@"))
  
 

