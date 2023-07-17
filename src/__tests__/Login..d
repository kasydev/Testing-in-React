import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

test("renders list 3 items", ()=>{

    render(<Login />)
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toEqual(3);


}); 

test("renders h1", () => {
  render(<Login />);
  const testTitle = screen.getByTestId("mytestid");
  expect(testTitle).toBeInTheDocument();
});  

test("renders span", () => { 
  render(<Login />);
  const sumOutput = screen.getByTitle("sum");
  expect(sumOutput.textContent).toEqual("6");
}); 