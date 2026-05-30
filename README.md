# Biblioteca Digital

## Instalación

```bash
git clone https://github.com/Sharif-Garcia/biblioteca-digital.git
cd biblioteca-digital
npm install
```

Crea un archivo `.env` en la raíz con:

```
PORT=3000
```

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```
