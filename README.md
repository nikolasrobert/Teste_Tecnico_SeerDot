## seer.dash - Desafio Técnico (Versão Corrigida e Expandida)

Este repositório contém a resolução do desafio técnico para a vaga de Desenvolvimento Web Full-Stack da seer. O projeto original, "seer.dash", foi depurado, estabilizado e expandido com novas funcionalidades.

## Sobre o Projeto

O seer.dash é uma ferramenta web para análise simplificada de vendas. A ideia é que pequenos empreendedores possam fazer o upload de uma planilha de vendas (arquivo `.csv`) e obter insights e métricas importantes de forma rápida e visual.

## Funcionalidades Implementadas

Além da correção de múltiplos bugs de configuração e lógica, as seguintes funcionalidades foram adicionadas:

* **Gráfico de Vendas por Região:** Um novo gráfico de barras que exibe o faturamento total para cada região de venda.
* **Tabela de Top 5 Clientes:** Uma tabela que ranqueia os 5 clientes mais importantes com base no total de unidades compradas, exibindo também o número de pedidos e o faturamento total de cada um.

## Como Rodar o Projeto

Siga as instruções abaixo para configurar e executar o ambiente de desenvolvimento localmente.

### Pré-requisitos

* Python (versão 3.10 ou superior)
* Node.js (versão 18 ou superior)
* Git

## Como Rodar o Projeto (Guia Rápido)

**a) Pré-requisitos:**
* Python 3.10+
* Node.js 18+

**b) Configuração Inicial (Apenas na primeira vez):**

* Clone o repositório.

* **Instale as dependências do Backend:**
    
    # Crie e ative o ambiente virtual
    python -m venv venv
    # No Windows: venv\Scripts\activate.bat
    # No Mac/Linux: source venv/bin/activate

    # Instale as bibliotecas e prepare o banco de dados
    pip install -r requirements.txt
    python manage.py migrate

* **Instale as dependências do Frontend:**
    
    cd frontend
    npm install
    

**c) Para Iniciar a Aplicação:**

* **Terminal 1 (Backend):**
    
    # Na raiz do projeto, com o venv ativo
    python manage.py runserver 8000
    
* **Terminal 2 (Frontend):**
    
    # Na raiz do projeto
    cd frontend
    npm run dev
    

**d) Acesso:**

* Abra **`http://localhost:5173/static/`** no seu navegador.

## 6. Autor

**Nikolas Freitas Robert**