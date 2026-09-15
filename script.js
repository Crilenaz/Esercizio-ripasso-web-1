function CalcolaAndata(){
    const km = parseFloat(document.getElementById("chilometri").value);
    const prezzo = parseFloat(document.getElementById("prezzo").value);

    const valore = km * prezzo;
    document.getElementById("costo").textContent = valore.toFixed(2);
    return valore;
}

function CalcolaAndataERitorno(){
    const valore = CalcolaAndata() * 2;
    document.getElementById("costo").textContent = valore.toFixed(2);
}
