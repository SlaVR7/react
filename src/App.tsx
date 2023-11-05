import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import DetailedProductPage from './pages/DetailedProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />}>
        <Route path="/:details" element={<DetailedProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
