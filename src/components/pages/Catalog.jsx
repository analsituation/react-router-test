import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";

const Catalog = () => {

    const params = useParams()

    useEffect(() => {
        console.log(params)
    }, [params])

    const showItems = (category) => {
        if (params.category === category) {
            return 'goods_active'
        }
        return 'goods'
    }

    return (

        <>
            <div className="navigation_bar">
                <div className="categories">
                    <div className='category'>
                        <NavLink className="category_link" to={'category1'}>Category 1</NavLink>
                        <div className={showItems('category1')}>
                            <NavLink to={'category1/item1'}>item 1</NavLink>
                            <NavLink to={'category1/item2'}>item 2</NavLink>
                            <NavLink to={'category1/item3'}>item 3</NavLink>
                            <NavLink to={'category1/item4'}>item 4</NavLink>
                        </div>
                    </div>
                    <div className='category'>
                        <NavLink className="category_link" to={'category2'}>Category 2</NavLink>
                        <div className={showItems('category2')}>
                            <NavLink to={'category2/item1'}>item 1</NavLink>
                            <NavLink to={'category2/item2'}>item 2</NavLink>
                            <NavLink to={'category2/item3'}>item 3</NavLink>
                            <NavLink to={'category2/item4'}>item 4</NavLink>
                            <NavLink to={'category2/item5'}>item 5</NavLink>
                        </div>
                    </div>
                    <div className='category'>
                        <NavLink className="category_link" to={'category3'}>Category 3</NavLink>
                        <div className={showItems('category3')}>
                            <NavLink to={'category3/item1'}>item 1</NavLink>
                            <NavLink to={'category3/item2'}>item 2</NavLink>
                            <NavLink to={'category3/item3'}>item 3</NavLink>
                            <NavLink to={'category3/item4'}>item 4</NavLink>
                        </div>
                    </div>
                    <div className='category'>
                        <NavLink className="category_link" to={'category4'}>Category 4</NavLink>
                        <div className={showItems('category4')}>
                            <NavLink to={'category4/item1'}>item 1</NavLink>
                            <NavLink to={'category4/item2'}>item 2</NavLink>
                            <NavLink to={'category4/item3'}>item 3</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="goods_section">
                {
                    Object.keys(params).length
                    ?   <div className="breadcrumbs">
                            <span>{params.category ? <NavLink className="breadcrumbs_links" to={params.category}>{params.category}</NavLink> : ''}</span>
                            <span>{params.item ? ` / ${params.item}` : ''}</span>
                        </div>
                    : ''
                }
                <div className="goods_place">
                    <p className="message_p">Item cards are settled here</p>
                    {params.category && <p className="message_p">You are now at {params.category}</p>}
                    {params.item && <p className="message_p">and looking at {params.item}</p>}

                </div>
            </div>
        </>
    );
};

export default Catalog;