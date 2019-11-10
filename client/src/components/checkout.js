import React from 'react'
class Checkout extends React.Component {

    render() {

        return (<div className='checkout-cart'>
            <div className='checkout-title'>
                <h7 className='title'>Form Progress</h7>
            </div>
            <div className='checkout-cart-product mt-10'>
                <ul>
                    <li>
                        <div class="single-product d-flex justify-content-between">
                            <div class="product-name">
                                <h7 class="title">Completion</h7>
                            </div>
                            <div class="product-price">
                                <span>20%</span>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
        )
    }

}

export default Checkout;