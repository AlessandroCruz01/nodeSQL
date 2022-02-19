//exporte de objeto de configuração do BD
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'nodeSQL',
  define: {
    timestamps: true, // Isso guarda a data de criacao do registro (created_at) e a data da alteração (updated_at)
    underscored: true, // Isso coloca todas as nossas tabls em formato separado por _. ex: cadastro_itens
  },
}