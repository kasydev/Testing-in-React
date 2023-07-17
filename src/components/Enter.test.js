
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Enter from './Enter';

// be in the axios.js which will be available to all your text.
// must simulate anything and everything. must not depend on ur server or backend server when testing.
// and cant take anything from browser API
jest.mock("axios", ()=>({

 __esModule:true,
default: {
  get:()=>({
    data:{id:1, name:'John'},
  }),
},

}));




test("username input should be rendered", () => {
  render(<Enter />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
}); 

test("password input should be rendered", () => {
  render(<Enter />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
}); 

test("button input should be rendered", () => {
  render(<Enter />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
}); 

// test("username input should be empty", () => {
//   render(<Enter />);
//   const userInputEl = screen.getByPlaceholderText(/username/i);
//   expect(userInputEl.value).toBe("");
// }); 

// test("password input should be empty", () => {
//   render(<Enter />);
//   const passwordInputEl = screen.getByPlaceholderText(/username/i);
//   expect(passwordInputEl.value).toBe("");
// }); 
 

test("button should be disabled", () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
}); 

test("loading should not be rendered", () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
}); 



test("error message should not be visible", () => {
  render(<Enter />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});  


test("username input should change", () => {
  render(<Enter />);
  const usernameInput = screen.getByPlaceholderText(/username/i);
    const testValue = "test";

  fireEvent.change(usernameInput, {target: {value: testValue}});
  expect(usernameInput.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Enter />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } }); 
  expect(passwordInputEl.value).toBe(testValue);
});  


test("button should not be disabled when inputs exist", () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  
  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } }); 

  expect(buttonEl).not.toBeDisabled();
}); 


test("loading should be rendered when click", () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
}); 


test("loading should not be rendered after fetching", async () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
}); 


test("user should be rendered after fetching", async () => {
  render(<Enter />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("John");

 expect(userItem).toHaveTextContent("John");
 
 // expect(userItem).toBeInTheDocument();
}); 


