import React from 'react';
// shallow allows to render a component one level deep: 
// child components are not rendered, but are returned as defined
import Enzyme, { shallow } from 'enzyme';
import LoginScreen from '../LoginScreen';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const initialState = {
    email : '', 
    password : ''
}

beforeEach(() =>{
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    // wrapper = shallow(<LoginScreen {...initialState}/>, store).find(Connect(LoginScreen)).dive();
    console.log("store: " + store);
    wrapper = shallow(<LoginScreen store={store}/>).dive();
    console.log("wrapper: " + wrapper);
});

//Shallow renders our target component
describe('Login - Shallow Render Login Components', ()=>{

    it("snapshot whole view", () =>{
             expect(toJson(wrapper)).toMatchSnapshot();
        // const component = wrapper.setProps({email:})
    })
    // const wrapper = shallow(<LoginScreen />)
    
    // const mockStore = configureStore()
    // let store, container

    // beforeEach(() =>{
    //     store = mockStore(initialState)
    //     container = shallow(<LoginScreen store={store}/>).dive();
    // })

    
    // it('render the connected(SMART) component', ()=>{
    //     const wrapper = shallow(<LoginScreen />, {context : { store: mockStore(initialState)}});
    //     expect(wrapper).dive().toMatchSnapshot();
    // })

    // it(' contains email', () =>{
    //     expect(wrapper.getProps({email}.toMatchSnapshot()))
    // });

})