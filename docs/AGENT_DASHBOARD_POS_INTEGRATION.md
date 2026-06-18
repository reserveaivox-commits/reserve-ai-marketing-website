# Agent, Dashboard, And POS Integration Map

Last updated: 2026-06-17

This website copy is no longer the canonical integration map.

Use the current Reserve POS integration doc instead:

```text
D:\Work\Reserve_Ai\new may 2026\02-PosSystem\pos_docs\AGENT_DASHBOARD_POS_INTEGRATION.md
```

Current model:

```text
LiveKit voice agent
  -> Reserve POS /api/agent/*
  -> Shared Supabase project
  -> Staff review in Reserve POS and the existing Dashboard
```

Reserve POS is a fresh codebase at `D:\Work\Reserve_Ai\new may 2026\02-PosSystem`. The existing Dashboard remains at `D:\Work\Reserve_Ai\new may 2026\03-dashboard` and shares Supabase during development. The LiveKit agent lives at `D:\Work\Reserve_Ai\new may 2026\04-livekit-agent`.
