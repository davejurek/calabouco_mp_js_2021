var health = 1200;
var desmaiado = false;

function statusMinotauro(type) {
    if(!desmaiado) {
        health = health - 20;
        document.getElementById("minotauro").src = "img/" + type + ".png";
        document.getElementById("txtHealth").innerHTML="HP: " + health + " / 1200";

        if(type == 'minotauroDano') {
            if(health > 0) {
                setTimeout(statusNormal, 100);
            }
            else {
                desmaiado = true;
                document.getElementById("minotauro").src = "img/minotauroDesmaiado.png";
                document.getElementById("txtHealth").innerHTML="Você venceu!";
                
            }
        }
    }
}

function statusNormal() {
    document.getElementById("minotauro").src = "img/minotauroNormal.png";
}