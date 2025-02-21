// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import  Cliente  from '../models/Cliente'
import Unha from '../models/Unha';


export const index = (req: Request, res: Response) => {
    res.redirect('/etapa1');
};

let TabelaCliente: {
    nome?: string;
    endereco?: string;
    bairro?: string;
    cep?: string;
    data_nasc?: string;
    email?: string;
    telefone_res?: string;
    cidade?: string;
    estado?: string;
    sexo?: 'F' | 'M' | 'Outro';
    telefone_emergencia?: string;
    profissao?: string;
    queixa_principal?: string;
    frequencia_podologo?: 'Sim' | 'Não';
    medicamento?: string;
    alergico?: 'Sim' | 'Não';
    substancias_alergicas?: string;
    posicao_trabalho?: 'Em pé' | 'Sentado' | 'Andando';
    tempo_trabalho?: string;
    tipo_calçado?: string;
    uso_palmilha?: 'Sim' | 'Não';
    tipo_palmilha?: 'Ortopédica' | 'Descanso' | 'Nenhuma';
    fumante?: boolean;
    ciclo_menstrual?: 'Sim' | 'Não';
    gestante?: boolean;
    amamentando?: boolean;
    pratica_atividade_fisica?: boolean;
    frequencia_atividade?: 'Diário' | 'Às vezes' | 'Nunca';
    tipo_calçado_esporte?: 'Bota' | 'Coturno' | 'Chinelo' | 'Sapatênis' | 'Sapato' | 'Sandália' | 'Salto' | 'Sapatilha' | 'Tênis';
    telefone?: string;
    contato?: string;
    numero_da_casa?: string;
    complemento?: string;
    dum?: string;
    tipo_medicamento?: string;
    duracao_trabalho?: string;
    numero_calcado?: number;
    hipertiroidismo?: boolean;
    renal?: boolean;
    epilepsia?: boolean;
    quimioterapia_radioterapia?: boolean;
    osteoporose?: boolean;
    hipotiroidismo?: boolean;
    neuropatia?: boolean;
    hepatite?: boolean;
    antecedentes_oncologicos?: boolean;
    cardiopatia?: boolean;
    marca_passo?: boolean;
    reumatismo?: boolean;
    hanseniase?: boolean;
    cirurgia_mmii?: boolean;
    hipotensao?: boolean;
    alteracoes_vasculares?: boolean;
    diabetes?: 'Sim' | 'Não';
    taxa_glicemica?: number;
    data_ultima_verificacao?: string;
    insulina?: 'Não' | 'Via Oral' | 'Injetável';
    dieta_hidrica?: 'Sim' | 'Não';
    dieta_alimentar?: 'Sim' | 'Não';
    teste_monofilamento?: string;
    pulso?: string;
    onicoatrofia?: string;
    onicocriptose?: string;
    onicorrexe?: string;
    granuloma?: string;
    onicogrifose?: string;
    onicolise?: string;
    onicofose?: string;
    onicomicose?: string;
    psoriase_ungeal?: string;
} = {};


export const cadastrarCliente =  (req: Request, res: Response) => {
    res.render('etapa1');
};








let TabelaUnha: {
    id_unha?: number,
    id_cliente?: number,
    tipo_pisada?: boolean,
    tipo_marcha?: boolean,
    articulacao?: boolean,
    sensibilidade_a_dor?: boolean,
    flexivel?: boolean,
    rigido?: boolean,
    espalmado?: boolean,
    martelo?: boolean,
    queda_metatarso?: boolean,
    joelho?: boolean,
    formato_unhas?: string,
    pe_direito?: string,
    pe_esquerdo?: string,
    outras_alteracoes_ungueais?: string,
    brumidose?: boolean,
    hidrose?: boolean,
    desidrose?: boolean,
    edema?: boolean,
    mal_perfurante?: boolean,
    isquemia?: boolean,
    tinea?: boolean,
    psoriase?: boolean,
    tungiase?: boolean,
    fissuras?: boolean,
    pe_direito_estado?: boolean,
    pe_esquerdo_estado?: boolean,
    verruga_plantar?: boolean,
    queratose?: boolean,
    hiperqueratose?: boolean,
    calo_dorsal?: boolean,
    calo_plantar?: boolean,
    calo_interdigital?: boolean,
    erisipela?: boolean,
    alteracoes_na_pele?: string,
    outros_comentarios?: string,
    data_consulta?: Date,
    teste_diapazao?: string,
    teste_monofilamento?: string,
    pulso?: string,
    onicoatrofia?: boolean,
    onicocriptose?: boolean,
    onicorrexe?: boolean,
    granuloma?: boolean,
    onicogrifose?: boolean,
    onicofose?: boolean,
    onicomicose?: boolean,
    psoriase_ungueal?: boolean,
    dieta_alimentar?: boolean,
}= {};



export const cadastrarUnha = (req: Request, res: Response) => {
    res.render('cadastrarUnha');
};

