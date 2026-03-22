import { Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_RECIPES } from '../data/recipes.js'

export default function TopPage() {
    const [searchQuery, setSearchQuery] = useState(''); // 入力中の文字を保存

    // 検索文字が含まれるレシピだけを抽出
    const filteredRecipes = MOCK_RECIPES.filter(recipe =>
        recipe.title.includes(searchQuery)
    );

    return (
        <div className="w-full ">
            {/* キャッチコピー・検索バー */}
            <section className="py-12 px-4rounded-3xl mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    今日、何作る？
                </h2>

                {/* 検索バー */}
                <div className="relative max-w-xl mb-5 mx-auto">
                    {/* 虫眼鏡アイコン */}
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                    {/* 入力欄 */}
                    <input
                        type="text"
                        placeholder="料理名で検索..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 pr-24 border rounded-full focus:outline-orange-500 shadow-sm"
                    />

                    {/* 検索ボタン */}
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-orange-400 text-white px-5 py-1.5 rounded-full text-sm font-bold hover:bg-orange-600 transition">
                        検索
                    </button>
                </div>

                {/* 注目キーワードタグ */}
                <div className="flex flex-wrap gap-2 justify-center items-center text-sm text-gray-600">
                    <span>注目のキーワード:</span>
                    {['お肉料理', '大根', 'お弁当', 'スイーツ', '洋食'].map((tag) => (
                        <button key={tag} onClick={() => setSearchQuery(tag)} className="px-3 py-1 bg-white border border-gray-200 rounded-full hover:bg-orange-100 hover:border-orange-300 transition-colors">
                            #{tag}
                        </button>
                    ))}
                </div>
            </section>

            {/* レシピ一覧 */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    レシピ一覧
                </h2>

                {/* レシピカード */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map(recipe => (
                            <Link
                                to={`/recipe/${recipe.id}`}
                                key={recipe.id}
                                className="h-full"
                            >
                                <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">

                                    {/* 画像コンテナ */}
                                    <div className="relative h-48 overflow-hidden shrink-0">
                                        <img
                                            src={recipe.image}
                                            alt={recipe.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* テキスト */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                                            {recipe.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-auto">
                                            <button className="text-orange-500 font-bold text-sm hover:underline">
                                                レシピを見る
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 py-20">
                            お探しのレシピは見つかりませんでした。
                        </p>
                    )}
                </div>
            </section>
        </div>
    )
}
