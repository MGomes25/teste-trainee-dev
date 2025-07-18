# Teste Trainee Dev - Todo List Angular - PAULO MARCELO MELO GOMES

## 1. Visão Geral da Solução
Este projeto consiste em uma aplicação de lista de tarefas (To-Do List) desenvolvida em Angular. A aplicação permite adicionar, editar, remover, marcar como concluídas e exportar tarefas para PDF. Foram corrigidos erros existentes e implementadas melhorias visuais e funcionais.

## 2. Como Executar a Aplicação

### Pré-requisitos
- Node.js (versão recomendada: 18+)
- Angular CLI

### Passos
```bash
# Clone o repositório
git clone https://github.com/MGomes25/teste-trainee-dev.git

# Acesse o diretório do projeto
cd teste-trainee-dev

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

## 3. Correção dos Erros Iniciais (`npm start`)
- Corrigido o erro de build relacionado ao uso do `[(ngModel)]` sem importar o `FormsModule`.
- Corrigido o problema de caminhos e nomes de arquivos inválidos.
- Corrigidos erros de tipagem em serviços e componentes.
- Ajustado o carregamento inicial dos dados do `localStorage`.

## 4. Relatório de Correção de Bugs

### Bug: Falha ao usar `ngModel`
**Causa:** Falta de importação do `FormsModule`.  
**Solução:** `FormsModule` foi importado no `AppModule`.

### Bug: Botão "Editar" não funcional
**Causa:** O botão não emitia eventos nem atualizava o campo de input.  
**Solução:** Implementada comunicação entre `TodoItemComponent` e `NewTaskComponent` usando `EventEmitter`.

### Bug: Palavras inapropriadas não eram detectadas
**Causa:** A biblioteca `bad-words` não reconhecia palavras em português.  
**Solução:** Adição de palavras ofensivas em português manualmente ao filtro.

## 5. Relatório de Implementação de Melhorias

### Melhorias Implementadas:
- **SweetAlert2:** Substituição de `alert` e `confirm` nativos por modais interativos.
- **Exportação para PDF:** Inclusão da biblioteca `jsPDF` para exportar as tarefas visíveis.
- **Ordenação Alfabética:** Botão para ordenar tarefas de A-Z.
- **Exibição condicional:** Alternância entre tarefas concluídas e pendentes.
- **Estilização e UX:** Melhoria nos estilos dos botões, ícones e layout responsivo.

## 6. Relatório de Débito Técnico

- Ainda há oportunidade para refatorar o gerenciamento de estado utilizando `RxJS` e `BehaviorSubject`.
- Não foi implementado o filtro de busca por tarefas.
- Testes unitários não foram escritos.

## 7. Relatório de Melhorias Futuras

- **Filtro de pesquisa por título.**
- **Autenticação com login e usuários distintos.**
- **Persistência com backend real (Firebase ou Node.js).**
- **Dark Mode / Temas personalizados.**
- **Integração com notificações.**

## 8. Decisões e Considerações

- A escolha por usar `SweetAlert2` e `jsPDF` se deu pela simplicidade de integração e documentação amigável.
- Decidiu-se manter o `localStorage` como persistência local, para simplicidade, mas o projeto está preparado para migração futura para um backend real.