import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Select from 'react-select';
import styled from "styled-components";
// import { getPrice } from "../utils/av-api";
import SellStock from "../components/SellStock"
import { getPrices } from "../utils/finnhub-fetch";

function Sell({ setIsLoggedIn, isLoggedIn, user, cookies, setUser, logOut }) {
	// dropdown menu source: https://appdividend.com/2022/03/12/react-dropdown-select/

	const [ stocks, setStocks ] = useState([])
	const [ stockToSell, setStockToSell ] = useState("")
	const [ price, setPrice ] = useState("")

	useEffect( () => {
		if (user) {
			setStocks(user.stocks.map( (stock, i) => ({ label: stock.name, value: i })))
		}
	}, [user] )

	useEffect( () => {
		if (user) {
			setStocks(user.stocks.map( (stock, i) => ({ label: stock.name, value: i })))
		}
	}, [] )

	// const stocks = user.stocks.map( (stock, i) => ({ label: stock.name, value: i }) )

	const handleChange = (options) => {
		setStockToSell(options);
	};

	const searchStock = async () => {
		const sellPrice = await getPrices([stockToSell.label])
		console.log(stockToSell.label);
		console.log("sellprice = " + sellPrice);
		if (sellPrice !== 0) {
			setPrice( () => sellPrice )
		}
	}

	useEffect( () => {
		if (stockToSell) {
			searchStock() 
		}
	}, [stockToSell] )

	return (
		<>
			<Navbar 
				setIsLoggedIn={setIsLoggedIn} 
				isLoggedIn={isLoggedIn} 
				logOut={logOut}
			/>
			<Cont>
				<h2>This is the Sell page</h2>
				<p>Cash: ${user.cash}</p>
				<DropdownCont>
					<div className="row">
						<div className="col-md-4"></div>
							<div className="col-md-4">
								<Select onChange={ handleChange } options={ stocks } />
							</div>
						<div className="col-md-4"></div>
					</div>
				</DropdownCont>

				{
					stockToSell && price
					&&
					<SellStock price={price} stockToSell={stockToSell} user={user} cookies={cookies} setUser={setUser}/>
				}
			</Cont>
		</>
	);
}

export default Sell;

const Cont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const DropdownCont = styled.div`
margin: 1rem;
	width: 200px;
`