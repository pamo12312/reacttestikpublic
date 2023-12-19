import React from 'react';


const Offer = ({ name, price, shopUrl, delivery }) => (
    <div className="item" key={name}>
        <div>
            <h2>{name}</h2>
            <p className="delivery">Delivery: {delivery === 0 ? 'Free' : `${delivery} CZK`}</p>
            <p>Shop URL: <a href={shopUrl} target="_blank" rel="noopener noreferrer">{shopUrl}</a></p>
        </div>

        <div>
            <p className="cena"> {price === 0 ? 'Free' : `${price} CZK`}</p>


        </div>
    </div>
);

export function Nabidky() {
    const data = [
        {
            "shop_name": "Smith-Brown",
            "price": 76.73,
            "shopUrl": "https://petty.net/",
            "delivery": 40
        },
        {
            "shop_name": "Parks-Williams",
            "price": 33.87,
            "shopUrl": "http://fisher.com/",
            "delivery": 40
        },
        {
            "shop_name": "Cook-Cline",
            "price": 76.93,
            "shopUrl": "https://www.ferrell.com/",
            "delivery": 0
        },
        {
            "shop_name": "Brown, Jennings and Yoder",
            "price": 19.22,
            "shopUrl": "https://www.allison-todd.com/",
            "delivery": 0
        },
        {
            "shop_name": "Rice LLC",
            "price": 20.42,
            "shopUrl": "https://curry.com/",
            "delivery": 0
        },
        {
            "shop_name": "Burke Group",
            "price": 63.06,
            "shopUrl": "https://parker.com/",
            "delivery": 0
        },
        {
            "shop_name": "Murphy Inc",
            "price": 76.61,
            "shopUrl": "https://www.montgomery.org/",
            "delivery": 0
        },
        {
            "shop_name": "Lopez-Edwards",
            "price": 99.54,
            "shopUrl": "http://www.morse.com/",
            "delivery": 0
        },
        {
            "shop_name": "Salas, Harris and Martin",
            "price": 22.73,
            "shopUrl": "https://holder.com/",
            "delivery": 0
        },
        {
            "shop_name": "Andrews and Sons",
            "price": 71.53,
            "shopUrl": "https://www.anderson-morales.com/",
            "delivery": 40
        }
    ];

    return (
        <div>
            <h1>Items</h1>
            {data.map((offer) => (
                <Offer
                    key={offer.shop_name}
                    name={offer.shop_name}
                    price={offer.price}
                    shopUrl={offer.shopUrl}
                    delivery={offer.delivery}
                />
            ))}
        </div>
    );
}

