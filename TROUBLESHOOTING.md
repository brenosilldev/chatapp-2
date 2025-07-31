# Solução para Erro de Timeout do MongoDB

## Problema
```
Operation `usuarios.findOne()` buffering timed out after 10000ms
```

## Causas Possíveis

1. **Conexão lenta com o MongoDB**
2. **Configuração inadequada de timeouts**
3. **Problemas de rede**
4. **MongoDB não está rodando**
5. **URL de conexão incorreta**

## Soluções Implementadas

### 1. Configuração Melhorada do MongoDB
- Adicionados timeouts específicos para operações
- Configuração de pool de conexões
- Desabilitação do buffering de comandos
- Monitoramento de eventos de conexão

### 2. Tratamento de Erro Robusto
- Timeouts específicos para cada operação (`maxTimeMS(5000)`)
- Tratamento específico para erros de timeout
- Logs detalhados para debugging

### 3. Health Check
- Rota `/api/health` para verificar status do banco
- Middleware para verificar saúde da conexão

## Como Testar

### 1. Teste a Conexão
```bash
npm run test:db
```

### 2. Verifique o Status do Banco
```bash
curl http://localhost:4000/api/health
```

### 3. Verifique as Variáveis de Ambiente
Certifique-se de que o arquivo `.env` existe na pasta `back/` com:

```env
MONGO_URL=mongodb://localhost:27017/chatapp
PORT=4000
```

## Verificações Adicionais

### 1. MongoDB está rodando?
```bash
# Ubuntu/Debian
sudo systemctl status mongod

# macOS
brew services list | grep mongodb

# Windows
net start | findstr MongoDB
```

### 2. Teste de conectividade
```bash
telnet localhost 27017
```

### 3. Verifique logs do MongoDB
```bash
# Ubuntu/Debian
sudo tail -f /var/log/mongodb/mongod.log

# macOS
tail -f /usr/local/var/log/mongodb/mongo.log
```

## Configurações Recomendadas

### Para Desenvolvimento Local
```env
MONGO_URL=mongodb://localhost:27017/chatapp
```

### Para MongoDB Atlas
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/chatapp?retryWrites=true&w=majority
```

## Se o Problema Persistir

1. **Reinicie o MongoDB**
2. **Verifique a conectividade de rede**
3. **Aumente os timeouts se necessário**
4. **Considere usar MongoDB Atlas para desenvolvimento**

## Logs Úteis

Os logs agora incluem:
- Status da conexão MongoDB
- Erros específicos de timeout
- Detalhes de operações que falharam

Verifique os logs do servidor para informações detalhadas sobre o problema. 