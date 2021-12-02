import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Desktop/header/header.component';
import { FooterComponent } from './Desktop/footer/footer.component';
import { HomeComponent } from './Desktop/home/home.component';
import { WorkComponent } from './Desktop/work/work.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MHomeComponent } from './Mobile/m-home/m-home.component';
import { MHeaderComponent} from './Mobile/mheader/mheader.component';
import { MintPageComponent } from './desktop/mint-page/mint-page.component';
import { MfooterComponent } from './mobile/mfooter/mfooter.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
    MHomeComponent,
    MHeaderComponent,
    MintPageComponent,
    MfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
