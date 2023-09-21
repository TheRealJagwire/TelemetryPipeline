FROM denoland/deno
EXPOSE 8000
WORKDIR /app
# USER deno
COPY src/ .
RUN deno cache deps.ts
RUN deno cache main.ts
RUN mkdir -p ./log
CMD ["run", "--allow-all", "main.ts"]