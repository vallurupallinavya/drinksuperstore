import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { collection, Firestore, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{

  firestore = inject(Firestore);

  ngOnInit(): void {
    getDocs(collection(this.firestore, "testPath")).then((response) => {
      console.log(response.docs)
    })
  }
}
