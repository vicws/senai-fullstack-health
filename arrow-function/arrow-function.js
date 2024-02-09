let limpouQuarto1 = true;
let limpouCozinha1 = true;
let possoSair1 = () => {
    if (limpouQuarto1 && limpouCozinha1) {
        return "sim";
    } else { return "não" }
};



let limpouQuarto2 = false;
let limpouCozinha2 = true;
let possoSair2 = () => (limpouQuarto2 && limpouCozinha2) ? "sim" : "não";