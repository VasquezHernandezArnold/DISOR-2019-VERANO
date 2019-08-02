
class TextField
{
    constructor( etiqueta )
    {
        this.etiqueta = etiqueta;
        this.valor = '';
        this.componente = this.textField();
    }

    textField()
    {
        var text = document.createElement('input');

        text.setAttribute('type', 'text');
        text.setAttribute('id', this.etiqueta);
        
        return text;
    }

   actualizarvalor( nuevoValor )
   {
       this.valor = nuevoValor;
       this.componente.value = nuevoValor;
   }
    
}

