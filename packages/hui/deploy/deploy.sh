
node deploy/update-verson.cjs
corepack use pnpm@latest
pnpm eslint --fix package.json
pnpm build
git add -A
git commit -m "update version and publish"
pnpm publish
