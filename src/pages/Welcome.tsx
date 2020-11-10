import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';

export default (): React.ReactNode => (
    <PageContainer>
        <Card>
            <Alert
                message="欢迎使用 Huamao Admin！"
                type="success"
                showIcon
                banner
                style={{
                    margin: -12,
                    marginBottom: 24
                }}
            />
            <Typography.Text strong>欢迎使用 Huamao Admin！</Typography.Text>
        </Card>
    </PageContainer>
);
