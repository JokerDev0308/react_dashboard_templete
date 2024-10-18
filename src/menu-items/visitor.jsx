// assets
import {
    UserOutlined, BankOutlined
} from '@ant-design/icons';

const item = {
    admin: {
        id: 'util-admin',
        title: 'Administrator',
        type: 'item',
        url: '/?#admin',
        exact: true,
        icon: UserOutlined
    },
    company: {
        id: 'util-admin',
        title: 'Company',
        type: 'item',
        url: '/?#company',
        exact: true,
        icon: UserOutlined
    },
    worker: {
        id: 'util-admin',
        title: 'OwnWorker',
        type: 'item',
        url: '/?#worker',
        exact: true,
        icon: UserOutlined
    }
}

const visitor = {
    id: 'utilities',
    title: '',
    type: 'group',
    children: [
        item['admin']
    ]
};

export default visitor;
