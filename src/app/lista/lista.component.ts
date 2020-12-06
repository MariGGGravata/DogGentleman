import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: Produto

  constructor(private ProdutoService: ProdutoService) {

    this.lista = new Produto()

  }

  ngOnInit(): void {

    this.getProdutos();
    this.lista = new Produto();
    this.lista.Id = 0;
    this.lista.Preco = 0;
    this.lista.Nome = '';
    this.lista.Peso = 0;

  }

  getProdutos(): void{

    this.ProdutoService.getProdutos().subscribe(response => {
      if(response.Status == 0) {

        this.lista = response.Produto

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  getProduto(id: number): void{

    this.ProdutoService.getProduto(id).subscribe(response => {
      if(response.Status == 0) {

        this.lista = response.Produto

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  inserir(): void{

    this.ProdutoService.addProduto(this.lista).subscribe(response => {

      if(response.Status == 0){

        this.getProdutos();

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  atualizar():void{

    this.ProdutoService.updateProduto(this.lista).subscribe(response =>{

      if(response.Status == 0){
        
        this.getProdutos()

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  remover(id): void{

    this.ProdutoService.deleteProduto(id).subscribe(response => {

      if(response.Status == 0){
        
        this.getProdutos()

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  cadastrar(){

    if(this.lista.Id == 0){

      alert('Inserir')

    } else{

      alert('Atualizar')

    }
  }

  cancelar(){

    this.lista.Id = 0;
    this.lista.Preco = 0;

  }

}
