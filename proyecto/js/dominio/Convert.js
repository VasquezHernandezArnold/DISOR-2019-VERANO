var Conver = (function(){
    var b = function( valor )
    {
        return valor.toString(2);
    }

    var h = function( valor )
    {
        return valor.toString(16);
    }

    var c = function( numero )
    {
      var invertido = 0
      var resto = numero
      do {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
      } while ( resto > 0 )
      return invertido
    }

    return{
        "binario": b,
        "hexadecimal": h,
        "capicua": c
    }
})();