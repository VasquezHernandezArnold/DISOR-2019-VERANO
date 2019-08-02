'use strict'

class Boton 
{
    constructor( accion )
    {
        this.accion = accion
        this.componente = this.button();
    }
    
    button()
    {
        var boton = document.createElement('input');
       
        boton.setAttribute('type', 'submit');
        boton.setAttribute('id', this.accion);
        boton.setAttribute('value', this.accion);
        
        return boton;
    }
    
}




