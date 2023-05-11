class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this.idIngreso = ++Ingreso.contadorIngresos;
    }
    get IdIngreso(){
        return this.idIngreso;
    }
}