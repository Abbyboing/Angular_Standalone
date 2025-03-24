import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private route = inject(ActivatedRoute);

  ngOnInit(){
    // 1st Way
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // 2nd Way
    this.route.params.subscribe({
      next: (data) => {
        console.log(data['id']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
