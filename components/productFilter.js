import React from 'react';

export default function ProductFilter({ categories, selectedCategory, changeSelectedCategory, clearSelectedCategory }) {
    return (
        <form className="flex flex-row flex-wrap">
            {categories.map((category, index) =>
                <button
                    value={category.id}
                    onClick={changeSelectedCategory}
                    className={`flex-auto text-white font-semibold px-4 py-2 mx-2 rounded ${category.id.toString() === selectedCategory ? `bg-red-500` : `bg-blue-500 hover:bg-blue-700`}`}
                >
                    {category.name}
                </button>
            )}
            {
                !!selectedCategory &&
                <button
                    onClick={clearSelectedCategory}
                    className="flex-auto bg-gray-100 hover:bg-gray-400 text-black font-semibold px-4 py-2 mx-2 rounded"
                >
                    Clear
                </button>
            }
        </form>
    )
}

