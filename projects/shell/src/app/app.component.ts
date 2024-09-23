import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/native-federation";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('navbar', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.load();
  }

  async load() {
    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });
    console.log(m, this.viewContainer);
    const ref = this.viewContainer.createComponent(m.NavbarComponent);
  }

}
