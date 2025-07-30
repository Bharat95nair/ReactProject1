import {render,screen,waitFor } from '@testing-library/react';
import HttpDemo4 from '../components/http/HttpDemo4';
import axios from 'axios';

jest.mock('axios'); 

const MockPostList = [
    {
        id:1,
        userName:'Bharat1233456789',
        name:'Bharat',
        email:'bhatunair@gmail.com',
    }
]

afterEach(()=>{
    jest.clearAllMocks();
});

describe('Test Suite for HttpDemo4 List component',()=>{
    it('lets verify axios data fetch  Functionality', async ()=>{
        axios.get.mockResolvedValue({ data: MockPostList });

        render(<HttpDemo4/>);
        
        //wait for users to be dispalyed
        await waitFor(()=>{
            expect(screen.getByText('Bharat')).toBeInTheDocument();
        })
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    })
})