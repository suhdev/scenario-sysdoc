import * as React from 'react';
/**
 * Properties for the {SubFooter} component
 * Using interfaces helps with static-typing. 
 * @export
 * @interface SubFooterProps
 */
export interface SubFooterProps {

}

/**
 * A stateless component representing the sub-footer section of the website.  
 * 
 * @export
 * @class SubFooter
 * @extends {React.Component<SubFooterProps, any>}
 */
export class SubFooter extends React.Component<SubFooterProps,any>{
    /**
     * Creates an instance of SubFooter.
     * 
     * @param {SubFooterProps} props (description)
     */
    constructor(props:SubFooterProps){
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

    render(){
        return (
            <div className="container" id="sub-footer">
                    <div className="row">
                        <div className="span4">
                            <div className="copyright">© Sysdoc Ltd. 1986 - 2016. All Rights Reserved.<br /><a href="/accessibility">accessibility</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/privacy-policy">privacy policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/legal-information">legal information</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/site-map">sitemap</a></div></div><div className="span8"><div className="awards-partners"><img title="Microsoft Certified Gold Partner" alt="Microsoft Certified Gold Partner" src="http://www.sysdocgroup.com/addons/default/themes/sysdoc/img/logos/gold-partner-ms-logo.png" /> <a className="share-square share-square-linkedin" href="http://linkedin.com/company/sysdoc" title="Sysdoc on LinkedIn" rel="external"></a> <a className="share-square share-square-vimeo" href="http://vimeo.com/sysdoc/videos" title="Sysdoc on Vimeo" rel="external"></a> <a className="share-square share-square-twitter" href="http://twitter.com/sysdocgroup" title="Sysdoc on Twitter" rel="external"></a> <a className="share-square share-square-facebook" href="http://facebook.com/sysdocgroup" title="Sysdoc on Facebook" rel="external"></a><div className="clearfix"></div></div></div></div></div>
        );
    }
}