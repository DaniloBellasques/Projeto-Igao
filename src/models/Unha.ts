import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../instances/mysql';
import Cliente from './Cliente';

class Unha extends Model {
  public id_unha!: number;
  public id_cliente!: number;
  public tipo_pisada!: boolean;
  public tipo_marcha!: boolean;
  public articulacao!: boolean;
  public sensibilidade_a_dor!: boolean;
  public flexivel!: boolean;
  public rigido!: boolean;
  public espalmado!: boolean;
  public martelo!: boolean;
  public queda_metatarso!: boolean;
  public joelho!: boolean;
  public formato_unhas!: string;
  public pe_direito!: string;
  public pe_esquerdo!: string;
  public outras_alteracoes_ungueais!: string;
  public brumidose!: boolean;
  public hidrose!: boolean;
  public desidrose!: boolean;
  public edema!: boolean;
  public mal_perfurante!: boolean;
  public isquemia!: boolean;
  public tinea!: boolean;
  public psoriase!: boolean;
  public tungiase!: boolean;
  public fissuras!: boolean;
  public pe_direito_estado!: boolean;
  public pe_esquerdo_estado!: boolean;
  public verruga_plantar!: boolean;
  public queratose!: boolean;
  public hiperqueratose!: boolean;
  public calo_dorsal!: boolean;
  public calo_plantar!: boolean;
  public calo_interdigital!: boolean;
  public erisipela!: boolean;
  public alteracoes_na_pele!: string;
  public outros_comentarios!: string;
  public data_consulta!: Date;
  public teste_diapazao!: string; 
  public teste_monofilamento!: string; 
  public pulso!: string; 
  public onicoatrofia!: boolean; 
  public onicocriptose!: boolean;
  public onicorrexe!: boolean; 
  public granuloma!: boolean; 
  public onicogrifose!: boolean; 
  public onicofose!: boolean; 
  public onicomicose!: boolean; 
  public psoriase_ungueal!: boolean;
  public dieta_alimentar!: boolean;
  
}

Unha.init({
  id_unha: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  formato_unhas: {
    type: DataTypes.ENUM('Normal', 'Involuta', 'Telha', 'Funil', 'Gancho', 'Torques', 'Caracol', 'Cunha'),
    defaultValue: 'Normal',
    allowNull: true
  },
  pe_direito: {
    type: DataTypes.ENUM('Hálux', '2º', '3º', '4º', '5º'),
    defaultValue: 'Hálux',
    allowNull: true
  },
  pe_esquerdo: {
    type: DataTypes.ENUM('Hálux', '2º', '3º', '4º', '5º'),
    defaultValue: 'Hálux',
    allowNull: true
  },
  outras_alteracoes_ungueais: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  onicoatrofia: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicocriptose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicorrexe: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  granuloma: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicogrifose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicolise: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicofose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  psoriase_ungueal: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  onicomicose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  brumidose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  hidrose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  desidrose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  edema: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  mal_perfurante: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  isquemia: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tinea: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  psoriase: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tungiase: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  fissuras: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  pe_direito_estado: {
    type: DataTypes.ENUM('Normal', 'Pálido', 'Cianótico'),
    defaultValue: 'Normal',
    allowNull: true
  },
  pe_esquerdo_estado: {
    type: DataTypes.ENUM('Normal', 'Pálido', 'Cianótico'),
    defaultValue: 'Normal',
    allowNull: true
  },
  verruga_plantar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  queratose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  erisipela: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  alteracoes_na_pele: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  outros_comentarios: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  hiperqueratose: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  calo_dorsal: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  calo_plantar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  calo_interdigital: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tipo_pisada: {
    type: DataTypes.ENUM('Plano/Pronado', 'Normal/Neutro', 'Cavo/Supinado'),
    defaultValue: 'Normal/Neutro',
    allowNull: true
  },
  tipo_marcha: {
    type: DataTypes.ENUM('Normal', 'Patológica'),
    defaultValue: 'Normal',
    allowNull: true
  },
  articulacao: {
    type: DataTypes.ENUM('Retropé', 'Chopart', 'Médiope', 'Lisfranc', 'Antepe'),
    defaultValue: 'Retropé',
    allowNull: true
  },
  sensibilidade_a_dor: {
    type: DataTypes.ENUM('Diminuição', 'Normal', 'Aumentada'),
    defaultValue: 'Normal',
    allowNull: true
  },
  flexivel: {
    type: DataTypes.ENUM('Esquerdo', 'Direito'),
    allowNull: true
  },
  rigido: {
    type: DataTypes.ENUM('Esquerdo', 'Direito'),
    allowNull: true
  },
  espalmado: {
    type: DataTypes.ENUM('Esquerdo', 'Direito'),
    allowNull: true
  },
  martelo: {
    type: DataTypes.ENUM('Esquerdo', 'Direito'),
    allowNull: true
  },
  queda_metatarso: {
    type: DataTypes.ENUM('Esquerdo', 'Direito'),
    allowNull: true
  },
  joelho: {
    type: DataTypes.ENUM('Normal', 'Valgo', 'Varo'),
    allowNull: true
  },
  teste_diapazao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  teste_monofilamento: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  pulso: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data_consulta: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'unhas',
  timestamps: true
});


export default Unha;