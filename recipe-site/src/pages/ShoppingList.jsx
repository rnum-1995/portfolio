import { useState } from 'react';
import { Plus, Trash2, ShoppingBag, ShoppingBasket } from 'lucide-react';

export default function ShoppingList() {
    // リストの状態（配列）を管理
    const [items, setItems] = useState([
        { id: 1, text: 'にんじん' },
        { id: 2, text: 'たまねぎ' }
    ]);

    // 入力フォームの文字を管理
    const [inputValue, setInputValue] = useState('');

    // 追加ボタンを押した時の処理
    const addItem = () => {
        if (inputValue.trim() === '') return; // 空文字なら追加しない

        const newItem = {
            id: Date.now(), // 簡易的なユニークIDとして現在の時間を使用
            text: inputValue
        };

        setItems([...items, newItem]); // 今のリストに新しいアイテムを合体
        setInputValue(''); // 入力欄を空にする
    };

    // 削除ボタンを押した時の処理
    const deleteItem = (id) => {
        // クリックされたID以外のアイテムだけを残す（＝削除）
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-100 mt-5">
            <div className="flex items-center gap-2 mb-6 text-orange-500">
                <ShoppingBasket size={24} />
                <h2 className="text-2xl font-bold text-gray-800">買い物リスト</h2>
            </div>

            {/* 入力エリア */}
            <div className="flex gap-2 mb-8">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="買うものを入力..."
                    className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                    onClick={addItem}
                    className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition shadow-md"
                >
                    <Plus size={24} />
                </button>
            </div>

            {/* リスト表示エリア */}
            <ul className="space-y-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-orange-50 transition"
                        >
                            <span className="text-gray-700 font-medium">{item.text}</span>
                            <button
                                onClick={() => deleteItem(item.id)}
                                className="text-gray-400 hover:text-red-500 transition p-1"
                            >
                                <Trash2 size={20} />
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-4">リストは空っぽです。</p>
                )}
            </ul>
        </div>
    );
}
