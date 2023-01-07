Primeiro projeto pessoal feito através das tecnologias do MERN, através dele o usuário consegue administrar suas aplicações a vagas de trabalho

### Funcionalidades: 
- Sistema de login/registro que permite o usuário acessar as funcionalides do projeto, o usuário também pode se deslogar
- Criar uma vaga de trabalho com informando a sua posição e o nome da empresa
- Por padrão, o estado da vaga será de pendente(pending), sendo possível alterá-lo para entrevista(interview) e rejeitado(declined) através do botão de edição
- Através do botão para editar, é possível editar todos os dados da vaga, menos a data em que ela foi criada
- Projeto utiliza o banco de dados MongoDB através da biblioteca mongoose
- Senha criptografada com o bcryptjs para assegurar a segurança do usuário
- Quando o usuário se loga e passa na autenticação, um token é gerado através da biblioteca jsonwebtoken, que autoriza o usuário acessar as funcionalidades do projeto
- Possui um sistema de cookies, armazenando o token gerado e permitindo que o usuário não precise logar novamente caso tenha acessado a página dentro de 24 horas
- Token armazenado nos cookies do navegador através da biblioteca cookie-parser
- Projeto implantado na nuvem através do sistema de nuvem Render
- Uso das bibliotecas seguintes bibliotecas para fornecer segurança ao projeto:
- helmet: responsável pela segurança relacionada aos http response headers
- cors: permite o acesso através de domínios diferentes
- xss-clean: "sanitize the user input"
- express-mongo-sanitize: protege contra injeções maliciosas direcionadas ao mongoDB

### Live: https://joblist-mern.onrender.com

INSTALLATION

install dependencies with 'npm install' command

create .env and provide correct values: 
MONGO_URI= <proper mongo db connection string>
JWT_SECRET= <jwt secret string>
JWT_LIFETIME= <e.g. "1d">

start the back-end with 'node server'
navigate to the client folder and start the front-end with 'npm start'

you should see "Server is listening ...." text
