import * as React from 'react';
/**
 * (description)
 * 
 * @export
 * @interface FooterProps
 */
export interface FooterProps {

}

/**
 * A stateless component representing the footer of the website. 
 * 
 * @export
 * @class Footer
 * @extends {React.Component<FooterProps, any>}
 */
export class Footer extends React.Component<FooterProps,any>{
    /**
     * Creates an instance of Footer.
     * 
     * @param {FooterProps} props (description)
     */
    constructor(props:FooterProps){
        super(props); 
        this.state = {};
    }

    /**
     * Whether the component needs to be updated. 
     * 
     * @returns false always as this is a stateless component so that ReactJS's diff algorithm can short-circuit the component during updates. 
     */
    shouldComponentUpdate(){
        return false;
    }

    /**
     * (description)
     * 
     * @returns (description)
     */
    render(){
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-contact">
                            <div className="span3">
                                <h4><span className="contact">&nbsp;</span>Get in touch</h4>
                            </div>
                            <div className="span3"><address> <strong><a href="/contact-us/#europe">Europe</a></strong><br />
                                <abbr title="Telephone">T:</abbr> <span>+44 203 002 4825</span><br/><abbr title="Email">E:</abbr>
                                <a href="mailto:enquiries@sysdoc.co.uk">enquiries@sysdoc.co.uk</a></address>
                            </div>
                            <div className="span3"><address> <strong><a href="/contact-us/#asiapacific">Asia Pacific</a></strong><br/><abbr title="Telephone">T:</abbr> <span>+64 4 801 6747</span><br />
                                <abbr title="Email">E:</abbr> <a href="mailto:enquiries@sysdoc.co.nz">enquiries@sysdoc.co.nz</a> </address>
                            </div><div className="span3"><address> <strong><a href="/contact-us/#americas">The Americas</a></strong><br />
                        <abbr title="Telephone">T:</abbr> <span>+1 949 205 9991</span><br />
                        <abbr title="Email">E:</abbr> <a href="mailto:enquiries@sysdocgroup.com">enquiries@sysdocgroup.com</a> </address></div></div>
                    </div>
                </div>
            </footer>
        );
    }
}