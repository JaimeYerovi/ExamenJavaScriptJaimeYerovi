import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})


export class AppComponent {



  arregloAutores = [{
    nombres: '',
    apellidos:'',
    fechaNacimiento:'',
    numeroLibros:'',
    ecuatoriano:'',
    libro:[{
      icbn:'',
      nombre:'',
      numeroPaginas:'',
      edicion:'',
      fechaPublicacion:'',
      nombreEditorial:'',
      autorId:''
    }]
  }
  ]

}




