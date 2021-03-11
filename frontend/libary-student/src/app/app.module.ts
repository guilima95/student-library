import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { EstudanteComponent } from './instituicional/estudante/estudante.component';
import { SobreComponent } from './instituicional/sobre/sobre.component';
import { ListaLivrosComponent } from './livro/lista-livros/lista-livros.component';
import { LivroDetalheComponent } from './livro/livro-detalhe/livro-detalhe.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { DashboardComponent } from './livro/dashboard/dashboard.component';
import { LoginComponent } from './navegacao/login/login.component';
import { FooterComponent } from './navegacao/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaLivrosComponent,
    LivroDetalheComponent,
    SobreComponent,
    EstudanteComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
