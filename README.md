# NLW Agents - Server

API RESTful desenvolvida em Node.js para o projeto NLW Agents, uma plataforma de assistência por IA para live streams. Este projeto foi desenvolvido durante o evento NLW Agents da [Rocketseat](https://www.rocketseat.com.br/).

## 💡 Sobre o Projeto

A aplicação funciona como um assistente de IA para criadores de conteúdo em live streams. A ideia é capturar o áudio da transmissão em tempo real, processá-lo e utilizá-lo como base de conhecimento para responder perguntas feitas no chat.

O fluxo principal é:

1. O áudio da live é gravado e enviado para a API em pequenos pedaços (chunks).
2. Cada chunk de áudio é transcrito para texto pela IA (Google Gemini).
3. A transcrição é transformada em um vetor numérico (embedding), que representa seu significado semântico.
4. O texto e seu embedding são armazenados no banco de dados.
5. Quando um espectador faz uma pergunta, a API a transforma em um embedding e busca no banco de dados os trechos de transcrição com o significado mais similar (busca por similaridade).
6. Com os trechos relevantes como contexto, a IA gera uma resposta precisa e fundamentada no que já foi dito na live.

## ✨ Principais Funcionalidades

- Gerenciamento de "Salas" para cada live stream.
- Upload contínuo de áudio em chunks.
- **Transcrição de áudio** para texto utilizando a API do Gemini.
- **Geração de embeddings** (vetores semânticos) a partir das transcrições.
- **Busca por similaridade** semântica para encontrar contextos relevantes.
- **Geração de respostas contextuais** com base nas transcrições encontradas (RAG).

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, TypeScript
- **Framework**: Fastify
- **Banco de Dados**: PostgreSQL com a extensão `pgvector`
- **ORM / Query Builder**: Drizzle ORM
- **Inteligência Artificial**: Google Gemini API
- **Validação**: Zod
- **Containerização**: Docker

## 🚀 Como Começar

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v20 ou superior)
- [Docker](https://www.docker.com/) e Docker Compose
- Um gerenciador de pacotes ([npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/))
