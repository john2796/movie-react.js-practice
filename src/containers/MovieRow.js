import React from "react";

const MovieRow = ({ movie }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <img src={movie.poster_src} width="120" alt="poster" />
        </td>
        <td>
          {MovieRow.title}
          <p>{MovieRow.overview}</p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default MovieRow;
