class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this.idIngreso = ++Egreso.contadorEgresos;
    }
    get IdEgreso(){
        return this.idEgreso;
    }
}