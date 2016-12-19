const freezer = new Freezer({
    categories: [
        {id: '0', title: 'Blues'},
        {id: '1', title: 'Classic Rock'},
        {id: '2', title: 'Country'},
        {id: '3', title: 'Dance'},
        {id: '4', title: 'Disco'},
        {id: '5', title: 'Funk'},
        {id: '6', title: 'Grunge'},
        {id: '7', title: 'Hip-Hop'},
        {id: '8', title: 'Jazz'},
        {id: '9', title: 'Metal'},
        {id: '10', title: 'New Age'},
        {id: '11', title: 'Oldies'},
        {id: '12', title: 'Other'},
        {id: '13', title: 'Pop'},
        {id: '14', title: 'R&B'},
        {id: '15', title: 'Rap'},
        {id: '16', title: 'Reggae'},
        {id: '17', title: 'Rock'},
        {id: '18', title: 'Techno'},
        {id: '19', title: 'Industrial'},
        {id: '20', title: 'Alternative'},
        {id: '21', title: 'Ska'},
        {id: '22', title: 'Death Metal'},
        {id: '23', title: 'Pranks'},
        {id: '24', title: 'Soundtrack'},
        {id: '25', title: 'Euro-Techno'},
        {id: '26', title: 'Ambient'},
        {id: '27', title: 'Trip-Hop'},
        {id: '28', title: 'Vocal'},
        {id: '29', title: 'Jazz+Funk'},
        {id: '30', title: 'Fusion'},
        {id: '31', title: 'Trance'},
        {id: '32', title: 'Classical'},
        {id: '33', title: 'Instrumental'},
        {id: '34', title: 'Acid'},
        {id: '35', title: 'House'},
        {id: '36', title: 'Game'},
        {id: '37', title: 'Sound Clip'},
        {id: '38', title: 'Gospel'},
        {id: '39', title: 'Noise'},
        {id: '40', title: 'Alternative Rock'},
        {id: '41', title: 'Bass'},
        {id: '42', title: 'Soul'},
        {id: '43', title: 'Punk'},
        {id: '44', title: 'Space'},
        {id: '45', title: 'Meditative'},
        {id: '46', title: 'Instrumental Pop'},
        {id: '47', title: 'Instrumental Rock'},
        {id: '48', title: 'Ethnic'},
        {id: '49', title: 'Gothic'},
        {id: '50', title: 'Darkwave'},
        {id: '51', title: 'Techno-Industrial'},
        {id: '52', title: 'Electronic'},
        {id: '53', title: 'Pop-Folk'},
        {id: '54', title: 'Eurodance'},
        {id: '55', title: 'Dream'},
        {id: '56', title: 'Southern Rock'},
        {id: '57', title: 'Comedy'},
        {id: '58', title: 'Cult'},
        {id: '59', title: 'Gangsta'},
        {id: '60', title: 'Top 40'},
        {id: '61', title: 'Christian Rap'},
        {id: '62', title: 'Pop/Funk'},
        {id: '63', title: 'Jungle'},
        {id: '64', title: 'Native US'},
        {id: '65', title: 'Cabaret'},
        {id: '66', title: 'New Wave'},
        {id: '67', title: 'Psychadelic'},
        {id: '68', title: 'Rave'},
        {id: '69', title: 'Showtunes'},
        {id: '70', title: 'Trailer'},
        {id: '71', title: 'Lo-Fi'},
        {id: '72', title: 'Tribal'},
        {id: '73', title: 'Acid Punk'},
        {id: '74', title: 'Acid Jazz'},
        {id: '75', title: 'Polka'},
        {id: '76', title: 'Retro'},
        {id: '77', title: 'Musical'},
        {id: '78', title: 'Rock & Roll'},
        {id: '79', title: 'Hard Rock'},
        {id: '80', title: 'Folk'},
        {id: '81', title: 'Folk-Rock'},
        {id: '82', title: 'National Folk'},
        {id: '83', title: 'Swing'},
        {id: '84', title: 'Fast Fusion'},
        {id: '85', title: 'Bebob'},
        {id: '86', title: 'Latin'},
        {id: '87', title: 'Revival'},
        {id: '88', title: 'Celtic'},
        {id: '89', title: 'Bluegrass'},
        {id: '90', title: 'Avantgarde'},
        {id: '91', title: 'Gothic Rock'},
        {id: '92', title: 'Progressive Rock'},
        {id: '93', title: 'Psychedelic Rock'},
        {id: '94', title: 'Symphonic Rock'},
        {id: '95', title: 'Slow Rock'},
        {id: '96', title: 'Big Band'},
        {id: '97', title: 'Chorus'},
        {id: '98', title: 'Easy Listening'},
        {id: '99', title: 'Acoustic'},
        {id: '100', title: 'Humour'},
        {id: '101', title: 'Speech'},
        {id: '102', title: 'Chanson'},
        {id: '103', title: 'Opera'},
        {id: '104', title: 'Chamber Music'},
        {id: '105', title: 'Sonata'},
        {id: '106', title: 'Symphony'},
        {id: '107', title: 'Booty Bass'},
        {id: '108', title: 'Primus'},
        {id: '109', title: 'Porn Groove'},
        {id: '110', title: 'Satire'},
        {id: '111', title: 'Slow Jam'},
        {id: '112', title: 'Club'},
        {id: '113', title: 'Tango'},
        {id: '114', title: 'Samba'},
        {id: '115', title: 'Folklore'},
        {id: '116', title: 'Ballad'},
        {id: '117', title: 'Power Ballad'},
        {id: '118', title: 'Rhytmic Soul'},
        {id: '119', title: 'Freestyle'},
        {id: '120', title: 'Duet'},
        {id: '121', title: 'Punk Rock'},
        {id: '122', title: 'Drum Solo'},
        {id: '123', title: 'Acapella'},
        {id: '124', title: 'Euro-House'},
        {id: '125', title: 'Dance Hall'},
        {id: '126', title: 'Goa'},
        {id: '127', title: 'Drum & Bass'},
        {id: '128', title: 'Club-House'},
        {id: '129', title: 'Hardcore'},
        {id: '130', title: 'Terror'},
        {id: '131', title: 'Indie'},
        {id: '132', title: 'BritPop'},
        {id: '133', title: 'Negerpunk'},
        {id: '134', title: 'Polsk Punk'},
        {id: '135', title: 'Beat'},
        {id: '136', title: 'Christian Gangsta'},
        {id: '137', title: 'Heavy Metal'},
        {id: '138', title: 'Black Metal'},
        {id: '139', title: 'Crossover'},
        {id: '140', title: 'Contemporary C'},
        {id: '141', title: 'Christian Rock'},
        {id: '142', title: 'Merengue'},
        {id: '143', title: 'Salsa'},
        {id: '144', title: 'Thrash Metal'},
        {id: '145', title: 'Anime'},
        {id: '146', title: 'JPop'},
        {id: '147', title: 'SynthPop'}
    ],
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
    }, {
        id: 'oDCEkCydT34',
        categories: ['4']
    }, {
        id: '4NhKWZpkw1Q',
        categories: ['4']
    }],
    selectedCategories: ['1', '4']
});

