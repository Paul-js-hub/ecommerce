// import { render, waitFor, fireEvent, screen } from '@testing-library/react';
// import Product from "../Product"
// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
// import store from '../../../redux/store';

// const productId = {
//   id: 1
// };

// // title: 't-shirt',
// //   description: 'awesome',
// //   price: 45,
// //   quantity: 2,
// //   image:'https://flagcdn.com/w320/ke.png'



// // test('it returns a product data', () => {
// //   const tree = renderer
// //     .create(
// //       <Provider store={store}>
// //         <Router>
// //           <Product
// //             id="1"
// //             title="t-shirt"
// //             description="Good shirt"
// //             price="12"
// //             quantity="1"
// //           />
// //         </Router>
// //       </Provider>,
// //     )
// //     .toJSON();
// //   expect(tree).toMatchSnapshot();
// // });

// test('it displays a list of users', async () => {
//     render(<Product />);
 
 
//     const product = await waitFor(() => screen.getByTestId('product'));
//     expect(product).toBeInTheDocument();
// })
