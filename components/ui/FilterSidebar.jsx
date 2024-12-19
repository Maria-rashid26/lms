import React, { useState } from 'react';

const FilterSidebar = () => {
    const [categoryOpen, setCategoryOpen] = useState(true);
    const [instructorOpen, setInstructorOpen] = useState(true);
    const [priceOpen, setPriceOpen] = useState(true);
    const [levelOpen, setLevelOpen] = useState(true);
    const [ratingOpen, setRatingOpen] = useState(true);

    const toggleSection = (section) => {
        switch (section) {
            case 'category':
                setCategoryOpen(!categoryOpen);
                break;
            case 'instructor':
                setInstructorOpen(!instructorOpen);
                break;
            case 'price':
                setPriceOpen(!priceOpen);
                break;
            case 'level':
                setLevelOpen(!levelOpen);
                break;
            case 'rating':
                setRatingOpen(!ratingOpen);
                break;
            default:
                break;
        }
    };

   
    return (
        <div className="p-4 space-y-6">
           

            {/* Category Filter */}
            <div className="rounded-lg dark:bg-gray-900  bg-white p-4 shadow-sm">
                <h2 
                    className="text-lg font-semibold mb-3 cursor-pointer"
                    onClick={() => toggleSection('category')}
                >
                    Filter by Category
                </h2>
                {categoryOpen && (
                    <ul className="space-y-2">
                        <li><input type="checkbox" id="category1" /> <label htmlFor="category1">Digital Marketing (9)</label></li>
                        <li><input type="checkbox" id="category2" /> <label htmlFor="category2">Development (10)</label></li>
                        <li><input type="checkbox" id="category3" /> <label htmlFor="category3">Artificial Intelligence (10)</label></li>
                        <li><input type="checkbox" id="category4" /> <label htmlFor="category4">Art & Design (10)</label></li>
                        <li><input type="checkbox" id="category5" /> <label htmlFor="category5">Finance (10)</label></li>
                        <li><input type="checkbox" id="category6" /> <label htmlFor="category6">Health & Lifestyle (10)</label></li>
                        <li><input type="checkbox" id="category7" /> <label htmlFor="category7">Data Science (10)</label></li>
                        <li><input type="checkbox" id="category8" /> <label htmlFor="category8">Fashion (10)</label></li>
                        <li><input type="checkbox" id="category9" /> <label htmlFor="category9">Music (10)</label></li>
                    </ul>
                )}
            </div>

            {/* Instructor Filter */}
            <div className="rounded-lg dark:bg-gray-900   bg-white p-4 shadow-sm">
                <h2 
                    className="text-lg font-semibold mb-3 cursor-pointer"
                    onClick={() => toggleSection('instructor')}
                >
                    Instructors
                </h2>
                {instructorOpen && (
                    <ul className="space-y-2">
                        <li><input type="checkbox" id="instructor1" /> <label htmlFor="instructor1">John Doe (9)</label></li>
                        <li><input type="checkbox" id="instructor2" /> <label htmlFor="instructor2">Jane Smith (10)</label></li>
                        <li><input type="checkbox" id="instructor3" /> <label htmlFor="instructor3">Mike Ross (10)</label></li>
                    </ul>
                )}
            </div>

            {/* Price Type Filter */}
            <div className="rounded-lg dark:bg-gray-900  bg-white p-4 shadow-sm">
                <h2 
                    className="text-lg font-semibold mb-3 cursor-pointer"
                    onClick={() => toggleSection('price')}
                >
                    Price Type
                </h2>
                {priceOpen && (
                    <ul className="space-y-2">
                        <li><input type="checkbox" id="price1" /> <label htmlFor="price1">All (100)</label></li>
                        <li><input type="checkbox" id="price2" /> <label htmlFor="price2">Free (50)</label></li>
                        <li><input type="checkbox" id="price3" /> <label htmlFor="price3">Premium (50)</label></li>
                    </ul>
                )}
            </div>

            {/* Difficulty Level Filter */}
            <div className="rounded-lg dark:bg-gray-900  bg-white p-4 shadow-sm">
                <h2 
                    className="text-lg font-semibold mb-3 cursor-pointer"
                    onClick={() => toggleSection('level')}
                >
                    Difficulty Levels
                </h2>
                {levelOpen && (
                    <ul className="space-y-2">
                        <li><input type="checkbox" id="level1" /> <label htmlFor="level1">All Levels (100)</label></li>
                        <li><input type="checkbox" id="level2" /> <label htmlFor="level2">Beginner (37)</label></li>
                        <li><input type="checkbox" id="level3" /> <label htmlFor="level3">Intermediate (17)</label></li>
                        <li><input type="checkbox" id="level4" /> <label htmlFor="level4">Expert (2)</label></li>
                    </ul>
                )}
            </div>

            {/* Ratings Filter */}
            <div className="rounded-lg dark:bg-gray-900  bg-white p-4 shadow-sm">
                <h2 
                    className="text-lg font-semibold mb-3 cursor-pointer"
                    onClick={() => toggleSection('rating')}
                >
                    Ratings
                </h2>
                {ratingOpen && (
                    <ul className="space-y-2">
                        <li>
                            <input type="checkbox" id="rating5" />
                            <label htmlFor="rating5" className="ml-2">
                                <span className="text-yellow-500">★★★★★</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="rating4" />
                            <label htmlFor="rating4" className="ml-2">
                                <span className="text-yellow-500">★★★★</span><span className="text-gray-300">★</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="rating3" />
                            <label htmlFor="rating3" className="ml-2">
                                <span className="text-yellow-500">★★★</span><span className="text-gray-300">★★</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="rating2" />
                            <label htmlFor="rating2" className="ml-2">
                                <span className="text-yellow-500">★★</span><span className="text-gray-300">★★★</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="rating1" />
                            <label htmlFor="rating1" className="ml-2">
                                <span className="text-yellow-500">★</span><span className="text-gray-300">★★★★</span>
                            </label>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FilterSidebar;
