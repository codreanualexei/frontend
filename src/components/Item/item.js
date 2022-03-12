import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import "./item.css";
import CartIcon from '../../../src/components/Item/cartIcon.png';
// import { AddToFavourites } from "./addToFavourites";
import { useState } from 'react';
import { ShoppingCart } from "../ShoppingCart/shoppingCart";
import { refreshPage } from "../NavBar/navBar";
import { CartCircle } from "../NavBar/navBar";

const Container = styled.div`
width: 15vw;
height: 55vh;
display: flex;
flex-direction:column;
background-color: #0C0A0F;
border-radius: 3%;
margin-right:0.5vw;
margin-left:0.5vw;
margin-bottom: 2vh;
border: 1px solid transparent;

&:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.8);
    
}
`;
const Image = styled.div`
width: 14.5vw;
height: 30vh;
display: flex;
flex-direction:column;
background-color: white;
margin-left:auto;
margin-right:auto;
margin-top:0.5vh;
border-radius: 3%;
background: rgba(244,246,246,1);
`
const Description = styled.div`
width: 14.5vw;
height: 1vh;
margin:auto;
margin-right:auto;
margin-top:0.5vh;
border-radius: 3%;
color: #8E888A;
font-weight: 600;
font-family: Poppins;
font-size: 0.8vw;
text-align: center;
`
const Rating = styled.div`
margin: auto;
height: 1vh;
`
const Price = styled.div`
width: 5vw;
height: 2vh;
color: #8E888A;
font-weight: 600;
font-family: Poppins;
font-size: 0.8vw;
`
const NewPrice = styled.div`
height: 2vh;
width: 5vw;
color: #8E888A;
font-weight: 600;
font-family: Poppins;
font-size: 0.8vw;
`
const AddToCart = styled.button`
height: 6vh;
background-image: url("./cartIcon.png");
background-color: #1b1621;
border-radius: 15%;
border: none;
margin-left: 1vw;
margin-right: 1vw;
color: #8E888A;
cursor: pointer;
    &:active{
    transform: translateY(0.5vh);
}
`
const AddToFavourites = styled.button`
height: 4vh;
width: 2vw;
margin-right: 1vw;
background-color: #1b1621;
border-radius: 15%;
border: none;
cursor: pointer;
`
const AddToCompare = styled.button`
height: 4vh;
width: 2vw;
background-color: #1b1621;
border-radius: 15%;
border: none;
cursor: pointer;
`
export var all = [];
export var itemName = [];
export var number = [];
export var nrOfItems=0;
// export var nrOfItems2=0;

    // const onAdd = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //     if(exist) {
    //         setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    //     } else {
    //         setCartItems([...cartItems, { ...product, qty: 1}]);
    //     }
    //     console.log("aaa");
    // }
export function addElement (x) {
    console.log(x);
    const exist = itemName.includes(x);
        if(exist) {
            var a = number[itemName.indexOf(x)];
            number.splice(itemName.indexOf(x), 1, a+1);
            console.log(a);
        } else {
            number.push(1);
            itemName.push(x);
        }
        
    console.log(itemName);
    console.log(number);
    all = [itemName, number];
    console.log(all);
    // nrOfItems2 ++;
    // console.log("DIN FUNCTIE " + nrOfItems2);
    return x;
}


export default function Item(props) {
   
    const description = props.description
    const stars = props.stars
    const itemPrice = props.itemPrice
    const newPrice = props.newPrice
    const image = props.image
    const CartCircle = props.CartCircle
    //const addElement = props.addItem

    const server = 'https://andreiescu.herokuapp.com/uploads/1638219342974.png'


    return (
        <Container>
            <Image />
            <Description> {description}</Description>
            <Rating>
                <ReactStars
                    count={5}
                    value = {stars}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#fc9f07"
                    edit = {false}
                />
            </ Rating>
            <div className='price'>
            <Price> {itemPrice}</Price>
            <NewPrice> {newPrice}</ NewPrice>
            </div>
            <AddToCart className="addButton" onClick={() => {addElement(description); props.CartCircle(); }}><img className='cartIcon' src={server}/><h1 className='addToCartWriting'>Add to Cart</h1></AddToCart>
            <div className='buttons'>
            <AddToFavourites />
            <AddToCompare />
            </div>

        </Container>
    )

}
// export default onAdd() {

// }