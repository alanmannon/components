import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Warning?</h1>
        Are You SURE you want this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeDate="Today at 4:45PM"
          comment="I didn't say anything"
          avatarURL={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Frank"
          timeDate="Today at 4:35PM"
          comment="I said something too"
          avatarURL={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jam"
          timeDate="Yesterday at 4:34PM"
          comment="I said something"
          avatarURL={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))



