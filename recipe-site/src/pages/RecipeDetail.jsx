import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { MOCK_RECIPES } from '../data/recipes.js'

export default function RecipeDetail() {
    // URLからIDを取得 (例: /recipe/1 なら "1")
    const { id } = useParams();

    // IDに一致するレシピをデータの中から探す
    const recipe = MOCK_RECIPES.find(r => r.id === Number(id));

    // もしレシピが見つからない場合の処理（エラー防止）
    if (!recipe) {
        return <p className="p-10 text-center">レシピが見つかりませんでした。</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* 戻るボタン */}
            <Link to="/" className="flex items-center gap-2 text-orange-500 mb-6 hover:underline">
                <ArrowLeft size={20} />
                <span>トップに戻る</span>
            </Link>

            {/* 画像表示 */}
            <div className="rounded-3xl overflow-hidden shadow-lg mb-8 h-64 md:h-96">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* タイトルと情報 */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

            <div className="flex items-center gap-2 text-gray-500 mb-8 bg-gray-50 p-3 rounded-xl w-fit">
                <Clock size={20} className="text-orange-500" />
                <span className="font-medium">調理時間: {recipe.time}</span>
            </div>

            {/* 説明や作り方のダミーテキスト */}
            <div className="border-t pt-6 text-gray-600 leading-relaxed">
                <h2 className="text-xl font-bold mb-4 text-gray-800">作り方のポイント</h2>
                <p>
                    この「{recipe.title}」は、初心者の方でも簡単に作れるレシピです。
                    新鮮な材料を使って、火加減に注意しながら調理してみてくださいね！
                </p>
            </div>
        </div>
    );
}