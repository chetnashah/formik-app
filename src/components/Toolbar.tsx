/* eslint-disable no-console */

import * as React from 'react';
import { Component } from 'react';
import { TeamContext } from '../App';

type ToolbarProps = {
    team?: any;
}

/// we can have team here from context
const Toolbar = () => {
    return (
        <div>
            <TeamedButton />
        </div>
    )
}

type TeamedButtonProps = {
    team?: any;
}

// we can have team here from context
class TeamedButton extends Component<TeamedButtonProps, any> {
    static contextType = TeamContext;
    render(){
        console.log('TeamedButton, this.context = ', this.context);
        return <Button team={this.context} />;
    }
}
TeamedButton.contextType = TeamContext;

class Button extends Component<TeamedButtonProps, any> {
    render(){
        return (<button>
            {JSON.stringify(this.props.team)}
        </button>);
    }
}

export default Toolbar;