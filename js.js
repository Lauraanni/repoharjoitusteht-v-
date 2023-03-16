function click_me(){
    let nimi = document.getElementById("nimi").value;
    document.getElementById("result").innerHTML= " Hei " + nimi + ", hauska tutustua";
}

function add_one(){
    let digit = Number(document.getElementById("digit").value);
    digit++;
    let print = document.getElementById("new_number");
    let text = "Uusi luku on " + digit;
    print.innerHTML=text;

}

function weather(){
    const CEL = "Celsius";
    const FAH = "Fahrenheit";
    let celsius = Number(document.getElementById("celsius").value);
    let fahrenheit = celsius * 1.8 + 32;
    document.getElementById("degrees").innerHTML= celsius + CEL  + " = " + fahrenheit + FAH;
}


