import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { AnimalComponent } from './inheritance/animal/animal.component';
import { CatComponent } from './inheritance/cat/cat.component';
import { DogComponent } from './inheritance/dog/dog.component';
import { ContractEmployeeComponent } from './interface/contract-employee/contract-employee.component';
import { PermenentEmployeeComponent } from './interface/permenent-employee/permenent-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    AnimalComponent,
    CatComponent,
    DogComponent,
    ContractEmployeeComponent,
    PermenentEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
