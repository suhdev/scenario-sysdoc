import * as React from 'react'; 
export interface ListItemDef{
    label:string;
    key:string;
    userData?:any;
}

export interface ListItemProps {
    label:string;
    userData?:any;
    itemKey:string;
    onClick:Function;
}

export interface ListItemState {}

/**
 * (description)
 * 
 * @export
 * @class ListItem
 * @extends {React.Component<ListItemProps, ListItemState>}
 */
export class ListItem extends React.Component<ListItemProps,ListItemState>{
    constructor(props:ListItemProps){
        super(props);
        this.onClick = this.onClick.bind(this); 
        this.state = {}; 
    }

    onClick(e:any){
        this.props.onClick(this.props.userData,e);
    }

    shouldComponentUpdate(props:ListItemProps){
        return props.label !== this.props.label ||
            props.itemKey !== this.props.itemKey ||
            props.userData !== this.props.userData;
    }

    render(){
        return (
            <div className="of-list-item" onClick={this.onClick}>{this.props.label}</div>
        );
    }
}

export interface ListProps {
    onItemClick:Function;
    items:ListItemDef[];
}

export interface ListState {

}

/**
 * A stateless component representing a List.
 * 
 * @export
 * @class List
 * @extends {React.Component<ListProps, ListState>}
 */
export class List extends React.Component<ListProps,ListState>{
    constructor(props:ListProps){
        super(props);
        //binding functions in the constructor is mainly done to optimise performance 
        //of React components. 
        this.onClick = this.onClick.bind(this); 
        this.state = {};
    }

    onClick(userData:any,e:any){
        this.props.onItemClick(userData,e); 
    }

    shouldComponentUpdate(props:ListProps){
        return props.items !== this.props.items;
    }

    render(){
        let items = this.props.items.map((e)=>{
            return (
                <ListItem key={e.key} itemKey={e.key} label={e.label} 
                    onClick={this.onClick} userData={e.userData} />
            );
        });
        return (
            <div className="of-list">{items}</div>
        );
    }
}