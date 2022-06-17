import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObjetosPerdidosComponentComponent } from './objetos-perdidos-component/objetos-perdidos-component.component';
import { ReportarObjetosComponentComponent } from './reportar-objetos-component/reportar-objetos-component.component';
import { FAQComponentComponent } from './faqcomponent/faqcomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'home', component:HomeComponentComponent},
  {path:'objetosperdidos', component:ObjetosPerdidosComponentComponent},
  {path:'reportarobjetos', component:ReportarObjetosComponentComponent},
  {path:'faq', component:FAQComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ObjetosPerdidosComponentComponent,
    ReportarObjetosComponentComponent,
    FAQComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
