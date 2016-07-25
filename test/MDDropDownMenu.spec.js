import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { shallow, mount } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';
import MDDropDownMenu from 'src/MDDropDownMenu';
import $ from 'jquery';

expect.extend(expectJSX);

describe('MDDropDownMenu', () => {
  describe('with input', () => {
    let wrapper;
    const options = ['xixi', 'haha', 'hehe'];
    before(() => {
      wrapper = shallow(
        <MDDropDownMenu
          width={50}
          height={60}
          options={options}
          defaultOption={'xixi'}
          />
      );
    });

    it('size should be input', () => {
       expect(wrapper.props().style).toEqual({width: 50});
       expect(wrapper.childAt(0).props().style).toInclude({height: 60});
    });

    it('defaultOption should be same with input', () => {
      const defaultOption = wrapper.childAt(0).childAt(0).props().children;
      expect(defaultOption).toEqual('xixi');
    });

    it('defaultOption should be initally within options', () => {
      const defaultOption = wrapper.childAt(0).childAt(0).props().children
      expect(options).toInclude(defaultOption);
    });

    it('defaultOption should be then moved out of options', ()=> {
      const optionsList = wrapper
      .find('li')
      .children()
      .forEach(node => expect(options).toExclude(node.children))
    });
  });

  describe('with onSelect func', () => {
    let wrapper;
    before(() => {
      wrapper = shallow(
        <MDDropDownMenu
          options={['xixi', 'haha']}
          defaultOption={'xixi'}
          onSelect
          />
      );
    });

  });

  describe('multiple menus', () => {
    let wrapper;
    before(() => {
      wrapper = mount(
        <div>
          <MDDropDownMenu
            options={['xixi', 'haha']}
            defaultOption={'xixi'}
          />
          <MDDropDownMenu
            options={['xixi', 'haha']}
            defaultOption={'xixi'}
          />
        </div>
      );
    });

    it('opening in one dropdownmenu should close others', () => {
      // because the styles are ignored. Don't know how to write this test
    });
  })

});
