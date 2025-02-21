import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';



class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public endereco!: string;
  public bairro!: string;
  public cep!: string;
  public data_nasc!: Date;
  public email!: string;
  public telefone_res!: string;
  public cidade!: string;
  public estado!: string;
  public sexo!: 'F' | 'M' | 'Outro';  // Ajustado para os valores do banco de dados
  public telefone_emergencia!: string;
  public profissao!: string;
  public queixa_principal!: string;
  public frequencia_podologo!: 'Semanal' | 'Mensal' | 'Semestral' | 'Nunca';  // Ajustado para os valores do banco de dados
  public medicamento!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
  public alergico!: boolean;
  public substancias_alergicas!: string;
  public posicao_trabalho!: 'Em pé' | 'Sentado' | 'Andando';  // Ajustado para os valores do banco de dados
  public tempo_trabalho!: string;
  public tipo_calçado!: string;
  public uso_palmilha!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
  public tipo_palmilha!: 'Ortopédica' | 'Descanso' | 'Nenhuma';  // Ajustado para os valores do banco de dados
  public fumante!: boolean;
  public ciclo_menstrual!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
  public gestante!: boolean;
  public amamentando!: boolean;
  public pratica_atividade_fisica!: boolean;
  public frequencia_atividade!: 'Diário' | 'Às vezes' | 'Nunca';  // Ajustado para os valores do banco de dados
  public tipo_calçado_esporte!: string;
  public telefone!: string;
  public contato!: string;
  public numero_da_casa!: string;
  public complemento!: string;
  public dum!: Date;
  public tipo_medicamento!: string;
  public duracao_trabalho!: 'Em pé' | 'Sentado' | 'Andando';  // Ajustado para os valores do banco de dados
  public numero_calçado!: number;
  public hipertiroidismo!: boolean;  // Ajustado para os valores do banco de dados
  public renal!: boolean;  // Ajustado para os valores do banco de dados
  public epilepsia!: boolean;  // Ajustado para os valores do banco de dados
  public quimioterapia_radioterapia!: boolean;  // Ajustado para os valores do banco de dados
  public osteoporose!: boolean;  // Ajustado para os valores do banco de dados
  public hipotiroidismo!: boolean;  // Ajustado para os valores do banco de dados
  public neuropatia!: boolean;  // Ajustado para os valores do banco de dados
  public hepatite!: boolean;  // Ajustado para os valores do banco de dados
  public antecedentes_oncologicos!: boolean;  // Ajustado para os valores do banco de dados
  public cardiopatia!: boolean;  // Ajustado para os valores do banco de dados
  public marca_passo!: boolean;  // Ajustado para os valores do banco de dados
  public reumatismo!: boolean;  // Ajustado para os valores do banco de dados
  public hanseniase!: boolean;  // Ajustado para os valores do banco de dados
  public cirurgia_mmii!:boolean;  // Ajustado para os valores do banco de dados
  public hipotensao!: boolean;  // Ajustado para os valores do banco de dados
  public alteracoes_vasculares!: boolean;  // Ajustado para os valores do banco de dados
  public diabetes!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
  public taxa_glicemica!: number;
  public data_ultima_verificacao!: Date;
  public insulina!: 'Sim' | 'Não' | 'Injetável' | 'Via Oral';  // Ajustado para os valores do banco de dados
  public dieta_hidrica!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
  public dieta_alimentar!: 'Sim' | 'Não';  // Ajustado para os valores do banco de dados
}

Cliente.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  telefone_res: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: true
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sexo: {
    type: DataTypes.ENUM('F', 'M', 'Outro'),
    allowNull: true
  },
  telefone_emergencia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profissao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  queixa_principal: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  frequencia_podologo: {
    type: DataTypes.ENUM('Semanal', 'Mensal', 'Semestral', 'Nunca'),
    allowNull: true
  },
  medicamento: {
    type: DataTypes.ENUM('Sim', 'Não'),
    allowNull: true
  },
  alergico: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  fumante: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  gestante: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  substancias_alergicas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  posicao_trabalho: {
    type: DataTypes.ENUM('Em pé', 'Sentado', 'Andando'),
    allowNull: true
  },
  tempo_trabalho: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo_calçado: {
    type: DataTypes.ENUM('Bota', 'Coturno', 'Chinelo', 'Sapatênis', 'Sapato', 'Sandália', 'Salto', 'Sapatilha', 'Tênis'),
    allowNull: true
  },
  uso_palmilha: {
    type: DataTypes.ENUM('Sim', 'Não'),
    allowNull: true
  },
  tipo_palmilha: {
    type: DataTypes.ENUM('Ortopédica', 'Descanso', 'Nenhuma'),
    allowNull: true
  },
  ciclo_menstrual: {
    type: DataTypes.ENUM('Sim', 'Não'),
    allowNull: true
  },
  amamentando: {
    type: DataTypes.ENUM('Sim', 'Não'),
    allowNull: true
  },
  pratica_atividade_fisica: {
    type: DataTypes.ENUM('Sim', 'Não'),
    allowNull: true
  },
  frequencia_atividade: {
    type: DataTypes.ENUM('Diário', 'Às vezes', 'Nunca'),
    allowNull: true
  },
  tipo_calçado_esporte: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numero_da_casa: {
    type: DataTypes.STRING,
    allowNull: true
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dum: {
    type: DataTypes.DATE,
    allowNull: true
  },
  tipo_medicamento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  duracao_trabalho: {
    type: DataTypes.ENUM('Em pé', 'Sentado', 'Andando'),
    allowNull: true
  },
  numero_calçado: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  hipertiroidismo: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  renal: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  epilepsia: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  quimioterapia_radioterapia: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  osteoporose: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  hipotiroidismo: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  neuropatia: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  hepatite: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  antecedentes_oncologicos: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  cardiopatia: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  marca_passo: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  reumatismo: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  hanseniase: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  cirurgia_mmii: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  hipotensao: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  alteracoes_vasculares: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  diabetes: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue: 'Não',
    allowNull: false
  },
  taxa_glicemica: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  data_ultima_verificacao: {
    type: DataTypes.DATE,
    allowNull: true
  },
  insulina: {
    type: DataTypes.ENUM('Sim', 'Não', 'Injetável', 'Via Oral'),
    defaultValue : 'Não',
    allowNull: true
  },
  dieta_hidrica: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue : 'Não',
    allowNull: true
  },
  dieta_alimentar: {
    type: DataTypes.ENUM('Sim', 'Não'),
    defaultValue : 'Não',
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'clientes'
});

export default Cliente;
