import React from "react";
import Def from "../default";

interface IComment {
  id: string;
  rant: boolean;
  content: string;
  author: string;
  stars: number;
}

interface IShowProps {
  place: {
    id: string;
    name: string;
    pic: string;
    city: string;
    state: string;
    cuisines: string;
    founded: number;
    comments: IComment[];
    showEstablished: () => string;
  };
}

const Show: React.FC<IShowProps> = ({ place }) => {
  let comments = <h3 className="inactive">No comments yet</h3>;
  let rating = <h3 className="inactive">Not yet Rated</h3>;

  if (place.comments.length) {
    const sumRatings = place.comments.reduce((tot, c) => tot + c.stars, 0);
    const averageRating = Math.round(sumRatings / place.comments.length);
    const stars = "⭐️".repeat(averageRating);
    rating = <h3>{stars} stars</h3>;
    comments = place.comments.map((c) => (
      <div className="border col-sm-4" key={c.id}>
        <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
        <h4>{c.content}</h4>
        <h3>
          <strong>- {c.author}</strong>
        </h3>
        <h4>Rating: {c.stars}</h4>
        <form
          method="POST"
          action={`/places/${place.id}/comment/${c.id}?_method=DELETE`}
        >
          <input
            type="submit"
            className="btn btn-danger"
            value="Delete Comment"
          />
        </form>
      </div>
    ));
  }

  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{place.name}</h1>
            <h2>Rating</h2>
            {rating}
            <br />
            <h3>
              Located in {place.city}, {place.state}
            </h3>
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>
            <h4>Serving {place.cuisines}</h4>
            <h2>Comments</h2>
            {comments}
          </div>
        </div>
        <a href={`/places/${place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <form action={`/places/${place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="range"
                step="0.5"
                min="1"
                max="5"
                id="stars"
                name="stars"
                className="form-control"
              />
            </div>
            <div className="form-group col-sm-2">
              <label htmlFor="rant">Rant?</label>
              <input type="checkbox" id="rant" name="rant" />
            </div>
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
};

export default Show;
