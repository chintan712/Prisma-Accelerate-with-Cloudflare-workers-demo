**1. Clone & Install**

git clone <repo-url>
cd <repo>
npm install

**2. Create .env**

DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"

**3. Generate Prisma Client (Edge)**

npx prisma generate --no-engine --schema=prisma/schema.prisma

**4. Configure Prisma Accelerate**

- Go to https://console.prisma.io/
- Create a new project
- Enable Accelerate for the project
- Add your database URL and select region
- Generate the Accelerate connection URL and place it in `.env` as DATABASE_URL

**5. Add Accelerate URL to wrangler.jsonc**

{
  "vars": {
    "DATABASE_URL": "prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
  }
}

**6. Deploy Worker**

npx wrangler deploy

**7. Check Logs (optional)**

npx wrangler tail your-app-name
