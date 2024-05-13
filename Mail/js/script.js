const mailArray = ['marco@gmail.com', 'luca@gmail.com', 'franco@gmail.com'];
let userMail = (prompt('type here your mail'));

if(mailArray.includes(userMail)){
    console.log('you are registered on this site');
}else{
    console.log('you are not registered on this site');
}


// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array

const empytArray = [ ];

for ( let i = 0 ; i < 6 ; i++){
    let insertEl = Number.parseInt(prompt ('type a number'), 10);
    if ( insertEl % 2 === 0){
        empytArray.push(insertEl);
    }
}
console.log(empytArray);