
import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const CalculateTotalComponent = ({ calculateTotal, handlePurchase }) => {
    const [totalPrice, setTotalPrice] = useState('');

    const handleCalculate = () => {
        calculateTotal(3, 10, setTotalPrice);
    };

    return (
        <div>
            <button onClick={handleCalculate}>Calculate Total</button>
            <span data-testid="total-price">{totalPrice}</span>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};
const calculateTotalPrice = (quantity, price, setTotalPrice) => {
    const total = quantity * price;
    setTotalPrice(total.toFixed(2));
};