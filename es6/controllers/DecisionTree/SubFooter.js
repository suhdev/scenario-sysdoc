import * as React from 'react';
/**
 * A stateless component representing the sub-footer section of the website.
 *
 * @export
 * @class SubFooter
 * @extends {React.Component<SubFooterProps, any>}
 */
export class SubFooter extends React.Component {
    /**
     * Creates an instance of SubFooter.
     *
     * @param {SubFooterProps} props (description)
     */
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * Whether the component needs to be updated.
     *
     * @returns false always as this is a stateless component so that ReactJS's diff algorithm can short-circuit the component during updates.
     */
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (React.createElement("div", {className: "container", id: "sub-footer"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "span4"}, React.createElement("div", {className: "copyright"}, "© Sysdoc Ltd. 1986 - 2016. All Rights Reserved.", React.createElement("br", null), React.createElement("a", {href: "/accessibility"}, "accessibility"), "  |  ", React.createElement("a", {href: "/privacy-policy"}, "privacy policy"), "  |  ", React.createElement("a", {href: "/legal-information"}, "legal information"), "  |  ", React.createElement("a", {href: "/site-map"}, "sitemap"))), React.createElement("div", {className: "span8"}, React.createElement("div", {className: "awards-partners"}, React.createElement("img", {title: "Microsoft Certified Gold Partner", alt: "Microsoft Certified Gold Partner", src: "http://www.sysdocgroup.com/addons/default/themes/sysdoc/img/logos/gold-partner-ms-logo.png"}), " ", React.createElement("a", {className: "share-square share-square-linkedin", href: "http://linkedin.com/company/sysdoc", title: "Sysdoc on LinkedIn", rel: "external"}), " ", React.createElement("a", {className: "share-square share-square-vimeo", href: "http://vimeo.com/sysdoc/videos", title: "Sysdoc on Vimeo", rel: "external"}), " ", React.createElement("a", {className: "share-square share-square-twitter", href: "http://twitter.com/sysdocgroup", title: "Sysdoc on Twitter", rel: "external"}), " ", React.createElement("a", {className: "share-square share-square-facebook", href: "http://facebook.com/sysdocgroup", title: "Sysdoc on Facebook", rel: "external"}), React.createElement("div", {className: "clearfix"}))))));
    }
}
