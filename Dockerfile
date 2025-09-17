# 1. Define a imagem base
FROM node:22-alpine AS build

# 2. Define o diretório de trabalho
WORKDIR /app

# 3. Copia os "mapas" de dependências
COPY package*.json .

# 4. Instala as dependências (em cache)
RUN npm install

# 5. Copia o restante do código
COPY . .

# 6. Builda o projeto
RUN npm run build

# 7. Define o comando para iniciar o contêiner
CMD ["npm", "run", "start:prod"]