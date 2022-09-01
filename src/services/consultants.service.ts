import { rget, rpost } from 'src/lib/request';


export const getConsultants = async () => {
    const { data } = await rget('PermissaoSistema/consultants');
    return data;
};

export const sendConsultants = async (values) => {

    let result;
    switch (values.reportType) {
        case 0:
            result = await rpost('report/relatorio', values);
            break;
        case 1:
            result = await rpost('report/grafica', values);
            break;
        case 2:
            result = await rpost('report/pizza', values);
            break;
        default:
            break;
    }

    return result.data;
};
