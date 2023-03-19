import { Injectable } from '@angular/core';
import { Livro } from './livro';
const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
	_id: string | null;
	codEditora: number;
	titulo: string;
	resumo: string;
	autores: string[];
}

@Injectable({
	providedIn: 'root'
})
export class ControleLivrosService {

	constructor() {
	}

	async obterLivros(): Promise<Livro[]> {
		let result = await fetch(baseURL).then(res => res.json());
		return result.map((livroMongo: LivroMongo) => {
			let livro = new Livro();
			livro.codigo = livroMongo._id;
			livro.codEditora = livroMongo.codEditora;
			livro.titulo = livroMongo.titulo;
			livro.resumo = livroMongo.resumo;
			livro.autores = livroMongo.autores;
			return livro;
		});
	}

	async incluir(livro: Livro): Promise<boolean> {
		let livroMongo: LivroMongo = {
			_id       : null,
			codEditora: livro.codEditora,
			titulo    : livro.titulo,
			resumo    : livro.resumo,
			autores   : livro.autores
		};
		let result = await fetch(baseURL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({livro: livroMongo})
		});
		return result.ok;
	}

	async excluir(codigo: string) {
		let result = await fetch(baseURL + "/" + codigo, { method: "DELETE" });
		return result.ok;
	}
}