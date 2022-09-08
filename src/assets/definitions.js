export const COLORS = {
    backgroundOverlay: '#393748',
    backgroundColor: '#ffffff',
    buttonColor: "#5ECE7B",
    textColor: '#1D1F22',
    backgroundOverLayLight: '#393748AA',
    hoverBackground: '#EEE'
}

export const pagePadding = '2.5rem'

export const findCurrency = (prices, currency) => {
    const currencyLabel = currency.label
    const price = prices.find(_price => _price.currency.label === currencyLabel)
    return price
}

export const countAvailableItems = (product) => {
    let availableItemsCount = 0;
    product.attributes.forEach(attribute => {
        availableItemsCount += attribute.items.length
    })
    return availableItemsCount
}

export const computeQtyAndAmt = (cart, currency) => {
    let totalCartQty = 0;
    let totalCartAmount = 0;
    cart.forEach(item => {
        totalCartQty += item.qty
        const requiredPrice = findCurrency(item.product.prices, currency)
        totalCartAmount += item.qty * requiredPrice.amount
    })
    return { qty: totalCartQty, amt: totalCartAmount }
}

export const API_ENDPOINT = "http://localhost:4000"