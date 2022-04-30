import React, {useState, useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';

const KEY = "pk_test_51KtHx4CiKqiorkX99nYKbsynib7WtOjZWtqkUDW8meGBiGDqpaeVA1hgeJ5w4o6CQu2WGwCiqDVnIuT8H2biyyC100Qy9cqsLl"

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 20000
        });
        console.log(res.data)
        navigate.push("/success")
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest()
  }, [stripeToken, navigate]);

  return (
    <div
      style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <StripeCheckout 
        name="Cll Mobile"
        billingAddress
        shippingAddress
        description="your total is 200 sek"
        amount={20000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: "600",
            cursor: 'pointer'
          }}
          >
          Pay Now
        </button>
      </StripeCheckout>
     

    </div>
  )
}

export default Pay