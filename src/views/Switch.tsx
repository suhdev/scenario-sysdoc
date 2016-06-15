import * as React from 'react'; 

export interface SwitchItemDef{
    key:string;
    label:string;
}

export interface SwitchProps {
    states:SwitchItemDef[];
    onChange:Function;
    selState:number;
    className?:string;
}

export interface SwitchState {
    selState:number;
}

export interface SwitchItemProps{
    itemKey:string;
    index:number;
    label:string;
    onClick:Function;
}

export class SwitchItem extends React.Component<SwitchItemProps,any>{
    constructor(props:SwitchItemProps){
        super(props); 
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onClick(this.props.index,this.props.itemKey);
    }

    render(){
        let e = this.props; 
        return (
            <div className="of-switch-state" onClick={this.onClick} data-index={e.index} >{e.label}</div>
        );
    }
}

export class Switch extends React.Component<SwitchProps,SwitchState>{
    constructor(props:SwitchProps){
        super(props);
        this.state = {
            selState:props.selState
        };
    }

    componentWillReceiveProps(nextProps:SwitchProps){
        this.setState({
            selState:nextProps.selState
        });
    }

    render(){
        let items = this.props.states.map((e,i)=>{
            return (
                <SwitchItem key={e.key} itemKey={e.key} label={e.label} onClick={this.props.onChange} index={i} />
            );
        }),
            clz = this.props.className||"";
        return (
            <div className={"of-switch "+clz} data-state={this.state.selState}>
                {items}
            </div>
        );
    }
}