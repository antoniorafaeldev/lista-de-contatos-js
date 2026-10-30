# Lista de Contatos

Aplicação web simples para gerenciar uma lista de contatos pelo navegador. O usuário interage com um menu de diálogos para consultar, incluir e ordenar contatos.

Este projeto foi desenvolvido durante o **Curso JavaScript Essentials I**, da **Cisco Networking Academy**.

## Funcionalidades

- Exibe o primeiro ou o último contato cadastrado.
- Lista todos os contatos.
- Adiciona um novo contato com nome, telefone e e-mail.
- Impede a inclusão de campos vazios.
- Ordena a lista por nome, e-mail ou telefone.
- Encerra a aplicação pelo menu ou ao cancelar o diálogo principal.

## Estrutura de pastas

```text
lista-de-contatos-js/
├── index.html   # Página HTML que carrega a aplicação
├── main.js      # Dados, funções e menu interativo
└── README.md    # Documentação do projeto
```

## Funções

| Função | Descrição |
| --- | --- |
| `showMessage(contactList, index)` | Retorna os dados de um contato no índice informado. Também trata lista inválida ou contato inexistente. |
| `showAllContacts(contacts)` | Retorna uma mensagem formatada contendo todos os contatos da lista. |
| `createNewContact(contactList)` | Solicita nome, telefone e e-mail; valida os campos e adiciona o contato à lista. |
| `sortList(list)` | Solicita o critério de ordenação e ordena a lista por `name`, `email` ou `phone`. |

## Como rodar localmente

Não é necessário instalar dependências nem iniciar um servidor.

1. Abra a pasta do projeto no explorador de arquivos.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Use os diálogos exibidos para escolher uma das opções:
   - `1`: mostrar o primeiro contato;
   - `2`: mostrar o último contato;
   - `3`: mostrar todos os contatos;
   - `4`: adicionar um contato;
   - `5`: ordenar a lista;
   - `6`: sair.

Também é possível abrir o `index.html` com a extensão **Live Server** do VS Code, se ela estiver instalada.

## Tecnologias

- HTML5
- JavaScript (ES6+)

## Observação

Os contatos ficam apenas em memória enquanto a página está aberta. Ao recarregar ou fechar a página, a lista volta aos três contatos iniciais definidos em `main.js`.
