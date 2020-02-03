import React from 'react';
import UserList from './UserList';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json"

it("should render the user list", () => {
  const app = shallow(<UserList />)
  app.instance().setState({data: <li>teste</li>});
  app.instance().forceUpdate();
  // Checking output
  expect(app.find('li')).toHaveLength(1)
})