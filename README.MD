<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autor">Autor</a> • 
</p>


## 💻 Sobre o projeto

 Este projeto foi feito utilizando Mongodb e o servidor graphql-yoga. A aplicação se utiliza do Mongo Cloud como servidor de banco de dados.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisará ter instaladas em sua máquina as seguintes ferramentas:

- [NodeJs - v14.+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/get-started)


### 🎲 Rodando a aplicação
Na pasta raiz do projeto execute os seguintes comandos

```bash

# Estes comandos instalarão as dependências e vão subir o server
yarn # instala as dependencias
docker run --name mongo -p 27017:27017 -v ./data/db/data/db -d mongo mongod # sobe o docker do MongoDB
yarn dev # inicializa o server

```

- O graphql playground estará em *http://localhost:4000*


---

## 🦸 Autor

<a href="https://github.com/fabioprogramadorti">
 <img style="border-radius: 50%;" src="./img/fabio.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Fabio Santos</b></sub></a> <a href="https://github.com/fabioprogramadorti" title="Rocketseat">🚀</a>
 <br />

[![Gmail Badge](https://img.shields.io/badge/-fabioprogramadorti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fabioprogramadorti@gmail.com)](mailto:fabioprogramadorti@gmail.com)
