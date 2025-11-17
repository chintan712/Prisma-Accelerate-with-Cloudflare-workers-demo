1. Clone & Install
git clone <repo-url>
cd <repo>
npm install

2. Create .env
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"

3. Generate Prisma Client (Edge)
npx prisma generate --no-engine --schema=prisma/schema.prisma

4. Link Prisma Accelerate
- Go to https://console.prisma.io/ and make new project
- Enable Accelerate for your project
- Add your database url and select the region
- Generate your connection pool Url which you can put in the .env file as DATABASE_URL

5. Add Accelerate URL to wrangler.jsonc
{
  "vars": {
    "DATABASE_URL": "prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
  },
}

7. Deploy Worker
npx wrangler deploy

8. Check for logs (optional)
npx wrangler tail your-app-name
