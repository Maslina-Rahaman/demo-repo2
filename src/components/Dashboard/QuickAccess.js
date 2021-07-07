import React from "react";

const QuickAccess = () => {
    return (
        <div className="ui segment">
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">Or</div>
                <div className="middle aligned row">
                    <div className="column">
                        <div className="ui icon header">
                            <i className="google drive icon"></i>
                            Google Drive
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui icon header">
                            <i className="google icon"></i>
                            Gmail
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QuickAccess;
