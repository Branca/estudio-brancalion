# Estúdio Brancalion

Site oficial do **Estúdio Brancalion** — estúdio de animação 2D, 3D e Mix Media baseado em Garopaba, Santa Catarina, Brasil. Fundado por Mauricio Brancalion.

## Tecnologias

- HTML5 semântico (single-file)
- CSS3 puro — custom properties, grid, flexbox, animations
- JavaScript vanilla — sem dependências externas
- Google Fonts: Bebas Neue · DM Sans · Space Mono

## Funcionalidades

- Cursor customizado com lag suave (desktop)
- Menu hamburguer para mobile
- Reveal on scroll via IntersectionObserver
- Marquee animado com pausa no hover
- Grid de portfolio com hover overlay e modal de ficha técnica
- Formulário de contato (integração via Formspree)
- Layout responsivo, mobile-first

## Estrutura

```
/
├── index.html    ← site completo (single-file)
├── .gitignore
└── README.md
```

## Como rodar localmente

Abra `index.html` diretamente no navegador, ou use um servidor local:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (sem instalar nada)
npx serve .

# VS Code: extensão "Live Server" → clique em "Go Live"
```

Acesse `http://localhost:8000`.

## Deploy no GitHub Pages

### Método 1 — Interface web (mais rápido)

1. Crie um repositório no GitHub (ex: `estudio-brancalion`)
2. Faça upload dos arquivos: **Add file → Upload files**
3. Vá em **Settings → Pages**
4. Em **Source**: `Deploy from a branch`
5. Branch: `main`, pasta: `/ (root)` → **Save**
6. Aguarde ~1 min e acesse: `https://SEU-USUARIO.github.io/estudio-brancalion/`

### Método 2 — via Git (recomendado)

```bash
git init
git add index.html .gitignore README.md
git commit -m "feat: Estúdio Brancalion — site inicial"

git remote add origin https://github.com/SEU-USUARIO/estudio-brancalion.git
git branch -M main
git push -u origin main
```

Depois ative o GitHub Pages em **Settings → Pages → Source → main → Save**.

### Domínio personalizado (opcional)

1. Crie um arquivo `CNAME` com seu domínio:
   ```
   estudiobrancalion.com.br
   ```
2. Configure o DNS do domínio para apontar ao GitHub Pages:
   - Registros A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ou CNAME: `SEU-USUARIO.github.io`

## Personalização

### Formulário de contato

Substitua `YOUR_FORM_ID` em `action="https://formspree.io/f/YOUR_FORM_ID"` pelo seu ID do [Formspree](https://formspree.io) (plano gratuito disponível).

### Links sociais

No rodapé, substitua os `href="#"` pelas URLs reais:

```html
<a href="https://facebook.com/estudiobrancalion" ...>
<a href="https://instagram.com/estudiobrancalion" ...>
<a href="https://youtube.com/@estudiobrancalion" ...>
<a href="https://vimeo.com/estudiobrancalion" ...>
```

### Showreel

Substitua o placeholder de vídeo por um embed do YouTube ou Vimeo dentro de `.hero-video`.

### Portfolio — adicionar projetos

No objeto `PROJECTS` no JavaScript, adicione uma entrada com:

```js
'meu-projeto': {
  lbl:   'Categoria · Tipo',
  name:  'Nome do Projeto',
  desc:  'Descrição...',
  specs: [
    { k: 'Formato',  v: 'Série',              c: '' },
    { k: 'Direção',  v: 'Mauricio Brancalion', c: 'c-or' },
    // c: '' | 'c-or' (laranja) | 'c-cy' (ciano) | 'c-ye' (amarelo)
  ]
}
```

E adicione um `.p-card` correspondente no HTML com `data-project="meu-projeto"`.

## Licença

© 2024 Estúdio Brancalion. Todos os direitos reservados.
