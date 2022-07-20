import React from "react";

const PaginationArticle = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="flex ">
                {pageNumber.map(number => (
                    <li key={number} className="cursor-pointer bg-slate-500 rounded-full mx-1 px-2 text-white active:bg-brown mb-4">
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PaginationArticle