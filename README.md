# Projeto Prático Front-end

Projeto prático da disciplina **Desenvolvimento Front-end para Web**, construído por etapas ao longo das aulas 1 a 15.

## Tecnologias
- HTML5
- CSS3
- JavaScript

## Estrutura
- `index.html`: página principal
- `css/style.css`: estilos
- `js/script.js`: scripts

## Autora
Anna Clara de Medeiros Gonçalves

## Site publicado
https://annaa-clara.github.io/projeto-pratico-front-end/

## Avaliações em Pares
### 🔍 Checklists de Avaliação por Aula (Feito por Gustavo Henrique Dia 09/11/2026)

#### Aula 1 — Git e GitHub
- [X] Repositório público e documentado: Repositório acessível com README explicativo.(Pontuação: 2)
- [X] Histórico de commits: Mensagens descritivas (sem apenas "update" ou "fix"). (Pontuação: 2)
- [X] Uso de branch e Pull Request: Trabalho realizado em feature branch com PR aberto para `main`. (Pontuação: 2)
- [X] .gitignore presente: Pastas como `node_modules` ou arquivos de SO não versionados.(Pontuação: 2)

#### Aula 2 — Conceitos Fundamentais da Web
- [X] HTML mínimo válido: Presença de `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`. (Pontuação: 2)
- [X] Meta tags básicas: `charset="UTF-8"` e `viewport` configurados no `<head>`. (Pontuação: 2)
- [X] Página abre sem erros: Console do DevTools limpo ao carregar. (Pontuação: 2)

#### Aula 3 — HTML5: Semântica e Formulários
- [X] Elementos semânticos: Estrutura baseada em `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`. (Pontuação: 2)
- [X] Labels associados: Todo `<input>` possui `<label>` com vínculo `for`/`id`. (Pontuação: 2)
- [X] Validação nativa: Atributos `type` e `required` aplicados corretamente aos campos. (Pontuação: 2)

#### Aula 4 — HTML5: Recursos Multimídia
- [X] Fallback de formato: Múltiplos `<source>` em `<video>`/`<audio>`. (Pontuação: 2)
- [X] Controles nativos: Atributo `controls` presente (e `muted` caso use `autoplay`). (Pontuação: 2)
- [X] Configuração de preload: Atributo `preload` (`metadata`/`none`/`auto`) coerente. (Pontuação: 2)

#### Aula 5 — HTML5: Recursos Gráficos
- [X] Escolha da tecnologia: SVG ou Canvas aplicado adequadamente ao contexto. (Pontuação: 2)
- [X] Renderização sem erros: Elementos gráficos exibidos sem distorção ou falhas. (Pontuação: 2)
- [X] Acessibilidade gráfica: SVGs informativos possuem `<title>` ou `aria-label`. (Pontuação: 2)

#### Aula 6 — CSS3: Sintaxe, Seletores e Box Model
- [X] Seletores eficientes: Sem excesso de especificidade ou uso indevido de `!important`. (Pontuação: 2)
- [X] Box model consistente: `box-sizing: border-box` aplicado globalmente. (Pontuação: 2)
- [X] CSS organizado: Estilos isolados em arquivos `.css` externos. (Pontuação: 2)

#### Aula 7 — CSS3: Pseudo-classes, Flexbox e Grid
- [X] Layout com Flexbox/Grid: Estruturas organizadas sem hacks de `float` ou `position`. (Pontuação: 2)
- [X] Responsividade: Layout adaptável testado em múltiplos breakpoints. (Pontuação: 2)
- [X] Alinhamento de eixos: Propriedades de eixo principal e cruzado configuradas corretamente. (Pontuação: 2)

#### Aula 8 — CSS3: Menus e Navegação
- [X] Menu responsivo: Navegação funcional em desktop e mobile (menu hambúrguer). (Pontuação: 2)
- [X] Estados visíveis: `:hover` e `:focus` perceptíveis em todos os links da navbar. (Pontuação: 2)
- [X] Sobreposição limpa: Contexto de empilhamento (`z-index`) correto sem cortar o dropdown. (Pontuação: 2)

#### Aula 9 — CSS3: Botões e Formulários
- [X] Foco visível: Navegação via `Tab` destaca nitidamente o elemento focado (`:focus-visible`). (Pontuação: 2)
- [X] Hierarquia visual: Ações primárias destacadas de botões secundários. (Pontuação: 2)
- [X] Usabilidade nativa: Estilização preserva comportamentos interativos dos campos. (Pontuação: 2)

