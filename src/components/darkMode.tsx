import '../containers/home/menu.css'
const DarkMode = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '24px',
        paddingTop: '12px',
      }}
    >
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default DarkMode
