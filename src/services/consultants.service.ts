import { rget, rpost } from 'src/lib/request';


export const getConsultants = async () => {
    const { data } = await rget('PermissaoSistema/consultants');
    return data;
};

export const sendConsultants = async (values) => {
    const { data } = await rpost('report', values);
    return data;
};
