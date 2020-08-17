import React from "react";

class VideoDetail extends React.Component {

    state = null;

render() {
    return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>
    )
}