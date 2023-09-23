import { Application,
     Logger,
      Router } from "./deps.ts";

const logger: Logger = new Logger();
await logger.initFileLogger("./log");

const app: Application = new Application();
const router: Router = new Router();
app.use(async (ctx, next) => {
    await next();
    logger.info(`${ctx.request.method} ${ctx.request.url}`);
})

router.get("/", (ctx) => {
    ctx.response.body = "All Services Are Up!";
});

router.get("/api/v1", (ctx) => {
    ctx.response.body = "Hello!";
});
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({hostname, port, secure}) => {
    logger.info(`Listening on ${hostname}:${port}`);
});
await app.listen({ port: 8080});