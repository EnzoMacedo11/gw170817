# Projeto GW170817

Este repositório contém informações públicas sobre alertas de ondas gravitacionais emitidos em tempo real pela rede de detectores de ondas gravitacionais LIGO/Virgo/KAGRA (LVK) em sua quarta rodada de observações (O4).

## Sobre as Ondas Gravitacionais

Ondas gravitacionais são ondulações na curvatura do espaço-tempo causadas majoritariamente por colisões entre objetos compactos massivos, tipicamente estrelas de nêutrons e buracos negros. O acompanhamento em tempo real desses eventos, por diferentes instrumentos, é fundamental para a compreensão completa desse fenômeno cataclísmico.

## Alertas Públicos e Observações

Para esta rodada de observações, a colaboração LIGO/Virgo/KAGRA decidiu por emitir alertas públicos sobre os eventos encontrados via seus detectores. Com essas informações, equipes de astrônomos profissionais ou amadores com acesso a telescópios começam uma "caça ao tesouro" em busca da contrapartida eletromagnética do evento. Até hoje, apenas uma fonte no óptico foi encontrada, e a comunidade global de astrônomos anseia por uma segunda detecção.

## Dados do Arquivo CSV

As informações do arquivo CSV foram obtidas através das informações públicas disponíveis em [https://gracedb.ligo.org](https://gracedb.ligo.org). Cada coluna representa uma informação de interesse:

- **Event Id**
	- Corresponde ao identificador único de cada alerta de onda gravitacional
- **Possible Source (PS)**
	- Representa a provável fonte de onda gravitacional, podendo ser uma colisão de buracos negros binários (BBH), colisões de estrelas de nêutrons (BNS) ou ainda uma colisão de estrela de nêutrons com um buraco negro (NSBH)
- **area90**
	- Um alerta de onda gravitacional emite uma região de probabilidade do céu onde o evento da colisão possa estar localizado. `area90` representa a área em graus quadrados na região de 90% de credibilidade, ou seja, a área cuja soma sobre a probabilidade de localização do evento seja de 90%
- **Longitude**
	- A longitude da coordenada de maior probabilidade de conter o evento de onda gravitacional
- **Latitude**
	- A latitude da coordenada de maior probabilidade de conter o evento de onda gravitacional

## Scripts

Para executar o(s) script(s) dentro de um terminal na raiz do projeto:

### `npm start`

Executa a aplicação dentro do modo de desenvolvedor.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.
