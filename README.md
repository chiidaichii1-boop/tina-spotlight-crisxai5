# Spotlight @crisxai5: AI & Crypto Expert on X

[![bounty](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/rank/chiidaichii1-boop/tina-spotlight-crisxai5.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/reward/chiidaichii1-boop/tina-spotlight-crisxai5.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)

Bounty: https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad

An entry for the make.fun bounty "Spotlight @crisxai5: AI & Crypto Expert on X"
($2 USDC across the Top 10, ranked by the post's likes + reposts + quotes).

## The post

An original, phone-readable spotlight card introducing **@crisxai5**
(https://x.com/crisxai5) as a must-follow AI & crypto expert — practical
insights on AI agents, crypto alpha, Web3 tooling, and on-chain automation —
posted on X from a public account. The post's own text carries `@crisxai5`,
https://x.com/crisxai5, hashtags (`#AI` `#Crypto` `#AIAgents` `#Web3`), and
one of the entrant's `makefun-` play codes, plus the spotlight card image.

The post itself is the entry: the house reads its public engagement through
FxTwitter after the deadline (closes 27 Nov 2026 18:35 WIB) and the Top 10
share $2 USDC. `POST.json` at this repository's root names the post:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory — that is all it has to do. Nothing
it writes about the post is scored; the house reads the post itself.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
