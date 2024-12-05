import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { AnimalComponent } from './inheritance/animal/animal.component';
import { CatComponent } from './inheritance/cat/cat.component';
import { DogComponent } from './inheritance/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    AnimalComponent,
    CatComponent,
    DogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
