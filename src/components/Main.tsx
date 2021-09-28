import { Weather } from "../utils/constants"

interface appProps {
	weather: Weather
	setWeather: (value: Weather) => void
}

const Main = ({ weather, setWeather }: appProps) => {
	return (
		<div>
			<h1>{weather}</h1>
			<button
				onClick={() => {
					setWeather(Weather.clear)
				}}
			>
				clear
			</button>
			<button
				onClick={() => {
					setWeather(Weather.rainy)
				}}
			>
				rainy
			</button>
			<button
				onClick={() => {
					setWeather(Weather.snowy)
				}}
			>
				snowy
			</button>
			<button
				onClick={() => {
					setWeather(Weather.night)
				}}
			>
				night
			</button>
		</div>
	)
}

export default Main
