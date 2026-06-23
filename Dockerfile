# Usa a imagem oficial do Node.js estável
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de mapeamento de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto (incluindo a pasta prisma)
COPY . .

# Gera o cliente do Prisma com base no seu schema.prisma
RUN npx prisma generate

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Executa o comando para iniciar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]