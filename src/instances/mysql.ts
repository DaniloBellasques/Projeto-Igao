import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string)
    }

)

sequelize.authenticate()
  .then(() => console.log('✅ Conexão com o banco estabelecida com sucesso.'))
  .catch((err) => console.error('❌ Erro ao conectar no banco:', err));

sequelize.sync({ alter: true }) // Garante que a estrutura está alinhada
  .then(() => console.log('✅ Tabelas sincronizadas com sucesso!'))
  .catch((err) => console.error('❌ Erro ao sincronizar tabelas:', err));