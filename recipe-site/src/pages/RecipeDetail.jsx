import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Flame, Heart, Lightbulb } from 'lucide-react';
import { MOCK_RECIPES } from '../data/recipes.js'

export default function RecipeDetail({ favorites, toggleFavorite }) {
    const { id } = useParams();
    const recipe = MOCK_RECIPES.find(r => r.id === Number(id));

    // 現在のレシピがお気に入りかどうか
    const isFavorite = favorites.includes(recipe.id);

    if (!recipe) {
        return <p className="p-10 text-center">レシピが見つかりませんでした。</p>;
    }

    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <Link to="/" className="flex items-center gap-2 text-orange-500 mb-6 hover:underline">
                <ArrowLeft size={20} />
                <span>トップに戻る</span>
            </Link>

            {/* 画像・タイトル */}
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-10'>
                {/* 画像 */}
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-96">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* タイトル・情報 */}
                <div className='flex flex-col items-center justify-center w-full'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        {recipe.title}
                    </h1>

                    <div className='flex gap-2 mb-6 w-full'>
                        <div className="flex flex-col items-center text-gray-500 bg-gray-50 rounded-xl p-4 w-full">
                            <Clock size={20} className="text-orange-500" />
                            <span className="font-medium">調理時間</span>
                            <span className='font-bold'>{recipe.time}</span>
                        </div>

                        <div className="flex flex-col items-center text-gray-500 bg-gray-50 rounded-xl p-4 w-full">
                            <Flame size={20} className="text-orange-500" />
                            <span className="font-medium">カロリー</span>
                            <span className='font-bold'>{recipe.calorie}</span>
                        </div>
                    </div>

                    {/* お気に入りボタン */}
                    <button
                        onClick={() => toggleFavorite(recipe.id)}
                        className={`flex flex-row items-center justify-center gap-2 py-3 rounded-xl w-full transition-colors
                            ${isFavorite
                                ? 'bg-pink-400 hover:bg-pink-500'
                                : 'bg-orange-400 hover:bg-orange-500'
                            }`}
                    >
                        <Heart
                            size={20}
                            className={isFavorite ? 'fill-white text-white' : 'text-white'}
                        />
                        <span className='text-white'>
                            {isFavorite ? 'お気に入り済み' : 'お気に入りに追加'}
                        </span>
                    </button>
                </div>
            </section>

            {/* 材料・作り方 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">
                {/* 材料 */}
                <section className='bg-gray-50 rounded-xl p-4 h-fit'>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">材料（2人分）</h2>
                    <ul className='flex flex-col gap-1'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className='flex justify-between py-2 border-b border-gray-300'>
                                <span>{ingredient.name}</span>
                                <span>{ingredient.amount}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 作り方・コツ */}
                <section>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">作り方</h2>
                    <ol className='mb-5'>
                        {recipe.steps.map((value) => (
                            <li key={value.step} className='flex flex-row items-center gap-4 mb-10'>
                                <span className='flex items-center justify-center w-8 h-8 rounded-full bg-orange-400 text-white font-bold shrink-0'>
                                    {value.step}
                                </span>

                                <p className=''>
                                    {value.description}
                                </p>
                            </li>
                        ))}
                    </ol>

                    {/* コツ */}
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-300">
                        <h3 className="flex flex-row gap-1 mb-2 text-orange-400 ">
                            <Lightbulb size={20} className='text-orange-400' />
                            美味しく作るコツ
                        </h3>

                        <p className="text-gray-600 leading-relaxed ">
                            {recipe.tip}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}