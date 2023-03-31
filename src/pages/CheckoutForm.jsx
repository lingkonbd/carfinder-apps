import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { resalePrice, productName, _id, buyerName, buyerEmail, buyerMobile } = booking;
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');


    const [clientSecret, setClientSecret] = useState("");



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://car-showroom-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, []);


    const handleSubmit = async (event) => {
        console.log('hello payment')
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            console.log(paymentMethod);
            setCardError("");
        }


        setCardError("")
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                        name: buyerName,
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price: resalePrice,
                transactionId: paymentIntent.id,
                email: buyerEmail,
                bookingId: _id,
                product: productName
            };
            fetch("https://car-showroom-server.vercel.app/payments", {
                method: "post",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, payment)
                    if (data.insertedId) {
                        setSuccess("Congrats! your payment completed")
                        toast.success("Congrats! your payment completed")
                        setTransactionId(paymentIntent.id)
                    }
                    setProcessing(false)
                })



        }

    };


    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='primary-btn bg-[#041C51] rounded-md mt-4'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>

            </form>
            {
                cardError ?
                    <p className="text-red-500">
                        {cardError}
                    </p>

                    : ""
            }
            {
                success && <div>
                    <p className='text-green-500' >{success}</p>
                    <p>Your TransactionId: <strong>{transactionId}</strong></p>
                </div>
            }

        </>

    );
};

export default CheckoutForm;