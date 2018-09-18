# Vuepress

## Infos

Dans un dossier .vuepress :

> config.js

- "Base" et "dest": prefix d'url et la destination du builder
- "Sidebar":
  - définir les groupes et leurs fichiers (sans le .md)
  ```javascript
  sidebar: [
      {
        title: 'Intro',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/frontend',
          '/guide/backend'
        ]
      },
      {
        title: 'More Header',
        collapsable: false,
        children: [
          '/more-header/'
        ]
      }

    ]
  ```
  - sidebar en mode "auto" sur les fichiers par defaut si plusieurs et définis, si une seule page il faut par contre le préciser sinon pas de sidebar apparente.
  ```javascript
  sidebar: "auto"
  ```

> override.styl

Fichier de config pour le style, on peut modifier ceci:
( ce qui importe surtout c'est le $accentColor pour la couleur des menus de la sidebar.. )

```stylus
// colors
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

// code
$lineNumbersWrapperWidth = 3.5rem
$codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py
```

> Menus sidebar

Seuls les headers h1 et h2 sont montrés par défaut ( # et ## )
Pour afficher plus de headers, il faudra rajouter sur les fichiers concernés au début:
(en augmentant le chiffre)

```stylus
---
sidebarDepth: 2
---
```

- Menu pliants depuis la config avec l'option collapsable, mais pas terrible en vrai..
```js
{
  title: 'More Header',
  collapsable: false,
  children: [
    '/more-header/'
  ]
}
```
- Les sous-menus sont cachés par défaut, on peut tout deplier direct avec ça (mais.. pas terrible non plus):
```js
displayAllHeaders: true
```

## Commandes

> Local dev server
```bash
yarn docs:dev
```
> Builder
```bash
yarn docs:build
```
