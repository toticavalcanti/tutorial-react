import React from 'react';
class ShoppingList extends React.Component {
  render() {
    return (
      React.createElement("div", {
        className: "shopping-list"
      }, 
      /*#__PURE__*/React.createElement("h1", null, "Shopping List for ", this.props.name), 
      /*#__PURE__*/React.createElement("ul", null, 
      /*#__PURE__*/React.createElement("li", null, "Instagram"), 
      /*#__PURE__*/React.createElement("li", null, "WhatsApp"), 
      /*#__PURE__*/React.createElement("li", null, "Oculus"))
      ));
  }
}
export default ShoppingList;