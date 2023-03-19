import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
	editoras: Editora[] = [
		{ codEditora: 1, nome: 'Editora 1' },
		{ codEditora: 2, nome: 'Editora 2' },
		{ codEditora: 3, nome: 'Editora 3' },
		{ codEditora: 4, nome: 'Editora 4' }
	];
  
  	constructor() {
  	}

	getEditoras(): Editora[] {
		return this.editoras;
	}

	getNomeEditora(codEditora: number): string {
		return this.editoras.filter(editora => editora.codEditora == codEditora).reduce((editora, editoraAtual) => editoraAtual.nome, '');
	}


}
