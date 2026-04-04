import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { MOCK_RECIPES } from '../data/recipes.js';

export default function Favorite({ favorites }) {
    // お気に入りIDに一致するレシピを取得
    const favoriteRecipes = MOCK_RECIPES.filter(recipe =>
        favorites.includes(recipe.id)
    );

    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <Link to="/" className="flex items-center gap-2 text-orange-500 mb-6 hover:underline">
                <ArrowLeft size={20} />
                <span>トップに戻る</span>
            </Link>

            {/* タイトル */}
            <div className="flex items-center gap-2 mb-8">
                <Heart size={24} className="text-pink-400" />
                <h1 className="text-2xl font-bold text-gray-800">お気に入り</h1>
            </div>

            {/* レシピ一覧 */}
            {favoriteRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteRecipes.map(recipe => (
                        <Link
                            to={`/recipe/${recipe.id}`}
                            key={recipe.id}
                            className="h-full"
                        >
                            <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                                {/* 画像 */}
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
                                        <span className="text-orange-500 font-bold text-sm">
                                            レシピを見る
                                        </span>
                                        <Heart size={16} className="fill-pink-400 text-pink-400" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <Heart size={48} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-400">
                        お気に入りのレシピはまだありません。
                    </p>
                </div>
            )}
        </div>
    );
}