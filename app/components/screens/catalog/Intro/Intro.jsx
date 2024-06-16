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
    const [title] = useState({ en: 'Catalog', ru: 'Каталог', uz: 'Katalog' });
    const [projects] = useState([
        { id: 1, name: "inware", link: "/", img: video },
        { id: 2, name: "test", link: "/", img: video },
        { id: 3, name: "inware", link: "/", img: video },
        { id: 4, name: "test", link: "/", img: video },
        { id: 5, name: "inware", link: "/", img: video },
        { id: 6, name: "test", link: "/", img: video },
        { id: 7, name: "inware", link: "/", img: video },
        { id: 8, name: "test", link: "/", img: video },
        { id: 9, name: "inware", link: "/", img: video },
        { id: 10, name: "test", link: "/", img: video },
        { id: 11, name: "inware", link: "/", img: video },
        { id: 12, name: "test", link: "/", img: video },
        { id: 13, name: "inware", link: "/", img: video },
        { id: 14, name: "test", link: "/", img: video },
        { id: 15, name: "inware", link: "/", img: video },
        { id: 16, name: "test", link: "/", img: video },
        { id: 17, name: "inware", link: "/", img: video },
        { id: 18, name: "test", link: "/", img: video },
        { id: 19, name: "inware", link: "/", img: video },
        { id: 20, name: "test", link: "/", img: video },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 4;

    const handlePageClick = ({ selected }) => {
        const currentPage = selected + 1;
        setCurrentPage(currentPage);
    };

    const indexOfLastProject = currentPage * countriesPerPage;
    const indexOfFirstProject = indexOfLastProject - countriesPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalProjects = projects.length;

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__item}>
                    <h1 className={styles.intro__item__title}>{title[lan]}</h1>

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
