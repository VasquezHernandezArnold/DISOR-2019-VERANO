
class NumeroFibonacci 
{
    constructor(terminoAnterior,terminoAnteriorAnterior,terminoActual,numeroVecesActualizado,valor)
    {
        this.terminoAnterior = terminoAnterior;
        this.terminoAnteriorAnterior = terminoAnteriorAnterior;
        this.terminoActual = terminoActual;
        this.numeroVecesActualizado = numeroVecesActualizado;
        this.valor = valor;
    }
    
    getValor()
    {
        return this.valor;
    }

    avanzar()
    {
        if (this.numeroVecesActualizado == 0)
        {
            this.terminoAnterior = 0;
            this.terminoAnteriorAnterior = 0;
            this.terminoActual = 1;
        }
        if (this.numeroVecesActualizado == 1)
        {
            this.terminoAnterior = 1;
            this.terminoAnteriorAnterior = 0;
            this.terminoActual = 1;
        }
        if (this.numeroVecesActualizado >= 2)
        {
            this.terminoAnteriorAnterior = this.terminoAnterior;
            this.terminoAnterior = this.terminoActual;
            this.terminoActual = this.terminoAnterior + this.terminoAnteriorAnterior;
        }
        this.valor = this.terminoActual;
        this.numeroVecesActualizado += 1;
    }

    retroceder()
    {
        if (this.numeroVecesActualizado > 0)
        {
            if (this.numeroVecesActualizado == 1)
            {
                this.terminoActual = this.terminoAnterior;
                this.terminoAnterior = 0;
                this.terminoAnteriorAnterior = -1;
            }

            if (this.numeroVecesActualizado >= 2)
            {
                var respaldoTerminoActual = this.terminoActual;
                this.terminoActual = respaldoTerminoActual - this.terminoAnteriorAnterior;
                this.terminoAnterior = this.terminoAnteriorAnterior;
                this.terminoAnteriorAnterior = this.terminoActual - this.terminoAnterior;
            }
            this.valor = this.terminoActual;
            this.numeroVecesActualizado -= 1;
        }
    }

    reiniciar()
    {
        this.terminoAnterior = 0;
        this.terminoAnteriorAnterior = 0;
        this.terminoActual = 0;
        this.numeroVecesActualizado = 0;
        this.valor = 0;
    }

    binario()
    {
        return this.valor.toString(2);
    }

    hexadecimal()
    {
        return this.valor.toString(16);
    }
}
