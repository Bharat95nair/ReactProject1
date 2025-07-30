import {render,screen,waitFor } from '@testing-library/react';
import HttpDemo2 from '../components/http/HttpDemo2';


const MockUserList = [
    {
        id:1,
        userName:'Bharat1233456789',
        name:'Bharat',
        email:'bhatunair@gmail.com',
        phone:9876543210,
        address:{city:'bangalore'}

    }
]
// Mock fetch()

beforeEach(() => {
  global.fetch = jest.fn(() =>{
        return Promise.resolve({
            json:() => Promise.resolve(MockUserList)
        })
    });
});


afterEach(()=>{
    jest.clearAllMocks();
});

describe('Test Suite for Http Demo 2 component',()=>{
    it('lets verify FetchUser Functionality', async ()=>{
        
        render(<HttpDemo2/>);
        
        //wait for users to be dispalyed
        await waitFor(()=>{
            expect(screen.getByText('Bharat')).toBeInTheDocument();
        })
        expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    })
})