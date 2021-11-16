import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo';
import { BodyStyleComponent } from '../../utils/body-style/body-style.component';
import { PsicologoService } from '../cadastro-psicologo/psicologo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasLoading = true;

  p: string = 'psicologo';

  psicologos: Psicologo[] = [];

  filteredPsicologos: Psicologo[] = [];

  filterBy: string = '';

  experiencias = [
    { experiencia: 'Adolescência' },
    { experiencia: 'Ansiedade' },
    { experiencia: 'Assédio Moral' },
    { experiencia: 'Autoconhecimento' },
    { experiencia: 'Câncer' },
    { experiencia: 'Conflitos Amorosos' },
    { experiencia: 'Conflitos Familiares' },
    { experiencia: 'Depressão' },
    { experiencia: 'Estresse' },
    { experiencia: 'Idade Adulta' },
    { experiencia: 'Medos' },
    { experiencia: 'Morte e Luto' },
    { experiencia: 'Orientação Profissional' },
    { experiencia: 'Separação' },
    { experiencia: 'Traumas' },
  ];

  constructor(private psicologoService: PsicologoService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    BodyStyleComponent.definirOpacity('0.5');
    this.psicologoService.retriveAll().subscribe({
      next: (psicologos) => {
        this.psicologos = psicologos;
        this.filteredPsicologos = this.psicologos;
        BodyStyleComponent.definirOpacity('1');
        this.hasLoading = false;
      },
      error: (err) => {
        alert('Error: ' + err);
        BodyStyleComponent.definirOpacity('1');
        this.hasLoading = false;
      },
    });
  }

  set filter(value: string) {
    this.filterBy = value;

    if (value === '') {
      this.psicologos = this.filteredPsicologos;
      return;
    }
    this.psicologos = this.filteredPsicologos.filter(
      (psicologo: Psicologo) =>
        psicologo.experiencia.indexOf(this.filterBy) > -1
    );
  }

  get filter() {
    return this.filterBy;
  }
}
