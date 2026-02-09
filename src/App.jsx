import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* We will implement Layout and AppRoutes shortly */}
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
