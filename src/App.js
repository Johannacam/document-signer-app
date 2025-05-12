import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import DIFLogin from '@/components/Auth/DIFLogin';
import Dashboard from '@/components/Admin/Dashboard';
import DocumentSigner from '@/components/Admin/DocumentSigner';
import HistorialFirmas from '@/components/Admin/HistorialFirmas';
import RouteGuard from '@/components/Auth/RouteGuard';
import Manual from '@/components/Admin/Manual';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<DIFLogin />} />
          
          <Route path="/" element={
            <RouteGuard>
              <Dashboard />
            </RouteGuard>
          } />
          
          <Route path="/firmar" element={
            <RouteGuard>
              <DocumentSigner />
            </RouteGuard>
          } />
          
          <Route path="/historial" element={
            <RouteGuard>
              <HistorialFirmas />
            </RouteGuard>
          } />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
