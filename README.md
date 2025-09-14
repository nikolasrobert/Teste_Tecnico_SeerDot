# Desafio Técnico: Desenvolvimento Web Full-Stack

Olá, candidato(a)! Seja bem-vindo(a) ao nosso desafio técnico na **seer.**

Este teste foi desenhado para avaliar sua capacidade técnica em programação e resolução de problemas.

## Contexto do Projeto Fictício: "seer.dash"

O seer.dash é uma ferramenta web para análise simplificada de vendas. A ideia é que pequenos empreendedores possam fazer o upload de uma planilha de vendas (arquivo `.csv`) e obter insights e métricas importantes de forma rápida e visual, sem a necessidade de softwares de BI complexos.

A estrutura atual permite que um usuário faça o upload de um arquivo CSV e veja (ou deveria ver) um dashboard com algumas métricas.

## Sua Missão

Seu objetivo é duplo: primeiro, consertar os erros que estão impedindo o projeto de funcionar; segundo, enriquecer o projeto com uma nova funcionalidade.

### Parte 1: Correção de Erros e Ajustes

O projeto, como está, possui bugs que corrompem a análise. Esperamos que você:

1.  **Identifique e corrija os problemas distribuídos no repositório.**

Encare esse processo como um processo de testagem e revisão do projeto, analisando os fluxos e detalhes das páginas.

Ao identificar e resolver um problema, documente num relatório simplificado como encontrou e resolveu cada erro. 

### Parte 2: Implementação de Nova Feature de Análise

Com a base do projeto funcionando, queremos que você implemente pelo menos uma das três features de análise abaixo. Escolha a que você achar mais interessante.

* **Opção A: Filtros por Período de Tempo**
    * Adicione ao dashboard a opção de filtrar toda a análise por um período: "Últimos 7 dias", "Este Mês" ou um intervalo de datas personalizado.

* **Opção B: Gráfico de Vendas por Região**
    * Adicione um novo gráfico (barras ou pizza) ao dashboard que mostra o faturamento total para cada região.

* **Opção C: Tabela de "Top 5 Clientes"**
    * Crie uma tabela no dashboard que mostre os 5 maiores clientes (em unidades) e, para cada um, a quantidade de vendas e o faturamento total.

## Como Entregar

1.  Faça um fork deste repositório.
2.  Faça commits com mensagens claras à medida que avança.
3.  Ao finalizar, preencha completamente o modelo de relatório disponibilizado.
4.  A entrega deve ser um .zip com o relatório, pasta com um código finalizado e um vídeo breve de até 2 minutos sobre o trabalho realizado (o vídeo é opcional). 

## O Relatório

No seu relatório, você irá descrever de forma concisa:

* **Diagnóstico:** Quais foram os erros que você encontrou e qual era a causa raiz de cada um.
* **Solução:** Como você resolveu cada um dos problemas.
* **Feature Escolhida:** Qual feature você implementou e uma breve explicação dos passos técnicos que você tomou.
* **(Opcional) Considerações Adicionais:** Se tiver qualquer outra sugestão de melhoria, sinta-se à vontade para compartilhar.

## Configuração do Ambiente

Para rodar o projeto você precisará ter **Python 3.10+** e **Node.js 18+** (ou o runtime [Bun](https://bun.sh/) caso prefira).  
O backend utiliza Django e Pandas, enquanto o frontend é construído com Vite + React.

**Formato do CSV esperado:** O arquivo `sales.csv` está no repositório.

### Backend (API Django)

```bash
# 1. Clone o repositório e entre na pasta
git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DA_PASTA]

# 2. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Instale as dependências do backend
pip install -r requirements.txt

# 4. Aplique as migrações e (opcional) crie um superusuário
python manage.py migrate
python manage.py createsuperuser

# 5. Inicie a API
python manage.py runserver 8000
```

### Frontend (Vite + React)

Abra um novo terminal na raiz do projeto e execute:

```bash
# 1. Acesse a pasta do frontend
cd frontend

# 2. Instale as dependências
npm install          # ou bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev          # ou bun run dev
```

O Vite iniciará o frontend em `http://localhost:5173` (ou outra porta caso já esteja em uso).  
Mantenha a API executando em `http://localhost:8000` para que o front-end possa consumir os endpoints corretamente.

Boa sorte! Estamos muito interessados em ver como você aborda o desafio. 
