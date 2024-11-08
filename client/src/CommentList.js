
const CommentList = ({ comments }) => {

    const renderedComments = comments.map((comment) => {
        let content;

        switch (comment.status) {
            case 'approved':
                content = comment.content;
                break;
            case 'rejected':
                content = 'This comment has been rejected';
                break;
            case 'pending':
                content = 'This comment is waiting moderation';
                break;
        
            default:
                content = '';
                break;
        }

        return <li key={comment.id}>{content}</li>;
    });

    return (
        <ul>
            {renderedComments}
        </ul> 
    );
};

export default CommentList;
