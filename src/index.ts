import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx) {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate());

    const logs = await prisma.log.create({
	  data: {
		message: "Hello, Cloudflare with Prisma!",
		level: "INFO",
	  },
	});
    const result = JSON.stringify(logs);
    return new Response(result);
  },
} satisfies ExportedHandler<Env>;