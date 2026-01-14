# 🟢 VMsolutions | Imersão Diagnóstica v1.0
### *Code. Craft. Culture.*

![Status](https://img.shields.io/badge/Status-Operacional-00FF00?style=for-the-badge&logo=statuspage)
![Stack](https://img.shields.io/badge/Stack-React_|_Tailwind_|_Formspree-black?style=for-the-badge&logo=react)

Este repositório contém o sistema de **Imersão Diagnóstica** da VMsolutions. Mais do que um simples formulário de contato, esta aplicação é o primeiro *handshake* entre a nossa Engenharia Criativa e o DNA de novos parceiros de negócio.

---

## 🛠️ O Conceito: Alquimia Digital
A aplicação foi projetada sob o novo posicionamento da agência, unindo o rigor técnico do desenvolvimento de software à fluidez narrativa do branding.

- **Estética Microindustrial**: Layout baseado em grids, linhas de circuito e tipografia *monospaced*.
- **Transparência Glass Box**: O usuário visualiza o "processamento" dos dados em tempo real através de logs de transmissão simulados.
- **Handshake de Engenharia**: Substituímos o briefing tradicional por um diagnóstico de maturidade técnica e criativa.

---

## 🚀 Funcionalidades Chave

- **[01] Protocolo Serial Único**: Cada diagnóstico gera um ID de protocolo exclusivo (ex: `VM-264821-X`) para rastreabilidade.
- **[02] Log de Transmissão**: Interface estilo terminal que simula criptografia e sincronização de dados durante o envio.
- **[03] Resumo Operacional**: Tela de sucesso que fornece ao cliente um recibo técnico imediato da operação.
- **[04] Integração API Silenciosa**: Envio de dados via `fetch` para endpoint seguro (Formspree), eliminando redirecionamentos externos e mantendo o usuário imerso na marca.

---

## 🎨 Design System

| Elemento | Especificação |
| :--- | :--- |
| **Fundo** | `#0A0A0A` (Deep Dark / Grid Pattern) |
| **Destaque** | `#00FF00` (Verde Neon / High-Visibility) |
| **Tipografia** | `Montserrat` (Autoridade) + `Fira Code` (Cultura Dev) |
| **Efeitos** | CRT Scanlines, Glassmorphism, Neon Glow |

---

## 💻 Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Lucide React / FontAwesome
- **Backend-less Integration**: [Formspree API](https://formspree.io/)
- **Fonts**: Google Fonts (Inter & Fira Code)

---

## ⚙️ Configuração para Produção

Para conectar este formulário ao seu ecossistema de e-mail:

1. Acesse o arquivo `App.tsx`.
2. Localize a constante no método `handleSubmit`:
   ```typescript
   const response = await fetch('https://formspree.io/f/xykkzkkg', { ... });
   ```
3. Substitua o ID `xykkzkkg` pela sua chave de formulário ativa no Formspree.

---

## 📁 Estrutura de Arquivos

```bash
├── src/
│   ├── components/
│   │   ├── FormSection.tsx       # Módulos de seção do diagnóstico
│   │   └── CircuitDecoration.tsx # Elementos gráficos microindustriais
│   ├── types.ts                  # Contratos de dados e interfaces
│   ├── App.tsx                   # Lógica central e estados de transmissão
│   └── main.tsx                  # Ponto de entrada
├── index.html                    # Efeitos de Scanline e Global CSS
└── metadata.json                 # Manifesto da aplicação
```

---

## 📜 Licença e Propriedade

Este projeto é de propriedade intelectual da **VMsolutions**. 
Desenvolvido para representar a excelência em **Engenharia Criativa** e **Alquimia Digital**.

---
*VMsolutions // Aclimação - Vila Mariana - Global*