import React from 'react'
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/loginScreen';
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/profileScreen'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/paymentScreen'
import PlaceOrderScreen from './screen/placeOrderScreen'
import OrderScreen from './screen/OrderScreen'
import UserListScreen from './screen/UserListScreen'
import UserEditScreen from './screen/UserEditScreen';

function App() {
  return (
    <>
      <Router>

        <Header />
        <main className="py-3">
          <Container>
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/login" component={LoginScreen } />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />

            <Route path="/" component={HomeScreen} exact />

          </Container>

        </main>
        <Footer />

      </Router>
    </>
  );
}
export default App;


