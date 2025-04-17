# 🚗 Sistema de Gerenciamento de Aluguel de Carros

Este projeto tem como objetivo centralizar o gerenciamento de carros para aluguel, permitindo desde o cadastro e listagem de veículos, até a realização e devolução de alugueis. A aplicação também contempla a gestão de imagens dos veículos, especificações, autenticação de usuários e recuperação de senha.

---

## ✅ Funcionalidades

### 📌 Cadastro de Carro

**Requisitos Funcionais (RF)**

- Deve ser possível cadastrar um novo carro.

**Regras de Negócio (RN)**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível cadastrar um carro com o mesmo número de chassi.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um **administrador**.

---

### 📄 Listagem de Carros

**Requisitos Funcionais (RF)**

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar os carros disponíveis por:
  - Nome da categoria
  - Nome da marca
  - Nome do carro

**Regras de Negócio (RN)**

- O usuário **não precisa estar logado** para listar os carros.

---

### ⚙️ Cadastro de Especificação no Carro

**Requisitos Funcionais (RF)**

- Deve ser possível cadastrar uma especificação para um carro.

**Regras de Negócio (RN)**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um **administrador**.

---

### 🖼 Cadastro de Imagens do Carro

**Requisitos Funcionais (RF)**

- Deve ser possível cadastrar imagens de um carro.

**Requisitos Não Funcionais (RNF)**

- Utilizar o **Multer** para upload dos arquivos.

**Regras de Negócio (RN)**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um **administrador**.

---

### 📅 Aluguel de Carro

**Requisitos Funcionais (RF)**

- Deve ser possível cadastrar um aluguel.

**Regras de Negócio (RN)**

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel em aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel em aberto para o mesmo carro.
- O usuário deve estar **logado** na aplicação.
- Ao realizar o aluguel, o status do carro deve ser alterado para **indisponível**.

---

### 🔄 Devolução de Carro

**Requisitos Funcionais (RF)**

- Deve ser possível realizar a devolução de um carro.

**Regras de Negócio (RN)**

- Se devolvido com menos de 24 horas, será cobrada a **diária completa**.
- Ao devolver:
  - O carro deve ser liberado para outro aluguel.
  - O usuário deve ser liberado para outro aluguel.
  - O total do aluguel deve ser calculado.
- Caso o horário de devolução seja superior ao previsto:
  - Deve ser cobrada **multa proporcional aos dias de atraso**.
  - A multa deve ser somada ao total do aluguel.
- O usuário deve estar **logado** na aplicação.

---

### 📃 Listagem de Aluguéis do Usuário

**Requisitos Funcionais (RF)**

- Deve ser possível buscar todos os aluguéis do usuário.

**Regras de Negócio (RN)**

- O usuário deve estar **logado** na aplicação.

---

### 🔐 Recuperação de Senha

**Requisitos Funcionais (RF)**

- Deve ser possível recuperar a senha informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para recuperação.
- O usuário deve conseguir inserir uma nova senha.

**Regras de Negócio (RN)**

- O usuário precisa informar uma nova senha.
- O link de recuperação deve expirar em **3 horas**.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Multer (upload de arquivos)
- JWT (autenticação)
- TypeORM (ORM para banco de dados)
- PostgreSQL (banco de dados relacional)

---

## 📌 Observações

Este projeto simula um sistema de aluguel de veículos com funcionalidades completas de autenticação, cadastro, busca e gerenciamento, ideal para praticar princípios de arquitetura de software, regras de negócio e boas práticas de desenvolvimento backend.

---

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner" />
  </a>
</p>
