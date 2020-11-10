import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
    pwa: boolean;
};

const proSettings: DefaultSettings = {
    navTheme: 'light',
    // 拂晓蓝
    primaryColor: '#FFA22D',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    menu: {
        locale: true
    },
    title: 'Huamao Admin',
    pwa: false,
    iconfontUrl: ''
};

export type { DefaultSettings };

export default proSettings;
