
# Trellojs

Aplicação de gerenciamento de tarefas no estilo Kanban, feita em React 19 + Vite 8, com CSS Modules e drag and drop nativo.

## Funcionalidades

- 3 colunas fixas: **A fazer**, **Em andamento**, **Concluído**
- Criação de tarefas com título, descrição, prioridade e tags
- Edição inline de tarefas
- Exclusão de tarefas
- **Drag and drop** nativo para mover tarefas entre colunas
- Visual moderno e responsivo (dark mode)
- Código organizado em componentes reutilizáveis

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- CSS Modules (escopo local de estilos)
- ESLint (padronização de código)

## Estrutura do projeto

```
src/
├── App.jsx
├── main.jsx
├── styles/
│   └── global.css
├── hooks/
│   └── useKanban.js
└── components/
	 ├── Header.jsx / .module.css
	 ├── Board.jsx / .module.css
	 ├── Column.jsx / .module.css
	 ├── TaskCard.jsx / .module.css
	 └── AddTaskForm.jsx / .module.css
public/
├── favicon.svg
├── icons.svg
```

## Como rodar o projeto

1. Instale as dependências:
	```bash
	npm install
	```
2. Rode o servidor de desenvolvimento:
	```bash
	npm run dev
	```
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Como gerar build de produção

```bash
npm run build
```
Os arquivos finais estarão na pasta `dist/`.


## Personalização

- Para alterar as colunas, edite o array `COLUMNS` em `src/hooks/useKanban.js`.
- Para mudar o tema, edite as variáveis em `src/styles/global.css`.

## Licença

Projeto livre para estudos e uso pessoal.
