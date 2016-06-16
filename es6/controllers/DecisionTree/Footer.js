import * as React from 'react';
/**
 * A stateless component representing the footer of the website.
 *
 * @export
 * @class Footer
 * @extends {React.Component<FooterProps, any>}
 */
export class Footer extends React.Component {
    /**
     * Creates an instance of Footer.
     *
     * @param {FooterProps} props (description)
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
        return (React.createElement("footer", {id: "footer"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "footer-contact"}, React.createElement("div", {className: "span3"}, React.createElement("h4", null, React.createElement("span", {className: "contact"}, " "), "Get in touch")), React.createElement("div", {className: "span3"}, React.createElement("address", null, " ", React.createElement("strong", null, React.createElement("a", {href: "/contact-us/#europe"}, "Europe")), React.createElement("br", null), React.createElement("abbr", {title: "Telephone"}, "T:"), " ", React.createElement("span", null, "+44 203 002 4825"), React.createElement("br", null), React.createElement("abbr", {title: "Email"}, "E:"), React.createElement("a", {href: "mailto:enquiries@sysdoc.co.uk"}, "enquiries@sysdoc.co.uk"))), React.createElement("div", {className: "span3"}, React.createElement("address", null, " ", React.createElement("strong", null, React.createElement("a", {href: "/contact-us/#asiapacific"}, "Asia Pacific")), React.createElement("br", null), React.createElement("abbr", {title: "Telephone"}, "T:"), " ", React.createElement("span", null, "+64 4 801 6747"), React.createElement("br", null), React.createElement("abbr", {title: "Email"}, "E:"), " ", React.createElement("a", {href: "mailto:enquiries@sysdoc.co.nz"}, "enquiries@sysdoc.co.nz"), " ")), React.createElement("div", {className: "span3"}, React.createElement("address", null, " ", React.createElement("strong", null, React.createElement("a", {href: "/contact-us/#americas"}, "The Americas")), React.createElement("br", null), React.createElement("abbr", {title: "Telephone"}, "T:"), " ", React.createElement("span", null, "+1 949 205 9991"), React.createElement("br", null), React.createElement("abbr", {title: "Email"}, "E:"), " ", React.createElement("a", {href: "mailto:enquiries@sysdocgroup.com"}, "enquiries@sysdocgroup.com"), " ")))))));
    }
}
