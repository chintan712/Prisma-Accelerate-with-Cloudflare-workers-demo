import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx) {
    const prisma = new PrismaClient({
      datasourceUrl: "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19TTXgzUmFrbWdpRGlxXy1JaWtUa3IiLCJhcGlfa2V5IjoiMDFLQTdZMjMwMkpLVlhSTjJHNzIzQTZKV1AiLCJ0ZW5hbnRfaWQiOiJjMzFiMTIxZTRlZjhmMDA0MjE1NTQ5ODE3NzRiZDM3Mjk4MTUyNjczYjQ5YWJhMDhmZDk3MjliMjNiNzQwYTczIiwiaW50ZXJuYWxfc2VjcmV0IjoiODJlYjlkYWItYzNmZS00MjY0LWE4NWUtMTVmNzE0ZThiYjIzIn0.21Oq015NK2F10gj9N_OFORrTRj1nPaxwvC5rs5HisnU",
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