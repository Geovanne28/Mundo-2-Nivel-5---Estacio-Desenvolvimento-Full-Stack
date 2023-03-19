import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
	selector: 'app-livro-dados',
	templateUrl: './livro-dados.component.html',
	styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
	autoresForm: string = '';
	editoras   : Editora[] = [];
	livro      : Livro = new Livro();

	constructor(
		private servEditora: ControleEditoraService,
		private servLivro  : ControleLivrosService,
		private router     : Router
	) {
		// this.livro = new Livro();
	}

	ngOnInit(): void {
		this.editoras = this.servEditora.getEditoras();
	}

	incluir: any = () => {
		this.livro.autores = this.autoresForm.split('\n');
		console.log('this.livro', this.livro)
		this.servLivro.incluir(this.livro).then((ok: boolean) => {
			if (ok) {
				this.router.navigateByUrl('/lista');
			}
		});
	}

}
