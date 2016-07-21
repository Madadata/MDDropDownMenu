import React, { PropTypes, Component } from 'react';
import styles from './MDDropDownMenu.css';
import $ from 'jquery';

class MDDropDownMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultOption: this.props.defaultOption,
    };
  }

  componentDidMount() {
    const localDropdown = styles.dropdown;
    const localSelected = styles.selected;
    const localOptions = styles.options;
    const mdDropDownMenu = this;
    const onSelect = this.props.onSelect;

    const dropdown = $(`.${localDropdown}`);
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
      if (!$(e.target).parents().hasClass(localDropdown)) {
        $(`.${localDropdown} ul`).hide();
      }
    });
  }

  render() {
    const { options, width, height } = this.props;
    const { defaultOption } = this.state;
    const widthStyle = { width };
    const heightStyle = { height, lineHeight: `${height}px` };
    const optionsWithoutDefault = options.filter((option) => option !== defaultOption);
    return (
      <div className={styles.dropdown} style={widthStyle}>
        <div className={styles.selected} style={heightStyle}>
          <div>{defaultOption}</div>
          <span><i className="fa fa-chevron-down"></i></span>
        </div>
        <div className={styles.options}>
          <ul style={widthStyle}>
            {
              optionsWithoutDefault.map((option, i) => <li key={i} style={heightStyle}>{option}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }

}

MDDropDownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  defaultOption: PropTypes.string,
  onSelect: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

MDDropDownMenu.defaultProps = {
  width: 300,
  height: 40,
}

export default MDDropDownMenu;
