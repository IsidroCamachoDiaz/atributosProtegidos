class vehiculo{
	constructor(){
		this._marca="ufujbhgb";
		this._modelo="fghjgbhbn";
		this._cilindrada="kgnbnfgb ";
	}
	set marca(nombre){
		this._marca=nombre;
	}
	get marca(){
		return this._marca;
	}
	set modelo(nombre){
		this._modelo=nombre;
	}
	get modelo(){
		return this._modelo;
	}
	set cilindrada(nombre){
		this._cilindrada=nombre;
	}
	get cilindrada(){
		return this._cilindrada;
	}
}
class coche extends vehiculo{
	constructor(){
		super();
		this._numPuertas=8;
		this.numOcupantes=3;
	}
	set numPuertas(nombre){
		this._numPuertas=nombre;
	}
	get numPuertas(){
		return this._numPuertas;
	}
}
class moto extends vehiculo{
	constructor(){
		super()
		this._anioDisenio=7456;
		this.carnet="dfjklgjbh";
	}
	
	set anioDisenio(nombre){
		this._anioDisenio=nombre;
	}
	get anioDisenio(){
		return this._anioDisenio;
	}
}

var c = new coche();
var m = new moto();
c._cilindrada="cilindro";
c._marca="ford";
c._modelo="mustang";
c._numPuertas=4;
c.numOcupantes=6;

m._cilindrada="cilindro";
m._marca="nagasaki";
m._modelo="desk";
m._anioDisenio=2004;
m.carnet="uiirhggihnj";

alert("Coche:\n"+c._cilindrada +c._marca+c._modelo+c._numPuertas+c.numOcupantes);
alert("Moto:\n"+m._cilindrada+m._marca+m._modelo+m._anioDisenio+m.carnet);