# Prompting Principles

## Regra principal

O modelo nunca deve inventar fatos esportivos.

## Instruções de geração

- Usar apenas fatos disponíveis nas fontes fornecidas.
- Separar fato, contexto, narrativa e alerta.
- Sempre preservar o nível de confiança.
- Não transformar provável em confirmado.
- Não remover ressalvas de lesão, escalação ou bastidor.
- Destacar conflitos.
- Gerar texto em português brasileiro.
- Escrever em tom de transmissão profissional.

## Output ideal

Gerar em JSON estruturado antes de renderizar:

- summary
- match_facts
- competition_context
- team_a
- team_b
- h2h
- lineups
- injuries_suspensions
- narratives
- safe_mode_script
- alerts
- sources
- audit

## Revisão

Após gerar, rodar uma etapa de revisão:

- Há fatos sem fonte?
- Há informação crítica sem confiança?
- Há conflito?
- O Modo Seguro contém algo frágil?
- O score condiz com os alertas?
