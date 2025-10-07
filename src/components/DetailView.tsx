import React from "react";
import { useParams, Link } from "react-router-dom";

const DetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detail View</h1>
      <p>Showing details for item {id}</p>
      <div>
        <Link to={`/details/${Number(id) - 1}`}>Previous</Link> |{" "}
        <Link to={`/details/${Number(id) + 1}`}>Next</Link>
      </div>
    </div>
  );
};

export default DetailView;
