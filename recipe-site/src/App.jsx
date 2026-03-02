// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './const'
import Favorite from './pages/Favorite'
import MenuList from './pages/MenuList'
import RecipeDetail from './pages/RecipeDetail'
import ShoppingList from './pages/ShoppingList'
import TopPage from './pages/TopPage'
import Login from './pages/Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      {/* 画面全体をフレックスボックスで横並び */}
      <div className="flex min-h-screen bg-gray-50">
        {/* 左側：固定サイドバー */}
        <Sidebar />

        {/* 右側：メインコンテンツエリア */}
        <div className="flex-1 flex flex-col md:ml-66">
          <div className='flex-1 flex flex-col m-4 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden'>
            <main className="flex-1 p-6 md:p-10 w-full max-w-7xl mx-auto">
              <Routes>
                <Route path={ROUTES.TOP} element={<TopPage />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path={ROUTES.FAVORITE} element={<Favorite />} />
                <Route path={ROUTES.MENU_LIST} element={<MenuList />} />
                <Route path={ROUTES.RECIPE_DETAIL} element={<RecipeDetail />} />
                <Route path={ROUTES.SHOPPING_LIST} element={<ShoppingList />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App
