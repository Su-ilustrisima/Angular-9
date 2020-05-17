import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /*Si tenemos poco código desde aqi se puede hacer  la captura*/
  styleUrls: ['./app.component.css']  /*Si son pocos formatos desde este punto trabajamos el formato */
})
export class AppComponent {
  msg = 'Bienvenidos a mi primera práctica ';
  nombre = 'José Ramón';
  paterno = 'Valencia';
  materno = 'Padilla';
}