#### Aula 10 — JavaScript: Fundamentos
- [X] Lógica funcional: Funções retornam os valores esperados sem erros. (Pontuação: 2)
- [X] Boas práticas de variáveis: Uso exclusivo de `const` e `let` com nomes significativos (sem `var`). (Pontuação: 2)
- [X] Console limpo: Nenhuma exceção lançada durante a execução das funções. (Pontuação: 2)

#### Aula 11 — DOM e Armazenamento Local
- [X] Proteção do carregamento: Script envolto em `DOMContentLoaded` ou carregado com `defer`. (Pontuação: 2)
- [X] Persistência funcional: `localStorage` utilizado com `JSON.stringify` e `JSON.parse`. (Pontuação: 2)
- [X] Event delegation: Event listener único implementado no elemento pai para listas dinâmicas. (Pontuação: 2)
- [X] Segurança contra XSS: Inserção de dados do usuário realizada via `textContent`. (Pontuação: 2)
- [X] Branch adequada: Pull Request aberto a partir de `feature/dom-interatividade`. (Pontuação: 2)

#### Aula 12 — Frameworks: Bootstrap 5.3
- [X] Componentes interativos: `bootstrap.bundle.js` incluído; modais/dropdowns respondem ao clique. (Pontuação: 2)
- [X] Grid responsivo: Utilização correta de breakpoints (`col-md-*`, `col-lg-*`). (Pontuação: 2)
- [X] Preservação de funções: Recursos em JavaScript vanilla continuam operando após a migração visual. (Pontuação: 2)
- [X] Sobrescrita limpa: Estilos customizados ajustados sem utilização de `!important`. (Pontuação: 2)
- [X] Branch adequada: Pull Request aberto a partir de `feature/bootstrap-integracao`. (Pontuação: 2)

#### Aula 13 — Engenharia de Prompt e IA
- [X] Documentação de Prompts: Descrição do PR apresenta o prompt vago inicial e o prompt reforçado com comparação. (Pontuação: 2)
- [X] Compatibilidade de Stack: Código gerado por IA ajustado para JavaScript vanilla (sem React/Vue). (Pontuação: 2)
- [X] Navegação por teclado: Componente gerado responde aos comandos `Tab`, `Enter` e `Space`. (Pontuação: 2)
- [X] Preservação de recursos: Funcionalidades de aulas anteriores seguem operacionais. (Pontuação: 2)
- [X] Branch adequada: Pull Request aberto a partir de `feature/componente-ia`. (Pontuação: 2)

#### Aula 14 — Acessibilidade e Boas Práticas
- [X] Auditoria documentada: Prints ou notas do Lighthouse Accessibility (antes e depois) anexados ao PR. (Pontuação: 2)
- [X] Correções efetuadas: Mínimo de 4 correções reais efetuadas com comentários explicativos no código. (Pontuação: 2)
- [X] Semântica estrita: Remoção de `<div onclick>` em favor de `<button>` ou atributos ARIA/`tabindex`. (Pontuação: 2)
- [X] Foco visível universal: Indicador visual de foco verificado em todos os controles interativos. (Pontuação: 2)
- [X] Branch adequada: Pull Request aberto a partir de `feature/acessibilidade`. (Pontuação: 2)

#### Aula 15 — DNS, SSL e Deploy
- [X] Publicação ativa: Site publicado via GitHub Pages carregando sem erros 404 de scripts ou CSS. (Pontuação: 2)
- [X] Caminhos relativos: Referências de arquivos sem `/` inicial (ex: `css/style.css` em vez de `/css/style.css`). (Pontuação: 2)
- [X] Testes em produção: Funcionalidades de JS (favoritos, estrelas, modal) validadas no link público. (Pontuação: 2)
- [X] Link no README: URL pública documentada de forma clara no arquivo `README.md`. (Pontuação: 2)
- [X] HTTPS ativo: Conexão segura com cadeado validado no navegador. (Pontuação: 2)

### 📊 Resultado da Avaliação
- Como foi atingido o número máximo de pontuação (100). Nota obtida foi 10.


## Créditos
- Vídeo: "Crowded theater with massive green screen" via [Vecteezy](https://www.vecteezy.com)
