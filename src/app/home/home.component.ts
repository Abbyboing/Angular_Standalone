import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  val: number = 2;

  // This method is more preferred than creatring object from constructor
  // private router = inject(Router);

  constructor(
    // private router:Router
  ) {}

// navigate() {
//   this.router.navigate(['about'])
// throw new Error('Method not implemented.');
// }

}
