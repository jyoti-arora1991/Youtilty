import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import GoogleLoginButton from './GoogleLoginButton';
import ChannelListDropdown from './ChannelListDropdown';
const Router = () => (
  <div>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/channel-list" component={ChannelListDropdown} />
  </div>
);

export default Router;