# UseCelebrate

Desenvolvi essa aplicação simples utilizando express para exemplificar algumas formatações possíveis utilizando celebrate, um validator bem legal para NodeJS

## Executando o projeto

Copiar .env.example e renomeá-lo para .env

### Instalar as dependências do projeto

```
$ yarn
```

### Rodar projeto

```
$ yarn dev
```

## Como funciona

### URL da requisição

```
POST http://localhost:3333/posts
```

### Body enviado na requisição

```
{
  "title": "Nova publicação",
  "description": "É uma publicação sobre validadores",
  "year": "",
  "author": {
    "name": "Rafael",
    "age": "",
    "last_name": ""
  }
}
```

### Exemplo de Resposta de validação com status 400

```
{
  "message": "Insira o ano da publicação!",
  "field": "year",
  "validation": "string.empty"
}
```
