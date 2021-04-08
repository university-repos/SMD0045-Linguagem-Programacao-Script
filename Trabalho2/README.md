## AP2

### Descrição 

O servidor deve responder com uma pagina html com uma caixa de texto e um botão. Ao clicar no botão, o conteúdo da caixa de texto é enviado para o servidor e um outro número é retornado pelo servidor. Esse numero deve ser igual ao número enviado somado com 2.

### Solução

O servidor está em server.js
A função de incrementação está em index.js
A página está em index.html
Estilizações estão em style.css

### Como executar
É necessário ter Node e NPM para executar

```shell
npm install
npm start
```

Para acessar, entre em http://localhost:9001

Caso a porta já esteja em uso, alterar `const port` em server.js
