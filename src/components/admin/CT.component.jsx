import React from "react";
import Table from "../../common/table/Table.component";

const CompaniesTable = ({ companies, onRating, onSort, sortColumn }) => {
    const columns = [
        {
            label: "Poster",
            path: "posterurl",
            content: (movie) => (
                <img
                    style={{
                        width: "32px",
                        height: "auto",
                    }}
                    src={movie.posterurl}
                ></img>
            ),
        },
        {
            label: "Title",
            path: "title",
            content: (movie) => movie.title,
        },
        {
            label: "IMDB Rating",
            path: "imdbRating",
            content: (movie) => (
                <i class="bi bi-star">{" " + movie.imdbRating}</i>
            ),
        },
        {
            label: "Your Rating",
            path: "yourRating",
            content: (movie) => (
                <i
                    onClick={() => onRating(movie.movieId)}
                    className={
                        movie.yourRating ? "bi bi-star-fill" : "bi bi-star"
                    }
                >
                    {movie.yourRating ? " Rated" : " "}
                </i>
            ),
        },
    ];

    return (
        <Table
            items={movies}
            columns={columns}
            onSort={onSort}
            sortColumn={sortColumn}
        />
    );
};

export default CompaniesTable;
