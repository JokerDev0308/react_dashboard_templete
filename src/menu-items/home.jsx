// assets
import {
    HomeOutlined,
} from '@ant-design/icons';

const home = {
    id: 'utilities',
    title: '',
    type: 'group',
    children: [
        {
            id: 'util-home',
            title: 'Home',
            type: 'item',
            url: '/',
            exact: true,
            icon: HomeOutlined
        }
    ]
};

export default home;
