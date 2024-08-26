import React from 'react'
import ItemList from '../../components/ItemList/ItemList';


export default function Category() {
    // const items = [
    //     {
    //       id: 1,
    //       name: 'Handcrafted Cotton Kurti',
    //       price: '₹1200',
    //       image: 'https://example.com/images/kurti1.jpg',
    //     },
    //     {
    //       id: 2,
    //       name: 'Printed Designer Kurta',
    //       price: '₹1500',
    //       image: '//itokri.com/cdn/shop/t/542/assets/component-rating.css?v=157771854592137137841718770854',
    //     },
    //     {
    //       id: 3,
    //       name: 'Traditional Silk Kurta',
    //       price: '₹2000',
    //       image: 'https://example.com/images/kurti3.jpg',
    //     },
    //     {
    //       id: 4,
    //       name: 'Floral Embroidered Kurti',
    //       price: '₹1800',
    //       image: 'https://example.com/images/kurti4.jpg',
    //     },
    //     {
    //       id: 5,
    //       name: 'Block Print Cotton Kurti',
    //       price: '₹1100',
    //       image: 'https://example.com/images/kurti5.jpg',
    //     },
    //     {
    //       id: 6,
    //       name: 'Long Anarkali Kurta',
    //       price: '₹2500',
    //       image: 'https://example.com/images/kurti6.jpg',
    //     },
    //   ];
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     // Replace with your data fetching logic
    //     fetch('/api/kurtis')
    //         .then(response => response.json())
    //         .then(data => setItems(data))
    //         .catch(error => console.error('Error fetching items:', error));
    // }, []);
    return (
        <div>
            <div className="app">
                <h1>Kurtis & Kurtas</h1>
                {/*  <ItemList items={items} /> */}
                
            </div>
        </div>
    )
}
