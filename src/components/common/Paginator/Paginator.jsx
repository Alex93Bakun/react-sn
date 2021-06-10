import React from "react";
import s from "./Paginator.module.scss";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let z = 1;
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={z++}
            className={currentPage === p ? s.selectedPage : ""}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {z < 20 ? `${p} ` : " "}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
