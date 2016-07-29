import React, { PropTypes, Component } from 'react';
import styles from './MDDropDownMenu.css';

import $ from 'jquery';
import uuid from 'node-uuid';

class MDDropDownMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultOption: this.props.defaultOption,
      id: uuid.v4(),
    };
  }

  componentDidMount() {
    /* eslint-disable */
    const localSelected = styles.selected;
    const localOptions = styles.options;
    const mdDropDownMenu = this;
    const onSelect = this.props.onSelect;

    const dropdown = $(`#${this.state.id}`);
    dropdown.find(`.${localSelected}`).click(function() {
      dropdown.find(`.${localOptions} ul`).toggle();
    });

    dropdown.find('li').click(function() {
      const selectedOption = $(this).html();
      mdDropDownMenu.setState({ defaultOption: selectedOption });
      onSelect(selectedOption);
      dropdown.find(`.${localOptions} ul`).hide();
    });

    $(document).bind('click', (e) => {
      const parents = $(e.target).parents();
      const target = $(`#${mdDropDownMenu.state.id}`)[0];
      let parentsHasId = false;
      Array.from(parents).forEach(parent => {
        if (parent === target) {
          parentsHasId = true;
        }
      })
      if (!parentsHasId) {
        $(`#${mdDropDownMenu.state.id} ul`).hide();
      }
    });
    /* eslint-enable */
  }

  render() {
    const { options, width, height } = this.props;
    const { defaultOption, id } = this.state;
    const widthStyle = { width };
    const heightStyle = { height, lineHeight: `${height}px` };
    const optionsWithoutDefault = options.filter((option) => option !== defaultOption);
    return (
      <div id={id} className={styles.dropdown} style={widthStyle}>
        <div className={styles.selected} style={heightStyle}>
          <div>{defaultOption}</div>
          <span><i className="fa fa-chevron-down"></i></span>
        </div>
        <div className={styles.options}>
          <ul style={widthStyle}>
            {
              optionsWithoutDefault.map((option, i) => (
                <li key={i} style={heightStyle}>{option}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

}

MDDropDownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

MDDropDownMenu.defaultProps = {
  width: 300,
  height: 40,
};

export default MDDropDownMenu;
