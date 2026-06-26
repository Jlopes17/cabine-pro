# Data Model Draft

## User

- id
- name
- email
- role
- plan
- created_at

## Team

- id
- name
- owner_id
- plan

## Briefing

- id
- title
- match_id
- team_a
- team_b
- competition
- status
- confidence_score
- safe_mode_ready
- created_by
- created_at
- updated_at

## BriefingSection

- id
- briefing_id
- type
- title
- content
- confidence_score
- status

## Source

- id
- title
- url
- source_type
- trust_level
- checked_at
- terms_status

## Claim

- id
- briefing_id
- section_id
- text
- source_id
- confidence_level
- risk_level
- conflict_status

## AuditLog

- id
- briefing_id
- actor_id
- action
- before
- after
- created_at

## Subscription

- id
- user_id/team_id
- provider
- status
- plan
- started_at
- renewed_at
- canceled_at
