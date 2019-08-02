'use strict'


class Ventana
{
    constructor(  avanzar, retroceder, binario, hexadecimal )
    {
        this.avanzar = avanzar;
        this.retroceder = retroceder;
        this.binario = binario;
        this.hexadecimal = hexadecimal;

        this.iniciarVentana();
    }

    iniciarVentana()
    {
        var panel = document.getElementById("ventana"); 

        var valor = document.getElementById('numero');
        var textfields = document.getElementById('BH');
        var botones = document.getElementById('botones');

        var textBinario = document.getElementById('binario');
        var textHexa = document.getElementById('hexadecimal');

        textBinario.appendChild( this.binario );
        textHexa.appendChild( this.hexadecimal );
        
        textfields.appendChild( textBinario );
        textfields.appendChild( textHexa );
        
        botones.appendChild( this.retroceder );
        botones.appendChild( this.avanzar );

        panel.appendChild( textfields );
        panel.appendChild( botones );
         
    }
}
