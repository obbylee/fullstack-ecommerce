import { handle } from "hono/vercel";

// @ts-expect-error
import app from "../dist";

export const runtime = "edge";

export const GET = handle(app);
export const POST = handle(app);
