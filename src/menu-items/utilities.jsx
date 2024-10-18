// assets
import {
  HomeOutlined,
  SettingOutlined,
  DollarOutlined,
  MessageOutlined,
  UserOutlined,
  ReconciliationOutlined
} from '@ant-design/icons';

const utilities = {
  id: 'utilities',
  title: '',
  type: 'group',
  children: [
    {
      id: 'util-invite',
      title: 'Invitation',
      type: 'item',
      url: '/?#invitaion',
      icon: ReconciliationOutlined
    },
    {
      id: 'util-msg',
      title: 'Message',
      type: 'item',
      url: '/?#message',
      icon: MessageOutlined
    },
    {
      id: 'util-wallet',
      title: 'Wallet',
      type: 'item',
      url: '/?#wallet',
      icon: DollarOutlined
    },
    {
      id: 'util-setting',
      title: 'Setting',
      type: 'item',
      url: '/?#setting',
      icon: SettingOutlined
    }
  ]
};

export default utilities;
