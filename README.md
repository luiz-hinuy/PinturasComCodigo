# Homage to the Square de Josef Albers

Reprodução interativa da série *Homage to the Square* de Josef Albers, criada com [p5.js](https://p5js.org/).

## Pintura de Referência

![Homage to the Square](https://collectionapi.metmuseum.org/api/collection/v1/iiif/481031/1004888/restricted)

> 🔗 **Link da obra original:** https://collectionapi.metmuseum.org/api/collection/v1/iiif/481031/1004888/restricted

## Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal que carrega o p5.js e o sketch |
| `LuizHinuy.js` | Sketch p5.js com a pintura e a interação |

## Como executar

1. Com `index.html` e `LuizHinuy.js` na mesma pasta, abra `index.html` no navegador.

## Interação

Ao passar o cursor do mouse sobre qualquer um dos quatro quadrados da composição, o quadrado sob o cursor muda para uma versão mais vibrante e saturada de sua cor original:

| Quadrado | Cor original | Cor ao hover |
|---|---|---|
| Exterior: azul-petróleo | `#3A8A8F` | `#00C5CC` |
| 2º: verde médio | `#5A8A3A` | `#7FCC44` |
| 3º: verde escuro | `#2D5A2A` | `#3D8A30` |
| Interior: cinza-azulado | `#3A4A50` | `#556A75` |

A detecção de hover respeita a sobreposição dos quadrados: ao passar sobre o quadrado central, apenas ele acende, os quadrados externos não são afetados.

## Sobre a obra

*Homage to the Square* é uma série de pinturas iniciada por Josef Albers em 1949 e continuada até sua morte em 1976, totalizando mais de mil obras. Cada composição consiste em três ou quatro quadrados concêntricos alinhados pela base (não pelo centro geométrico), explorando como cores adjacentes se influenciam mutuamente na percepção visual.