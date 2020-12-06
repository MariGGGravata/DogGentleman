import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacaoComponent } from './racao/racao.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { IndexComponent } from './index/index.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [

  {path: '', component: IndexComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'racao', component: RacaoComponent},
  {path: 'lista', component: ListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
