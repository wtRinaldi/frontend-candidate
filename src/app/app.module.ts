import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http'
import { ColorSelectComponent } from './components/color-select/color-select.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorSelectComponent,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
