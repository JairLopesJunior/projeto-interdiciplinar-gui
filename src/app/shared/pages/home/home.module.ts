import { CardModule } from './../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule, FormsModule, LoadingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
