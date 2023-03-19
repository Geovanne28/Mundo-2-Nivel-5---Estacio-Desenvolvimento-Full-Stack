import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
	selector: 'app-livro-lista',
	templateUrl: './livro-lista.component.html',
	styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
	public livros: Livro[] = [];
	public editoras: Editora[] = [];

	constructor(
		private servEditora: ControleEditoraService,
		private servLivro  : ControleLivrosService
	) { }

	ngOnInit(): void {
		this.obterTodos();
	}

	async obterTodos() {
		this.editoras = this.servEditora.getEditoras();
		this.livros = await this.servLivro.obterLivros();
	}

	excluir: any = (codigo: string) => {
		this.servLivro.excluir(codigo).then((ok: boolean) => {
			if (ok) {
				this.obterTodos();
			}
		});
	}

	obterNome: any = (codEditora: number) => {
		console.log('codEditora', codEditora)
		return this.servEditora.getNomeEditora(codEditora);
	}

}
