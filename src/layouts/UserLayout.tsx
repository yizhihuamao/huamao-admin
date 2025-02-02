import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useIntl, ConnectProps, connect, FormattedMessage } from 'umi';
import React from 'react';
import { ConnectState } from '@/models/connect';
import logo from '../assets/logo.png';
import styles from './UserLayout.less';
import { SelectLang } from '@/components/SelectLang';

export interface UserLayoutProps extends Partial<ConnectProps> {
    breadcrumbNameMap: {
        [path: string]: MenuDataItem;
    };
}

const UserLayout: React.FC<UserLayoutProps> = props => {
    const {
        route = {
            routes: []
        }
    } = props;
    const { routes = [] } = route;
    const {
        children,
        location = {
            pathname: ''
        }
    } = props;
    const { formatMessage } = useIntl();
    const { breadcrumb } = getMenuData(routes);
    const title = getPageTitle({
        pathname: location.pathname,
        formatMessage,
        breadcrumb,
        ...props
    });
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>

            <div className={styles.container}>
                <div className={styles.lang}>
                    <SelectLang />
                </div>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>
                            <Link to="/">
                                <img alt="logo" className={styles.logo} src={logo} />
                                <span className={styles.title}>Huamao</span>
                            </Link>
                        </div>
                        <div className={styles.desc}>
                            <FormattedMessage id="pages.layouts.userLayout.title" defaultMessage="后台管理系统" />
                        </div>
                    </div>
                    {children}
                </div>
                <DefaultFooter copyright={`${new Date().getFullYear()} Huamao Admin`} links={[]} />
            </div>
        </HelmetProvider>
    );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
