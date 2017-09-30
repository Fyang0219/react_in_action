const container = document.getElementById('ourFirstApp');

const data = {
    post: {
        id: 123,
        content:
            'What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson',
        user: 'Mark Thomas'
    },
    comments: [
        {
            id: 0,
            user: 'David',
            content: 'such. win.'
        },
        {
            id: 1,
            user: 'Haley',
            content: 'Love it.'
        },
        {
            id: 2,
            user: 'Peter',
            content: 'Who was Samuel Johnson?'
        },
        {
            id: 3,
            user: 'Mitchell',
            content: '@Peter get off Letters and do your homework'
        },
        {
            id: 4,
            user: 'Peter',
            content: '@mitchell ok :P'
        }
    ]
};
class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h2 className="postAuthor">{this.props.user}</h2>
                <span className="postBody">{this.props.content}</span>
                {this.props.children}
            </div>
        );
    }
}
Post.propTypes = {
    user: PropTypes.string.isRequired, //#A
    content: PropTypes.string.isRequired, //#A
    id: PropTypes.number.isRequired //#A
};

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.user + ' : '}
                </h2>
             <span className="commentContent">
                        {this.props.content}
                    </span>
            </div>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};

class CreateComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '', //#A
            user: '' //#A
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
        this.setState({
            user: event.target.value //#B
        });
    }
    handleTextChange(event) {
        this.setState({
            content: event.target.value //#C
        });
    }
    handleSubmit(event) {
        event.preventDefault(); //#D
        this.props.onCommentSubmit({
            user: this.state.user.trim(), //#D
            content: this.state.content.trim() //#D
        });
        this.setState({
            user: '', //#E
            content: '' //#E
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="createComment">
                <input
                    value={this.state.user}
                    onChange={this.handleUserChange}
                    placeholder="Your name"
                    type="text"
                />
                <input
                    value={this.state.content}
                    onChange={this.handleTextChange}
                    placeholder="Thoughts?"
                    type="text"
                />
                <button type="submit">Post</button>
            </form>
        );
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments //#A
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
        const comments = this.state.comments; //#B
        // note that we didn't directly modify state
        comment.id = Date.now(); //#B
        const newComments = comments.concat([comment]); //#B
        this.setState({
            comments: newComments //#B
        });
    }
    render() {
        return (
            <div className="commentBox">
                <Post
                    id={this.props.post.id}
                    content={this.props.post.content}
                    user={this.props.post.user}
                />
                {this.state.comments.map(function(comment) {
                    return (
                        <Comment
                            key={comment.id}
                            content={comment.content}
                            user={comment.user}
                        />
                    );
                })}
                <CreateComment onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}

CommentBox.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
};

ReactDOM.render(
    <CommentBox
        comments={data.comments} //#D
        post={data.post}
    />,
    container
);
