# ATpeoto Login Demo

A live demo that shows how to **log in with an [AT Protocol](https://atproto.com) identity** (the decentralized identity layer behind Bluesky and other sites) using [Startup API](https://startupapi.com).

Sign in with your atproto handle (e.g. `alice.bsky.social`) or your own PDS, and the worker resolves your identity, runs the OAuth flow, and creates a Startup API user account tied to your atproto DID.

The deployed instance lives at
[atproto-demo.startupapi.org](https://atproto-demo.startupapi.org). It exists
purely to demonstrate atproto-based authentication — it is not a production
service, and accounts may be reset at any time.

## How it works

This is a [Startup API](https://startupapi.com)-powered Cloudflare Worker,
created with `npm create startup-api`. It transparently proxies requests to an
origin and layers on user accounts, authentication, and other Startup API
features — here configured to authenticate users through their atproto identity.

The worker logic lives in the [`@startup-api/cloudflare`](https://github.com/StartupAPI/startup-api-cloudflare)
package. This project is a thin wrapper: a [src/index.ts](src/index.ts) that
re-exports the worker, plus this instance's configuration in
[wrangler.jsonc](wrangler.jsonc). Upgrade the framework by bumping the
`@startup-api/cloudflare` dependency.

## Develop

```bash
npm install      # also syncs framework assets into ./public
npm run dev      # http://localhost:8787
```

Local secrets live in `.dev.vars` (gitignored); a `SESSION_SECRET` was generated
for you at creation time. See [.dev.vars.example](.dev.vars.example) for all
supported variables.

## Deploy

```bash
npm run deploy
npx wrangler secret put SESSION_SECRET   # set the production session secret
```
