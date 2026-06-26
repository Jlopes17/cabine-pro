# Deploy Guide

## Publicar como site estático

O protótipo atual é apenas HTML/CSS/JS. Não precisa de build.

### Opção A — GitHub Pages

- Ativar Pages nas configurações do repositório.
- Usar a branch principal.
- Publicar a partir da raiz do projeto.

### Opção B — Vercel

- Importar o repositório.
- Usar framework `Other`.
- Não configurar build command.
- Publicar a raiz do projeto.

### Opção C — Netlify

- Criar novo site a partir do Git.
- Não configurar build command.
- Usar a raiz como pasta publicada.

## Futuro

Quando virar MVP real, migrar para Next.js com backend, auth, billing e banco de dados.
