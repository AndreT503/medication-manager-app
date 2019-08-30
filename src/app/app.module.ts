import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RxnormService } from './rxnorm/rxnorm.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RxnormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
