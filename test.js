const container = document.getElementById('ourFirstApp');

    var data = {
        "post": {
            "id": 123,
            "content": "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
            "author": "Mark Thomas",
        },
        "comments": [{
            "id": 0,
            "author": "David",
            "content": "such. win."
        }, {
            "id": 1,
            "author": "Haley",
            "content": "Love it."
        }, {
            "id": 2,
            "author": "Peter",
            "content": "Who was Samuel Johnson?"
        }, {
            "id": 3,
            "author": "Mitchell",
            "content": "@Peter get off Letters and do your homework"
        }, {
            "id": 4,
            "author": "Peter",
            "content": "@mitchell ok :P"
        }]
    };

    var Post = React.createClass({
        propTypes: {
            author: React.PropTypes.string.isRequired,
            content: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
        },
        render: function() {
            return (
                React.createElement('div', {
                        className: 'post'
                    },
                    React.createElement('h2', {
                            className: 'postAuthor',
                            id: this.props.id
                        },
                        this.props.author,
                        React.createElement('span', {
                                className: 'postBody'
                            },
                            this.props.content
                        )
                    ),
                    this.props.children
                )
            );
        }
    });
    var Comment = React.createClass({
        propTypes: {
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            author: React.PropTypes.string.isRequired,
        },
        render: function() {
            return (
                React.createElement('div', {
                        className: 'comment'
                    },
                    React.createElement('h2', {
                            className: 'commentAuthor'
                        },
                        this.props.author + ' : ',
                        React.createElement('span', {
                                className: 'commentContent'
                            },
                            this.props.content
                        )
                    )
                )
            );
        }
    });
    var CreateComment = React.createClass({
        propTypes: {
            onCommentSubmit: React.PropTypes.func.isRequired,
            content: React.PropTypes.string,
        },
        getInitialState: function() {
            return {
                content: '',
                author: ''
            };
        },
        handleAuthorChange: function(event) {
            this.setState({
                author: event.target.value
            });
        },
        handleTextChange: function(event) {
            this.setState({
                content: event.target.value
            });
        },
        handleSubmit: function(event) {
            console.log('called on create comment');
            event.preventDefault();
            this.props.onCommentSubmit({
                author: this.state.author.trim(),
                content: this.state.content.trim()
            });
            this.setState({
                author: '',
                content: ''
            });
        },
        render: function() {
            return React.createElement('form', {
                    className: 'createComment',
                    onSubmit: this.handleSubmit
                },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Your name',
                    value: this.state.author,
                    onChange: this.handleAuthorChange
                }),
                React.createElement('input', {
                    type: 'text',
                    value: this.state.content,
                    placeholder: 'Thoughts?',
                    onChange: this.handleTextChange,
                }),
                React.createElement('input', {
                    type: 'submit',
                    value: 'Post',
                   
                })
            );
        }
    });

    class CommentBox extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                comments: this.props.comments 
            };
            this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        }

        handleCommentSubmit(comment) {
            console.log('called commentbox');
            const comments = this.state.comments;
            comment.id = Date.now();
            const newComments = comments.concat([comment]);
            this.setState({
                comments: newComments 
            });
        }

        render() {
            return React.createElement('div', {
                    className: 'commentBox'
                },
                React.createElement(Post, {
                    id: this.props.post.id,
                    content: this.props.post.content,
                    author: this.props.post.author
                }),
                this.state.comments.map(function(comment) {
                    return React.createElement(Comment, {
                        key: comment.id,
                        id: comment.id,
                        content: comment.content,
                        author: comment.author 
                    });
                }),
                React.createElement(CreateComment, {
                    onCommentSubmit: this.handleCommentSubmit
                })

            );
        }
    }

    CommentBox.propTypes = {
        post: PropTypes.object,
        comments: PropTypes.arrayOf(PropTypes.object)
    }

    ReactDOM.render(
        React.createElement(CommentBox, {
            comments: data.comments,
            post: data.post
        }),
        container
    );