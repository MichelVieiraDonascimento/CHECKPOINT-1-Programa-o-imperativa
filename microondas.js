// Michel Vieira Do Nascimento

function microondas (prato, tempo) {
    let termo

    if ( prato == "pipoca") {
        termo = 10

    }else if ( prato == "macarrão") {
        termo = 8

    }else if ( prato == "brigadeiro") {
        termo = 8

    }else if ( prato == "carne") {
        termo = 15

    }else if ( prato == "feijão") {
        termo = 12

    }else {
        return "Prato inexistente!"
    }


    if (tempo >= 3 * termo) {
        return  "Kabumm." + " Prato pronto, bom apetite!!!";
    }else if (tempo >=  2 * termo) {
        return "A comida queimou." + " Prato pronto, bom apetite!!!";

    }else if (tempo < termo) {
        return "Tempo insuficiente." + " Prato pronto, bom apetite!!!";
    }else {
        return "Prato pronto, bom apetite!!!"
    }
}

console.log (microondas ("feijão", 11))