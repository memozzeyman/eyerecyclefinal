import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {this.props.result['category']}</div>
                </div>
                <div className="row center-div probs-outer">
                    <div className="col-12 center-div probs-title">
                        Probabilities for each class:
                    </div>
                    <div className="col-12 center-div probs">
                        Cardboard: {this.props.result['probs']['cardboard']}
                    </div>
                    <div className="col-12 center-div probs">
                        Glass: {this.props.result['probs']['glass']}
                    </div>
                    <div className="col-12 center-div probs">
                        Metal: {this.props.result['probs']['metal']}
                    </div>
                    <div className="col-12 center-div probs">
                        Paper: {this.props.result['probs']['paper']}
                    </div>
                    <div className="col-12 center-div probs">
                        Plastic: {this.props.result['probs']['plastic']}
                    </div>
                    <div className="col-12 center-div probs">
                        Trash: {this.props.result['probs']['trash']}
                    </div>
                </div>
            </div >
        );
    }
}

export default ResultPage;
