import React from "react";

const Notification = ({ notification, type }) => {
  if (notification == null) {
    return null;
  } else {
    return (
      <div className={type}>
        <p>{notification}</p>
      </div>
    );
  }
};

export default Notification;
