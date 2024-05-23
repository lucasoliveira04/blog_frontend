import ProjectProvider from './context/GetDataApi/getDataApi'
import { Routers } from './routers'

function App() {

  return (
    <ProjectProvider>
      <Routers/>
    </ProjectProvider>
  )
}

export default App
