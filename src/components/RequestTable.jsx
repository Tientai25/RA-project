const statusColors = {
  'Chờ phê duyệt': '#fff3cd',
  'Từ chối': '#f8d7da',
  'Phê duyệt': '#d4edda',
  'Nháp': '#e2e3e5'
};

const statusTextColors = {
  'Chờ phê duyệt': '#856404',
  'Từ chối': '#721c24',
  'Phê duyệt': '#155724',
  'Nháp': '#383d41'
};

const data = [
  { id: '#4910', ma: '0101234567', donvi: 'Công ty Thương mại Cổ phần Đạm Hương', canhan: '012345678912 Đàm Thu Hương', loaiCTS: 'Cá nhân thuộc tổ chức', hinhthuc: 'Token', loaiYC: 'Cấp mới', dichvu: 'Gói dịch vụ', trangthai: 'Chờ phê duyệt' },
  { id: '#4910', ma: '0101234567', donvi: 'Công ty Thương mại Cổ phần Đạm Hương', canhan: '', loaiCTS: 'Tổ chức', hinhthuc: 'HSM', loaiYC: 'Gia hạn', dichvu: 'Gói dịch vụ', trangthai: 'Từ chối' },

].concat(Array(8).fill({
  id: '#4910', ma: '0101234567', donvi: 'Công ty Thương mại Cổ phần Đạm Hương', canhan: '012345678912 Đàm Thu Hương', loaiCTS: 'Tổ chức', hinhthuc: 'Remote Signing', loaiYC: 'Cấp mới', dichvu: 'Gói dịch vụ', trangthai: 'Phê duyệt'
}));

export default function RequestTable() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f9f9fb', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
          Danh sách yêu cầu
        </h1>

        {/* Filters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '16px'
        }}>
          {['Loại chứng thư số', 'Trạng thái yêu cầu', 'Đại lý/Cộng tác viên', 'NVKD', 'Nguồn yêu cầu', 'Từ ngày đến ngày'].map(label => (
            <select key={label} style={{
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: 'white',
              fontSize: '14px'
            }}>
              <option>{label}</option>
            </select>
          ))}
        </div>

        {/* Search & Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <input
            type="text"
            placeholder="Tìm kiếm MST, CCCD, tên công ty, họ tên, mã tham chiếu"
            style={{
              flex: 1,
              minWidth: '300px',
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ padding: '10px 16px', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>Cấu hình bảng</button>
            <button style={{ padding: '10px 16px', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>Export</button>
            <button style={{
              padding: '10px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px'
            }}>Tạo Yêu Cầu</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                {['Mã yêu cầu', 'Đơn vị', 'Cá nhân', 'Loại CTS', 'Hình thức', 'Loại yêu cầu', 'Gói dịch vụ', 'Trạng thái'].map(header => (
                  <th key={header} style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#495057',
                    borderBottom: '1px solid #dee2e6'
                  }}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '500' }}>{row.id}</td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.ma}<br/><small style={{ color: '#6c757d' }}>{row.donvi}</small></td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.canhan}</td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.loaiCTS}</td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.hinhthuc}</td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.loaiYC}</td>
                  <td style={{ padding: '12px 16px', fontSize: '14px' }}>{row.dichvu}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: statusColors[row.trangthai] || '#e2e3e5',
                      color: statusTextColors[row.trangthai] || '#383d41'
                    }}>
                      {row.trangthai}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
          fontSize: '14px',
          color: '#6c757d'
        }}>
          <div>Hiển thị 1 đến 10 của 50 bản ghi</div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1,2,3,4,5,6].map(n => (
              <button key={n} style={{
                width: '32px',
                height: '32px',
                border: n === 1 ? '1px solid #007bff' : '1px solid #ddd',
                backgroundColor: n === 1 ? '#007bff' : 'white',
                color: n === 1 ? 'white' : '#333',
                borderRadius: '6px',
                fontSize: '14px'
              }}>{n}</button>
            ))}
            <button style={{ padding: '0 12px', height: '32px', border: '1px solid #ddd', borderRadius: '6px', background: 'white' }}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
}