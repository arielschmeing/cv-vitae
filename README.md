# 📄 CV Vitae - Ariel Schmeing

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> Currículo profissional interativo desenvolvido com React, TypeScript e Vite.

## 🎯 Sobre o Projeto

Este projeto consiste em um currículo digital moderno e responsivo, desenvolvido como uma Single Page Application (SPA) utilizando as melhores práticas de desenvolvimento web. A aplicação oferece uma experiência visual atraente e profissional para apresentação de informações curriculares.

## ✨ Características

- 🎨 **Interface Moderna**: Design clean e profissional
- 📱 **Responsivo**: Adaptado para todos os dispositivos
- ⚡ **Performance**: Build otimizado com Vite
- 🔒 **Type-Safe**: Desenvolvimento seguro com TypeScript
- 🧩 **Componentização**: Arquitetura modular com React

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool e dev server de nova geração
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para manter código consistente
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [pnpm](https://pnpm.io/) (recomendado) ou npm/yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/arielschmeing/cv-vitae.git
```

2. Acesse a pasta do projeto:
```bash
cd cv-vitae
```

3. Instale as dependências:
```bash
pnpm install
```

## 💻 Como Usar

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento com Hot Module Replacement (HMR):

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para gerar a versão otimizada para produção:

```bash
pnpm build
```

Os arquivos de produção serão gerados na pasta `dist/`

### Preview da Build

Para visualizar a versão de produção localmente:

```bash
pnpm preview
```

### Linting

Para verificar e corrigir problemas de código:

```bash
pnpm lint
```

## 📁 Estrutura do Projeto

```
cv-vitae/
├── public/          # Arquivos estáticos
├── src/             # Código fonte da aplicação
│   ├── components/  # Componentes React
│   ├── assets/      # Imagens, fontes, etc.
│   ├── styles/      # Arquivos CSS
│   └── App.tsx      # Componente principal
├── index.html       # HTML template
├── package.json     # Dependências e scripts
├── tsconfig.json    # Configuração TypeScript
├── vite.config.ts   # Configuração Vite
└── eslint.config.js # Configuração ESLint
```

## 🔌 Plugins React Disponíveis

O projeto suporta dois plugins oficiais para Fast Refresh:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)** - Usa Babel para Fast Refresh
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** - Usa SWC para Fast Refresh

## 🛠️ Personalização

### Expandindo a Configuração do ESLint

Para uma aplicação em produção, recomenda-se habilitar regras de lint type-aware:

```javascript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React Compiler

O React Compiler não está habilitado por padrão devido ao impacto na performance de desenvolvimento. Para habilitá-lo, consulte a [documentação oficial](https://react.dev/learn/react-compiler/installation).

## 📊 Estatísticas do Projeto

- **TypeScript**: 51.8%
- **CSS**: 45.0%
- **JavaScript**: 2.0%
- **HTML**: 1.2%

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Ariel Schmeing**

- GitHub: [@arielschmeing](https://github.com/arielschmeing)

## 🙏 Agradecimentos

- [React Team](https://react.dev/)
- [Vite Team](https://vitejs.dev/)
- [TypeScript Team](https://www.typescriptlang.org/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Desenvolvido por Ariel Schmeing**
