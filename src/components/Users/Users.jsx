import React from "react";

import Paginator from "../common/Paginator/Paginator";

import s from "./users.module.scss";
import User from "./User";

const Users = ({
  currentPage,
  pageSize,
  totalUsersCount,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <div className={s.pageNumbers}>
        <Paginator
          currentPage={currentPage}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          onPageChanged={onPageChanged}
        />
      </div>
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
