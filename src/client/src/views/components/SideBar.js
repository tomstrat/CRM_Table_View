const SideBar = (title, components) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>{title}</h2>
      </div>
      <div className="sidebar-components">
        {components}
      </div>
    </div>
  )
}

export default SideBar;