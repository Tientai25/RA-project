
import Icon from './icons/Icon';

const menuItems = [
  { name: 'menu', label: 'Menu' },
  { name: 'home', label: 'Trang chủ' },
  { name: 'listAlt', label: 'Danh sách yêu cầu' },
  { name: 'person', label: 'Quản lý người dùng' },
  { name: 'encrypted', label: 'Loại chứng thư số' },
  { name: 'insertChart', label: 'Báo cáo thống kê' },
  { name: 'settings', label: 'Cài đặt' },
];

export default function Sidebar() {
  return (
    <div style={{
      width: '64px',
      backgroundColor: '#fff',
      borderRight: '1px solid #e5e7eb',
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 10
    }}>
      {menuItems.map(item => (
        <div
          key={item.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: item.name === 'listAlt' ? '#007bff' : '#6b7280',
            cursor: 'pointer'
          }}
          title={item.label}
        >
          <Icon name={item.name} size={24} />
          {item.name === 'listAlt' && (
            <div style={{ width: '4px', height: '4px', backgroundColor: '#007bff', borderRadius: '50%' }} />
          )}
        </div>
      ))}
    </div>
  );
}