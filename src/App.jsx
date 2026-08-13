import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { PracticeIndex, PracticeDetail } from './pages/Practice'
import { TeamIndex } from './pages/Team'
import { InsightsIndex, InsightDetail } from './pages/Insights'
import Sectors from './pages/Sectors'
import About from './pages/About'
import Careers from './pages/Careers'
import Results from './pages/Results'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<PracticeIndex />} />
        <Route path="/practice/:slug" element={<PracticeDetail />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/team" element={<TeamIndex />} />
        <Route path="/results" element={<Results />} />
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
