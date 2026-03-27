🚀 GoTask — Gerenciador de Tarefas com Angular 19, RxJS & Angular Material

🧭 Visão Geral

O GoTask é uma aplicação Front-end desenvolvida com Angular 19 que simula um sistema completo de gerenciamento de tarefas no estilo Kanban. O projeto foi construído com foco em boas práticas de arquitetura, componentização e gerenciamento de estado, proporcionando uma base sólida para aplicações escaláveis.

A aplicação permite criar, editar, excluir e mover tarefas entre diferentes status (A Fazer, Fazendo e Concluído), além de adicionar comentários. Todo o estado é gerenciado de forma centralizada com RxJS e persistido no Local Storage, garantindo uma experiência fluida e consistente.

⚙️ Funcionalidades e Arquitetura

🏗️ 1. Arquitetura Front-end & Boas Práticas

Componentização: Separação clara de responsabilidades entre componentes.
Padronização: Nomenclaturas consistentes e organização em pastas (components, services, interfaces, enums, utils).
Desacoplamento: Componentes independentes e reutilizáveis.
Mobile First: Layout responsivo construído priorizando dispositivos móveis.
Organização: Estrutura pensada para escalabilidade e manutenção.

🔄 2. Gerenciamento de Estado com RxJS

Uso de BehaviorSubject como fonte única de verdade.
Observables para comunicação reativa entre componentes.
Uso de async pipe para evitar subscriptions manuais.
Tratamento de imutabilidade com cópias de dados (map, structuredClone).
Centralização da lógica no TaskService.

📊 3. Sistema Completo de Tarefas (CRUD)

Criação de tarefas com nome e descrição.
Edição de tarefas existentes.
Remoção de tarefas.
Movimentação entre colunas (Drag and Drop).
Separação de tarefas por status:
- To Do
- Doing
- Done

💬 4. Sistema de Comentários

Adição de comentários em tarefas.
Remoção de comentários.
Atualização dinâmica da lista.
Modal dedicado para visualização e interação.
Controle de alterações antes de persistir.

🎯 5. Interface e Experiência do Usuário

Layout responsivo com Tailwind CSS.
Uso de Flexbox e Grid.
Feedback visual em formulários (validação dinâmica).
Controle de estados vazios ("Nenhuma tarefa disponível").
Foco automático em inputs para melhor UX.
Limitação de textos longos com exibição completa via hover.

🧩 6. Angular Material & CDK

Uso do CDK para:
- Drag and Drop (movimentação de tarefas)
- Dialog (modais)
Centralização da abertura de modais em um service.
Envio e recebimento de dados entre componentes e modais.

🛠️ 7. Persistência de Dados

Uso do Local Storage para salvar tarefas.
Recuperação automática ao iniciar a aplicação.
Sincronização com RxJS para atualização em tempo real.

🧰 Tecnologias Utilizadas

Front-end

Angular 19.2.x  
TypeScript  
RxJS (BehaviorSubject, Observables, Pipes)  
Angular Material CDK (Drag & Drop, Dialog)  
Tailwind CSS (Estilização Mobile First)  
CSS3 Moderno  
HTML5  

Ferramentas

VS Code  
Prettier (Formatação de código)  
Figma (Design e prototipação)  

🧠 Conceitos Principais Dominados

Desenvolvimento Front-end com Angular moderno.
Gerenciamento de estado reativo com RxJS.
Arquitetura baseada em separação de responsabilidades.
Boas práticas de componentização.
Imutabilidade de dados em aplicações reativas.
Comunicação entre componentes (Input, Output, Services).
Criação e gerenciamento de formulários reativos.
Integração com APIs do navegador (Local Storage).
Implementação de Drag and Drop com Angular CDK.
Controle de fluxo de dados e fonte única de verdade.

🏁 Conclusão

O GoTask é um projeto completo que demonstra domínio prático de Angular e conceitos essenciais para aplicações modernas. Ele vai além de um simples gerenciador de tarefas, mostrando como estruturar projetos escaláveis, aplicar boas práticas e construir interfaces interativas e responsivas.

A utilização de RxJS como base para gerenciamento de estado, junto com uma arquitetura bem definida e desacoplada, torna este projeto uma excelente referência para desenvolvimento profissional com Angular.
