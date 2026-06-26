# MVP Architecture

## V0 — atual

- `index.html` estático.
- Sem backend.
- Sem dados reais.
- Sem login real.
- Sem cobrança.

## V1 — beta simples

- Next.js.
- Supabase Auth.
- Supabase Postgres.
- OpenAI para geração e revisão.
- Exportação PDF.
- Pagamento manual ou Pix.
- Fontes manuais/linkadas.

## V2 — SaaS inicial

- Billing recorrente.
- Histórico de briefings.
- Auditoria persistente.
- API esportiva licenciada.
- Modo Seguro real.
- Times/equipes.

## V3 — profissional

- Permissões avançadas.
- Colaboração em briefing.
- Fonte por claim.
- Score por seção.
- Monitoramento e logs.
- Suporte.

## Componentes

### Source Engine

Classifica fontes, extrai claims e detecta conflitos.

### Trust Engine

Calcula confiança por claim, seção e briefing.

### Briefing Generator

Gera material em português com base nas evidências.

### Safe Mode

Filtra informações não seguras para uso ao vivo.

### Audit Trail

Registra geração, revisão, alteração, fonte e score.
