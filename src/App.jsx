import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <HashRouter>
      {/* We will implement Layout and AppRoutes shortly */}
      <Layout>
        <AppRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
