# Projeto Program Beginners - Projeto 1: box-office

## Integrantes

- [Abner de Souza](https://github.com/AbnerSZ)
- [Andrey Marques](https://github.com/AndreyMarks)
- [Arthur Romanovas](https://github.com/tutti019)
- [Fernando Martins](https://github.com/idkMrts)
- [Mateus Rafael](https://github.com/mateusrafael4)

## Descrição

&emsp; Desenvolver uma aplicação web simples de uma bilheteria de cinema com as seguintes funcionalidades:

- Cadastro de filmes;
- Cadastro de salas;
- Cadastro de sessões e horários e
- Venda de ingressos

O projeto foi desenvolvido por meio de:

<p> Front-end:
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

<p> Back-end:
    <ul>
        <li>Node.js</li>
        <li>C#</li>
    </ul>

<p> Banco de Dados:
    <ul>
        <li>MySQL</li>
        <li>SQLite</li>
    </ul>

## Estrutura de pastas

```
box-office/
├── backend/                    # Servidor Node.js
│   ├── controllers/           # Lógica de controle das rotas
│   ├── models/               # Modelos de dados
│   ├── routes/               # Definição das rotas da API
│   ├── config/               # Configurações (DB, variáveis de ambiente)
│   └── app.js                # Arquivo principal do servidor
├── frontend/                 # Interface do usuário
│   ├── pages/                # Páginas HTML
│   │   ├── movies.html       # Página de filmes
│   │   ├── coming_soon.html  # Página de filmes em breve
│   │   ├── cinemas.html      # Página de cinemas
│   │   ├── promotions.html   # Página de promoções
│   │   └── my_account.html   # Página da conta do usuário
│   ├── css/                  # Estilos CSS
│   ├── js/                   # Scripts JavaScript
│   ├── img/                  # Imagens e assets
│   └── index.html            # Página inicial
├── Documentation/            # Documentação do projeto
├── package.json             # Dependências e scripts do projeto
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Este arquivo
```

## Configuração para Desenvolvimento

### Pré-requisitos
- Node.js (versão 16 ou superior)
- NPM (versão 8 ou superior)
- MySQL (para o banco de dados)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Projetos-Program-Beginners/box-office.git
cd box-office
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as configurações necessárias (banco de dados, porta, etc.)

4. Execute o projeto:
```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
npm start
```

5. Acesse a aplicação:
   - Frontend: Abra o arquivo `frontend/index.html` no navegador
   - API: `http://localhost:3000` (quando o backend estiver implementado)

## Licença/License

Seção será provida em breve.