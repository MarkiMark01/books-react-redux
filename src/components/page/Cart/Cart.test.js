import React from "react";
import { render, screen } from "@testing-library/react";

const CartTotal = ({ cart }) => {
    const totalSum = cart
        .reduce((sum, item) => sum + parseFloat(item.totalPrice), 0)
        .toFixed(2);

    return <div>Total: ${totalSum}</div>;
};