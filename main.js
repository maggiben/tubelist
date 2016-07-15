const freezer = new Freezer({
    categories: [{
        id: '1',
        title: 'Music'
    }, {
        id: '2',
        title: 'Science'
    }, {
        id: '3',
        title: 'Arts'
    }, {
        id: '4',
        title: 'Movies'
    }],
    videos: [{
        id: 'KlyXNRrsk4A',
        categories: ['1', '2']
    }, {
        id: '12CeaxLiMgE',
        categories: ['1']
    }, {
        id: 'fwK7ggA3-bU',
        categories: ['2']
    }, {
        id: 'QtXby3twMmI',
        categories: ['2', '3']
    }, {
        id: 'yzTuBuRdAyA',
        categories: ['3']
    }, {
        id: 'foE1mO2yM04',
        categories: ['4']
    }],
    selectedCategory: '1'
});

class Youtube {
    /*this.getVideo = $.ajax('https://content.googleapis.com/youtube/v3/search', {
        dataType: 'jsonp',
        data: {
            q: search_query,
            type: 'video',
            part: 'id, snippet',
            maxResults: 8,
            fields: 'items(id(videoId),snippet(thumbnails,title))',
            key: apiKey
        }
    });*/
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    load() {
        if(this.client) {
            return Promise.resolve(this.client);
        } else {
            return new Promise((resolve, reject) => {
                gapi.load('client', () => {
                    gapi.client.setApiKey(this.apiKey);
                    gapi.client.load('youtube', 'v3')
                    .then(
                        response => {
                            this.client = gapi.client;
                            return resolve(this.client);
                        }, 
                        reason => {
                            return reject(reason);
                        }
                    );
                });
            });
        }
    }
    getVideo(id) {
        let part = 'id,snippet,contentDetails,player,recordingDetails,statistics,status,topicDetails';
        return this.load().then(() => {
            return this.client.youtube.videos.list({
                id: id,
                part: part
            })
            .then(response => response.result);
        });
    }
}


class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        id: null
    }

    static get propTypes() {
        return {
            id: React.PropTypes.sting
        };
    }

    state = {
        video: null
    }

    componentDidMount() {
        this.youtube = new Youtube('AIzaSyB64sBmL-y8utR_BSHZEaM9KKRYchuEV80');
        return this.loadVideo();
    }

    loadVideo() {
        return this.youtube.getVideo(this.props.id).then(video => {
            return this.setState({
                video: video.items[0]
            });
        });
    }

    renderImage(video) {
        if (!video || !video.snippet || !video.snippet.thumbnails) return;
        return (
            <img src={video.snippet.thumbnails.default.url} />
        );
    }

    render() {
        let {video} = this.state;
        return (
            <div className="col-sm-3 video">
                <a src={"https://www.youtube.com/" + this.props.id}>
                    {this.renderImage(video)}
                </a>
                <pre className="hidden">
                    {JSON.stringify(video, null, 2)}
                </pre>
            </div>
        );
    }
};

class Videos extends React.Component {
    static defaultProps = {
        videos: freezer.get().videos
    }

    state = {
        selectedCategory: freezer.get().selectedCategory
    }

    updateVideoCategory(id) {
        this.setState({selectedCategory: id});
    }

    componentDidMount() {
        freezer.on('category:selected', this.updateVideoCategory.bind(this));
    }

    render() {
        let videos = freezer.get().videos.filter(video => {
            return video.categories.includes(this.state.selectedCategory);
        });
        console.log(videos);
        let videoNodes = videos.map((video, idx) => {
            return (<Video key={video.id} id={video.id} />)
        });
        return (
            <div className="row videos">
                {videoNodes}
            </div>
        );
    }
}

class Categories extends React.Component {

    static defaultProps = {
        categories: []
    }

    selectCategory(id) {
        console.log(id)
        var model = freezer.get();
        freezer.trigger('category:selected', id);
        model.set('selectedCategory', id);
        this.forceUpdate();
    }

    renderCategories(categories) {
        var model = freezer.get();
        return categories.map((category, idx) => {
            let videos = model.videos.filter(video => {
                return video.categories.includes(category.id);
            });
            let active = (category.id === model.selectedCategory);
            let style = ['list-group-item', (active ? 'active':'')].join(' ');
            return (
                <a href="#" className={style} key={category.id} id={category.id} onClick={(event) => this.selectCategory(category.id, event)}>
                    <span className="badge">{videos.length}</span>
                    {category.title}
                </a>
            );
        });
    }

    componentDidMount() {
        freezer.on('update', (currentState, prevState) => {
            this.forceUpdate();
        });
    }

    render() {
        let {categories} = freezer.get();
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Categories:</div>
                <div className="list-group">
                    {this.renderCategories(categories)}
                </div>
            </div>
        );
    }
}


class Modal extends React.Component {
    componentDidMount() {
        $(this.getDOMNode())
            .modal({backdrop: "static", keyboard: true, show: false});
    }

    componentWillUnmount() {
        $(this.getDOMNode())
            .off("hidden", this.handleHidden);
    }

    open() {
        $(this.getDOMNode()).modal("show");
    }

    close() {
        $(this.getDOMNode()).modal("hide");
    }
    
    render() {
        return (
            <div id="scheduleentry-modal" className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">Delete</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Videos />,
    document.getElementById('example')
);

ReactDOM.render(
    <Categories />,
    document.getElementById('categories')
);

