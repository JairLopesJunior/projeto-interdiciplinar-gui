import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() nome: string = '';
  @Input() relato: string | string[] = '';
  @Input() imagem: string | undefined = '';
  @Input() id: number = 0;
  @Input() qualTipo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.definirImagem();
    this.modificandoNome();
  }

  definirImagem() {
    this.imagem = this.imagem !== '' ? this.imagem : 'assets/imagem.png';
  }

  modificandoNome() {
    const nomeArray = Array.from(this.nome);
    nomeArray[0] = nomeArray[0].toUpperCase();
    for(let i = 0; i < nomeArray.length; i++){
      if(nomeArray[i] === " "){
        i++;
        nomeArray[i] = nomeArray[i].toUpperCase();
      }
    }
    this.nome = nomeArray.toString().split(',').join('');
  }

}
