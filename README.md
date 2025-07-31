# ChatApp-2 📱💬

Um aplicativo de chat em tempo real desenvolvido com React (frontend) e Node.js/Express (backend), utilizando Socket.IO para comunicação em tempo real e MongoDB para persistência de dados.

## 🚀 Funcionalidades

### Autenticação e Usuários
- ✅ Registro de usuários com validação
- ✅ Login com autenticação JWT
- ✅ Logout seguro
- ✅ Avatares automáticos baseados no gênero
- ✅ Perfis de usuário personalizados

### Chat e Mensagens
- ✅ Conversas em tempo real
- ✅ Histórico de mensagens
- ✅ Sistema de conversas entre usuários
- ✅ Interface responsiva e moderna

### Tecnologias Utilizadas

#### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Socket.IO** - Comunicação em tempo real
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticação com tokens
- **bcryptjs** - Criptografia de senhas
- **dotenv** - Gerenciamento de variáveis de ambiente

#### Frontend
- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **ESLint** - Linting de código
- **CSS** - Estilização

## 📁 Estrutura do Projeto

```
chatapp-2/
├── back/                    # Backend (Node.js/Express)
│   ├── controllers/         # Controladores da aplicação
│   │   ├── auth.controller.js
│   │   └── message.controller.js
│   │   └── user.controller.js
    |   
│   ├── lib/                # Utilitários e configurações
│   │   ├── db.js          # Conexão com MongoDB
│   │   └── generatetoken.js # Geração de JWT
│   ├── models/             # Modelos do MongoDB
│   │   ├── conversation.model.js
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── routes/             # Rotas da API
│   │   ├── user.routes.js
│   │   ├── auth.routes.js
│   │   ├── message.routes.js
│   │   └── index.routes.js
│   ├── sockey/           
│   │   ├── socket.js
│   └── server.js           # Servidor principal
├── front/                  # Frontend (React)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── assets/
│   │   └── components/
│   │   └── context/
│   │   └── hooks/
│   │   └── pages/
│   │   └── store/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── package.json            # Dependências do backend
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- MongoDB (local ou MongoDB Atlas)
- 

### 1. Clone o repositório
```bash
git clone https://github.com/brenosilldev/chatapp-2.git
cd chatapp-2
```

### 2. Instale as dependências do backend
```bash
npm install
```

### 3. Instale as dependências do frontend
```bash
cd front
npm install
cd ..
```

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações do Servidor
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URL=mongodb://localhost:27017/chatapp
# ou para MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/chatapp

# JWT
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
```

### 5. Inicie o servidor de desenvolvimento

#### Backend
```bash
npm run dev
```
O servidor estará rodando em `http://localhost:5000`

#### Frontend
```bash
cd front
npm run dev
```
O frontend estará rodando em `http://localhost:5173`

## 📚 API Endpoints

### Autenticação (`/api/auth`)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/register` | Registra um novo usuário |
| POST | `/login` | Autentica um usuário |
| POST | `/logout` | Faz logout do usuário |

### Exemplo de uso da API

#### Registro de usuário
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@email.com",
    "password": "senha123",
    "genero": "masculino"
  }'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "joao@email.com",
    "password": "senha123"
  }'
```

## 🗄️ Modelos de Dados

### Usuário (User)
```javascript
{
  nome: String,        // Nome do usuário
  email: String,       // Email único
  password: String,    // Senha criptografada
  genero: String,      // Gênero (opcional)
  avatar: String,      // URL do avatar
  createdAt: Date      // Data de criação
}
```

### Mensagem (Message)
```javascript
{
  idUserSender: ObjectId,    // ID do remetente
  idUserReceiver: ObjectId,  // ID do destinatário
  message: String,           // Conteúdo da mensagem
  createdAt: Date,          // Data de criação
  updatedAt: Date           // Data de atualização
}
```

### Conversa (Conversation)
```javascript
{
  participants: [ObjectId],  // Array de IDs dos participantes
  messages: [ObjectId],      // Array de IDs das mensagens
  createdAt: Date,          // Data de criação
  updatedAt: Date           // Data de atualização
}
```

## 🔐 Segurança

- **JWT Tokens**: Autenticação segura com tokens JWT
- **bcrypt**: Criptografia de senhas com salt
- **HTTP-Only Cookies**: Tokens armazenados em cookies seguros
- **Validação de dados**: Validação de entrada em todas as rotas
- **CORS**: Configuração adequada para requisições cross-origin

## 🚀 Deploy

### Backend/Frontend (Render)
1. Configure as variáveis de ambiente no seu provedor
2. Conecte o repositório
3. Deploy automático

```bash
npm run build
npm run start
```


## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Breno Silva**
- GitHub: [@brenosilldev](https://github.com/brenosilldev)

