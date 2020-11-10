// @ts-nocheck
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { ClickParam } from 'antd/es/menu';
import { DropDownProps } from 'antd/es/dropdown';
import { getLocale, setLocale } from 'umi';

export interface HeaderDropdownProps extends DropDownProps {
    overlayClassName?: string;
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => (
    <Dropdown overlayClassName={cls} {...restProps} />
);

interface LocalData {
    lang: string;
    label?: string;
    icon?: string;
    title?: string;
}

interface SelectLangProps {
    globalIconClassName?: string;
    postLocalesData?: (locales: LocalData[]) => LocalData[];
    onItemClick?: (params: ClickParam) => void;
    className?: string;
}

const transformArrayToObject = (allLangUIConfig: LocalData[]) => {
    return allLangUIConfig.reduce((obj, item) => {
        if (!item.lang) {
            return obj;
        }

        return {
            ...obj,
            [item.lang]: item
        };
    }, {});
};

const defaultLangUConfigMap = {
    'ar-EG': {
        lang: 'ar-EG',
        label: 'العربية',
        icon: '🇪🇬',
        title: 'لغة'
    },
    'az-AZ': {
        lang: 'az-AZ',
        label: 'Azərbaycan dili',
        icon: '🇦🇿',
        title: 'Dil'
    },
    'bg-BG': {
        lang: 'bg-BG',
        label: 'Български език',
        icon: '🇧🇬',
        title: 'език'
    },
    'ca-ES': {
        lang: 'ca-ES',
        label: 'Catalá',
        icon: '🇨🇦',
        title: 'llengua'
    },
    'cs-CZ': {
        lang: 'cs-CZ',
        label: 'Čeština',
        icon: '🇨🇿',
        title: 'Jazyk'
    },
    'da-DK': {
        lang: 'da-DK',
        label: 'Dansk',
        icon: '🇩🇰',
        title: 'Sprog'
    },
    'de-DE': {
        lang: 'de-DE',
        label: 'Deutsch',
        icon: '🇩🇪',
        title: 'Sprache'
    },
    'el-GR': {
        lang: 'el-GR',
        label: 'Ελληνικά',
        icon: '🇬🇷',
        title: 'Γλώσσα'
    },
    'en-GB': {
        lang: 'en-GB',
        label: 'English',
        icon: '🇬🇧',
        title: 'Language'
    },
    'en-US': {
        lang: 'en-US',
        label: 'English',
        icon: '🇺🇸',
        title: 'Language'
    },
    'es-ES': {
        lang: 'es-ES',
        label: 'Español',
        icon: '🇪🇸',
        title: 'Idioma'
    },
    'et-EE': {
        lang: 'et-EE',
        label: 'Eesti',
        icon: '🇪🇪',
        title: 'Keel'
    },
    'fa-IR': {
        lang: 'fa-IR',
        label: 'فارسی',
        icon: '🇮🇷',
        title: 'زبان'
    },
    'fi-FI': {
        lang: 'fi-FI',
        label: 'Suomi',
        icon: '🇫🇮',
        title: 'Kieli'
    },
    'fr-BE': {
        lang: 'fr-BE',
        label: 'Français',
        icon: '🇧🇪',
        title: 'Langue'
    },
    'fr-FR': {
        lang: 'fr-FR',
        label: 'Français',
        icon: '🇫🇷',
        title: 'Langue'
    },
    'ga-IE': {
        lang: 'ga-IE',
        label: 'Gaeilge',
        icon: '🇮🇪',
        title: 'Teanga'
    },
    'he-IL': {
        lang: 'he-IL',
        label: 'עברית',
        icon: '🇮🇱',
        title: 'שפה'
    },
    'hi-IN': {
        lang: 'hi-IN',
        label: 'हिन्दी, हिंदी',
        icon: '🇮🇳',
        title: 'भाषा: हिन्दी'
    },
    'hr-HR': {
        lang: 'hr-HR',
        label: 'Hrvatski jezik',
        icon: '🇭🇷',
        title: 'Jezik'
    },
    'hu-HU': {
        lang: 'hu-HU',
        label: 'Magyar',
        icon: '🇭🇺',
        title: 'Nyelv'
    },
    'hy-AM': {
        lang: 'hu-HU',
        label: 'Հայերեն',
        icon: '🇦🇲',
        title: 'Լեզու'
    },
    'id-ID': {
        lang: 'id-ID',
        label: 'Bahasa Indonesia',
        icon: '🇮🇩',
        title: 'Bahasa'
    },
    'it-IT': {
        lang: 'it-IT',
        label: 'Italiano',
        icon: '🇮🇹',
        title: 'Linguaggio'
    },
    'is-IS': {
        lang: 'is-IS',
        label: 'Íslenska',
        icon: '🇮🇸',
        title: 'Tungumál'
    },
    'ja-JP': {
        lang: 'ja-JP',
        label: '日本語',
        icon: '🇯🇵',
        title: '言語'
    },
    'ku-IQ': {
        lang: 'ku-IQ',
        label: 'کوردی',
        icon: '🇮🇶',
        title: 'Ziman'
    },
    'kn-IN': {
        lang: 'zh-TW',
        label: 'ಕನ್ನಡ',
        icon: '🇮🇳',
        title: 'ಭಾಷೆ'
    },
    'ko-KR': {
        lang: 'ko-KR',
        label: '한국어',
        icon: '🇰🇷',
        title: '언어'
    },
    'lv-LV': {
        lang: 'lv-LV',
        label: 'Latviešu valoda',
        icon: '🇱🇮',
        title: 'Kalba'
    },
    'mk-MK': {
        lang: 'mk-MK',
        label: 'македонски јазик',
        icon: '🇲🇰',
        title: 'Јазик'
    },
    'mn-MN': {
        lang: 'mn-MN',
        label: 'Монгол хэл',
        icon: '🇲🇳',
        title: 'Хэл'
    },
    'ms-MY': {
        lang: 'ms-MY',
        label: 'بهاس ملايو‎',
        icon: '🇲🇾',
        title: 'Bahasa'
    },
    'nb-NO': {
        lang: 'nb-NO',
        label: 'Norsk',
        icon: '🇳🇴',
        title: 'Språk'
    },
    'ne-NP': {
        lang: 'ne-NP',
        label: 'नेपाली',
        icon: '🇳🇵',
        title: 'भाषा'
    },
    'nl-BE': {
        lang: 'nl-BE',
        label: 'Vlaams',
        icon: '🇧🇪',
        title: 'Taal'
    },
    'nl-NL': {
        lang: 'nl-NL',
        label: 'Vlaams',
        icon: '🇳🇱',
        title: 'Taal'
    },
    'pt-BR': {
        lang: 'pt-BR',
        label: 'Português',
        icon: '🇧🇷',
        title: 'Idiomas'
    },
    'pt-PT': {
        lang: 'pt-PT',
        label: 'Português',
        icon: '🇵🇹',
        title: 'Idiomas'
    },
    'ro-RO': {
        lang: 'ro-RO',
        label: 'Română',
        icon: '🇷🇴',
        title: 'Limba'
    },
    'ru-RU': {
        lang: 'ru-RU',
        label: 'русский',
        icon: '🇷🇺',
        title: 'язык'
    },
    'sk-SK': {
        lang: 'sk-SK',
        label: 'Slovenčina',
        icon: '🇸🇰',
        title: 'Jazyk'
    },
    'sr-RS': {
        lang: 'sr-RS',
        label: 'српски језик',
        icon: '🇸🇷',
        title: 'Језик'
    },
    'sl-SI': {
        lang: 'sl-SI',
        label: 'Slovenščina',
        icon: '🇸🇱',
        title: 'Jezik'
    },
    'sv-SE': {
        lang: 'sv-SE',
        label: 'Svenska',
        icon: '🇸🇪',
        title: 'Språk'
    },
    'ta-IN': {
        lang: 'ta-IN',
        label: 'தமிழ்',
        icon: '🇮🇳',
        title: 'மொழி'
    },
    'th-TH': {
        lang: 'th-TH',
        label: 'ไทย',
        icon: '🇹🇭',
        title: 'ภาษา'
    },
    'tr-TR': {
        lang: 'tr-TR',
        label: 'Türkçe',
        icon: '🇹🇷',
        title: 'Dil'
    },
    'uk-UA': {
        lang: 'uk-UA',
        label: 'Українська',
        icon: '🇺🇰',
        title: 'Мова'
    },
    'vi-VN': {
        lang: 'vi-VN',
        label: 'Tiếng Việt',
        icon: '🇻🇳',
        title: 'Ngôn ngữ'
    },
    'zh-CN': {
        lang: 'zh-CN',
        label: '简体中文',
        icon: '🇨🇳',
        title: '语言'
    },
    'zh-TW': {
        lang: 'zh-TW',
        label: '繁体中文',
        icon: '🇭🇰',
        title: '語言'
    }
};

export const SelectLang: React.FC<SelectLangProps> = props => {
    const { globalIconClassName, postLocalesData, onItemClick, style, ...restProps } = props;
    const selectedLang = getLocale();

    const changeLang = ({ key }: ClickParam): void => setLocale(key);

    // 设置国际化语言
    const langArr = ['zh-CN'];
    const defaultLangUConfig = langArr.map(
        key =>
            defaultLangUConfigMap[key] || {
                lang: key,
                label: key,
                icon: '🌐',
                title: key
            }
    );

    // 数组转对象
    const allLangUIConfig = transformArrayToObject(
        postLocalesData ? postLocalesData(defaultLangUConfig) : defaultLangUConfig
    );
    const handleClick = onItemClick ? (params: ClickParam) => onItemClick(params) : changeLang;

    const menuItemStyle = { minWidth: '160px' };
    const langMenu = (
        <Menu selectedKeys={[selectedLang]} onClick={handleClick}>
            {defaultLangUConfig.map((item: LocalData) => {
                return (
                    <Menu.Item key={item?.lang} style={menuItemStyle}>
                        <span role="img" aria-label={item?.label || 'zh-CN'}>
                            {item?.icon || '🌐'}
                        </span>{' '}
                        {item?.label || 'zh-CN'}
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    const inlineStyle = {
        cursor: 'pointer',
        padding: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        verticalAlign: 'middle',
        ...style
    };

    return (
        <HeaderDropdown overlay={langMenu} placement="bottomRight" {...restProps}>
            <span className={globalIconClassName} style={inlineStyle}>
                <i className="anticon" title={allLangUIConfig[selectedLang]?.title}>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        className=""
                        data-icon="global"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z" />
                    </svg>
                </i>
            </span>
        </HeaderDropdown>
    );
    return <></>;
};
