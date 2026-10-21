# TaskFlow — Lista de Tarefas

Aplicação web para gerenciamento de tarefas, desenvolvida com React e Vite como exercício prático de desenvolvimento, análise de código e refatoração com o apoio do GitHub Copilot.

## Sobre o projeto

O TaskFlow foi desenvolvido com o propósito de praticar o uso de ferramentas de Inteligência Artificial no processo de desenvolvimento de software, explorando sua aplicação na identificação de bugs, validação de funcionalidades e melhoria da qualidade do código.

O processo começou com uma análise do projeto utilizando o GitHub Copilot, sem alterações nos arquivos. A ferramenta foi orientada a identificar problemas funcionais, riscos relacionados ao estado da aplicação, questões de acessibilidade e pontos de melhoria na manutenção do código.

Após o diagnóstico, os testes automatizados foram utilizados para verificar o comportamento da aplicação e identificar funcionalidades que precisavam de correção. Com os problemas mapeados, foi proposta e aplicada uma refatoração incremental, priorizando a legibilidade e a simplicidade, sem introduzir complexidade desnecessária.

O projeto permitiu explorar um fluxo de trabalho em que a IA atua como ferramenta de apoio à análise e evolução do código, com validação por meio de testes.

## Funcionalidades

- Adicionar tarefas com título.
- Marcar tarefas como concluídas ou pendentes.
- Excluir tarefas.
- Filtrar tarefas por situação: todas, pendentes ou concluídas.
- Exibir a quantidade de tarefas pendentes.
- Validar o título para impedir o cadastro de tarefas vazias ou compostas apenas por espaços.
- Interface responsiva para diferentes tamanhos de tela.

## Tecnologias utilizadas

- **React:** construção da interface e gerenciamento de estado.
- **JavaScript (ES Modules):** implementação da lógica da aplicação.
- **Vite:** ambiente de desenvolvimento e geração do build.
- **CSS3:** estilização e responsividade.
- **Vitest:** execução dos testes automatizados.
- **React Testing Library:** testes dos componentes e comportamentos da interface.
- **GitHub Copilot:** apoio à análise de código, identificação de problemas e refatoração.

## Análise e testes

Durante a análise inicial, foram identificados problemas relacionados à atualização do estado, filtragem das tarefas, validação dos campos e gerenciamento de identificadores. Também foram apontadas oportunidades de melhoria em acessibilidade e manutenção.

Após as correções, foi realizada uma refatoração incremental do componente principal, mantendo a estrutura simples da aplicação.

**Validação final:**
- 6 testes automatizados aprovados.
- Build de produção concluído com sucesso.

Os testes cobrem funcionalidades como cadastro, filtragem, conclusão e exclusão de tarefas, além da validação de entradas.

## Como executar o projeto

É necessário ter o Node.js e o npm instalados.

1. Clone o repositório:

   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Entre na pasta do projeto:

   ```bash
   cd listatarefa
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador o endereço indicado pelo Vite no terminal.

### Executar os testes

Para executar os testes uma vez, sem iniciar o modo interativo:

```bash
npm run test:run
```

### Gerar o build de produção

```bash
npm run build
```

## Estrutura do projeto

```text
listatarefa/
├── src/
│   ├── test/
│   │   └── setup.js
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Aprendizados

O desenvolvimento deste projeto proporcionou a oportunidade de explorar a IA em diferentes etapas do ciclo de desenvolvimento: análise estática orientada por instruções, investigação de comportamentos inesperados, execução de testes e refatoração.

A experiência também reforçou a importância de validar as sugestões geradas pela IA, utilizar testes para verificar o comportamento esperado e realizar mudanças incrementais, preservando a simplicidade e a legibilidade do código.

O objetivo não foi apenas corrigir os problemas identificados, mas compreender como ferramentas de IA podem apoiar decisões técnicas e contribuir para um processo de desenvolvimento mais organizado.

---

Projeto desenvolvido para fins de estudo e prática de desenvolvimento de software com apoio de Inteligência Artificial.