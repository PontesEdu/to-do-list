📝 To-Do List App

Este é um projeto de To-Do List desenvolvido para praticar React, gerenciamento de estado, interface moderna e persistência de dados.
O usuário pode adicionar, editar, remover e marcar tarefas como concluídas. Todas as informações ficam salvas automaticamente no localStorage, garantindo que nada seja perdido ao recarregar a página.

🚀 Tecnologias Utilizadas
⚛️ React + TypeScript

A base do projeto é construída com React usando TypeScript, trazendo segurança, organização e melhor experiência de desenvolvimento.

🧭 React Router DOM

Utilizei React Router para controlar a navegação do app.
Mesmo sendo um projeto com uma única página principal, o router permite crescer a aplicação no futuro sem complicações.

📦 Zustand + persist

Para o gerenciamento de estado, escolhi o Zustand, por ser simples, leve e extremamente performático.

O middleware persist foi usado para salvar automaticamente todas as tasks no localStorage.
Isso significa que:

as tarefas continuam lá mesmo após fechar o navegador

o estado é restaurado automaticamente

nenhuma lógica extra é necessária para salvar manualmente

🎨 Shadcn UI

A interface foi construída usando Shadcn UI, que combina Radix UI + Tailwind para criar componentes acessíveis, bonitos e fáceis de customizar.

Alguns componentes usados:

Dialog (modal de adicionar/editar)

Button

Input

Checkbox

Ícones do Lucide

O resultado é uma interface limpa, moderna e consistente.

🌈 Tailwind CSS

Todo o estilo da aplicação é feito com Tailwind CSS, deixando o design visual rápido de implementar e altamente responsivo.

✔️ Funcionalidades

Adicionar tarefa

Editar tarefa

Remover tarefa

Marcar/desmarcar como concluída

Persistência automática no localStorage

Modal para criação/edição

UI amigável e responsiva

▶️ Como Rodar o Projeto
npm install
npm run dev

🧠 Aprendizados

Durante o projeto, aprimorei meu conhecimento em:

gerenciamento de estado com Zustand

uso de persistência no navegador

criação de modais e UI acessível com Shadcn

organização de componentes

React Router com rotas modernas

Tailwind aplicado a layouts reais

🔮 Próximos Passos

Filtros de tarefas (todas, concluídas, abertas)

Animações com Framer Motion

Dark mode

Drag & drop

Login e API futuramente