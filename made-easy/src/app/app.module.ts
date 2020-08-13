import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MapsComponent } from './components/maps/maps.component';
import { TranslateComponent } from './components/translate/translate.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { DeployComponent } from './components/deploy/deploy.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BootstrapComponent,
    MapsComponent,
    TranslateComponent,
    PdfViewerComponent,
    DeployComponent,
    SidebarComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    PdfViewerModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC_FWRB6vJRjr5bv-KdNCazrg-DgwDyYgw'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
