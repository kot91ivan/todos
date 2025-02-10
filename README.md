This is a todo list use server action and Prisma for actions with DB.

Ready version you can watch on this [site](https://todos-xi-snowy.vercel.app/)

Make sure you have the following installed:

- Node.js *(+18 or upper)*
- Docker *(if you want use it)*

## Local development without Docker

First, run the development server:

**Install packages:**

```bash
npm  i
# or
yarn
```

**Run dev server:**

```bash
npm  run  dev
# or
yarn  dev
```

Open [localhost](http://localhost:3000) with your browser to see the result.

If You want check created items for Todo list in DB, enter this cmd:

```bash
npx  prisma  studio
```

## Docker

1. Copy `.env.example` to `.env` and specify the settings.
> I got key for DATABASE_URL on [Prisma.io](https://www.prisma.io/)
2. For start Docker `docker-compose up --build`
3. After successful start, you can access:
- Next.js App with Todo list (`http://localhost:3000`)
- Prisma Studio (`http://localhost:5555`)