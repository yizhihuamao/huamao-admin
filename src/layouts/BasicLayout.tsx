/**
 * use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, {
    MenuDataItem,
    BasicLayoutProps as ProLayoutProps,
    Settings,
    DefaultFooter
} from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useIntl, connect, Dispatch, history } from 'umi';
// import { GithubOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/logo.png';

const noMatch = (
    <Result
        status={403}
        title="403"
        subTitle="没有权限"
        extra={
            <Button type="primary">
                <Link to="/user/login">Go Login</Link>
            </Button>
        }
    />
);
export interface BasicLayoutProps extends ProLayoutProps {
    breadcrumbNameMap: {
        [path: string]: MenuDataItem;
    };
    route: ProLayoutProps['route'] & {
        authority: string[];
    };
    settings: Settings;
    dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
    breadcrumbNameMap: {
        [path: string]: MenuDataItem;
    };
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
    menuList.map(item => {
        const localItem = {
            ...item,
            children: item.children ? menuDataRender(item.children) : undefined
        };
        return Authorized.check(item.authority, localItem, null) as MenuDataItem;
    });

const defaultFooterDom = (
    <DefaultFooter
        copyright={`${new Date().getFullYear()} Huamao Admin`}
        links={[
            {
                key: 'Huamao Admin',
                title: 'Huamao Admin',
                href: '#',
                blankTarget: true
            }
            // {
            //     key: 'github',
            //     title: <GithubOutlined />,
            //     href: 'https://github.com/ant-design/ant-design-pro',
            //     blankTarget: true
            // },
            // {
            //     key: 'Ant Design',
            //     title: 'Ant Design',
            //     href: 'https://ant.design',
            //     blankTarget: true
            // }
        ]}
    />
);

const BasicLayout: React.FC<BasicLayoutProps> = props => {
    const {
        dispatch,
        children,
        settings,
        location = {
            pathname: '/'
        }
    } = props;

    const menuDataRef = useRef<MenuDataItem[]>([]);

    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent'
            });
        }
    }, []);
    /**
     * init variables
     */

    const handleMenuCollapse = (payload: boolean): void => {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload
            });
        }
    };
    // get children authority
    const authorized = useMemo(
        () =>
            getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
                authority: undefined
            },
        [location.pathname]
    );

    const { formatMessage } = useIntl();

    return (
        <ProLayout
            logo={logo}
            formatMessage={formatMessage}
            onCollapse={handleMenuCollapse}
            onMenuHeaderClick={() => history.push('/')}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (menuItemProps.isUrl || !menuItemProps.path) {
                    return defaultDom;
                }
                return <Link to={menuItemProps.path}>{defaultDom}</Link>;
            }}
            breadcrumbRender={(routers = []) => [
                {
                    path: '/',
                    breadcrumbName: formatMessage({ id: 'menu.home' })
                },
                ...routers
            ]}
            itemRender={(route, params, routes, paths) => {
                const first = routes.indexOf(route) === 0;
                return first ? (
                    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
                ) : (
                    <span>{route.breadcrumbName}</span>
                );
            }}
            footerRender={() => defaultFooterDom}
            menuDataRender={menuDataRender}
            rightContentRender={() => <RightContent />}
            postMenuData={menuData => {
                menuDataRef.current = menuData || [];
                return menuData || [];
            }}
            {...props}
            {...settings}
        >
            <Authorized authority={authorized!.authority} noMatch={noMatch}>
                {children}
            </Authorized>
        </ProLayout>
    );
};

export default connect(({ global, settings }: ConnectState) => ({
    collapsed: global.collapsed,
    settings
}))(BasicLayout);
