# Technical Roadmap — Cabine Pro

## Protótipo atual

- HTML/CSS/JS estático;
- dados simulados;
- sem backend;
- sem autenticação real;
- sem cobrança real.

## MVP recomendado

### Frontend

- Next.js;
- Tailwind ou CSS modules;
- Vercel.

### Backend

- Supabase/Postgres inicialmente;
- Row Level Security;
- storage para exports;
- logs de auditoria.

### Auth

- Supabase Auth ou Clerk;
- Google login;
- magic link;
- 2FA futuro;
- SSO futuro para equipes.

### IA

- OpenAI para estruturar, resumir e revisar;
- modelo menor para geração;
- modelo mais forte para revisão de confiabilidade;
- prompts versionados;
- logs de geração;
- output estruturado em JSON.

### Dados esportivos

- API licenciada para dados estruturados;
- fontes oficiais como camada de confirmação;
- fontes editoriais como referência e contexto;
- sem scraping não autorizado.

### Pagamentos

- MVP rápido: Stripe ou pagamento manual;
- Brasil: avaliar Pix/Asaas/Pagar.me/Mercado Pago/Iugu;
- assinatura recorrente;
- cancelamento claro.

### Monitoramento

- Sentry;
- logs de erro;
- health checks;
- analytics de uso.

## Arquitetura de confiança

1. Ingestão de fonte;
2. Classificação da fonte;
3. Extração de fatos;
4. Validação cruzada;
5. Detecção de conflito;
6. Score por bloco;
7. Geração do briefing;
8. Revisão do Modo Seguro;
9. Auditoria.

## Roadmap

### V0
Protótipo estático completo.

### V1
MVP semi-manual com exportação e feedback.

### V2
Login, histórico e billing.

### V3
Integração com API esportiva licenciada.

### V4
Auditoria avançada, colaboração e planos de equipe.

### V5
Fontes premium/broadcast e vendas B2B.
