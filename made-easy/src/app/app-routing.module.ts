import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MapsComponent } from './components/maps/maps.component';
import { TranslateComponent } from './components/translate/translate.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { DeployComponent } from './components/deploy/deploy.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,

},
{
  path: 'bootstrap',
  component: BootstrapComponent,

},
{
  path: 'translate',
  component: TranslateComponent,

}, {
  path: 'maps',
  component: MapsComponent,

}, {
  path: 'pdf',
  component: PdfViewerComponent,

}, {
  path: 'deploy',
  component: DeployComponent,

}, {
  path: 'file-upload',
  component: FileUploadComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
