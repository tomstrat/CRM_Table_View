export default function sidebar(title: string, components: () => string): string {
    return (`
      <div class="sidebar">
        <div class="sidebar-title">
          <h2>${title}</h2>
        </div>
        <div class="sidebar-components">
            ${components()}
        </div>
      </div>
      
      
    `)
}