//const appElement = document.getElementById('example');
//Modal.setAppElement(appElement);

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
        //let src = `${video.snippet.thumbnails.default.url}?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Gv-oyTIgA39e7UG01pZ2RiGbwSo`;
        //let src = `http://img.youtube.com/vi/${this.props.id}/mqdefault.jpg`
        let src = video.snippet.thumbnails.default.url;
        return (
            <img src={src} />
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
        selectedCategories: freezer.get().selectedCategories
    }

    updateVideoCategory(id) {
        this.setState({selectedCategory: id});
    }

    componentDidMount() {
        freezer.on('category:selected', this.updateVideoCategory.bind(this));
    }

    render() {
        /*let videos = freezer.get().videos.filter(video => {
            return video.categories.includes(this.state.selectedCategory);
        });*/
        let model = freezer.get();
        let videos = this.props.videos.filter(video => {
            let {categories} = video;
            let selected = model.selectedCategories.filter(id => categories.includes(id));
            return selected.length;
        });
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

class Categories2 extends React.Component {

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

class Categories extends React.Component {

    static defaultProps = {
        categories: []
    }

    selectCategory(id) {
        console.log(id)
        var model = freezer.get();
        model.selectedCategories.append(id);
        freezer.trigger('category:selected', id);
        this.forceUpdate();
    }

    renderCategories(categories) {
        var model = freezer.get();
        return categories.map((category, idx) => {
            let videos = model.videos.filter(video => {
                return video.categories.includes(category.id);
            });
            let active = model.selectedCategories.includes(category.id);
            let style = ['tag dark', (active ? 'active':'')].join(' ');
            return (
                <li>
                    <a href="#" className={style} key={category.id} id={category.id} onClick={(event) => this.selectCategory(category.id, event)}>
                        {category.title}
                    </a>
                </li>
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
            <ul className="tags">
                {this.renderCategories(categories)}
            </ul>
        );
    }
}

class SelectedCategories extends React.Component {
    static defaultProps = {
        model: freezer.get()
    }

    componentDidMount() {
        freezer.on('category:selected', (currentState, prevState) => {
            console.log(currentState)
            this.forceUpdate();
        });
    }

    renderSelectedCategories(selected) {
        let categories = this.props.model.categories.filter(category => {
            return selected.includes(category.id);
        });
        console.log(selected, categories)
        return categories.map((category, idx) => {
            return (
                <li>
                    <a href="#" className="tag active" key={category.id} id={category.id} onClick={(event) => this.selectCategory(category.id, event)}>
                        {category.title}
                    </a>
                </li>
            );
        });
    }

    render() {
        let {selectedCategories} = freezer.get();
        console.log('SelectedCategories Render')
        return (
            <ul className="tags">
                {this.renderSelectedCategories(selectedCategories)}
            </ul>
        );
    }
}

class Modal extends React.Component {
    componentDidMount() {
        let element = ReactDOM.findDOMNode(this);
        $(element).modal({backdrop: "static", keyboard: true, show: false});
    }

    componentWillUnmount() {
        let element = ReactDOM.findDOMNode(this);
        $(element).off("hidden", this.handleHidden);
    }

    open() {
        let element = ReactDOM.findDOMNode(this);
        $(element).modal("show");
    }

    close() {
        let element = ReactDOM.findDOMNode(this);
        $(element).modal("hide");
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

class MyModal extends React.Component {
    render() {
        let modal = (
            <Modal title="Add Schedule Entry">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input id="title" className="form-control" type="text" placeholder="Title" ref="title" name="title" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline" className="col-sm-2 control-label">Deadline</label>
                        <div className="col-sm-10">
                            <input id="deadline" className="form-control" type="datetime-local" ref="deadline" name="deadline" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="completed" className="col-sm-2 control-label">Completed</label>
                        <div className="col-sm-10">
                            <input id="completed" className="form-control" type="checkbox" placeholder="completed" ref="completed" name="completed" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea id="description" className="form-control" placeholder="Description" ref="description" name="description" />
                        </div>
                    </div>
                </form>
            </Modal>
        );

        return (
            <div className="scheduleentry-modal">
                <Modal><h1>HelloM</h1></Modal>
            </div>
        );
    }
};

ReactDOM.render(
    <Videos />,
    document.getElementById('example')
);

ReactDOM.render(
    <Categories />,
    document.getElementById('categories')
);

ReactDOM.render(
    <MyModal />,
    document.getElementById('modal')
);

ReactDOM.render(
    <SelectedCategories />,
    document.getElementById('selected-categories')
);