function NumeroDeUlam() {
    this.serie = [];
    this.numeroActual = 1;
    this.numeroVecesLlamado = 0;
}

NumeroDeUlam.prototype.avanzar = function()
{
    this.actualizarTerminosAvanzar();
};

NumeroDeUlam.prototype.retroceder = function()
{
    this.actualizarTerminosRetroceder();
};

NumeroDeUlam.prototype.actualizarTerminosAvanzar = function()
{
    this.numeroVecesLlamado++;
    if(this.numeroVecesLlamado == 1){
        this.numeroActual = 1;
        this.serie.push(this.numeroActual);
    }
    if(this.numeroVecesLlamado == 2){
        this.numeroActual = 2;
        this.serie.push(this.numeroActual);
    }
    if(this.numeroVecesLlamado > 2){
        while(!this.esValido(this.numeroVecesLlamado)){
            this.numeroVecesLlamado++;
        }
        this.serie.push(this.numeroVecesLlamado);
        this.numeroActual = this.numeroVecesLlamado;
    }
};

NumeroDeUlam.prototype.actualizarTerminosRetroceder = function()
{
    if(this.serie.length>1){
        this.serie.pop();
        this.numeroActual = this.serie[this.serie.length-1];
        this.numeroVecesLlamado = this.serie[this.serie.length-1];
    }
};

NumeroDeUlam.prototype.binario = function()
{
    this.valorBinario = this.numeroActual;
    return this.valorBinario.toString(2);
};

NumeroDeUlam.prototype.hexadecimal = function()
{
    this.valorHexadecimal = this.numeroActual;
    return this.valorHexadecimal.toString(16);
    
};

NumeroDeUlam.prototype.capicua = function(){
  if(this.numeroActual==this.invertirDigitos(this.numeroActual)){
    return 'es capicua';
  }else{
    return 'no es capicua';
  }
}

NumeroDeUlam.prototype.invertirDigitos = function(numero)
{
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido
};



NumeroDeUlam.prototype.actual = function()
{
    return this.numeroActual;
};

NumeroDeUlam.prototype.soyFeliz = function()
{
  if(this.verificarFelicidad(this.numeroActual)){
    return "si";
  }else{
    return "no";
  }
    
};

NumeroDeUlam.prototype.verificarFelicidad = function(str)
{
  let suma = str;
  for(let index = 0; suma != 0 && index <8; index++){
    suma = this.sumarDigitos(this.extraerDigitos(suma));
  }   
  return suma == 1 ? true : false; 
};

NumeroDeUlam.prototype.extraerDigitos = function(numero)
{
    let arrayChar = Array.from(numero.toString());
    let numeros = arrayChar.map((x) => {
      return Math.pow(parseInt(x), 2);
    });

    return numeros;
};

NumeroDeUlam.prototype.sumarDigitos = function(numeros)
{
    let numero = numeros.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    });
    return numero;
};