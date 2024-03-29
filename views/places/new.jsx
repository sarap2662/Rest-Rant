const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor='name'>Place Name</label>
                        <input
                            className="form-control"
                            id='name'
                            name='name' required />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            value={new Date().getFullYear()} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            className="form-control"
                            type="url"
                            id='pic'
                            name='pic' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='city'>City</label>
                        <input
                            className="form-control"
                            id='city'
                            name='city' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='state'>State</label>
                        <input
                            className="form-control"
                            id='state'
                            name='state' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input
                            className="form-control"
                            id='cuisines'
                            name='cuisines' required />
                    </div>
            
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
                <form method="POST" action="places/:id">
                    <div className="author">
                        <label htmlFor="author">Author</label>
                        <input
                            className="form-control"
                            type="text"
                            id='author'
                            name='author' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input
                            className="form-control"
                            type="textarea"
                            id='content'
                            name='content'
                            rows='3'
                            cols='30' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input
                            className="form-control"
                            type="number"
                            id='rating'
                            name='rating'
                            step={0.5}
                            min='0'
                            max='5' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input
                            type="checkbox" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form