"use client";

import { useMemo, useState } from "react";
import type { Author, Locale, Post } from "../site-types";

export type ArchiveLabels = {
  all: string;
  category: string;
  type: string;
  author: string;
  sort: string;
  newest: string;
  oldest: string;
  title: string;
  noEntries: string;
  preview: string;
  read: string;
  authors: string;
  categories: string;
  tags: string;
  logType: string;
  logStatus: string;
};

function localePath(locale: Locale, path: string): string {
  return locale === "en" ? path : "/" + locale + path;
}

export function LogArchive({
  posts,
  authors,
  locale,
  labels,
}: {
  posts: Post[];
  authors: Author[];
  locale: Locale;
  labels: ArchiveLabels;
}) {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [author, setAuthor] = useState("");
  const [sort, setSort] = useState("newest");
  const authorNames = Object.fromEntries(authors.map((item) => [item.slug, item.name]));

  const categories = useMemo(
    () => [...new Set(posts.flatMap((post) => post.categories))].sort(),
    [posts],
  );
  const types = useMemo(
    () => [...new Set(posts.map((post) => post.type))].sort(),
    [posts],
  );

  const visible = useMemo(() => {
    const next = posts.filter(
      (post) =>
        (!category || post.categories.includes(category)) &&
        (!type || post.type === type) &&
        (!author || post.authors.includes(author)),
    );

    return next.sort((left, right) => {
      if (sort === "oldest") return left.date.localeCompare(right.date);
      if (sort === "title") return left.title.localeCompare(right.title, locale);
      return right.date.localeCompare(left.date);
    });
  }, [author, category, locale, posts, sort, type]);

  return (
    <>
      <form className="zg-log-controls" onSubmit={(event) => event.preventDefault()}>
        <div className="zg-log-controls__grid">
          <label className="zg-log-controls__field">
            <span>{labels.category}</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">{labels.all}</option>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="zg-log-controls__field">
            <span>{labels.type}</span>
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="">{labels.all}</option>
              {types.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="zg-log-controls__field">
            <span>{labels.author}</span>
            <select value={author} onChange={(event) => setAuthor(event.target.value)}>
              <option value="">{labels.all}</option>
              {authors.map((item) => (
                <option value={item.slug} key={item.slug}>{item.name}</option>
              ))}
            </select>
          </label>
          <label className="zg-log-controls__field">
            <span>{labels.sort}</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="newest">{labels.newest}</option>
              <option value="oldest">{labels.oldest}</option>
              <option value="title">{labels.title}</option>
            </select>
          </label>
        </div>
      </form>
      {visible.length ? (
        <ul className="zg-log-list" data-reveal-group>
          {visible.map((post) => (
            <li className="zg-log-card" data-reveal-card key={post.slug}>
              <header className="zg-log-card__header">
                <h2 className="zg-log-card__title">
                  <a href={localePath(locale, "/blog/" + post.slug + "/")}>{post.title}</a>
                </h2>
                <p className="zg-log-card__date">{post.date}</p>
              </header>
              <p className="zg-log-card__description">{post.description}</p>
              <div className="zg-log-card__meta">
                <p className="zg-log-card__meta-row">
                  <span className="zg-log-card__meta-label">{labels.authors}:</span>{" "}
                  {post.authors.map((slug) => authorNames[slug] ?? slug).join(", ")}
                </p>
                <p className="zg-log-card__meta-row">
                  <span className="zg-log-card__meta-label">{labels.categories}:</span>{" "}
                  {post.categories.join(", ")}
                </p>
                <p className="zg-log-card__meta-row">
                  <span className="zg-log-card__meta-label">{labels.tags}:</span>{" "}
                  {post.tags.join(", ")}
                </p>
                <p className="zg-log-card__meta-row">
                  <span className="zg-log-card__meta-label">{labels.logType}:</span>{" "}
                  {post.type}
                </p>
                <p className="zg-log-card__meta-row">
                  <span className="zg-log-card__meta-label">{labels.logStatus}:</span>{" "}
                  {post.status}
                </p>
              </div>
              <div className="zg-log-card__actions">
                <button
                  aria-controls="zg-modal-root"
                  aria-haspopup="dialog"
                  data-modal-open="post"
                  data-post-title={post.title}
                  data-post-url={localePath(locale, "/blog/" + post.slug + "/")}
                  type="button"
                >
                  [ {labels.preview} ]
                </button>
                <a href={localePath(locale, "/blog/" + post.slug + "/")}>
                  [ {labels.read} ]
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="zg-empty">{labels.noEntries}</p>
      )}
    </>
  );
}
