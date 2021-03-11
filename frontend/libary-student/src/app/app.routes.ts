import { Routes } from '@angular/router';
import { EstudanteComponent } from './instituicional/estudante/estudante.component';
import { SobreComponent } from './instituicional/sobre/sobre.component';
import { DashboardComponent } from './livro/dashboard/dashboard.component';
import { ListaLivrosComponent } from './livro/lista-livros/lista-livros.component';
import { LivroDetalheComponent } from './livro/livro-detalhe/livro-detalhe.component';
import { HomeComponent } from './navegacao/home/home.component';
import { LoginComponent } from './navegacao/login/login.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'estudante', component: EstudanteComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'livros', component: ListaLivrosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'livro-detalhe/:id', component: LivroDetalheComponent }, //não existe implementação de detalhe
];