# Portfólio Pessoal – HTML, CSS & JavaScript

## Índice
- Descrição Geral  
- Objetivos do Projeto  
- Tecnologias Utilizadas  
- Estrutura do Projeto  
- Design, Cores e Tipografia  
- Responsividade (Devices-alvo)  
- Funcionalidades Implementadas  
- Processo de Criação (Figma, GIMP, Git)  
- Aprendizados  
- Status do Projeto  
- Como Executar  
- Link do Projeto  

---

## 1. Descrição Geral

Este projeto foi desenvolvido como parte do programa de formação do **Instituto Alpha EdTech**, com o objetivo de compor um portfólio profissional e consolidar fundamentos essenciais do desenvolvimento web front-end.  
Trata-se de um site estático construído com **HTML5**, **CSS3 puro** e **JavaScript**, priorizando semântica, acessibilidade, microinterações e adaptação consistente a diferentes tamanhos de tela.

---

## 2. Objetivos do Projeto

- Estruturar páginas utilizando **HTML5 semântico**.  
- Desenvolver um layout moderno e consistente com **CSS3**, explorando variáveis, gradientes e sombras.  
- Implementar **animações suaves** em seções estratégicas (hero e sobre), preservando a legibilidade e a experiência do usuário.  
- Garantir **responsividade efetiva** para:
  - Mobile (iPhone 13 Pro),
  - Tablet (iPad Pro 11"),
  - Desktop (notebooks e MacBook ~15"),
  - Monitores 2K e 4K.  
- Aplicar boas práticas em **links internos e externos**, utilizando `target="_blank"` e `rel="noopener noreferrer"`.  
- Adotar um fluxo simples de versionamento com **Git**, utilizando branches `main` e `dev`, e realizar deploy via **GitHub Pages**.

---

## 3. Tecnologias Utilizadas

### HTML5
- Estruturação semântica com `header`, `nav`, `main`, `section` e `footer`.

### CSS3 (puro)
- Uso de variáveis CSS para cores e tipografia.
- Flexbox para organização de layout e alinhamentos.
- Media Queries específicas para mobile, tablet, desktop, 2K e 4K.
- Animações com `@keyframes` e, quando suportado, `animation-timeline: view()` (scroll-driven animations).

### JavaScript
- Implementação de menu hambúrguer responsivo e acessível.
- Manipulação do DOM para criação dinâmica de elementos, como lista de feedback (`appendChild`).

### Ferramentas de Design
- **Figma**: prototipação, definição de componentes (navbar, cards, botões, skill-cards) e variáveis de cor e tipografia.
- **GIMP**: recorte, redimensionamento e exportação de imagens em múltiplas resoluções (320, 640 e 1280px) e formatos (JPG, PNG e WebP).

### Controle de Versão e Deploy
- **Git & GitHub**: versionamento com histórico de commits e uso de branches.
- **GitHub Pages**: hospedagem estática do projeto.

---

## 4. Estrutura do Projeto

.
├── index.html          # Página principal do portfólio
├── style.css           # Estilos globais, responsividade e animações
├── assets/
│   ├── img/            # Imagens otimizadas em múltiplas larguras
│   └── icons/          # Ícones utilizados nas seções
└── readme.md           # Documentação do projeto


Principais seções da página:

- Header com navbar fixa e navegação.
- Hero com apresentação, CTA e animação de entrada.
- Sobre com imagem, texto e animações sutis.
- Skills com cards.
- Projetos com cards contendo imagem, descrição e links externos.
- Contato com links externos e e-mail.
- Footer com informações finais.

---

## 5. Design, Cores e Tipografia

### Paleta de Cores (tema escuro)

- Fundo principal: `#050506` / `#0b0c0f` (gradiente).
- Painéis e cards: `#0f1114`.
- Texto principal: `#ffffff`.
- Texto secundário: `#9aa0a6`.
- Cor de destaque: `#dd0b0e`.
- Verso dos skill-cards: fundo `#ffffff` com texto `#111111`.

### Tipografia

- Títulos e marca: **Roboto Condensed**.
- Texto corrido: **Roboto**.

Escala aproximada em desktop:
- `h1` (hero): 44–52px.
- `h2` (seções): ~28px.
- `h3` (cards): ~20px.
- Texto base: 16–18px.

---

## 6. Responsividade (Devices-alvo)

A responsividade foi planejada considerando dispositivos reais:

### Mobile (até ~430px)
- Layout em coluna.
- Hero simplificado.
- Cards ocupando 100% da largura.

### Tablet (~431px a ~950px)
- Hero ainda em coluna, com tipografia ampliada.
- Cards distribuídos em duas colunas.

### Desktop padrão
- Layout em duas colunas.
- Largura máxima controlada (`max-width: 1200px`).

### Monitores 2K
- `max-width` ampliado para ~1440px.
- Ajustes sutis de tipografia e animações.

### Monitores 4K
- `max-width` ampliado para ~1680px.
- Tipografia e animações levemente ampliadas para melhor leitura.

---

## 7. Funcionalidades Implementadas

- Estrutura completa com HTML5 semântico.
- Navegação interna por âncoras e links externos seguros.
- Botões com efeitos de hover e microinterações.
- Animações controladas por CSS, adaptadas ao tamanho da tela.
- Skill-cards.
- Menu hambúrguer responsivo com controle de estado.
- Formulário de e-mail.

---

## 8. Processo de Criação

### Figma
- Definição de layout, paleta e tipografia.
- Criação de componentes reutilizáveis.
- Prototipação para desktop.

### GIMP
- Tratamento e otimização de imagens.
- Exportação em diferentes tamanhos e formatos.
- Organização dos assets para uso no projeto.

### Git e GitHub
- Branch `dev` para desenvolvimento contínuo.
- Branch `main` para versão estável e deploy.
- Commits com mensagens descritivas.
- Merge via Pull Request e publicação no GitHub Pages.

---

## 9. Aprendizados

O desenvolvimento deste projeto consolidou conhecimentos em:
- HTML semântico e acessível.
- Layouts responsivos e escaláveis.
- Animações CSS alinhadas à experiência do usuário.
- Organização de componentes visuais reutilizáveis.
- Fluxo de versionamento com Git.
- Integração entre design (Figma) e código.

---

## 10. Status do Projeto

- Projeto em evolução contínua.
- Aberto a melhorias, novos projetos e expansão do design system.

---

## 11. Como Executar

1. Clone o repositório:
[git clone](https://github.com/DGILADS/portfolio)
-- cd portfolio

2. Abra o arquivo `index.html` diretamente no navegador.
3. Não é necessário servidor local ou processo de build.

---

## 12. Link do Projeto

Versão publicada via GitHub Pages:

https://dgilads.github.io/portfolio/
