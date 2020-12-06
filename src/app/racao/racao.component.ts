import { Component, OnInit } from '@angular/core';
import { Racao } from '../modelo/racao.model';
import { RacaoService } from '../services/racao.service';

@Component({
  selector: 'app-racao',
  templateUrl: './racao.component.html',
  styleUrls: ['./racao.component.css']
})

export class RacaoComponent implements OnInit {

  racao: Racao
  
  constructor(private RacaoService: RacaoService) {

    this.racao = new Racao()

  }

  ngOnInit(): void {

    this.getRacoes();
    this.racao = new Racao();
    this.racao.Id = 0;
    this.racao.Nome = '';
    this.racao.Peso = 0;

  }

  getRacoes(): void{

    this.RacaoService.getRacoes().subscribe(response => {

      if(response.Status == 0) {

        this.racao = response.Racoes

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  getRacao(id: number): void{

    this.RacaoService.getRacao(id).subscribe(response => {
      if(response.Status == 0) {

        this.racao = response.Racao

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  inserir(): void{

    this.RacaoService.addRacao(this.racao).subscribe(response => {

      if(response.Status == 0){

        this.getRacoes();

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  atualizar():void{

    this.RacaoService.updateRacao(this.racao).subscribe(response =>{

      if(response.Status == 0){
        
        this.getRacoes()

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  remover(id): void{

    this.RacaoService.deleteRacao(id).subscribe(response => {

      if(response.Status == 0){
        
        this.getRacoes()

      } else {

        console.log(response.Detalhes)

      }

    });

  }

  cadastrar(){

    if(this.racao.Id == 0){

      alert('Inserir')

    } else{

      alert('Atualizar')

    }
  }

  cancelar(){

    this.racao.Id = 0;
    this.racao.Nome = '';
    this.racao.Peso = 0;

  }

}
