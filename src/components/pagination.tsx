import { Link } from "react-router-dom";
import { IStory } from "../types";
import Story from "./story";
interface StoriesData {
  page: number;
  type: string;
  stories: IStory[];
}

export default function Pagination({ page, type, stories }: StoriesData) {
  {
    return (
      <div className="news-view">
        <div className="news-list-nav">
          {page > 1 ? (
            <Link to={`/${type}?page=${page - 1}`} aria-label="Previous Page">
              <span className="page-link">{"<"} prev</span>
            </Link>
          ) : (
            <span className="page-link disabled" aria-disabled="true">
              {"<"} prev
            </span>
          )}
          <span>page {page}</span>
          {stories && stories.length >= 29 ? (
            <Link to={`/${type}?page=${page + 1}`} aria-label="Next Page">
              <span className="page-link">more {">"}</span>
            </Link>
          ) : (
            <span className="page-link disabled" aria-disabled="true">
              more {">"}
            </span>
          )}
        </div>
        <main className="news-list">
          {stories && (
            <ul>
              {stories.map((story) => (
                <Story key={story.id} story={story} />
              ))}
            </ul>
          )}
        </main>
      </div>
    );
  }
}
