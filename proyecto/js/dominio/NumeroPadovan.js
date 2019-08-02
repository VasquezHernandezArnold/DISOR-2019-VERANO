class SucesionPadovan
{
    constructor ()
    {
        this.terminoAnterior = 1;
        this.terminoAnteriorAnterior = 1;
        this.terminoActual = 1;
        this.terminoSiguiente = 1;
        this.numeroVecesActualizado = 1;
        this.valor = 0;
    }

    getValor()
    {
        return this.valor;
    }
        
    avanzar()
    {
        if(this.numeroVecesActualizado > 3)
        {
            this.terminoSiguiente = this.terminoAnteriorAnterior + this.terminoAnterior;
            this.terminoAnteriorAnterior = this.terminoAnterior;
            this.terminoAnterior = this.terminoActual;
            this.terminoActual = this.terminoSiguiente;
        }
        this.valor = this.terminoActual;
        this.numeroVecesActualizado += 1;
    }
        
    
    retroceder()
    {
        if (this.numeroVecesActualizado > 3)
        {

            this.terminoAnteriorAnterior = this.terminoActual - this.terminoAnteriorAnterior;
            this.terminoActual = this.terminoAnterior;
            this.terminoAnterior = this.terminoAnteriorAnterior;
            this.terminoSiguiente = this.terminoActual;
        }
        this.valor = this.terminoActual;
        this.numeroVecesActualizado -= 1;
    }
}
