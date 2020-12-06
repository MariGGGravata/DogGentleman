import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Produto } from '../modelo/produto.model';
import { Racao } from '../modelo/racao.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto : Produto

  constructor(private ProdutoService: ProdutoService) {

    this.produto = new Produto()

  }

  ngOnInit(): void {

    this.getProdutos();
    this.produto = new Produto();
    this.produto.Id = 0;
    this.produto.Preco = 0;
    this.produto.Nome = '';
    this.produto.Peso = 0;

  }

  getProdutos(): void{

    this.ProdutoService.getProdutos().subscribe(response => {
      if(response.Status == 0) {

        this.produto = response.Produto

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  getProduto(id: number): void{

    this.ProdutoService.getProduto(id).subscribe(response => {
      if(response.Status == 0) {

        this.produto = response.Produto

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  inserir(): void{

    this.ProdutoService.addProduto(this.produto).subscribe(response => {

      if(response.Status == 0){

        this.getProdutos();

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  atualizar():void{

    this.ProdutoService.updateProduto(this.produto).subscribe(response =>{

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

    if(this.produto.Id == 0){

      alert('Inserir')

    } else{

      alert('Atualizar')

    }
  }

  cancelar(){

    this.produto.Id = 0;
    this.produto.Preco = 0;

  }

}
