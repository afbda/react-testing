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

it("should render the user list using mocks", () => {
  const app = shallow(<UserList />)
  app.instance().getUsersFromApi = jest.fn();
  app.instance().getUsersFromApi.mockReturnValue([{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }])
  app.instance().forceUpdate();
  // Checking output
  expect(app.find('li')).toHaveLength(1)
})