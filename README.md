###🚀 GoTask — Gerenciador de Tarefas com Angular 19, RxJS & Angular Material

---

### 🧭 Visão Geral

O GoTask é uma aplicação Front-end desenvolvida com Angular 19 que simula um sistema completo de gerenciamento de tarefas no estilo Kanban. O projeto foi construído com foco em boas práticas de arquitetura, componentização e gerenciamento de estado, proporcionando uma base sólida para aplicações escaláveis.

A aplicação permite criar, editar, excluir e mover tarefas entre diferentes status (A Fazer, Fazendo e Concluído), além de adicionar comentários. Todo o estado é gerenciado de forma centralizada com RxJS e persistido no Local Storage, garantindo uma experiência fluida e consistente.

---

### ⚙️ Funcionalidades e Arquitetura

---

### 🏗️ 1. Arquitetura Front-end & Boas Práticas

- Componentização: Separação clara de responsabilidades entre componentes  
- Padronização: Nomenclaturas consistentes e organização em pastas  
- Desacoplamento: Componentes independentes e reutilizáveis  
- Mobile First: Layout responsivo priorizando dispositivos móveis  
- Estrutura escalável e de fácil manutenção  

---

### 🔄 2. Gerenciamento de Estado com RxJS

- Uso de BehaviorSubject como fonte única de verdade  
- Observables para comunicação reativa  
- Uso de async pipe (sem subscriptions manuais)  
- Tratamento de imutabilidade (map, structuredClone)  
- Lógica centralizada no TaskService  

---

### 📊 3. Sistema de Tarefas (CRUD)

- Criação de tarefas com nome e descrição  
- Edição de tarefas existentes  
- Remoção de tarefas  
- Movimentação entre colunas (Drag and Drop)  

**Status das tarefas:**
- To Do  
- Doing  
- Done  

---

### 💬 4. Sistema de Comentários

- Adição de comentários em tarefas  
- Remoção de comentários  
- Atualização dinâmica  
- Modal dedicado para interação  
- Controle de alterações antes de persistir  

---

### 🎯 5. Interface e Experiência do Usuário

- Layout responsivo com Tailwind CSS  
- Uso de Flexbox  
- Validação dinâmica de formulários  
- Mensagem de estado vazio  
- Foco automático em inputs  
- Limitação de textos longos com hover  

---

### 🧩 6. Angular Material & CDK

- Drag and Drop para movimentação de tarefas  
- Dialog para modais  
- Centralização de modais em service  
- Comunicação entre componentes e modais  

---

### 🛠️ 7. Persistência de Dados

- Uso do Local Storage  
- Salvamento automático de tarefas  
- Recuperação ao iniciar aplicação  
- Sincronização com RxJS  

---

### 🧰 Tecnologias Utilizadas

#### Front-end

- Angular 19.2.x  
- TypeScript  
- RxJS  
- Angular Material CDK  
- Tailwind CSS  
- HTML5 / CSS3  

#### Ferramentas

- VS Code  
- Prettier  
- Figma  

---

### 🧠 Conceitos Principais Dominados

- Desenvolvimento com Angular moderno  
- Gerenciamento de estado com RxJS  
- Arquitetura baseada em responsabilidades  
- Componentização e desacoplamento  
- Imutabilidade de dados  
- Comunicação entre componentes  
- Formulários reativos  
- Persistência com Local Storage  
- Drag and Drop com CDK  

---

### 🏁 Conclusão

O GoTask é um projeto completo que demonstra domínio prático de Angular e conceitos essenciais para aplicações modernas. Ele vai além de um simples gerenciador de tarefas, mostrando como estruturar projetos escaláveis, aplicar boas práticas e construir interfaces interativas e responsivas.

A utilização de RxJS como base para gerenciamento de estado, junto com uma arquitetura bem definida e desacoplada, torna este projeto uma excelente referência para desenvolvimento profissional com Angular.
