import React, { useContext, useState } from 'react';
import Image from 'next/image';
import styles from './Intro.module.scss';
import video from '../../../../../public/img/slayd2.png';
import Item from '../Item/Item';
import ReactPaginate from 'react-paginate';
import { Context } from '../../../ui/Context/Context';
import MyContainer from '../../../ui/MyContainer/MyContainer';

const Intro = () => {
    const { lan } = useContext(Context);
    const [title] = useState({ en: 'Sort', ru: 'Сортировка', uz: 'Tartiblash' });
    const [projects] = useState([
        { id: 1, name: "Столы и стулья", link: "/catalog-detail", img: video, price: 100 },
        { id: 2, name: "Стеллажи", link: "/catalog-detail", img: video, price: 150 },
        { id: 3, name: "Мягкая мебель", link: "/catalog-detail", img: video, price: 200 },
        { id: 4, name: "Журнальные столики", link: "/catalog-detail", img: video, price: 120 },
        { id: 5, name: "Столы и стулья", link: "/catalog-detail", img: video, price: 180 },
        { id: 6, name: "Стеллажи", link: "/catalog-detail", img: video, price: 250 },
        { id: 7, name: "Мягкая мебель", link: "/catalog-detail", img: video, price: 170 },
        { id: 8, name: "Журнальные столики", link: "/catalog-detail", img: video, price: 220 },
        { id: 9, name: "Столы и стулья", link: "/catalog-detail", img: video, price: 300 },
        { id: 10, name: "Стеллажи", link: "/catalog-detail", img: video, price: 280 },
        { id: 11, name: "Мягкая мебель", link: "/catalog-detail", img: video, price: 240 },
        { id: 12, name: "Журнальные столики", link: "/catalog-detail", img: video, price: 260 },
        { id: 13, name: "Столы и стулья", link: "/catalog-detail", img: video, price: 350 },
        { id: 14, name: "Стеллажи", link: "/catalog-detail", img: video, price: 320 },
        { id: 15, name: "Мягкая мебель", link: "/catalog-detail", img: video, price: 380 },
        { id: 16, name: "Журнальные столики", link: "/catalog-detail", img: video, price: 400 },
        { id: 17, name: "Столы и стулья", link: "/catalog-detail", img: video, price: 420 },
        { id: 18, name: "Стеллажи", link: "/catalog-detail", img: video, price: 390 },
        { id: 19, name: "Мягкая мебель", link: "/catalog-detail", img: video, price: 360 },
        { id: 20, name: "Журнальные столики", link: "/catalog-detail", img: video, price: 430 },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [priceFilter, setPriceFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('Столы и стулья');
    const [barTitle] = useState([
        { id: 1, type: 'Столы и стулья', nav_en: 'Tables & Chairs', nav_ru: 'Столы и стулья', nav_uz: 'Stollar va o\'rindoshlar' },
        { id: 2, type: 'Стеллажи', nav_en: 'Shelves', nav_ru: 'Стеллажи', nav_uz: 'Etajerlar' },
        { id: 3, type: 'Мягкая мебель', nav_en: 'Upholstered Furniture', nav_ru: 'Мягкая мебель', nav_uz: 'Miyok mebel' },
        { id: 4, type: 'Журнальные столики', nav_en: 'Coffee Tables', nav_ru: 'Журнальные столики', nav_uz: 'Kofe stollar' }
    ]);

    const handleTypeFilterChange = (type) => {
        setTypeFilter(type);
        setCurrentPage(1);
    };

    const countriesPerPage = 4;

    const handlePageClick = ({ selected }) => {
        const currentPage = selected + 1;
        setCurrentPage(currentPage);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
        setCurrentPage(1);
    };


    const filteredProjectsByPrice = priceFilter === 'all' ? projects : projects.filter(project => {
        return project.price <= parseInt(priceFilter);
    });

    const filteredProjectsByType = typeFilter === 'all' ? filteredProjectsByPrice : filteredProjectsByPrice.filter(project =>
        project.name === typeFilter
    );

    const indexOfLastProject = currentPage * countriesPerPage;
    const indexOfFirstProject = indexOfLastProject - countriesPerPage;
    const currentProjects = filteredProjectsByType.slice(indexOfFirstProject, indexOfLastProject);

    const totalProjects = filteredProjectsByType.length;

    const currentType = barTitle.find(item => item.type === typeFilter);

    return (
        <section className={styles.intro}>

            <ul className={styles.typeFilter}>
                {barTitle.map(item => (
                    <li
                        key={item.id}
                        className={typeFilter === item.type ? styles.act : null}
                        onClick={() => handleTypeFilterChange(item.type)}
                    >
                        {item[`nav_${lan}`]}
                    </li>
                ))}
            </ul>

            <MyContainer>
                <div className={styles.intro__item}>

                    <h1 className={styles.intro__item__title}>{currentType[`nav_${lan}`]}</h1>

                    <div className={styles.filterSelect}>
                        <p>{title[lan]}</p>
                        <select
                            value={priceFilter}
                            onChange={handlePriceFilterChange}
                        >
                            <option value="all">Все цены</option>
                            <option value="100">До 100</option>
                            <option value="200">До 200</option>
                            <option value="300">До 300</option>
                            <option value="400">До 400</option>
                        </select>
                    </div>

                    <Item data={currentProjects} />

                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(totalProjects / countriesPerPage)}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={styles.pagination}
                        pageClassName={styles.el}
                        pageLinkClassName={styles.el}
                        previousClassName={styles.btn}
                        previousLinkClassName={styles.el}
                        nextClassName={styles.btn}
                        nextLinkClassName={styles.el}
                        breakClassName={styles.el}
                        breakLinkClassName={styles.el}
                        activeClassName={styles.act}
                    />
                </div>
            </MyContainer>
        </section>
    );
};

export default Intro;
