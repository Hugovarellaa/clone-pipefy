import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../services/stripe'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if(request.method === 'POST'){
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1J1gsKAZhJCoN0MQyHVkGvL3', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })
    }else {
        response.setHeader("allow", 'POST')
        response.status(405).end('Method not allowed')
    }
}