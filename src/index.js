import React from "react";
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Bob" timeAgo="Today at 12:00" content="Some content"
                               imageSrc={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" timeAgo="Yesterday at 12:00" content="Some content"
                               imageSrc={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Simon" timeAgo="Yesterday at 13:00" content="Some content"
                               imageSrc={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));