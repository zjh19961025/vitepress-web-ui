
node deploy/update-verson.cjs
corepack use pnpm@latest
pnpm eslint --fix package.json
git add -A
git commit -m "update version"
pnpm publish
