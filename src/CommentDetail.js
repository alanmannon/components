import React from "react";
// import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatarURL} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metaData">
            <span className="date">{props.timeDate}</span>
          </div>
          <div className="text">{props.comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;