import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { FiltroPipe } from './pokemon/pipe/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports:[
    PokemonListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
