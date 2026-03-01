import React from 'react'
import { ROUTES } from '../const'
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, Calendar, ShoppingBasket, UserRoundKey } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Sidebar() {
  // 共通のスタイル
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-orange-100 text-orange-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">
      <Link to={ROUTES.TOP}>
        <h1 className="mb-10 px-3">
          <img src={logo} alt="Cook Recipe" className="w-40 h-auto" />
        </h1>
      </Link>

      <nav className="flex flex-col gap-2">
        <NavLink to={ROUTES.TOP} className={linkClass}>
          <Search size={20} /> <span>レシピを探す</span>
        </NavLink>

        <NavLink to={ROUTES.FAVORITE} className={linkClass}>
          <Heart size={20} /> <span>お気に入り</span>
        </NavLink>

        <NavLink to={ROUTES.MENU_LIST} className={linkClass}>
          <Calendar size={20} /> <span>献立リスト</span>
        </NavLink>

        <NavLink to={ROUTES.SHOPPING_LIST} className={linkClass}>
          <ShoppingBasket size={20} /> <span>買い物リスト</span>
        </NavLink>

        <NavLink to={ROUTES.LOGIN} className={linkClass}>
          <UserRoundKey size={20} /> <span>ログイン</span>
        </NavLink>

      </nav>
    </aside >
  )
}
