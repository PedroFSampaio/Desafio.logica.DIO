//entrada de dados "NomeHeroi e XP".
let NomeHeroi="Augusto"
let xp= 7000

// vou usar uma variavel de controle qualquer.

let controle

// como nós temos um número limitado de escolhas eu vou usar o "Switch",
// mas daria para usar o if/else perfeitamente.

switch (true){
    case xp<1000 :
        controle= "Ferro";
    break;

    case xp >= 1001 && xp<=2000:
        controle = "Bronze";
    break;

    case xp >= 2001 && xp<=5000:
        controle = "Prata" ;
    break;

    case xp >= 6001 && xp<=7000:
        controle= "Ouro";
    break;

    case xp >= 7001 && xp<=8000:
        controle= "Platina";
    break;

    case xp >= 8001 && xp<=9000:
        controle= "Ascendente";
    break;

    case xp >= 9001 && xp<=10000:
        controle= "Imortal";
    break;

    case xp<=8000:
        controle= "Radiante";
    break;
}
console.log("O Herói de nome:",NomeHeroi, " está no nível de :",xp)
