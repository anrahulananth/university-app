import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UniversityListContainer from  '../components/UniversityListContainer';
import { act } from '@testing-library/react';

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global._SERVER_ = false;

const mockReducer = jest.fn();
const store = createStore(mockReducer, {});
global.window = Object.create(window);
global.window.store = store;
global.window.store.injectReducer = jest.fn();

configure({ adapter: new Adapter()});

jest.mock('axios');

describe('University List Component', () => {
    it('Some test', () => {
        let wrapper;
        act(() => {
            axios.get.mockImplementation(() => Promise.resolve({ data: []}));
            wrapper = mount(
                <Provider store={ store }>
                    <UniversityListContainer />
                </Provider>
            );
        });
        wrapper.unmount();
    });
});