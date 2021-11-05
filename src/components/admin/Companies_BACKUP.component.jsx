import { useState, useEffect } from "react";
import Pagination from "../common/pagination.component";
import CompaniesTable from "./CT.component";
import { getCompaniesInfo } from "../../services/Admin.service";
import { getCurrentUser } from "../../services/User.service";
import _ from "lodash";

function CompaniesBackup() {
    // state = {
    //     movies: getCompaniesInfo(),
    //     itemsPerPage: 6,
    //     activePage: 1,
    //     selectedGenre: "All Genres",
    //     sortColumn: { path: "title", order: "asc" },
    // };

    const [companiesInfo, setCompaniesInfo] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [activePage, setActivePage] = useState(1);
    const [searchedItem, setSearchedItem] = useState("");
    const [sortColumn, setSortColumn] = useState({
        path: "title",
        order: "asc",
    });

    function getCompanies() {
        const data = {
            admin_id: getCurrentUser().id,
        };
        const info = getCompanyInfo(data);
        Promise.all([info]).then((values) => {
            setCompaniesInfo(values[0]);
        });
    }
    useEffect(() => {
        getCompanies();
    });

    const handleSearchedItem = (item) => {
        setSearchedItem(item);
        setActivePage(1);
    };

    const filterComapnies = () => {
        const filteredCompanies = companiesInfo.filter((company) => {
            if (searchedItem === "") return company;
            // if (movie.genres.includes(selectedGenre)) return true;
            else return false;
        });
        return filteredCompanies;
    };

    const sortComapnies = (companies) => {
        const sortedComapnies = _.orderBy(
            companies,
            [sortColumn.path],
            [sortColumn.order]
        );
        return sortedComapnies;
    };

    const paginateCompanies = (companies) => {
        const startPage = (activePage - 1) * itemsPerPage;
        const paginatedCompanies = companies.slice(
            startPage,
            startPage + itemsPerPage
        );
        return paginatedCompanies;
    };

    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn);
    };

    const handleActivePage = (page) => {
        setActivePage(page);
    };

    const filteredCompanies = filterComapnies();
    const sortedComapnies = sortComapnies(filteredCompanies);
    const companies = paginateCompanies(sortedComapnies);

    return (
        <>
            <div class="container-fluid">
                <CompaniesTable
                    companies={companies}
                    onSort={handleSort}
                    sortColumn={sortColumn}
                />
                <Pagination
                    totalItemsCount={filteredCompanies.length}
                    itemsPerPage={itemsPerPage}
                    activePage={activePage}
                    onActivePage={handleActivePage}
                />
            </div>
        </>
    );
}

export default CompaniesBackup;