export const cadastrarUnhaPost = async (req: Request, res: Response) => {
            // Extrai todos os campos do req.body
        const {
            id_unha,
            id_cliente,
            tipo_pisada,
            tipo_marcha,
            articulacao,
            sensibilidade_a_dor,
            flexivel,
            rigido,
            espalmado,
            martelo,
            queda_metatarso,
            joelho,
            formato_unhas,
            pe_direito,
            pe_esquerdo,
            outras_alteracoes_ungueais,
            brumidose,
            hidrose,
            desidrose,
            edema,
            mal_perfurante,
            isquemia,
            tinea,
            psoriase,
            tungiase,
            fissuras,
            pe_direito_estado,
            pe_esquerdo_estado,
            verruga_plantar,
            queratose,
            hiperqueratose,
            calo_dorsal,
            calo_plantar,
            calo_interdigital,
            erisipela,
            alteracoes_na_pele,
            outros_comentarios,
            data_consulta,
            teste_diapazao,
            teste_monofilamento,
            pulso,
            onicoatrofia,
            onicocriptose,
            onicorrexe,
            granuloma,
            onicogrifose,
            onicofose,
            onicomicose,
            psoriase_ungueal,
            dieta_alimentar} = req.body
    
        // Atualiza o objeto formData com os valores recebidos
        TabelaUnha = {
            id_unha,
            id_cliente,
            tipo_pisada,
            tipo_marcha,
            articulacao,
            sensibilidade_a_dor,
            flexivel,
            rigido,
            espalmado,
            martelo,
            queda_metatarso,
            joelho,
            formato_unhas,
            pe_direito,
            pe_esquerdo,
            outras_alteracoes_ungueais,
            brumidose,
            hidrose,
            desidrose,
            edema,
            mal_perfurante,
            isquemia,
            tinea,
            psoriase,
            tungiase,
            fissuras,
            pe_direito_estado,
            pe_esquerdo_estado,
            verruga_plantar,
            queratose,
            hiperqueratose,
            calo_dorsal,
            calo_plantar,
            calo_interdigital,
            erisipela,
            alteracoes_na_pele,
            outros_comentarios,
            data_consulta,
            teste_diapazao,
            teste_monofilamento,
            pulso,
            onicoatrofia,
            onicocriptose,
            onicorrexe,
            granuloma,
            onicogrifose,
            onicofose,
            onicomicose,
            psoriase_ungueal,
            dieta_alimentar
        };

        await Unha.create({ ...TabelaUnha, Cliente: id_cliente });
    
    
}







import { db } from '../server'; // Certifique-se de que o `db` está sendo importado corretamente



export const etapa1 = async (req: Request, res: Response): Promise<void> => {
    try {
        // 📌 Busca o último cliente do banco de dados
        const query = `SELECT id FROM clientes ORDER BY id DESC LIMIT 1`;
        const [rows]: any = await db.promise().query(query);

        // 🔹 Se não existir nenhum cliente, começa do 1
        // 🔹 Se existir, incrementa 1 ao último ID
        const id_cliente = rows.length > 0 ? Number(rows[0].id) + 1 : 1;

        res.render('cadastro_cliente');  // ✅ CERTO - esse arquivo existe

    } catch (error) {
        console.error('❌ Erro ao buscar último ID:', error);
        res.status(500).send('Erro ao gerar ID do cliente');
    }
};

export const etapa1Post = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("📌 Dados recebidos na Etapa 1:", req.body);

        // Filtra os campos enviados para evitar valores `undefined`
        const dadosCliente = Object.fromEntries(
            Object.entries(req.body).filter(([_, value]) => value !== undefined && value !== "")
        );

        // Armazena os dados na sessão sem salvar no banco ainda
        req.session.dadosCliente = dadosCliente;

        console.log("✅ Dados da etapa 1 armazenados na sessão.", req.session.dadosCliente);

        res.redirect('/etapa2'); // Avança para a próxima etapa
    } catch (error) {
        console.error("❌ Erro ao processar a Etapa 1:", error);
        res.status(500).send("Erro ao processar os dados.");
    }
};









export const etapa2 = (req: Request, res: Response) => {
    res.render('unha');
};

export const etapa2Post = async (req: Request, res: Response) => {
    try {
        console.log("📌 Dados recebidos na Etapa 2:", req.body);

        // Filtra os campos enviados para evitar valores `undefined`
        const dadosUnha = Object.fromEntries(
            Object.entries(req.body).filter(([_, value]) => value !== undefined && value !== "")
        );

        // Armazena os dados da unha na sessão
        req.session.dadosUnha = dadosUnha;

        console.log("✅ Dados da etapa 2 armazenados na sessão.", req.session.dadosUnha);

        res.redirect('/finalizacao'); // Avança para a finalização
    } catch (error) {
        console.error("❌ Erro ao processar a Etapa 2:", error);
        res.status(500).send("Erro ao processar os dados.");
    }
};




export const submit = async (req: Request, res: Response) => {
    try {
        console.log("📌 Tentando salvar os dados da sessão no banco...");

        // Recupera os dados da sessão (pode estar vazio)
        const dadosCliente = req.session.dadosCliente || {};
        const dadosUnha = req.session.dadosUnha || {};

        // ✅ Cria o cliente no banco apenas com os dados fornecidos
        const cliente = await Cliente.create(dadosCliente);

        console.log("✅ Cliente cadastrado:", cliente.toJSON());

        // Se houver dados de unha, vincula ao cliente e salva
        if (Object.keys(dadosUnha).length > 0) {
            const dadosUnhaFinal = {
                ...dadosUnha,
                id_cliente: cliente.id // Associa ao cliente recém-criado
            };

            await Unha.create(dadosUnhaFinal);
            console.log("✅ Dados da Unha cadastrados:", dadosUnhaFinal);
        }

        // Limpa a sessão após salvar os dados
        req.session.dadosCliente = undefined;
        req.session.dadosUnha = undefined;

        res.render('finalizacao'); // Exibe a tela final
    } catch (error) {
        console.error("❌ Erro ao salvar no banco:", error);
        res.status(500).send("Erro ao salvar os dados.");
    }
};


