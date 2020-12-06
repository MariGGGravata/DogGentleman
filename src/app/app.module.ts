import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RacaoComponent } from './racao/racao.component';
import { ListaComponent } from './lista/lista.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProdutoComponent,
    CarrinhoComponent,
    RacaoComponent,
    ListaComponent,
    ProdutoComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
