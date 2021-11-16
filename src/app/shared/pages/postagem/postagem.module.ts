import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemComponent } from './postagem.component';
import { CardModule } from '../../components/card/card.module';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
  declarations: [PostagemComponent],
  imports: [CommonModule, CardModule, RouterModule, LoadingModule],
  exports: [PostagemComponent],
})
export class PostagemModule {}
