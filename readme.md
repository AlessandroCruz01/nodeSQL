# Niveis de abstração (forma de se comunicar ao bd)
  # Nivel mais baixo
    -> Mecher direto com a api do bd, fazendo comando direto no bd;
  # knexJS 
    -> Query builder com nivel de abstração mais alta que nos da comandos mais faceis dando alusao ao js (suporte migrations)
  # Nivel mais alta 
    -> Utilizando ORM = {ORM (Object Relational Mapper) é uma técnica de mapeamento objeto relacional que permite fazer uma relação dos objetos com os dados que os mesmos representam.} (sequelize) 

# Iniciando um aplicação usando Sequelize
  # Dependencias utilizadas
    "express": "^4.17.3",
    "pg-hstore": "^2.3.4",
    "nodemon": "^2.0.15",
    "sequelize": "^6.16.2"
    "pg": "^8.7.3",

  # Dependencia de dev
      "sequelize-cli": "^6.4.1"

# ATENCAO
  confirmar que o arquivo .sequelizerc esta criado

Rodar no terminal o comando: yarn sequelize db:create
  * OBS = Nao precisa ter o bd previamente criado!

# Comandos do sequelize
  Criat BD - yarn sequelize db:create
  Criar migration - yarn sequelize migration:create --name=create-users
  Executar migrations - yarn sequelize db:migrate
  Desfazer a ultima migrate - yarn sequelize db:migrate:undo

# Criar MODELS
  Quando usamos um ORM temos que ter uma pasta chamada models
    model sao uma representação de como nossa aplicacao vai se comunicar com nossa db
      um model é escrito em modo de classe!