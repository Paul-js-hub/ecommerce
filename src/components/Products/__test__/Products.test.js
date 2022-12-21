import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import Products from '../Products'

test('should return all products', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Products />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})