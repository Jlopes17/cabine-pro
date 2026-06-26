# Cabine Pro

Cabine Pro é um produto de briefing pré-jogo para narradores, comentaristas, produtores, criadores de conteúdo e entusiastas de futebol.

A proposta não é apenas gerar texto com IA. A proposta é entregar um briefing de transmissão com **fonte, confiança, rastreabilidade e Modo Seguro**.

> A IA organiza. A fonte valida. O narrador decide.

## Status

Protótipo premium multi-page para validar com usuários reais, especialmente narradores/produtores.

Nesta fase, os dados são simulados. O objetivo é validar produto, fluxo, UX, confiança e valor percebido antes de integrar APIs pagas ou vender oficialmente.

## Estrutura do protótipo

```txt
cabine-pro/
  index.html              # Landing page
  login.html              # Login/demo
  app.html                # Dashboard logado + criar briefing
  briefing.html           # Briefing completo da partida
  cabine.html             # Modo Cabine
  fontes.html             # Fontes, confiança e auditoria
  validar.html            # Roteiro para validar com amigo
  legal.html              # Segurança, disclaimer e conduta
  assets/
    css/styles.css        # Design system + dark mode
    js/main.js            # Toggle dark mode + interações
  docs/                   # Documentação de produto, fontes e validação
  .github/ISSUE_TEMPLATE/ # Templates de bug, validação, fonte e segurança
```

## Como testar

Abra `index.html` no navegador ou publique como site estático.

Fluxo recomendado:

1. `index.html` — entender a proposta.
2. `login.html` — entrar na demo.
3. `app.html` — criar/abrir briefing.
4. `briefing.html` — revisar conteúdo e alertas.
5. `cabine.html` — testar Modo Cabine.
6. `fontes.html` — revisar fontes e auditoria.
7. `validar.html` — coletar feedback do usuário.

## Dark mode

Todas as páginas têm toggle **Dark/Light** na navegação. A preferência fica salva no navegador via `localStorage`.

## Regras de confiança

- **Confirmado:** fonte oficial, clube, federação, competição, súmula, regulamento ou API licenciada.
- **Alta confiança:** provedor reconhecido, veículo editorial forte ou múltiplas fontes independentes.
- **Verificar:** provável escalação, setorista, jornal local, bastidor recente ou informação ainda sem confirmação oficial.
- **Cuidado:** rumor, conflito de fonte, rede social isolada ou informação sem atualização recente.

## Modo Seguro

O Modo Seguro só deve mostrar informações que possam ser usadas ao vivo com segurança. Rumores, conflitos e dados pendentes ficam ocultos ou sinalizados.

## Publicar

O protótipo é estático e pode ser publicado em:

- GitHub Pages;
- Vercel;
- Netlify.

## Próximo passo

Publicar o site e validar com um narrador/produtor usando o roteiro de `validar.html`.
