import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { loadRemoteModule } from "@angular-architects/native-federation";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'ondersteuning',
    loadComponent: () =>
      loadRemoteModule('support', './Component').then((m) => m.AppComponent),
  },
];

// {
//   path: 'ondersteuning',
//     loadChildren: () =>
//   loadRemoteModule({
//     remoteEntry: 'support',
//     exposedModule: 'Routing'
//   })
//     .then(m => m.rotes)
// },


//
// {
//   path: 'ondersteuning',
//     loadChildren: () => import('support/Routing').then(m => m.routes)
// },
