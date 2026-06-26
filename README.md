# Cabine Pro

Cabine Pro é uma plataforma de briefing pré-jogo para narradores, comentaristas, produtores, criadores de conteúdo e entusiastas de futebol.

A proposta não é apenas gerar texto com IA. A proposta é entregar um briefing de transmissão com **fonte, confiança, rastreabilidade e Modo Seguro**.

> A IA organiza. A fonte valida. O usuário decide o que vai ao ar.

## Status

Protótipo de produto para teste com fluxo real de usuário.

Nesta fase, os dados são simulados. O objetivo é testar experiência, clareza, fluxo, confiança e valor percebido antes de integrar APIs pagas ou vender oficialmente.

## Fluxo principal

```txt
index.html          # Landing page
login.html          # Login de entrada
app.html            # Dashboard do produto
novo-briefing.html  # Criação de briefing
briefing.html       # Briefing completo da partida
cabine.html         # Modo Cabine
fontes.html         # Trust Center: fontes e auditoria
legal.html          # Segurança, disclaimer e conduta
```

## Como testar como usuário

1. Abrir `index.html`.
2. Clicar em **Começar**.
3. Entrar pela tela de login.
4. Criar um novo briefing ou abrir o briefing pronto.
5. Revisar o briefing.
6. Abrir o Modo Cabine.
7. Conferir fontes e auditoria.

## Dark mode

Todas as páginas têm toggle **Dark/Light** na navegação. A preferência fica salva no navegador.

## Regras de confiança

- **Confirmado:** fonte oficial, clube, federação, competição, súmula, regulamento ou API licenciada.
- **Alta confiança:** provedor reconhecido, veículo editorial forte ou múltiplas fontes independentes.
- **Verificar:** provável escalação, setorista, jornal local, bastidor recente ou informação ainda sem confirmação oficial.
- **Cuidado:** rumor, conflito de fonte, rede social isolada ou informação sem atualização recente.

## Modo Seguro

O Modo Seguro só deve mostrar informações que possam ser usadas ao vivo com segurança. Rumores, conflitos e dados pendentes ficam ocultos ou sinalizados.

## Publicar

O protótipo é estático e pode ser publicado em GitHub Pages, Vercel ou Netlify.
