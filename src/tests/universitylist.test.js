import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UniversityList from  '../components/UniversityList';
import universities from './mock';

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
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}));

describe('University List Component', () => {
    afterEach(() => {
        useSelector.mockClear();
    });
    it('Mount without data', () => {
        useSelector.mockImplementation((callback) => callback({
            universities: [] 
        }));
        const wrapper = mount(
            <Provider store={ store }>
                <UniversityList universitiesList = { [] } />
            </Provider>
        );
        wrapper.unmount();
    });
    it('Mount with data', () => {
        useSelector.mockImplementation((callback) => callback({
            universities 
        }));
        const wrapper = mount(
            <Provider store={ store }>
                <UniversityList universitiesList = { universities } />
            </Provider>
        );
        act(() => {
            wrapper.find('.next-page').first().simulate('click');
        });
        wrapper.update();
        act(() => {
            wrapper.find('.previous-page').first().simulate('click');
        });
        wrapper.unmount();
    });
});