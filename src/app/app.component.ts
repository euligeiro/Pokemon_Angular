import { Component,  } from '@angular/core'; //import de component 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
