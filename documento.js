function mayoriaEdad(edad){
    if(edad>=18){  
        alert("Tiene " +edad+ " años, es mayor de edad");
        document.write("<br>Edad " +(i+1)+ ": " +edad+ " años - Mayor de edad. <br>");        
    } else{
        alert("Tiene " +edad+ " años, es menor de edad");
        document.write("<br>Edad " +(i+1)+ " : " +edad+ " años - Menor de edad. <br>"); 
    }   
}

function pedirEdad(callback){
    for(i=0; i<3; i++){
        var edad = prompt("Ingrese su edad: ");
        callback(edad);     
    }
}

pedirEdad(mayoriaEdad);





