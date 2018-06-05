import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores-ylibros',
  templateUrl: './autores-ylibros.component.html',
  styleUrls: ['./autores-ylibros.component.css']
})
export class AutoresYLibrosComponent implements OnInit {

  libro: Libro;
  nombres: string;
  apellidos: string;
  fecha: string;
  numeroLibros:number;
  esEcuatoriano:boolean;
  autores:Autor[]=[];
  icbn :string;
  nombreLibro: string;
  numeroPaginas: number;
  edicion: string;
  fechaPublicacion: string;
  editorial: string;
  id: number;
  autorSeleccionado: Autor;
  cols: any[];


  constructor() { }

  ngOnInit() {

  }

  crearAutor(){

    this.autores.push({nombres:this.nombres,
                        apellidos:this.apellidos,
                        fecha:this.fecha,
                        numeroLibros:this.numeroLibros,
                        esEcuatoriano:this.esEcuatoriano,
    libros: []})
    this.nombres = undefined;
    this.apellidos = undefined;
    this.fecha = undefined;
    this.numeroLibros = undefined;
    this.esEcuatoriano = undefined;
  }


  crearLibro(){

    this.autorSeleccionado.libros.push({icbn:this.icbn,
                      nombreLibro:this.nombreLibro,
                      numeroPaginas:this.numeroPaginas,
                      edicion:this.edicion,
                      fechaPublicacion:this.fechaPublicacion,
                      editorial:this.editorial,
                      id:this.id})

    this.icbn = undefined;
    this.nombreLibro = undefined;
    this.numeroPaginas = undefined;
    this.edicion = undefined;
    this.fechaPublicacion = undefined;
    this.editorial = undefined;
    this.id = undefined;
  }

}

class Libro {

  constructor(public icbn?:string,
              public nombreLibro?: string,
              public numeroPaginas?: number,
              public edicion?: string,
              public fechaPublicacion?: string,
              public editorial?: string,
              public id?: number){

  }


}

class Autor {

  constructor(public nombres?:string,
              public apellidos?:string,
              public fecha?:string,
              public numeroLibros?:number,
              public esEcuatoriano?:boolean,
              public libros?:Libro[]){

  }


}
